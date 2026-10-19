import Link from 'next/link';
import { services } from '@/content/services';
import { site } from '@/lib/site';

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="ftr">
      <div className="wrap ftr-in">
        <div className="ftr-cols">
          <div className="ftr-brand">
            <img src="/brand/wordmark-white.png" alt="ofis.tm" width={113} height={40} className="logo" />
            <p>We build the software your business runs on. Based in Ashgabat, working worldwide.</p>
          </div>
          <div className="ftr-col" style={{ flex: '1 1 140px' }}>
            <div className="label">Sitemap</div>
            <Link href="/services">Services</Link>
            <Link href="/work">Work</Link>
            <Link href="/#process">Process</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="ftr-col" style={{ flex: '1 1 180px' }}>
            <div className="label">Services</div>
            {services.map(s => <Link key={s.slug} href={`/services/${s.slug}`}>{s.menuTitle}</Link>)}
          </div>
          <div className="ftr-col" style={{ flex: '1 1 140px' }}>
            <div className="label">Social</div>
            {site.social.filter(x => x.url).map(x => (
              <a key={x.label} href={x.url} target="_blank" rel="noopener noreferrer">{x.label} ↗</a>
            ))}
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp ↗</a>
          </div>
          <div className="ftr-col" style={{ flex: '1 1 200px' }}>
            <div className="label">Contact</div>
            <a href={`mailto:${site.email}`} className="strong">{site.email}</a>
            <a href={`tel:${site.phone.tel}`} className="strong">{site.phone.display}</a>
            <span>{site.address}</span>
            <span>Mon–Fri, 9:00–18:00</span>
          </div>
        </div>
        <div className="ftr-bot">
          <span>© {year} ofis.tm</span>
          <span>{site.domain}</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
