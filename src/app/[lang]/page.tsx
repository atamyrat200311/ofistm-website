import Link from 'next/link';
import { notFound } from 'next/navigation';
import CaseVisual from '@/components/CaseVisual';
import ContactForm from '@/components/ContactForm';
import Faq from '@/components/Faq';
import { Eyebrow } from '@/components/ui';
import { services } from '@/content/services';
import { getProject } from '@/content/work';
import { isLocale } from '@/i18n/config';
import { getDict } from '@/i18n';
import { site } from '@/lib/site';

const BARS = [30, 42, 36, 50, 44, 58, 54, 64, 60, 70, 66, 78, 84, 96];
const STACK: [string, string][] = [['React', 'web'], ['TypeScript', 'web'], ['Flutter', 'mobile'], ['FastAPI', 'api'], ['Go', 'api'], ['PostgreSQL', 'db'], ['SQL Server', 'db'], ['Power BI', 'bi'], ['Logo ERP', 'erp']];
const FEATURED = ['heating-plumbing-ecommerce', 'manufacturer-order-management', 'trading-power-bi-reporting'] as const;

export default async function Home({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDict(lang);
  const h = t.home;
  const [feat, a, b] = FEATURED.map(s => ({ ...getProject(s)!, ...t.projects[s] }));

  return (
    <>
      <section className="sec clip hero">
        <div className="gridbg" style={{ WebkitMaskImage: 'radial-gradient(70% 70% at 75% 35%,#000 10%,transparent 75%)', maskImage: 'radial-gradient(70% 70% at 75% 35%,#000 10%,transparent 75%)' }} />
        <div className="glow" style={{ right: '-18%', top: '-35%', width: 'min(80vw,1100px)' }} />
        <div className="wrap hero-in">
          <div data-reveal="0" className="hero-eyebrow">
            <img src="/brand/mark-white.png" alt="" width={16} height={16} className="logo" />
            <span style={{ whiteSpace: 'nowrap' }}>{h.eyebrow}</span>
            <span className="sep" />
            <span className="st"><i />{h.status}</span>
          </div>
          <h1 data-reveal="80">{h.h1a} <span>{h.h1b}</span></h1>
          <div className="hero-row">
            <div className="hero-copy">
              <p data-reveal="160" className="sub">{h.sub}</p>
              <div data-reveal="240" className="btn-row">
                <Link href={`/${lang}/contact`} className="btn btn-acc">{t.common.startProject} <span>→</span></Link>
                <Link href={`/${lang}/work`} className="btn btn-line">{h.cta2}</Link>
              </div>
              <a href="#services" data-reveal="320" className="cue"><span className="cue-line" /><span>{h.cue}</span></a>
            </div>
            <div data-reveal="200" className="mock" aria-hidden="true">
              <div className="mock-card">
                <div className="mock-top">
                  <div className="mock-title"><b>Sales overview</b><span>Q3 2026</span></div>
                  <div className="seg"><span>W</span><span>M</span><span className="on">Q</span><span>Y</span></div>
                </div>
                <div className="kpis">
                  <div className="kpi"><span className="k">Net sales</span><span className="v">4.82M</span><span className="d">▲ 12.4%</span></div>
                  <div className="kpi"><span className="k">Orders</span><span className="v">1 284</span><span className="d">▲ 9.2%</span></div>
                  <div className="kpi"><span className="k">Stock turns</span><span className="v">6.1×</span><span className="d mute">▲ 0.4</span></div>
                </div>
                <div className="bars">
                  {BARS.map((v, i) => <span key={i} className={i === 13 ? 'acc' : i >= 11 ? 'hi' : undefined} style={{ height: v + '%' }} />)}
                </div>
              </div>
              <div className="sql">
                <div className="sql-h"><span>sales_by_region.sql</span><span>12 ms</span></div>
                <div className="c">-- net sales by region, Q3</div>
                <div><b>SELECT</b> region, <b>SUM</b>(net) <b>AS</b> total</div>
                <div><b>FROM</b>   LG_024_01_INVOICE</div>
                <div><b>WHERE</b>  date &gt;= <span className="s">&apos;2026-07-01&apos;</span></div>
                <div><b>GROUP BY</b> region;<span className="caret" /></div>
              </div>
              <div className="sync"><span className="pulse" /><span>Logo Tiger ⇄ synced</span><span className="t">2s ago</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="stats">
            {h.stats.map((s, i) => (
              <div key={s.l} data-reveal={i * 80} className="stat">
                <span className="v">{s.v}{s.s && <i className={'small' in s && s.small ? 'small' : undefined}>{s.s}</i>}</span>
                <span className="l">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="sec" style={{ scrollMarginTop: 72 }}>
        <div className="wrap py-xl">
          <div data-reveal="0" className="head">
            <div className="head-col">
              <Eyebrow n="01">{h.servicesEyebrow}</Eyebrow>
              <h2 className="h2">{h.servicesTitle}</h2>
            </div>
            <p className="lead">{h.servicesText}</p>
          </div>
          <div data-reveal="80" className="svc-grid">
            {services.map(s => {
              const st = t.services[s.id];
              return (
                <Link key={s.slug} href={`/${lang}/services/${s.slug}`} className="svc">
                  <div className="svc-top"><span className="num">{s.num}</span><span className="svc-arrow">→</span></div>
                  <div className="svc-body">
                    <h3>{st.title}</h3>
                    <p>{st.short}</p>
                    <div className="chips">{st.tags.map(tag => <span key={tag} className="chip">{tag}</span>)}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap py-xl split">
          <div style={{ flex: '1 1 340px', maxWidth: 480 }}>
            <div data-reveal="0" className="sticky-side">
              <Eyebrow n="02">{h.whyEyebrow}</Eyebrow>
              <h2 className="h2-m">{h.whyTitle}</h2>
              <p className="lead">{h.whyText}</p>
              <Link href={`/${lang}/about`} className="ulink" style={{ alignSelf: 'flex-start', marginTop: 8 }}>{h.whyMore} <span>→</span></Link>
            </div>
          </div>
          <div style={{ flex: '1.4 1 460px', display: 'flex', flexDirection: 'column' }}>
            {h.why.map(([title, d], i) => (
              <div key={title} data-reveal="0" className="why-item">
                <span className="num">0{i + 1}</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}><h3>{title}</h3><p>{d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap py-xl">
          <div data-reveal="0" className="head">
            <div className="head-col">
              <Eyebrow n="03">{h.workEyebrow}</Eyebrow>
              <h2 className="h2">{h.workTitle}</h2>
            </div>
            <Link href={`/${lang}/work`} className="btn btn-line btn-sm">{t.common.allProjects} <span>→</span></Link>
          </div>
          <div className="cases">
            <Link href={`/${lang}/work/${feat.slug}`} data-reveal="0" className="case-feat">
              <div className="shot"><CaseVisual kind={feat.kind} /></div>
              <div className="case-txt">
                <span className="meta">{feat.label}</span>
                <h3 className="case-h">{feat.title}</h3>
                <p className="case-res"><span>↗</span>{feat.result}</p>
                <span className="case-more">{t.common.readCase}</span>
              </div>
            </Link>
            {[a, b].map((p, i) => (
              <Link key={p.slug} href={`/${lang}/work/${p.slug}`} data-reveal={i * 120} className="case-card">
                <div className="shot"><CaseVisual kind={p.kind} /></div>
                <div className="case-txt">
                  <span className="meta">{p.label}</span>
                  <h3 className="case-h">{i === 1 ? p.shortTitle : p.title}</h3>
                  <p className="case-res"><span>↗</span>{p.result}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="sec" style={{ scrollMarginTop: 72 }}>
        <div className="wrap py-xl">
          <div data-reveal="0" className="head" style={{ marginBottom: 'clamp(48px,6vw,88px)' }}>
            <div className="head-col">
              <Eyebrow n="04">{h.processEyebrow}</Eyebrow>
              <h2 className="h2">{h.processTitle}</h2>
            </div>
            <p className="lead">{h.processText}</p>
          </div>
          <div className="steps">
            {h.process.map(([title, d, dur], i) => (
              <div key={title} data-reveal={i * 70} className={'step' + (i === 0 ? ' first' : '')}>
                <span className="num">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{d}</p>
                <span className="dur">{dur}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap stack-in">
          <div data-reveal="0" className="stack-side">
            <Eyebrow n="05">{h.stackEyebrow}</Eyebrow>
            <p className="lead">{h.stackText}</p>
          </div>
          <div data-reveal="80" className="stack-list">
            {STACK.map(([name, k]) => <span key={name}>{name}<sup>{k}</sup></span>)}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap py-xl split">
          <div data-reveal="0" className="split-side">
            <Eyebrow n="06">{h.faqEyebrow}</Eyebrow>
            <h2 className="h2-m">{h.faqTitle}</h2>
            <p className="lead">{h.faqText} <a href="#contact" style={{ borderBottom: '1px solid var(--line2)' }}>{h.faqAsk}</a></p>
          </div>
          <Faq items={h.faq as [string, string][]} />
        </div>
      </section>

      <section id="contact" className="clip" style={{ scrollMarginTop: 72 }}>
        <div className="glow" style={{ left: '-20%', bottom: '-40%', width: 'min(90vw,1100px)' }} />
        <div className="wrap py-xl rel" style={{ display: 'flex', flexWrap: 'wrap', gap: '56px clamp(40px,6vw,100px)' }}>
          <div data-reveal="0" style={{ flex: '1 1 340px', maxWidth: 500, display: 'flex', flexDirection: 'column', gap: 24 }}>
            <Eyebrow n="07">{h.contactEyebrow}</Eyebrow>
            <h2 style={{ margin: 0, fontSize: 'clamp(38px,5.4vw,76px)', fontWeight: 600, lineHeight: 0.98, letterSpacing: '-.05em', textWrap: 'balance' }}>{h.contactTitle}</h2>
            <p className="lead">{h.contactText}</p>
            <div className="crow-list">
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="crow"><span><span className="label">WhatsApp</span><span className="v">{site.phone.display}</span></span><span className="ar">↗</span></a>
              <a href={site.telegram.url} target="_blank" rel="noopener noreferrer" className="crow"><span><span className="label">Telegram</span><span className="v">{site.telegram.handle}</span></span><span className="ar">↗</span></a>
              <a href={`mailto:${site.email}`} className="crow"><span><span className="label">{t.contact.email}</span><span className="v">{site.email}</span></span><span className="ar">↗</span></a>
            </div>
          </div>
          <div data-reveal="100" className="form-card">
            <ContactForm t={t.form} services={services.map(s => t.services[s.id].title)} variant="compact" />
          </div>
        </div>
      </section>
    </>
  );
}
