import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono, Onest } from 'next/font/google';
import { LangProvider } from '@/components/Lang';
import Reveal from '@/components/Reveal';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { site } from '@/lib/site';
import './globals.css';

const onest = Onest({ subsets: ['latin', 'latin-ext', 'cyrillic'], weight: ['400', '500', '600', '700'], variable: '--font-onest', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin', 'latin-ext', 'cyrillic'], weight: ['400', '500'], variable: '--font-jb', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — ${site.tagline}`, template: `%s — ${site.name}` },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: '/' },
  openGraph: { type: 'website', siteName: site.name, url: site.url, title: `${site.name} — ${site.tagline}`, description: site.description, locale: 'en_US' },
  twitter: { card: 'summary_large_image' },
  formatDetection: { telephone: false }
};

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
  address: { '@type': 'PostalAddress', addressLocality: 'Ashgabat', addressCountry: 'TM' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" data-accent="blue" className={`${onest.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: init }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
      </head>
      <body>
        <LangProvider>
          <div className="page" id="top">
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
          </div>
          <Reveal />
        </LangProvider>
      </body>
    </html>
  );
}
