import Link from 'next/link';
import { services } from '@/content/services';
import type { Locale } from '@/i18n/config';
import type { Dict } from '@/i18n/dicts/en';
import { site } from '@/lib/site';

export default function SiteFooter({ lang, t }: { lang: Locale; t: Dict }) {
  const f = t.footer;
  const year = new Date().getFullYear();
  const paths = ['/services', '/work', '#process', '/about', '/contact'];
  return (
    <footer className="ftr">
      <div className="wrap ftr-in">
        <div className="ftr-cols">
          <div className="ftr-brand">
            <img src="/brand/wordmark-white.png" alt="ofis.tm" width={113} height={40} className="logo" />
            <p>{f.blurb}</p>
          </div>
          <div className="ftr-col" style={{ flex: '1 1 140px' }}>
            <div className="label">{f.sitemap}</div>
            {t.nav.items.map((label, i) => <Link key={paths[i]} href={`/${lang}${paths[i]}`}>{label}</Link>)}
          </div>
          <div className="ftr-col" style={{ flex: '1 1 180px' }}>
            <div className="label">{f.services}</div>
            {services.map(s => <Link key={s.slug} href={`/${lang}/services/${s.slug}`}>{t.services[s.id].menuTitle}</Link>)}
          </div>
          <div className="ftr-col" style={{ flex: '1 1 140px' }}>
            <div className="label">{f.social}</div>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram ↗</a>
            <a href={site.telegram.url} target="_blank" rel="noopener noreferrer">Telegram ↗</a>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp ↗</a>
          </div>
          <div className="ftr-col" style={{ flex: '1 1 200px' }}>
            <div className="label">{f.contact}</div>
            <a href={`mailto:${site.email}`} className="strong">{site.email}</a>
            <a href={`tel:${site.phone.tel}`} className="strong">{site.phone.display}</a>
            <span>{f.city}</span>
            <span>{f.weekdays}<br />{f.weekend}</span>
          </div>
        </div>
        <div className="ftr-bot">
          <span>© {year} ofis.tm</span>
          <span>{site.domain}</span>
          <a href="#top">{f.top}</a>
        </div>
      </div>
    </footer>
  );
}
