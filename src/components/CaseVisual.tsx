import type { Kind } from '@/content/work';

const PRODUCTS: [number, string][] = [[80, '1 240'], [64, '386'], [72, '2 915'], [56, '74'], [68, '612'], [76, '1 980'], [60, '148'], [70, '3 450']];
const ORDERS: [string, string, string, boolean?][] = [
  ['SO-24081', 'Ak Ýol Trading', '12 480.00'],
  ['SO-24080', 'Garagum Build', '3 215.50'],
  ['SO-24079', 'Merw Foods', '8 940.00', true],
  ['SO-24078', 'Balkan Steel', '21 006.00'],
  ['SO-24077', 'Lebap Agro', '1 870.25'],
  ['SO-24076', 'Arkadag Retail', '6 402.00']
];
const BARS = [34, 46, 40, 58, 52, 66, 61, 74, 70, 82, 88, 96];

// Decorative product illustrations used as case-study thumbnails.
export default function CaseVisual({ kind }: { kind: Kind }) {
  return (
    <div className="cv" aria-hidden="true">
      {kind === 'web' && (
        <div className="cv-win">
          <div className="cv-chrome"><i /><i /><i /><span className="cv-url">teplo-market.tm/catalog</span></div>
          <div className="cv-body">
            <div className="cv-nav">
              <span className="cv-brand">TEPLO</span>
              <div className="cv-links">{[28, 22, 30, 20].map((w, i) => <span key={i} className="bar4" style={{ width: w }} />)}</div>
              <span className="cv-cart">Cart · 3</span>
            </div>
            <div className="cv-hero">
              <div><b>Boilers, radiators &amp; fittings</b><span className="bar4" style={{ width: '80%' }} /><span className="bar4" style={{ width: '58%' }} /></div>
              <div className="cv-banner" />
            </div>
            <div className="cv-prods">
              {PRODUCTS.map(([w, p], i) => (
                <div key={i}><div className="img" /><span className="bar4" style={{ width: w + '%' }} /><span className="p">{p} TMT</span></div>
              ))}
            </div>
          </div>
        </div>
      )}
      {kind === 'erp' && (
        <div className="cv-win erp">
          <div className="cv-head"><b>Sales orders</b><span className="cv-synced"><i />Logo Tiger ⇄ synced 2s ago</span></div>
          <div className="cv-tr th"><span>Order</span><span>Customer</span><span className="r">Amount</span><span>Status</span></div>
          {ORDERS.map(([id, c, amt, posting]) => (
            <div key={id} className={'cv-tr' + (posting ? ' hl' : '')}>
              <span>{id}</span><span className="c">{c}</span><span className="r">{amt}</span>
              <span className={'s' + (posting ? ' p' : '')}>{posting ? '◐ Posting' : '● Synced'}</span>
            </div>
          ))}
        </div>
      )}
      {kind === 'data' && (
        <div className="cv-win data">
          <div className="cv-dhead"><b>Management report</b><span>Q3 2026 · All regions</span></div>
          <div className="cv-kpis">
            <div><span className="k">Revenue</span><span className="v">4.82M</span><span className="d">▲ 12.4%</span></div>
            <div><span className="k">Margin</span><span className="v">23.4%</span><span className="d">▲ 1.8 pp</span></div>
            <div><span className="k">DSO</span><span className="v">38 d</span><span className="d m">▼ 6 d</span></div>
          </div>
          <div className="cv-bars">
            {BARS.map((h, i) => <span key={i} className={i === 11 ? 'acc' : i === 10 ? 'hi' : undefined} style={{ height: h + '%' }} />)}
          </div>
        </div>
      )}
      {kind === 'mobile' && (
        <>
          <div className="cv-phone">
            <div className="cv-status"><span>9:41</span><i /><span>5G</span></div>
            <div className="cv-ord"><span>Orders this month</span><b>1 284</b><span>▲ 9.2% vs Sep</span></div>
            <div>
              {[[70, 40, '#4471'], [60, 44, '#4470'], [76, 36, '#4469']].map(([a, b, n], i) => (
                <div key={i} className="cv-li"><i className={i === 0 ? 'a' : undefined} /><span className="lines"><span className="bar4" style={{ width: a + '%' }} /><span className="l2" style={{ width: b + '%' }} /></span><span>{n}</span></div>
              ))}
            </div>
            <div className="cv-new">New order</div>
          </div>
          <div className="cv-push"><span>Push · 2 min ago</span><b>Order #4471 confirmed</b></div>
        </>
      )}
    </div>
  );
}
