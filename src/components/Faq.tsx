'use client';

import { useState } from 'react';

export default function Faq({ items }: { items: [string, string][] }) {
  const [open, setOpen] = useState(0);
  return (
    <div data-reveal="80" className="faq">
      {items.map(([q, a], i) => (
        <div key={q} className={'faq-item' + (open === i ? ' open' : '')}>
          <button type="button" className="faq-q" aria-expanded={open === i} aria-controls={`faq-${i}`} onClick={() => setOpen(o => (o === i ? -1 : i))}>
            <span className="n">0{i + 1}</span>
            <span className="q">{q}</span>
            <span className="pm" />
          </button>
          <div className="faq-a" id={`faq-${i}`}>
            <div><p>{a}</p></div>
          </div>
        </div>
      ))}
    </div>
  );
}
