import type { Metadata } from 'next';
import PageRenderer, { pageMetadata } from '@/components/PageRenderer';

export const metadata: Metadata = pageMetadata('b2b-services');

export default function Page() {
  return <PageRenderer slug="b2b-services" />;
}
