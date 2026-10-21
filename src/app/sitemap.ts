import type { MetadataRoute } from 'next';
import { services } from '@/content/services';
import { projects } from '@/content/work';
import { locales } from '@/i18n/config';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['', '/services', '/work', '/about', '/contact', ...services.map(s => `/services/${s.slug}`), ...projects.map(p => `/work/${p.slug}`)];
  return paths.flatMap(p =>
    locales.map(l => ({
      url: `${site.url}/${l}${p}`,
      changeFrequency: 'monthly' as const,
      priority: p === '' ? 1 : 0.7,
      alternates: { languages: Object.fromEntries(locales.map(x => [x, `${site.url}/${x}${p}`])) }
    }))
  );
}
