import type { MetadataRoute } from 'next';
import { loadPosts } from '@/lib/posts';

const SITE = 'https://azizitechnologies.ae';

const staticRoutes = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },

  // Main service pages (Next.js-clean URLs)
  { path: '/services/', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/posts/', priority: 0.7, changeFrequency: 'daily' as const },
  { path: '/faq-bur-dubai/', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/bur-dubai/', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/b2b-services/', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/it-consulting/', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/it-security/', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/computer-repair/', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/computer-service/', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/phone-repair/', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/screen-repair/', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/electronics-repair/', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/data-recovery/', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/networking/', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/buy-sell/', priority: 0.8, changeFrequency: 'monthly' as const },

  // WordPress-matching URLs (SEO preserved)
  { path: '/it-support-dubai/', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/it-amc-dubai/', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/laptop-repair-dubai/', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/imac-repair-dubai/', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/macbook-repair-dubai/', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/macbook-logic-board-repair/', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/macbook-ssd-upgrade/', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/mac-ssd-upgrade-dubai/', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/macbook-keyboard-replacement-dubai/', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/macbook-battery-replacement-dubai/', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/macbook-screen-replacement-dubai/', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/microsoft-surface-repair-dubai/', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/computer-repair-services-dubai/', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/sell-iphone-dubai/', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/sell-macbook-dubai/', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/wifi-support-dubai/', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/wifi-technician-dubai/', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/data-recovery-dubai/', priority: 0.8, changeFrequency: 'monthly' as const },

  // Content pages
  { path: '/about-us/', priority: 0.6, changeFrequency: 'yearly' as const },
  { path: '/contact-us/', priority: 0.8, changeFrequency: 'yearly' as const },
  { path: '/faqs/', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/reviews/', priority: 0.6, changeFrequency: 'monthly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = staticRoutes.map((r) => ({
    url: `${SITE}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const postEntries = loadPosts().map((post) => ({
    url: `${SITE}/${post.slug}/`,
    lastModified: post.modified ? new Date(post.modified) : post.published ? new Date(post.published) : now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...postEntries];
}
