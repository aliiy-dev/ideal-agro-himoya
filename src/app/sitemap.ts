import type { MetadataRoute } from 'next';
import { seedProducts } from '@/data/products';

const SITE_URL = 'https://www.idealagrohimoya.uz';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL,              lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${SITE_URL}/products`, lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${SITE_URL}/about`,    lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/contact`,  lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];

  const productRoutes: MetadataRoute.Sitemap = seedProducts.map((p) => ({
    url: `${SITE_URL}/products/${p.id}`,
    lastModified: new Date(p.createdAt),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...productRoutes];
}
