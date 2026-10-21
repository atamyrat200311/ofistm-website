import Link from 'next/link';
import type { Locale } from '@/i18n/config';
import type { Dict } from '@/i18n/dicts/en';
import { site } from '@/lib/site';

export function Eyebrow({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="eyebrow"><span className="n">{n}</span><span className="ln" /><span>{children}</span></div>
  );
}

export function CtaBand({ lang, t, title, text }: { lang: Locale; t: Dict; title?: string; text?: string }) {
  return (
    <section className="band">
      <div className="wrap band-in">
        <div className="band-txt">
          <div className="eyebrow"><span className="n">→</span>{t.common.nextStep}</div>
          <h2>{title ?? t.band.title}</h2>
          <p>{text ?? t.band.text}</p>
        </div>
        <div className="btn-row">
          <Link href={`/${lang}/contact`} className="btn btn-acc">{t.common.startProject} <span>→</span></Link>
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-line">WhatsApp ↗</a>
          <a href={site.telegram.url} target="_blank" rel="noopener noreferrer" className="btn btn-line">Telegram ↗</a>
        </div>
      </div>
    </section>
  );
}
