import type { Metadata } from 'next';
import PageRenderer, { pageMetadata } from '@/components/PageRenderer';

export const metadata: Metadata = pageMetadata('computer-service');

export default function Page() {
  return <PageRenderer slug="computer-service" />;
}
