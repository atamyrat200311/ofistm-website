import type { MetadataRoute } from 'next';
import { services } from '@/content/services';
import { projects } from '@/content/work';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['', '/services', '/work', '/about', '/contact', ...services.map(s => `/services/${s.slug}`), ...projects.map(p => `/work/${p.slug}`)];
  return paths.map(p => ({ url: site.url + p, changeFrequency: 'monthly', priority: p === '' ? 1 : 0.7 }));
}
