import type { Metadata } from 'next';
import { LocalTime } from '@/components/Clock';
import { CtaBand, Eyebrow } from '@/components/ui';

export const metadata: Metadata = {
  title: 'About',
  description: 'ofis.tm is a software team in Ashgabat that speaks business: designers, engineers and ERP consultants working with manufacturers, distributors and retailers since 2017.',
  alternates: { canonical: '/about' }
};

const VALUES: [string, string][] = [
  ['Clear over clever', 'We explain things in plain language and write code the next developer can read.'],
  ['Own the outcome', 'We measure success in hours saved and errors removed, not in features shipped.'],
  ['Build for years', 'Software a business runs on has to be documented, secure and easy to maintain.'],
  ['Respect the process', 'We learn how your team works today before we suggest how it could work better.']
];

// Add a photo path (e.g. '/team/name.jpg' in /public) to show a portrait.
const TEAM: { name: string; role: string; photo?: string }[] = [
  { name: 'Founder name', role: 'Founder & CEO' },
  { name: 'Full name', role: 'Head of ERP Practice' },
  { name: 'Full name', role: 'Lead Engineer' },
  { name: 'Full name', role: 'Design Lead' },
  { name: 'Full name', role: 'Mobile Lead (Flutter)' },
  { name: 'Full name', role: 'Data & BI Lead' }
];

export default function AboutPage() {
  return (
    <>
      <section className="sec clip">
        <img src="/brand/mark-white-lg.png" alt="" className="about-mark logo" width={640} height={640} />
        <div className="wrap rel" style={{ paddingTop: 'clamp(56px,8vw,120px)', paddingBottom: 'clamp(64px,8vw,112px)', display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div data-reveal="0" className="eyebrow"><span className="n">About</span><span className="ln" /><span>Since 2017</span></div>
          <h1 data-reveal="80" style={{ margin: 0, maxWidth: '11em', fontSize: 'clamp(44px,7.6vw,116px)', fontWeight: 600, lineHeight: 0.95, letterSpacing: '-.055em', textWrap: 'balance' }}>A software team that speaks business.</h1>
        </div>
      </section>

      <section className="sec story">
        <div className="wrap py-l split" style={{ gap: '40px clamp(40px,7vw,120px)' }}>
          <div data-reveal="0" className="split-side" style={{ maxWidth: 440 }}>
            <Eyebrow n="01">Our story</Eyebrow>
            <p className="story-big">We started with reports and ERP integrations. We still start every project with how the business runs.</p>
          </div>
          <div data-reveal="80" style={{ flex: '1.5 1 460px', display: 'flex', flexDirection: 'column', gap: 22, maxWidth: 720 }}>
            <p className="body">ofis.tm began in 2017 in a small office in Ashgabat. Our first projects were reports and integrations for companies running Logo ERP: getting the numbers out of the system and in front of the people who make decisions.</p>
            <p className="body">Clients kept asking for more. A website connected to their stock. An app for sales reps. A tool for export paperwork. We grew into a full software team, and kept the habit of understanding the process before writing the code.</p>
            <p className="body">Today we&apos;re designers, engineers and ERP consultants working with manufacturers, distributors and retailers in Turkmenistan and abroad.</p>
          </div>
        </div>
      </section>

      <section className="sec clip" style={{ background: 'var(--bg2)' }}>
        <div className="gridbg" style={{ backgroundSize: '64px 64px', WebkitMaskImage: 'radial-gradient(60% 90% at 80% 50%,#000 10%,transparent 80%)', maskImage: 'radial-gradient(60% 90% at 80% 50%,#000 10%,transparent 80%)' }} />
        <div className="wrap py-l rel" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 48 }}>
          <div data-reveal="0" style={{ flex: '1 1 560px', display: 'flex', flexDirection: 'column', gap: 22 }}>
            <Eyebrow n="02">Where we are</Eyebrow>
            <h2 style={{ margin: 0, fontSize: 'clamp(40px,6.4vw,96px)', fontWeight: 600, lineHeight: 0.95, letterSpacing: '-.055em', textWrap: 'balance' }}>Based in Ashgabat. <span style={{ color: 'var(--fg3)' }}>Working worldwide.</span></h2>
            <p className="lead" style={{ maxWidth: 560, fontSize: 18, lineHeight: 1.6 }}>Local clients get a team they can meet in person. International clients get a partner that knows the regional market, its regulations and its ERP systems.</p>
          </div>
          <dl data-reveal="100" className="dl-rows">
            <div><dt className="label">Local time</dt><dd><LocalTime /> <span>UTC+5</span></dd></div>
            <div><dt className="label">Coordinates</dt><dd>37.96° N, 58.33° E</dd></div>
            <div><dt className="label">We speak</dt><dd>Türkmen, Русский, English, Türkçe</dd></div>
            <div><dt className="label">Clients in</dt><dd>Turkmenistan, Türkiye, UAE, Kazakhstan, Germany</dd></div>
          </dl>
        </div>
      </section>

      <section className="sec">
        <div className="wrap py-l">
          <div data-reveal="0" className="head-col head-l">
            <Eyebrow n="03">Values</Eyebrow>
            <h2 className="h2-m">How we work.</h2>
          </div>
          <div className="values">
            {VALUES.map(([t, d], i) => (
              <div key={t} data-reveal={i * 70} className="value"><span className="num">0{i + 1}</span><h3>{t}</h3><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap py-l">
          <div data-reveal="0" className="head" style={{ marginBottom: 'clamp(40px,5vw,64px)' }}>
            <div className="head-col">
              <Eyebrow n="04">Team</Eyebrow>
              <h2 className="h2-m">The people you&apos;ll work with.</h2>
            </div>
            <p className="lead" style={{ maxWidth: 380 }}>A small senior team. The people in your first meeting are the people who build your system.</p>
          </div>
          <div data-reveal="60" className="team">
            {TEAM.map((m, i) => (
              <div key={i} className="member">
                <div className="portrait">
                  {m.photo ? <img src={m.photo} alt={m.name} className="photo" /> : <img src="/brand/mark-white.png" alt="" className="ph logo" />}
                  <span className="mono">0{i + 1}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <b>{m.name}</b>
                  <span>{m.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Let's meet. In Ashgabat or on a call." text="Tell us a little about your company and what you want to improve. The first conversation is free and has no obligation." />
    </>
  );
}
