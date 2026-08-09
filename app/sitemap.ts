import type { MetadataRoute } from 'next';

import { BASE_URL } from './site';

// next.config.ts sets trailingSlash: true, so the canonical form of every URL
// here ends in a slash. Listing them without one would make the sitemap point at
// URLs that redirect.
const routes: { path: string; changeFrequency: 'weekly' | 'monthly' | 'yearly'; priority: number }[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/case-studies/', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/shopwave/', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/goso/', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/discover-assessments/', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/truclean/', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/resources/', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/privacy/', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms/', changeFrequency: 'yearly', priority: 0.3 },
];

// lastModified is deliberately omitted. Stamping every entry with the build date
// would claim the whole site changed on each deploy, and Google discounts a
// lastmod it decides is unreliable.
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    changeFrequency,
    priority,
  }));
}
