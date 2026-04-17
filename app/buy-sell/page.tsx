import type { Metadata } from 'next';
import PageRenderer, { pageMetadata } from '@/components/PageRenderer';

export const metadata: Metadata = pageMetadata('buy-sell');

export default function Page() {
  return <PageRenderer slug="buy-sell" />;
}
