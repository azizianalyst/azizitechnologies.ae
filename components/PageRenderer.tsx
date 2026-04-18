import { loadPage } from '@/lib/content';

export default function PageRenderer({ slug }: { slug: string }) {
  const page = loadPage(slug);
  return (
    <>
      {page.headExtra && (
        <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: page.headExtra }} />
      )}
      <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: page.body }} />
    </>
  );
}

export function pageMetadata(slug: string) {
  const page = loadPage(slug);
  return {
    title: page.title,
    description: page.description,
  };
}
