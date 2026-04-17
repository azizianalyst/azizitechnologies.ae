import type { Metadata } from 'next';
import PageRenderer, { pageMetadata } from '@/components/PageRenderer';

export const metadata: Metadata = pageMetadata('services');

export default function Page() {
  return <PageRenderer slug="services" />;
}
