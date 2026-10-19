import Link from 'next/link';
import CaseVisual from '@/components/CaseVisual';
import ContactForm from '@/components/ContactForm';
import Faq from '@/components/Faq';
import HomeHero from '@/components/HomeHero';
import { Eyebrow } from '@/components/ui';
import { services } from '@/content/services';
import { getProject } from '@/content/work';
import { site } from '@/lib/site';

const WHY: [string, string][] = [
  ['We understand code and business processes.', 'We speak ERP, accounting and warehouse as fluently as React and SQL. Our software fits how your company actually works, and your reports match your books.'],
  ['Local presence, international standards.', "We're in Ashgabat, in your time zone and your language. Our code reviews, documentation and security practices match what you'd expect from a team in Europe."],
  ['One team from design to support.', 'Designers, developers and ERP consultants work side by side. You get one contact and one contract, from the first sketch to support after launch.'],
  ['Transparent timelines and pricing.', "A fixed scope and price for each stage, a shared roadmap, and a working demo every two weeks. You always know what's done and what's next."]
];

const PROCESS: [string, string, string][] = [
  ['Discovery', 'We learn how your business runs today: people, processes, data and systems.', '1–2 weeks'],
  ['Plan & Estimate', 'A written scope, milestones and a fixed price for each stage.', '3–5 days'],
  ['Design & Prototype', 'Clickable screens your team can test before any code is written.', '2–4 weeks'],
  ['Development', 'Two-week sprints. Each one ends with a build you can open and use.', '4–16 weeks'],
  ['Demo & Launch', 'Final demo, data migration, staff training and go-live.', '1–2 weeks'],
  ['Support', 'Monitoring, fixes and improvements as your business changes.', 'Ongoing']
];

const STACK: [string, string][] = [['React', 'web'], ['TypeScript', 'web'], ['Flutter', 'mobile'], ['FastAPI', 'api'], ['Go', 'api'], ['PostgreSQL', 'db'], ['SQL Server', 'db'], ['Power BI', 'bi'], ['Logo ERP', 'erp']];

const FAQ: [string, string][] = [
  ['What exactly do you build?', 'Websites, online stores, mobile apps and custom business software. We also set up and customize Logo Tiger and Logo Unity ERP, and build Power BI dashboards on top of your data. Many projects combine several of these.'],
  ['How long does a typical project take?', 'A corporate website takes 3–6 weeks. An online store or mobile app takes 2–4 months. ERP integrations and custom systems depend on scope: after discovery you get a timeline split into stages, with a date for each.'],
  ['Do you work with startups or only established companies?', 'Both. Most of our clients are manufacturers, distributors and retailers with years of history, but we also help founders build a first version, test it with real users and grow it.'],
  ['Can you redesign or extend a system we already have?', 'Yes. We often take over existing websites, apps and ERP setups. We start with an audit of the code, data and processes, then recommend whether to fix, extend or replace.'],
  ['How do we get started?', 'Send a short message through the form, WhatsApp or Telegram. We set up a 30-minute call, then a discovery session. You receive a written scope, timeline and fixed price for the first stage.'],
  ['Do you support the software after launch?', 'Yes. Every project includes a warranty period. After that we offer monthly support plans covering monitoring, updates, fixes, small improvements and help for your team.']
];

export default function Home() {
  const [feat, a, b] = ['heating-plumbing-ecommerce', 'manufacturer-order-management', 'trading-power-bi-reporting'].map(s => getProject(s)!);
  return (
    <>
      <HomeHero />

      <section className="sec">
        <div className="wrap">
          <div className="stats">
            <div data-reveal="0" className="stat"><span className="v">120<i>+</i></span><span className="l">Projects delivered</span></div>
            <div data-reveal="80" className="stat"><span className="v">9<i className="small"> yrs</i></span><span className="l">Years of experience</span></div>
            <div data-reveal="160" className="stat"><span className="v">14</span><span className="l">Industries served</span></div>
            <div data-reveal="240" className="stat"><span className="v">98<i>%</i></span><span className="l">Client satisfaction</span></div>
          </div>
        </div>
      </section>

      <section id="services" className="sec" style={{ scrollMarginTop: 72 }}>
        <div className="wrap py-xl">
          <div data-reveal="0" className="head">
            <div className="head-col">
              <Eyebrow n="01">Services</Eyebrow>
              <h2 className="h2">From the storefront to the general ledger.</h2>
            </div>
            <p className="lead">Six services, one team. Most clients start with one and add the rest as the business grows.</p>
          </div>
          <div data-reveal="80" className="svc-grid">
            {services.map(s => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="svc">
                <div className="svc-top"><span className="num">{s.num}</span><span className="svc-arrow">→</span></div>
                <div className="svc-body">
                  <h3>{s.title}</h3>
                  <p>{s.short}</p>
                  <div className="chips">{s.tags.map(t => <span key={t} className="chip">{t}</span>)}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap py-xl split">
          <div style={{ flex: '1 1 340px', maxWidth: 480 }}>
            <div data-reveal="0" className="sticky-side">
              <Eyebrow n="02">Why ofis.tm</Eyebrow>
              <h2 className="h2-m">Code and business processes, in one team.</h2>
              <p className="lead">Most agencies build the website. Most consultants configure the ERP. We do both, so the pieces actually talk to each other.</p>
              <Link href="/about" className="ulink" style={{ alignSelf: 'flex-start', marginTop: 8 }}>More about us <span>→</span></Link>
            </div>
          </div>
          <div style={{ flex: '1.4 1 460px', display: 'flex', flexDirection: 'column' }}>
            {WHY.map(([t, d], i) => (
              <div key={t} data-reveal="0" className="why-item">
                <span className="num">0{i + 1}</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}><h3>{t}</h3><p>{d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap py-xl">
          <div data-reveal="0" className="head">
            <div className="head-col">
              <Eyebrow n="03">Selected work</Eyebrow>
              <h2 className="h2">Software that changed how the work gets done.</h2>
            </div>
            <Link href="/work" className="btn btn-line btn-sm">All projects <span>→</span></Link>
          </div>
          <div className="cases">
            <Link href={`/work/${feat.slug}`} data-reveal="0" className="case-feat">
              <div className="shot"><CaseVisual kind={feat.kind} /></div>
              <div className="case-txt">
                <span className="meta">{feat.label}</span>
                <h3 className="case-h">{feat.title}</h3>
                <p className="case-res"><span>↗</span>{feat.result}</p>
                <span className="case-more">Read case study →</span>
              </div>
            </Link>
            {[a, b].map((p, i) => (
              <Link key={p.slug} href={`/work/${p.slug}`} data-reveal={i * 120} className="case-card">
                <div className="shot"><CaseVisual kind={p.kind} /></div>
                <div className="case-txt">
                  <span className="meta">{p.label}</span>
                  <h3 className="case-h">{i === 1 ? 'Power BI reporting suite' : p.title}</h3>
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
              <Eyebrow n="04">Process</Eyebrow>
              <h2 className="h2">Six steps. A working demo every two weeks.</h2>
            </div>
            <p className="lead">You see progress in working software, not status reports. Every stage ends with something you can test.</p>
          </div>
          <div className="steps">
            {PROCESS.map(([t, d, dur], i) => (
              <div key={t} data-reveal={i * 70} className={'step' + (i === 0 ? ' first' : '')}>
                <span className="num">0{i + 1}</span>
                <h3>{t}</h3>
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
            <Eyebrow n="05">Stack</Eyebrow>
            <p className="lead">Proven, well-supported tools. We pick what fits your systems and your team, not what&apos;s fashionable.</p>
          </div>
          <div data-reveal="80" className="stack-list">
            {STACK.map(([t, k]) => <span key={t}>{t}<sup>{k}</sup></span>)}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap py-xl split">
          <div data-reveal="0" className="split-side">
            <Eyebrow n="06">FAQ</Eyebrow>
            <h2 className="h2-m">Questions we hear often.</h2>
            <p className="lead">Something else on your mind? <a href="#contact" style={{ borderBottom: '1px solid var(--line2)' }}>Ask us directly.</a></p>
          </div>
          <Faq items={FAQ} />
        </div>
      </section>

      <section id="contact" className="clip" style={{ scrollMarginTop: 72 }}>
        <div className="glow" style={{ left: '-20%', bottom: '-40%', width: 'min(90vw,1100px)' }} />
        <div className="wrap py-xl rel" style={{ display: 'flex', flexWrap: 'wrap', gap: '56px clamp(40px,6vw,100px)' }}>
          <div data-reveal="0" style={{ flex: '1 1 340px', maxWidth: 500, display: 'flex', flexDirection: 'column', gap: 24 }}>
            <Eyebrow n="07">Contact</Eyebrow>
            <h2 style={{ margin: 0, fontSize: 'clamp(38px,5.4vw,76px)', fontWeight: 600, lineHeight: 0.98, letterSpacing: '-.05em', textWrap: 'balance' }}>Tell us what you need to build.</h2>
            <p className="lead">A short message is enough. We reply within one working day with questions, a rough scope and next steps.</p>
            <div className="crow-list">
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="crow"><span><span className="label">WhatsApp</span><span className="v">{site.phone.display}</span></span><span className="ar">↗</span></a>
              <a href={site.telegram.url} target="_blank" rel="noopener noreferrer" className="crow"><span><span className="label">Telegram</span><span className="v">{site.telegram.handle}</span></span><span className="ar">↗</span></a>
              <a href={`mailto:${site.email}`} className="crow"><span><span className="label">Email</span><span className="v">{site.email}</span></span><span className="ar">↗</span></a>
            </div>
          </div>
          <div data-reveal="100" className="form-card">
            <ContactForm variant="compact" />
          </div>
        </div>
      </section>
    </>
  );
}
