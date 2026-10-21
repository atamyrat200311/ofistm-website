import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CaseVisual from '@/components/CaseVisual';
import { CtaBand, Eyebrow } from '@/components/ui';
import { getService, services } from '@/content/services';
import { getProject, type ProjectSlug } from '@/content/work';
import { alternates, isLocale, locales } from '@/i18n/config';
import { getDict } from '@/i18n';

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap(lang => services.map(s => ({ lang, slug: s.slug })));
}

export async function generateMetadata({ params }: PageProps<'/[lang]/services/[slug]'>): Promise<Metadata> {
  const { lang, slug } = await params;
  const s = getService(slug);
  if (!isLocale(lang) || !s) return {};
  const st = getDict(lang).services[s.id];
  return { title: st.title, description: st.desc, alternates: alternates(lang, `/services/${s.slug}`) };
}

export default async function ServiceDetail({ params }: PageProps<'/[lang]/services/[slug]'>) {
  const { lang, slug } = await params;
  const s = getService(slug);
  if (!isLocale(lang) || !s) notFound();
  const t = getDict(lang);
  const st = t.services[s.id];
  const d = t.serviceDetail;
  const c = { ...getProject(s.caseSlug)!, ...t.projects[s.caseSlug as ProjectSlug] };
  const lead = c.results[0];
  const pct = (n: number) => (n / s.weeks) * 100 + '%';

  return (
    <>
      <section className="sec clip">
        <div className="glow" style={{ right: '-15%', top: '-40%', width: 'min(80vw,1000px)' }} />
        <div className="wrap rel" style={{ paddingTop: 'clamp(40px,6vw,80px)', paddingBottom: 'clamp(56px,7vw,96px)', display: 'flex', flexDirection: 'column', gap: 'clamp(40px,5vw,72px)' }}>
          <nav aria-label="Breadcrumb" className="crumb"><Link href={`/${lang}/services`}>{t.meta.services}</Link><span>/</span><span className="cur">{s.num} {st.crumb}</span></nav>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 48 }}>
            <div data-reveal="0" style={{ flex: '1 1 560px', maxWidth: 860, display: 'flex', flexDirection: 'column', gap: 28 }}>
              <span className="big-num-xl">{s.num}</span>
              <h1 style={{ margin: 0, fontSize: 'clamp(40px,6vw,88px)', fontWeight: 600, lineHeight: 0.96, letterSpacing: '-.05em', textWrap: 'balance' }}>{st.title}</h1>
              <p className="sub" style={{ maxWidth: 600 }}>{st.hero}</p>
              <div className="btn-row">
                <Link href={`/${lang}/contact?service=${s.id}`} className="btn btn-acc">{st.cta} <span>→</span></Link>
                <a href="#case" className="btn btn-line">{d.relatedCase}</a>
              </div>
            </div>
            <div data-reveal="120" className="facts-card">
              {st.facts.map(([k, v]) => <div key={k}><span className="label">{k}</span><b>{v}</b></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap py-l">
          <div data-reveal="0" className="head-col head-l">
            <Eyebrow n="01">{d.whatWeDo}</Eyebrow>
            <h2 className="h2-m">{st.whatTitle}</h2>
          </div>
          <div className="tiles">
            {st.what.map(([title, text], i) => (
              <div key={title} data-reveal={i * 60} className="tile"><span className="num">0{i + 1}</span><h3>{title}</h3><p>{text}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap py-l split">
          <div data-reveal="0" className="split-side">
            <Eyebrow n="02">{d.whoFor}</Eyebrow>
            <h2 className="h2-s">{st.whoTitle}</h2>
          </div>
          <div className="split-main">
            {st.who.map(([title, text]) => <div key={title} data-reveal="0" className="who"><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap py-l split">
          <div data-reveal="0" className="split-side">
            <Eyebrow n="03">{d.deliverables}</Eyebrow>
            <h2 className="h2-s">{d.deliverablesTitle}</h2>
            <p className="lead">{d.deliverablesText}</p>
          </div>
          <ul data-reveal="80" className="checks">{st.deliverables.map(x => <li key={x}>{x}</li>)}</ul>
        </div>
      </section>

      <section className="sec">
        <div className="wrap py-l">
          <div data-reveal="0" className="head" style={{ marginBottom: 'clamp(40px,5vw,64px)' }}>
            <div className="head-col">
              <Eyebrow n="04">{d.timeline}</Eyebrow>
              <h2 className="h2-m">{st.timelineTitle}</h2>
            </div>
            <p className="lead" style={{ maxWidth: 380 }}>{st.timelineText}</p>
          </div>
          <div data-reveal="80" className="gantt">
            <div className="gantt-row head">
              <span />
              <div className="gantt-track" style={{ gridTemplateColumns: `repeat(${s.weeks},1fr)` }}>
                {Array.from({ length: s.weeks }, (_, i) => <span key={i}>{d.week}{i + 1}</span>)}
              </div>
            </div>
            {s.phases.map((ph, i) => (
              <div key={i} className="gantt-row">
                <span>{st.phases[i]}</span>
                <div className="gantt-track"><span className={'gantt-bar' + (ph.solid ? ' solid' : '')} style={{ left: pct(ph.start), width: pct(ph.span) }} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="case" className="sec" style={{ scrollMarginTop: 72 }}>
        <div className="wrap py-l">
          <div data-reveal="0" style={{ marginBottom: 32 }}><Eyebrow n="05">{d.related}</Eyebrow></div>
          <Link href={`/${lang}/work/${c.slug}`} data-reveal="60" className="rel-case">
            <div className="vis"><CaseVisual kind={c.kind} /></div>
            <div className="txt">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <span className="meta">{c.industry} · {c.duration.split(' · ')[0]}</span>
                <h3>{c.title}</h3>
                <p className="lead">{c.result}</p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span className="rel-big">{lead.value}<small>{lead.unit}</small></span>
                  <span style={{ fontSize: 14, color: 'var(--fg3)', maxWidth: 260 }}>{lead.text.replace(/\.$/, '')}</span>
                </div>
                <span style={{ fontSize: 15, fontWeight: 500 }}>{t.common.readCase}</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="sec">
        <div className="wrap others">
          <span className="label">{d.others}</span>
          {services.filter(o => o.slug !== s.slug).map(o => <Link key={o.slug} href={`/${lang}/services/${o.slug}`} className="pill">{o.num} {t.services[o.id].menuTitle}</Link>)}
        </div>
      </section>

      <CtaBand lang={lang} t={t} title={st.band.title} text={st.band.text} />
    </>
  );
}
