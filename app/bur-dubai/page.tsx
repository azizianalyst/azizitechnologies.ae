import type { Metadata } from 'next';
import PageRenderer, { pageMetadata } from '@/components/PageRenderer';

export const metadata: Metadata = pageMetadata('bur-dubai');

export default function Page() {
  return <PageRenderer slug="bur-dubai" />;
}
