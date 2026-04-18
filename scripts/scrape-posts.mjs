// Scrape all WordPress blog posts and save as structured JSON.
// Run with: node scripts/scrape-posts.mjs

import fs from 'node:fs';
import path from 'node:path';

const SITEMAP = 'https://azizitechnologies.ae/post-sitemap.xml';
const OUT = path.join(process.cwd(), 'content', 'posts.json');
const CONCURRENCY = 6;

function decode(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#8216;/g, '‘')
    .replace(/&#8217;/g, '’')
    .replace(/&#8220;/g, '“')
    .replace(/&#8221;/g, '”')
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&#8230;/g, '…')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

function extract(html) {
  const titleM = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  const descM = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i);
  const h1M = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const articleM = html.match(/<article[^>]*single-entry[^>]*>([\s\S]*?)<\/article>/i);
  const published = html.match(/<meta\s+property="article:published_time"\s+content="([^"]+)"/i);
  const modified = html.match(/<meta\s+property="article:modified_time"\s+content="([^"]+)"/i);

  let content = '';
  if (articleM) {
    const article = articleM[1];
    const entries = article.match(/<div[^>]*class="[^"]*entry-content[^"]*"[^>]*>([\s\S]*?)(?=<\/div>\s*<\/article>|<footer|<div\s+class="entry-footer|<nav)/i);
    content = entries ? entries[1] : article;
    content = content
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<style[\s\S]*?<\/style>/gi, '')
      .replace(/<!--[\s\S]*?-->/g, '')
      .replace(/\s+data-[a-z-]+="[^"]*"/gi, '')
      .replace(/\s+class="[^"]*kb-[^"]*"/gi, '')
      .trim();
  }

  return {
    title: titleM ? decode(titleM[1].trim()) : '',
    description: descM ? decode(descM[1]) : '',
    h1: h1M ? decode(h1M[1].replace(/<[^>]+>/g, '').trim()) : '',
    published: published ? published[1] : '',
    modified: modified ? modified[1] : '',
    content: content,
  };
}

async function fetchPost(url) {
  const slug = url.replace(/^https?:\/\/[^/]+\//, '').replace(/\/$/, '');
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (compatible; AziziMigration/1.0)' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();
    const data = extract(html);
    return { slug, url, ...data, ok: true };
  } catch (err) {
    return { slug, url, error: String(err), ok: false };
  }
}

async function main() {
  console.log('Fetching sitemap…');
  const sm = await (await fetch(SITEMAP)).text();
  const urls = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  console.log(`Found ${urls.length} URLs.`);

  const results = [];
  for (let i = 0; i < urls.length; i += CONCURRENCY) {
    const batch = urls.slice(i, i + CONCURRENCY);
    const batchResults = await Promise.all(batch.map(fetchPost));
    results.push(...batchResults);
    console.log(`  ${results.length}/${urls.length}`);
  }

  const ok = results.filter((r) => r.ok && r.content);
  const failed = results.filter((r) => !r.ok || !r.content);
  console.log(`Successful: ${ok.length}, failed/empty: ${failed.length}`);
  if (failed.length) {
    console.log('Failed:');
    failed.forEach((f) => console.log(`  - ${f.slug}: ${f.error || 'no content'}`));
  }

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(ok, null, 2));
  console.log(`Wrote ${OUT} (${ok.length} posts)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
