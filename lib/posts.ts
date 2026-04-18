import fs from 'fs';
import path from 'path';

export type BlogPost = {
  slug: string;
  url: string;
  title: string;
  description: string;
  h1: string;
  published: string;
  modified: string;
  content: string;
};

let cache: BlogPost[] | null = null;

export function loadPosts(): BlogPost[] {
  if (cache) return cache;
  const file = path.join(process.cwd(), 'content', 'posts.json');
  if (!fs.existsSync(file)) return [];
  cache = JSON.parse(fs.readFileSync(file, 'utf-8'));
  return cache!;
}

export function findPost(slug: string): BlogPost | undefined {
  return loadPosts().find((p) => p.slug === slug);
}
