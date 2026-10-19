'use client';

import Link from 'next/link';
import { heroText, useLang } from './Lang';

const BARS = [30, 42, 36, 50, 44, 58, 54, 64, 60, 70, 66, 78, 84, 96];

export default function HomeHero() {
  const { lang } = useLang();
  const h = heroText[lang];
  return (
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
              <Link href="/contact" className="btn btn-acc">{h.cta1} <span>→</span></Link>
              <Link href="/work" className="btn btn-line">{h.cta2}</Link>
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
  );
}
