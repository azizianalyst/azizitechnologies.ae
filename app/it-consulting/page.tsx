import type { Metadata } from 'next';
import PageRenderer, { pageMetadata } from '@/components/PageRenderer';

export const metadata: Metadata = pageMetadata('it-consulting');

export default function Page() {
  return <PageRenderer slug="it-consulting" />;
}
