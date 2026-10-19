import type { Metadata } from 'next';
import Link from 'next/link';
import { CtaBand } from '@/components/ui';
import { services } from '@/content/services';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Web development, mobile apps, Logo ERP consulting and integration, data & reporting, custom business software and UI/UX design.',
  alternates: { canonical: '/services' }
};

const LAYERS: { k: string; t: string; links: [string, string][]; key?: boolean }[] = [
  { k: 'L1 · What customers see', t: 'Website, online store, mobile app', links: [['web', '01 Web'], ['mobile', '02 Mobile']] },
  { k: 'L2 · Where your team works', t: 'Orders, documents, approvals, internal tools', links: [['custom', '05 Custom software']] },
  { k: 'L3 · Where records live', t: 'Logo Tiger / Logo Unity ERP', links: [['erp', '03 ERP']], key: true },
  { k: 'L4 · How management decides', t: 'SQL data warehouse and Power BI dashboards', links: [['data', '04 Data']] }
];

export default function ServicesPage() {
  return (
    <>
      <section className="sec clip">
        <div className="gridbg" style={{ WebkitMaskImage: 'radial-gradient(60% 80% at 85% 20%,#000 10%,transparent 75%)', maskImage: 'radial-gradient(60% 80% at 85% 20%,#000 10%,transparent 75%)' }} />
        <div className="wrap phero" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 56 }}>
          <div data-reveal="0" style={{ flex: '1 1 560px', maxWidth: 900, display: 'flex', flexDirection: 'column', gap: 28 }}>
            <div className="eyebrow"><span className="n">Services</span><span className="ln" /><span>06 disciplines</span></div>
            <h1 className="h1">Six services. One system behind your business.</h1>
            <p className="sub" style={{ maxWidth: 560 }}>Hire us for one piece or for all of it. Either way, what we build connects to the rest of your operations: your ERP, your warehouse, your reports.</p>
          </div>
          <nav data-reveal="120" aria-label="Services on this page" className="toc">
            {services.map(s => (
              <a key={s.id} href={`#${s.id}`}><span className="mono">{s.num}</span><span className="t">{s.title}</span><span className="d">↓</span></a>
            ))}
          </nav>
        </div>
      </section>

      <section>
        {services.map(s => (
          <article key={s.id} id={s.id} className="sec" style={{ scrollMarginTop: 72 }}>
            <div data-reveal="0" className="wrap py-m svc-row">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <span className="big-num">{s.num}</span>
                <h2>{s.title}</h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                <p className="desc">{s.desc}</p>
                <div className="facts-inline">
                  <div><span className="label">Typical timeline</span><b>{s.time}</b></div>
                  <div><span className="label">Best for</span><b>{s.best}</b></div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <span className="label">What you get</span>
                <ul className="plus-list">{s.items.map(it => <li key={it}>{it}</li>)}</ul>
                <Link href={`/services/${s.slug}`} className="btn btn-line btn-sm btn-fill" style={{ alignSelf: 'flex-start', height: 46 }}>Service details <span>→</span></Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="sec">
        <div className="wrap py-xl">
          <div data-reveal="0" className="head" style={{ marginBottom: 'clamp(40px,5vw,64px)' }}>
            <div className="head-col">
              <div className="eyebrow"><span className="n">How it fits</span><span className="ln" /><span>4 layers</span></div>
              <h2 className="h2">Most companies run on four layers. We build and connect all of them.</h2>
            </div>
            <p className="lead" style={{ maxWidth: 380 }}>When the layers talk to each other, an order placed online reaches the warehouse, the ledger and the dashboard without anyone retyping it.</p>
          </div>
          <div className="layers">
            {LAYERS.map((l, i) => (
              <div key={l.k} data-reveal={i * 60} className={'layer' + (l.key ? ' key' : '')}>
                <span className="lk">{l.k}</span>
                <span className="lt">{l.t}</span>
                <span className="ls">{l.links.map(([id, t]) => <a key={id} href={`#${id}`} className={'tag-soft' + (l.key ? ' on' : '')}>{t}</a>)}</span>
              </div>
            ))}
            <div data-reveal="240" className="layer dash">
              <span>Across every layer: interfaces people understand without training.</span>
              <a href="#design" className="tag-soft">06 UI/UX</a>
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="Not sure which service you need?" text="Describe the problem instead. We'll tell you which pieces would help, and which you can skip." />
    </>
  );
}
