import type { MetadataRoute } from 'next';
import { giftGuides } from '@/data/gifts';
import { articles } from '@/data/articles';
import { seasonalGuides } from '@/data/seasonal';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://giftjournal.net';
  return [
    { url: base },
    { url: `${base}/blog` },
    { url: `${base}/seasonal` },
    { url: `${base}/affiliate-disclosure` },
    ...giftGuides.map((g) => ({ url: `${base}/${g.slug}` })),
    ...articles.map((a) => ({ url: `${base}/blog/${a.slug}` })),
    ...seasonalGuides.map((g) => ({ url: `${base}/seasonal/${g.slug}` })),
  ];
}
