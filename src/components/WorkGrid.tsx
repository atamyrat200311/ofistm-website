'use client';

import Link from 'next/link';
import { useState } from 'react';
import CaseVisual from './CaseVisual';
import type { Kind } from '@/content/work';

export type WorkItem = { slug: string; kind: Kind; cats: Kind[]; industry: string; title: string; result: string };

const KINDS: ('all' | Kind)[] = ['all', 'web', 'mobile', 'erp', 'data'];

export default function WorkGrid({ lang, items, tabs, label }: { lang: string; items: WorkItem[]; tabs: Record<'all' | Kind, string>; label: string }) {
  const [f, setF] = useState<'all' | Kind>('all');
  const list = items.map((p, i) => ({ ...p, num: String(i + 1).padStart(2, '0') })).filter(p => f === 'all' || p.cats.includes(f));
  return (
    <section className="sec">
      <div className="filter-bar">
        <div role="tablist" aria-label={label} className="wrap filter-in">
          {KINDS.map(k => (
            <button key={k} type="button" role="tab" aria-selected={f === k} className="toggle" onClick={() => setF(k)}>
              {tabs[k]}<i>{k === 'all' ? items.length : items.filter(p => p.cats.includes(k)).length}</i>
            </button>
          ))}
        </div>
      </div>
      <div className="wrap" style={{ paddingTop: 'clamp(40px,5vw,64px)', paddingBottom: 'clamp(80px,10vw,140px)' }}>
        <div data-reveal="0" className="work-grid">
          {list.map(p => (
            <Link key={p.slug} href={`/${lang}/work/${p.slug}`} className="work-card">
              <div className="shot">
                <CaseVisual kind={p.kind} />
                <span className="badge">{p.num}</span>
              </div>
              <div className="case-txt">
                <div className="work-meta">
                  <span className="meta">{p.industry}</span>
                  <span className="chips">{p.cats.map(c => <span key={c} className="chip">{tabs[c]}</span>)}</span>
                </div>
                <h2 className="case-h">{p.title}</h2>
                <p className="case-res"><span>↗</span>{p.result}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
