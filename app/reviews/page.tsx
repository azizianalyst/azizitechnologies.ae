import type { Metadata } from 'next';
import PageRenderer, { pageMetadata } from '@/components/PageRenderer';

export const metadata: Metadata = pageMetadata('reviews');

export default function Page() {
  return <PageRenderer slug="reviews" />;
}
