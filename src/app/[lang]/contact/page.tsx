import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { OpenNow } from '@/components/Clock';
import ContactForm from '@/components/ContactForm';
import { services } from '@/content/services';
import { alternates, isLocale } from '@/i18n/config';
import { getDict } from '@/i18n';
import { site } from '@/lib/site';

export async function generateMetadata({ params }: PageProps<'/[lang]/contact'>): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDict(lang).meta;
  return { title: t.contact, description: t.contactDesc, alternates: alternates(lang, '/contact') };
}

export default async function ContactPage({ params, searchParams }: PageProps<'/[lang]/contact'>) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDict(lang);
  const c = t.contact;
  const q = (await searchParams).service;
  const picked = services.find(s => s.id === q);
  const service = picked ? t.services[picked.id].title : undefined;

  return (
    <>
      <section className="clip">
        <div className="glow" style={{ right: '-18%', top: '-50%', width: 'min(80vw,1000px)' }} />
        <div className="wrap rel" style={{ paddingTop: 'clamp(56px,8vw,112px)', paddingBottom: 'clamp(40px,5vw,64px)', display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '32px 48px' }}>
          <div data-reveal="0" style={{ flex: '1 1 560px', maxWidth: 960, display: 'flex', flexDirection: 'column', gap: 28 }}>
            <div className="eyebrow"><span className="n">{c.eyebrow}</span><span className="ln" /><span>{c.eyebrow2}</span></div>
            <h1 style={{ margin: 0, fontSize: 'clamp(44px,7.4vw,112px)', fontWeight: 600, lineHeight: 0.95, letterSpacing: '-.055em', textWrap: 'balance' }}>{c.title}</h1>
          </div>
          <p data-reveal="80" className="lead" style={{ flex: '0 1 380px' }}>{c.text}</p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap" style={{ paddingTop: 'clamp(16px,2vw,24px)', paddingBottom: 'clamp(80px,10vw,140px)', display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: '48px clamp(32px,4vw,64px)' }}>
          <div data-reveal="0" style={{ flex: '1.6 1 520px', minWidth: 0, padding: 'clamp(24px,3.4vw,48px)', border: '1px solid var(--line2)', borderRadius: 26, background: 'var(--bg)' }}>
            <ContactForm key={service} t={t.form} services={services.map(s => t.services[s.id].title)} variant="full" service={service} />
          </div>
          <aside data-reveal="100" style={{ flex: '1 1 320px', display: 'flex', flexDirection: 'column', gap: 48 }}>
            <div className="dcards">
              <span className="label" style={{ marginBottom: 12 }}>{c.direct}</span>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="dcard acc"><span><span className="k">WhatsApp</span><span className="v">{site.phone.display}</span></span><span className="ar">↗</span></a>
              <a href={site.telegram.url} target="_blank" rel="noopener noreferrer" className="dcard"><span><span className="k">Telegram</span><span className="v">{site.telegram.handle}</span></span><span className="ar">↗</span></a>
              <a href={`mailto:${site.email}`} className="dcard"><span><span className="k">{c.email}</span><span className="v">{site.email}</span></span><span className="ar">↗</span></a>
              <a href={`tel:${site.phone.tel}`} className="dcard"><span><span className="k">{c.phone}</span><span className="v">{site.phone.display}</span></span><span className="ar">↗</span></a>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="dcard"><span><span className="k">Instagram</span><span className="v">@ofis_tm</span></span><span className="ar">↗</span></a>
            </div>
            <div className="hours" style={{ display: 'flex', flexDirection: 'column' }}>
              <span className="label" style={{ marginBottom: 12 }}>{c.hours}</span>
              {c.days.map(([d, h]) => <div key={d}><span className="d">{d}</span><b>{h}</b></div>)}
              <OpenNow open={c.openNow} closed={c.closedNow} />
              <p className="lead" style={{ fontSize: 15, marginTop: 20 }}>{c.meet}</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="sec">
        <div className="wrap py-l">
          <div data-reveal="0" className="head-col head-l">
            <div className="eyebrow"><span className="n">{c.nextEyebrow}</span><span className="ln" /><span>{c.nextEyebrow2}</span></div>
            <h2 className="h2-m">{c.nextTitle}</h2>
          </div>
          <div className="steps wide">
            {c.next.map(([n, title, d], i) => (
              <div key={title} data-reveal={i * 80} className={'step' + (i === 0 ? ' first' : '')}><span className="num">{n}</span><h3>{title}</h3><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
