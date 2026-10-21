import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CaseVisual from '@/components/CaseVisual';
import { CtaBand, Eyebrow } from '@/components/ui';
import { getProject, projects } from '@/content/work';
import { alternates, isLocale, locales } from '@/i18n/config';
import { getDict } from '@/i18n';

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap(lang => projects.map(p => ({ lang, slug: p.slug })));
}

export async function generateMetadata({ params }: PageProps<'/[lang]/work/[slug]'>): Promise<Metadata> {
  const { lang, slug } = await params;
  const p = getProject(slug);
  if (!isLocale(lang) || !p) return {};
  const t = getDict(lang);
  const pt = t.projects[p.slug];
  return { title: `${pt.shortTitle} — ${t.meta.caseStudy}`, description: pt.intro, alternates: alternates(lang, `/work/${p.slug}`) };
}

export default async function CaseStudy({ params }: PageProps<'/[lang]/work/[slug]'>) {
  const { lang, slug } = await params;
  const base = getProject(slug);
  if (!isLocale(lang) || !base) notFound();
  const t = getDict(lang);
  const cs = t.caseStudy;
  const p = { ...base, ...t.projects[base.slug] };
  const i = projects.indexOf(base);
  const nextBase = projects[(i + 1) % projects.length];
  const next = t.projects[nextBase.slug];

  return (
    <>
      <section>
        <div className="wrap" style={{ paddingTop: 'clamp(40px,6vw,80px)', paddingBottom: 'clamp(40px,5vw,64px)', display: 'flex', flexDirection: 'column', gap: 'clamp(32px,4vw,56px)' }}>
          <nav aria-label="Breadcrumb" className="crumb"><Link href={`/${lang}/work`}>{t.meta.work}</Link><span>/</span><span className="cur">{t.common.breadcrumbCase} {String(i + 1).padStart(2, '0')}</span></nav>
          <div data-reveal="0" style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 1060 }}>
            <span className="meta" style={{ color: 'var(--acc-ink)' }}>{p.label}</span>
            <h1 style={{ margin: 0, fontSize: 'clamp(40px,6.4vw,96px)', fontWeight: 600, lineHeight: 0.96, letterSpacing: '-.055em', textWrap: 'balance' }}>{p.title}</h1>
            <p className="sub" style={{ maxWidth: 680 }}>{p.intro}</p>
          </div>
          <dl data-reveal="80" className="dl">
            <div><dt className="label">{cs.client}</dt><dd>{p.client}</dd></div>
            <div><dt className="label">{cs.services}</dt><dd>{p.services}</dd></div>
            <div><dt className="label">{cs.duration}</dt><dd>{p.duration}</dd></div>
            <div><dt className="label">{cs.location}</dt><dd>{p.location}</dd></div>
          </dl>
        </div>
        <div data-reveal="120" className="wrap">
          <div className="hero-shot"><CaseVisual kind={p.kind} /></div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap py-l split" style={{ gap: '40px clamp(40px,7vw,120px)' }}>
          <div data-reveal="0" className="cs-side">
            <Eyebrow n="01">{cs.challenge}</Eyebrow>
            <h2>{p.challengeTitle}</h2>
          </div>
          <div data-reveal="80" className="cs-main">
            <p>{p.challenge}</p>
            <ul className="dash-list">{p.pains.map(x => <li key={x}>{x}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap py-l split" style={{ gap: '40px clamp(40px,7vw,120px)' }}>
          <div data-reveal="0" className="cs-side">
            <Eyebrow n="02">{cs.solution}</Eyebrow>
            <h2>{p.solutionTitle}</h2>
          </div>
          <div data-reveal="80" className="cs-main">
            <p>{p.solution}</p>
            <div className="blocks">
              {p.blocks.map(([tag, title, text], j) => (
                <div key={title} className={'block' + (j === p.keyBlock ? ' key' : '')}><span className="mono">{tag}</span><h3>{title}</h3><p>{text}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap py-m" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '28px clamp(40px,7vw,120px)' }}>
          <div data-reveal="0" style={{ flex: '1 1 280px', maxWidth: 380 }}><Eyebrow n="03">{cs.stack}</Eyebrow></div>
          <div data-reveal="60" style={{ flex: '1.6 1 480px', display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {p.stack.map(x => <span key={x} className={'pill' + (x === p.keyTech ? ' key' : '')}>{x}</span>)}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap py-l">
          <div data-reveal="0" className="head-col head-l">
            <Eyebrow n="04">{cs.results}</Eyebrow>
            <h2 className="h2-m">{p.resultsTitle}</h2>
          </div>
          <div className="results">
            {p.results.map((r, j) => (
              <div key={r.text} data-reveal={j * 80} className="result">
                <span className="v">{r.value}{r.unit && <small className={r.accent ? 'acc' : undefined}>{r.unit}</small>}</span>
                <span>{r.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap py-l">
          <div data-reveal="0" style={{ marginBottom: 'clamp(32px,4vw,48px)' }}><Eyebrow n="05">{cs.screenshots}</Eyebrow></div>
          <div data-reveal="60" className="shots">
            {p.shots.map(cap => (
              <figure key={cap}>
                <div className="frame"><CaseVisual kind={p.kind} /></div>
                <figcaption>{cap}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <Link href={`/${lang}/work/${nextBase.slug}`} className="next-link">
          <div className="wrap next-in">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span className="label" style={{ fontSize: 12 }}>{t.common.nextProject} · {next.industry} · {t.workPage.tabs[nextBase.kind]}</span>
              <span className="next-t">{next.shortTitle}</span>
            </div>
            <span className="next-arrow">→</span>
          </div>
        </Link>
      </section>

      <CtaBand lang={lang} t={t} title={p.band.title} text={p.band.text} />
    </>
  );
}
