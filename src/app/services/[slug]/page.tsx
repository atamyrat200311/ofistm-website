import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CaseVisual from '@/components/CaseVisual';
import { CtaBand, Eyebrow } from '@/components/ui';
import { getService, services } from '@/content/services';
import { getProject } from '@/content/work';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = getService((await params).slug);
  if (!s) return {};
  return { title: s.title, description: s.desc, alternates: { canonical: `/services/${s.slug}` } };
}

export default async function ServiceDetail({ params }: Props) {
  const s = getService((await params).slug);
  if (!s) notFound();
  const c = getProject(s.caseSlug)!;
  const lead = c.results[0];
  const pct = (n: number) => (n / s.weeks) * 100 + '%';

  return (
    <>
      <section className="sec clip">
        <div className="glow" style={{ right: '-15%', top: '-40%', width: 'min(80vw,1000px)' }} />
        <div className="wrap rel" style={{ paddingTop: 'clamp(40px,6vw,80px)', paddingBottom: 'clamp(56px,7vw,96px)', display: 'flex', flexDirection: 'column', gap: 'clamp(40px,5vw,72px)' }}>
          <nav aria-label="Breadcrumb" className="crumb"><Link href="/services">Services</Link><span>/</span><span className="cur">{s.num} {s.menuTitle.split(' ')[0]}</span></nav>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 48 }}>
            <div data-reveal="0" style={{ flex: '1 1 560px', maxWidth: 860, display: 'flex', flexDirection: 'column', gap: 28 }}>
              <span className="big-num-xl">{s.num}</span>
              <h1 style={{ margin: 0, fontSize: 'clamp(40px,6vw,88px)', fontWeight: 600, lineHeight: 0.96, letterSpacing: '-.05em', textWrap: 'balance' }}>{s.title}</h1>
              <p className="sub" style={{ maxWidth: 600 }}>{s.hero}</p>
              <div className="btn-row">
                <Link href={`/contact?service=${encodeURIComponent(s.title)}`} className="btn btn-acc">{s.cta} <span>→</span></Link>
                <a href="#case" className="btn btn-line">See a related case</a>
              </div>
            </div>
            <div data-reveal="120" className="facts-card">
              {s.facts.map(([k, v]) => <div key={k}><span className="label">{k}</span><b>{v}</b></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap py-l">
          <div data-reveal="0" className="head-col head-l">
            <Eyebrow n="01">What we do</Eyebrow>
            <h2 className="h2-m">{s.whatTitle}</h2>
          </div>
          <div className="tiles">
            {s.what.map(([t, d], i) => (
              <div key={t} data-reveal={i * 60} className="tile"><span className="num">0{i + 1}</span><h3>{t}</h3><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap py-l split">
          <div data-reveal="0" className="split-side">
            <Eyebrow n="02">Who it&apos;s for</Eyebrow>
            <h2 className="h2-s">{s.whoTitle}</h2>
          </div>
          <div className="split-main">
            {s.who.map(([t, d]) => <div key={t} data-reveal="0" className="who"><h3>{t}</h3><p>{d}</p></div>)}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap py-l split">
          <div data-reveal="0" className="split-side">
            <Eyebrow n="03">Deliverables</Eyebrow>
            <h2 className="h2-s">What you receive.</h2>
            <p className="lead">Everything is documented and handed over. You own the configuration, the code and the data.</p>
          </div>
          <ul data-reveal="80" className="checks">{s.deliverables.map(d => <li key={d}>{d}</li>)}</ul>
        </div>
      </section>

      <section className="sec">
        <div className="wrap py-l">
          <div data-reveal="0" className="head" style={{ marginBottom: 'clamp(40px,5vw,64px)' }}>
            <div className="head-col">
              <Eyebrow n="04">Typical timeline</Eyebrow>
              <h2 className="h2-m">{s.timelineTitle}</h2>
            </div>
            <p className="lead" style={{ maxWidth: 380 }}>{s.timelineText}</p>
          </div>
          <div data-reveal="80" className="gantt">
            <div className="gantt-row head">
              <span />
              <div className="gantt-track" style={{ gridTemplateColumns: `repeat(${s.weeks},1fr)` }}>
                {Array.from({ length: s.weeks }, (_, i) => <span key={i}>W{i + 1}</span>)}
              </div>
            </div>
            {s.phases.map(p => (
              <div key={p.label} className="gantt-row">
                <span>{p.label}</span>
                <div className="gantt-track"><span className={'gantt-bar' + (p.solid ? ' solid' : '')} style={{ left: pct(p.start), width: pct(p.span) }} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="case" className="sec" style={{ scrollMarginTop: 72 }}>
        <div className="wrap py-l">
          <div data-reveal="0" style={{ marginBottom: 32 }}><Eyebrow n="05">Related case</Eyebrow></div>
          <Link href={`/work/${c.slug}`} data-reveal="60" className="rel-case">
            <div className="vis"><CaseVisual kind={c.kind} /></div>
            <div className="txt">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <span className="meta">{c.industry} · {c.duration.split(' · ')[0]}</span>
                <h3>{c.title}</h3>
                <p className="lead">{c.intro.split('. ')[0]}.</p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span className="rel-big">{lead.value}<small>{lead.unit}</small></span>
                  <span style={{ fontSize: 14, color: 'var(--fg3)', maxWidth: 260 }}>{lead.text.replace(/\.$/, '')}</span>
                </div>
                <span style={{ fontSize: 15, fontWeight: 500 }}>Read case study →</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="sec">
        <div className="wrap others">
          <span className="label">Other services</span>
          {services.filter(o => o.slug !== s.slug).map(o => <Link key={o.slug} href={`/services/${o.slug}`} className="pill">{o.num} {o.menuTitle}</Link>)}
        </div>
      </section>

      <CtaBand title={s.band.title} text={s.band.text} />
    </>
  );
}
