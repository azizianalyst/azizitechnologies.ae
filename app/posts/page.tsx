import type { Metadata } from 'next';
import PageRenderer, { pageMetadata } from '@/components/PageRenderer';

export const metadata: Metadata = pageMetadata('posts');

export default function Page() {
  return <PageRenderer slug="posts" />;
}
