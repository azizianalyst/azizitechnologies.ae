import type { Metadata } from 'next';
import PageRenderer, { pageMetadata } from '@/components/PageRenderer';

export const metadata: Metadata = pageMetadata('it-amc-dubai');

export default function Page() {
  return <PageRenderer slug="it-amc-dubai" />;
}
