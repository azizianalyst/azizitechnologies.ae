import type { Metadata } from 'next';
import PageRenderer, { pageMetadata } from '@/components/PageRenderer';

export const metadata: Metadata = pageMetadata('screen-repair');

export default function Page() {
  return <PageRenderer slug="screen-repair" />;
}
