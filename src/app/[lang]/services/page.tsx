import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CtaBand } from '@/components/ui';
import { services, type ServiceId } from '@/content/services';
import { alternates, isLocale } from '@/i18n/config';
import { getDict } from '@/i18n';

const LAYER_LINKS: ServiceId[][] = [['web', 'mobile'], ['custom'], ['erp'], ['data']];

export async function generateMetadata({ params }: PageProps<'/[lang]/services'>): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDict(lang).meta;
  return { title: t.services, description: t.servicesDesc, alternates: alternates(lang, '/services') };
}

export default async function ServicesPage({ params }: PageProps<'/[lang]/services'>) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDict(lang);
  const p = t.servicesPage;
  return (
    <>
      <section className="sec clip">
        <div className="gridbg" style={{ WebkitMaskImage: 'radial-gradient(60% 80% at 85% 20%,#000 10%,transparent 75%)', maskImage: 'radial-gradient(60% 80% at 85% 20%,#000 10%,transparent 75%)' }} />
        <div className="wrap phero" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 56 }}>
          <div data-reveal="0" style={{ flex: '1 1 560px', maxWidth: 900, display: 'flex', flexDirection: 'column', gap: 28 }}>
            <div className="eyebrow"><span className="n">{p.eyebrow}</span><span className="ln" /><span>{p.eyebrow2}</span></div>
            <h1 className="h1">{p.title}</h1>
            <p className="sub" style={{ maxWidth: 560 }}>{p.text}</p>
          </div>
          <nav data-reveal="120" aria-label={p.tocLabel} className="toc">
            {services.map(s => (
              <a key={s.id} href={`#${s.id}`}><span className="mono">{s.num}</span><span className="t">{t.services[s.id].title}</span><span className="d">↓</span></a>
            ))}
          </nav>
        </div>
      </section>

      <section>
        {services.map(s => {
          const st = t.services[s.id];
          return (
            <article key={s.id} id={s.id} className="sec" style={{ scrollMarginTop: 72 }}>
              <div data-reveal="0" className="wrap py-m svc-row">
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <span className="big-num">{s.num}</span>
                  <h2>{st.title}</h2>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                  <p className="desc">{st.desc}</p>
                  <div className="facts-inline">
                    <div><span className="label">{t.common.typicalTimeline}</span><b>{st.time}</b></div>
                    <div><span className="label">{t.common.bestFor}</span><b>{st.best}</b></div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <span className="label">{t.common.whatYouGet}</span>
                  <ul className="plus-list">{st.items.map(it => <li key={it}>{it}</li>)}</ul>
                  <Link href={`/${lang}/services/${s.slug}`} className="btn btn-line btn-sm btn-fill" style={{ alignSelf: 'flex-start', height: 46 }}>{t.common.serviceDetails} <span>→</span></Link>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <section className="sec">
        <div className="wrap py-xl">
          <div data-reveal="0" className="head" style={{ marginBottom: 'clamp(40px,5vw,64px)' }}>
            <div className="head-col">
              <div className="eyebrow"><span className="n">{p.fitEyebrow}</span><span className="ln" /><span>{p.fitEyebrow2}</span></div>
              <h2 className="h2">{p.fitTitle}</h2>
            </div>
            <p className="lead" style={{ maxWidth: 380 }}>{p.fitText}</p>
          </div>
          <div className="layers">
            {p.layers.map(([k, title], i) => {
              const key = i === 2;
              return (
                <div key={k} data-reveal={i * 60} className={'layer' + (key ? ' key' : '')}>
                  <span className="lk">{k}</span>
                  <span className="lt">{title}</span>
                  <span className="ls">{LAYER_LINKS[i].map(id => <a key={id} href={`#${id}`} className={'tag-soft' + (key ? ' on' : '')}>{p.layerTags[id]}</a>)}</span>
                </div>
              );
            })}
            <div data-reveal="240" className="layer dash">
              <span>{p.across}</span>
              <a href="#design" className="tag-soft">{p.layerTags.design}</a>
            </div>
          </div>
        </div>
      </section>

      <CtaBand lang={lang} t={t} title={p.bandTitle} text={p.bandText} />
    </>
  );
}
