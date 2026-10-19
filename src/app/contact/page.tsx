import type { Metadata } from 'next';
import { OpenNow } from '@/components/Clock';
import ContactForm from '@/components/ContactForm';
import { Eyebrow } from '@/components/ui';
import { services } from '@/content/services';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Tell us about your project. WhatsApp ${site.phone.display}, Telegram ${site.telegram.handle} or ${site.email}. We reply within one working day.`,
  alternates: { canonical: '/contact' }
};

const NEXT: [string, string, string][] = [
  ['01 · Within 1 day', 'We reply', 'A real person reads your message and replies with a few questions or a time to talk.'],
  ['02 · 30 minutes', 'Intro call', 'In our office, by phone or online. We talk about your goals, systems and constraints.'],
  ['03 · Within 1 week', 'Written proposal', 'Scope, timeline and a fixed price for the first stage. You decide, with no obligation.']
];

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const q = (await searchParams).service;
  const service = services.some(s => s.title === q) ? q! : 'Not sure yet';
  return (
    <>
      <section className="clip">
        <div className="glow" style={{ right: '-18%', top: '-50%', width: 'min(80vw,1000px)' }} />
        <div className="wrap rel" style={{ paddingTop: 'clamp(56px,8vw,112px)', paddingBottom: 'clamp(40px,5vw,64px)', display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '32px 48px' }}>
          <div data-reveal="0" style={{ flex: '1 1 560px', maxWidth: 960, display: 'flex', flexDirection: 'column', gap: 28 }}>
            <div className="eyebrow"><span className="n">Contact</span><span className="ln" /><span>Reply within 1 working day</span></div>
            <h1 style={{ margin: 0, fontSize: 'clamp(44px,7.4vw,112px)', fontWeight: 600, lineHeight: 0.95, letterSpacing: '-.055em', textWrap: 'balance' }}>Let&apos;s talk about your project.</h1>
          </div>
          <p data-reveal="80" className="lead" style={{ flex: '0 1 380px' }}>Fill in the form, or message us directly. Write in Türkmen, Russian or English, whichever is easier.</p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap" style={{ paddingTop: 'clamp(16px,2vw,24px)', paddingBottom: 'clamp(80px,10vw,140px)', display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: '48px clamp(32px,4vw,64px)' }}>
          <div data-reveal="0" style={{ flex: '1.6 1 520px', minWidth: 0, padding: 'clamp(24px,3.4vw,48px)', border: '1px solid var(--line2)', borderRadius: 26, background: 'var(--bg)' }}>
            <ContactForm key={service} variant="full" service={service} />
          </div>
          <aside data-reveal="100" style={{ flex: '1 1 320px', display: 'flex', flexDirection: 'column', gap: 48 }}>
            <div className="dcards">
              <span className="label" style={{ marginBottom: 12 }}>Message us directly</span>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="dcard acc"><span><span className="k">WhatsApp</span><span className="v">{site.phone.display}</span></span><span className="ar">↗</span></a>
              <a href={site.telegram.url} target="_blank" rel="noopener noreferrer" className="dcard"><span><span className="k">Telegram</span><span className="v">{site.telegram.handle}</span></span><span className="ar">↗</span></a>
              <a href={`mailto:${site.email}`} className="dcard"><span><span className="k">Email</span><span className="v">{site.email}</span></span><span className="ar">↗</span></a>
              <a href={`tel:${site.phone.tel}`} className="dcard"><span><span className="k">Phone</span><span className="v">{site.phone.display}</span></span><span className="ar">↗</span></a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <span className="label">Office</span>
              <div className="map">
                <span className="road" style={{ left: '-10%', right: '-10%', top: '58%', height: 10, transform: 'rotate(-8deg)' }} />
                <span className="road" style={{ top: '-10%', bottom: '-10%', left: '38%', width: 8, transform: 'rotate(12deg)' }} />
                <span className="road" style={{ left: '-10%', right: '-10%', top: '24%', height: 6, transform: 'rotate(4deg)' }} />
                <span className="pin" />
                <span className="ping" />
                <span className="tag">ofis.tm</span>
                <a href={site.mapUrl} target="_blank" rel="noopener noreferrer" className="open">Open in Maps ↗</a>
              </div>
              <p className="lead" style={{ fontSize: 16 }}>{site.address}</p>
            </div>
            <div className="hours" style={{ display: 'flex', flexDirection: 'column' }}>
              <span className="label" style={{ marginBottom: 12 }}>Working hours · UTC+5</span>
              <div><span className="d">Monday – Friday</span><b>9:00 – 18:00</b></div>
              <div><span className="d">Saturday</span><b>10:00 – 14:00</b></div>
              <div><span className="d">Sunday</span><span className="closed">Closed</span></div>
              <OpenNow />
            </div>
          </aside>
        </div>
      </section>

      <section className="sec">
        <div className="wrap py-l">
          <div data-reveal="0" className="head-col head-l">
            <div className="eyebrow"><span className="n">Next</span><span className="ln" /><span>After you write</span></div>
            <h2 className="h2-m">What happens next.</h2>
          </div>
          <div className="steps wide">
            {NEXT.map(([n, t, d], i) => (
              <div key={t} data-reveal={i * 80} className={'step' + (i === 0 ? ' first' : '')}><span className="num">{n}</span><h3>{t}</h3><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
