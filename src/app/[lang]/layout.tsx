import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono, Onest } from 'next/font/google';
import { notFound } from 'next/navigation';
import Reveal from '@/components/Reveal';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import { alternates, isLocale, localeInfo, locales } from '@/i18n/config';
import { getDict } from '@/i18n';
import { site } from '@/lib/site';
import '../globals.css';

const onest = Onest({ subsets: ['latin', 'latin-ext', 'cyrillic'], weight: ['400', '500', '600', '700'], variable: '--font-onest', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin', 'latin-ext', 'cyrillic'], weight: ['400', '500'], variable: '--font-jb', display: 'swap' });

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map(lang => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<'/[lang]'>): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDict(lang).meta;
  return {
    metadataBase: new URL(site.url),
    title: { default: t.title, template: `%s — ${site.name}` },
    description: t.description,
    applicationName: site.name,
    alternates: alternates(lang, ''),
    openGraph: { type: 'website', siteName: site.name, url: `${site.url}/${lang}`, title: t.title, description: t.description, locale: localeInfo[lang].og },
    twitter: { card: 'summary_large_image' },
    formatDetection: { telephone: false }
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0A0B0D' },
    { media: '(prefers-color-scheme: light)', color: '#F5F5F2' }
  ]
};

// Runs before paint: restores theme/accent and enables scroll-reveal only when motion is welcome.
const init = `(function(){try{var d=document.documentElement;d.dataset.theme=localStorage.getItem('ofis-theme')||'dark';d.dataset.accent=localStorage.getItem('ofis-accent')||'blue';}catch(e){}try{if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('rv');}catch(e){}})();`;

const orgLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  url: site.url,
  logo: `${site.url}/brand/wordmark-black.png`,
  email: site.email,
  telephone: site.phone.tel,
  sameAs: [site.instagram, site.telegram.url],
  address: { '@type': 'PostalAddress', addressLocality: 'Ashgabat', addressCountry: 'TM' }
};

export default async function RootLayout({ children, params }: LayoutProps<'/[lang]'>) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDict(lang);
  return (
    <html lang={lang} data-theme="dark" data-accent="blue" className={`${onest.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: init }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
      </head>
      <body>
        <div className="page" id="top">
          <SiteHeader lang={lang} t={t.nav} />
          <main>{children}</main>
          <SiteFooter lang={lang} t={t} />
        </div>
        <Reveal />
      </body>
    </html>
  );
}
