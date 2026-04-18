import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { findPost, loadPosts } from '@/lib/posts';

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return loadPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = findPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/${post.slug}/` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.published || undefined,
      modifiedTime: post.modified || undefined,
    },
  };
}

export const dynamicParams = false;

export default function BlogPostPage({ params }: Props) {
  const post = findPost(params.slug);
  if (!post) notFound();

  return (
    <article className="post-page">
      <div className="container post-page__inner">
        <header className="post-page__header">
          <a href="/posts/" className="post-page__back">← All posts</a>
          <h1 className="post-page__title">{post.h1 || post.title}</h1>
          {post.published && (
            <time className="post-page__date" dateTime={post.published}>
              {new Date(post.published).toLocaleDateString('en-GB', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          )}
        </header>
        <div
          className="post-page__content"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <footer className="post-page__footer">
          <a href="/#contact" className="btn btn--primary">Need IT help? Contact us</a>
          <a href="tel:+971557530104" className="btn btn--outline">Call 055 753 0104</a>
        </footer>
      </div>
    </article>
  );
}
