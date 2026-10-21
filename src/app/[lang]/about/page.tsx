import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LocalTime } from '@/components/Clock';
import { CtaBand, Eyebrow } from '@/components/ui';
import { alternates, isLocale } from '@/i18n/config';
import { getDict } from '@/i18n';
import { site } from '@/lib/site';

export async function generateMetadata({ params }: PageProps<'/[lang]/about'>): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDict(lang).meta;
  return { title: t.about, description: t.aboutDesc, alternates: alternates(lang, '/about') };
}

export default async function AboutPage({ params }: PageProps<'/[lang]/about'>) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDict(lang);
  const a = t.about;
  const team = (['lead', 'specialists', 'disciplines'] as const).map(k => ({ n: site.team[k], label: a.team[k][0], text: a.team[k][1] }));

  return (
    <>
      <section className="sec clip">
        <img src="/brand/mark-white-lg.png" alt="" className="about-mark logo" width={640} height={640} />
        <div className="wrap rel" style={{ paddingTop: 'clamp(56px,8vw,120px)', paddingBottom: 'clamp(64px,8vw,112px)', display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div data-reveal="0" className="eyebrow"><span className="n">{a.eyebrow}</span><span className="ln" /><span>{a.eyebrow2}</span></div>
          <h1 data-reveal="80" style={{ margin: 0, maxWidth: '11em', fontSize: 'clamp(44px,7.6vw,116px)', fontWeight: 600, lineHeight: 0.95, letterSpacing: '-.055em', textWrap: 'balance' }}>{a.title}</h1>
        </div>
      </section>

      <section className="sec story">
        <div className="wrap py-l split" style={{ gap: '40px clamp(40px,7vw,120px)' }}>
          <div data-reveal="0" className="split-side" style={{ maxWidth: 440 }}>
            <Eyebrow n="01">{a.storyEyebrow}</Eyebrow>
            <p className="story-big">{a.storyBig}</p>
          </div>
          <div data-reveal="80" style={{ flex: '1.5 1 460px', display: 'flex', flexDirection: 'column', gap: 22, maxWidth: 720 }}>
            {a.story.map(p => <p key={p} className="body">{p}</p>)}
          </div>
        </div>
      </section>

      <section className="sec clip" style={{ background: 'var(--bg2)' }}>
        <div className="gridbg" style={{ backgroundSize: '64px 64px', WebkitMaskImage: 'radial-gradient(60% 90% at 80% 50%,#000 10%,transparent 80%)', maskImage: 'radial-gradient(60% 90% at 80% 50%,#000 10%,transparent 80%)' }} />
        <div className="wrap py-l rel" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 48 }}>
          <div data-reveal="0" style={{ flex: '1 1 560px', display: 'flex', flexDirection: 'column', gap: 22 }}>
            <Eyebrow n="02">{a.whereEyebrow}</Eyebrow>
            <h2 style={{ margin: 0, fontSize: 'clamp(40px,6.4vw,96px)', fontWeight: 600, lineHeight: 0.95, letterSpacing: '-.055em', textWrap: 'balance' }}>{a.whereA} <span style={{ color: 'var(--fg3)' }}>{a.whereB}</span></h2>
            <p className="lead" style={{ maxWidth: 560, fontSize: 18, lineHeight: 1.6 }}>{a.whereText}</p>
          </div>
          <dl data-reveal="100" className="dl-rows">
            <div><dt className="label">{a.localTime}</dt><dd><LocalTime /> <span>UTC+5</span></dd></div>
            <div><dt className="label">{a.coordinates}</dt><dd>37.96° N, 58.33° E</dd></div>
            <div><dt className="label">{a.speak}</dt><dd>{a.speakValue}</dd></div>
            <div><dt className="label">{a.clientsIn}</dt><dd>{a.clientsValue}</dd></div>
          </dl>
        </div>
      </section>

      <section className="sec">
        <div className="wrap py-l">
          <div data-reveal="0" className="head-col head-l">
            <Eyebrow n="03">{a.valuesEyebrow}</Eyebrow>
            <h2 className="h2-m">{a.valuesTitle}</h2>
          </div>
          <div className="values">
            {a.values.map(([title, d], i) => (
              <div key={title} data-reveal={i * 70} className="value"><span className="num">0{i + 1}</span><h3>{title}</h3><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap py-l">
          <div data-reveal="0" className="head" style={{ marginBottom: 'clamp(40px,5vw,64px)' }}>
            <div className="head-col">
              <Eyebrow n="04">{a.teamEyebrow}</Eyebrow>
              <h2 className="h2-m">{a.teamTitle}</h2>
            </div>
            <p className="lead" style={{ maxWidth: 380 }}>{a.teamText}</p>
          </div>
          <div className="results">
            {team.map((m, i) => (
              <div key={m.label} data-reveal={i * 80} className="result">
                <span className="v">{m.n}</span>
                <span style={{ color: 'var(--fg)', fontWeight: 600 }}>{m.label}</span>
                <span>{m.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand lang={lang} t={t} title={a.bandTitle} text={a.bandText} />
    </>
  );
}
