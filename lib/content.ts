import fs from 'fs';
import path from 'path';

export type PageContent = {
  title: string;
  description: string;
  body: string;
  headExtra: string;
};

const LINK_REWRITES: Record<string, string> = {
  'index.html': '/',
  'services.html': '/services/',
  'posts.html': '/posts/',
  'faq-bur-dubai.html': '/faq-bur-dubai/',
  'bur-dubai.html': '/bur-dubai/',
  'b2b-services.html': '/b2b-services/',
  'it-consulting.html': '/it-consulting/',
  'it-security.html': '/it-security/',
  'computer-repair.html': '/computer-repair/',
  'computer-service.html': '/computer-service/',
  'phone-repair.html': '/phone-repair/',
  'screen-repair.html': '/screen-repair/',
  'electronics-repair.html': '/electronics-repair/',
  'data-recovery.html': '/data-recovery/',
  'networking.html': '/networking/',
  'buy-sell.html': '/buy-sell/',
};

export function loadPage(slug: string): PageContent {
  const filePath = path.join(process.cwd(), 'content', `${slug}.html`);
  const raw = fs.readFileSync(filePath, 'utf-8');

  const titleMatch = raw.match(/<title>([\s\S]*?)<\/title>/i);
  const descMatch = raw.match(/<meta\s+name="description"\s+content="([^"]*)"/i);

  const headMatch = raw.match(/<head>([\s\S]*?)<\/head>/i);
  const headInner = headMatch ? headMatch[1] : '';
  const jsonLdMatches = headInner.match(/<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/gi) || [];
  const headExtra = jsonLdMatches.join('\n');

  const bodyMatch = raw.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let body = bodyMatch ? bodyMatch[1] : '';

  for (const [from, to] of Object.entries(LINK_REWRITES)) {
    const re = new RegExp(`href="${from.replace('.', '\\.')}"`, 'g');
    body = body.replace(re, `href="${to}"`);
    const reHash = new RegExp(`href="${from.replace('.', '\\.')}#`, 'g');
    body = body.replace(reHash, `href="${to}#`);
  }

  body = body.replace(/href="styles\.css"/g, 'href="/styles.css"');
  body = body.replace(/src="script\.js"/g, 'src="/script.js"');

  return {
    title: titleMatch ? titleMatch[1].trim() : 'Azizi Technologies',
    description: descMatch ? descMatch[1] : '',
    body,
    headExtra,
  };
}
