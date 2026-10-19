import Link from 'next/link';
import { site } from '@/lib/site';

export function Eyebrow({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="eyebrow"><span className="n">{n}</span><span className="ln" /><span>{children}</span></div>
  );
}

export function CtaBand({ title = "Let's build the software your business runs on.", text = 'Tell us what slows your team down. We reply within one working day with questions, a rough scope and next steps.' }: { title?: string; text?: string }) {
  return (
    <section className="band">
      <div className="wrap band-in">
        <div className="band-txt">
          <div className="eyebrow"><span className="n">→</span>Next step</div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="btn-row">
          <Link href="/contact" className="btn btn-acc">Start a project <span>→</span></Link>
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-line">WhatsApp ↗</a>
          <a href={site.telegram.url} target="_blank" rel="noopener noreferrer" className="btn btn-line">Telegram ↗</a>
        </div>
      </div>
    </section>
  );
}
