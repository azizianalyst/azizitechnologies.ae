import type { Metadata } from 'next';
import PageRenderer, { pageMetadata } from '@/components/PageRenderer';

export const metadata: Metadata = pageMetadata('faq-bur-dubai');

export default function Page() {
  return <PageRenderer slug="faq-bur-dubai" />;
}
