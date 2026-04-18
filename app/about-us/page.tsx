import type { Metadata } from 'next';
import PageRenderer, { pageMetadata } from '@/components/PageRenderer';

export const metadata: Metadata = pageMetadata('index');

export default function Page() {
  return <PageRenderer slug="index" />;
}
