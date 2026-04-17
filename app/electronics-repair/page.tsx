import type { Metadata } from 'next';
import PageRenderer, { pageMetadata } from '@/components/PageRenderer';

export const metadata: Metadata = pageMetadata('electronics-repair');

export default function Page() {
  return <PageRenderer slug="electronics-repair" />;
}
