'use client';

import { useState } from 'react';
import { site } from '@/lib/site';

const SERVICES = ['Not sure yet', 'Web Development', 'Mobile Apps', 'ERP Consulting & Integration', 'Data & Reporting', 'Custom Business Software', 'UI/UX Design'];
const BUDGETS = ['Under $5k', '$5k–15k', '$15k–40k', '$40k+', 'Not sure'];
const TIMELINES = ['As soon as possible', 'In 1–3 months', 'In 3–6 months', 'Just exploring'];
const CHANNELS = ['WhatsApp', 'Telegram', 'Email', 'Phone call'];

type Fields = { name: string; company: string; phone: string; email: string; service: string; budget: string; timeline: string; channel: string; message: string; website: string };
type Choice = 'budget' | 'timeline' | 'channel';

function Options({ label, list, value, onPick }: { label: string; list: string[]; value: string; onPick: (v: string) => void }) {
  return (
    <div className="full" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <span className="label">{label}</span>
      <div role="radiogroup" aria-label={label} className="opts">
        {list.map(v => (
          <button key={v} type="button" role="radio" aria-checked={value === v} className="toggle" onClick={() => onPick(value === v ? '' : v)}>{v}</button>
        ))}
      </div>
    </div>
  );
}

function summary(f: Fields) {
  return [
    'New project request (ofistm.com)',
    `Name: ${f.name}`,
    f.company && `Company: ${f.company}`,
    f.phone && `Phone: ${f.phone}`,
    f.email && `Email: ${f.email}`,
    `Service: ${f.service}`,
    f.budget && `Budget: ${f.budget}`,
    f.timeline && `Start: ${f.timeline}`,
    f.channel && `Reply via: ${f.channel}`,
    f.message && `\n${f.message}`
  ].filter(Boolean).join('\n');
}

export default function ContactForm({ variant = 'compact', service = 'Not sure yet' }: { variant?: 'compact' | 'full'; service?: string }) {
  const [f, setF] = useState<Fields>({ name: '', company: '', phone: '', email: '', service, budget: '', timeline: '', channel: 'WhatsApp', message: '', website: '' });
  const [tried, setTried] = useState(false);
  const [state, setState] = useState<'edit' | 'sending' | 'sent' | 'error'>('edit');
  const full = variant === 'full';

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setF(s => ({ ...s, [k]: e.target.value }));
  const pick = (k: Choice) => (v: string) => setF(s => ({ ...s, [k]: v }));

  const emailBad = f.email.trim() !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim());
  const er = { name: !f.name.trim(), contact: !f.phone.trim() && !f.email.trim(), emailBad };
  const show = tried;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (er.name || er.contact || er.emailBad) { setTried(true); return; }
    setTried(false);
    setState('sending');
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(f) });
      setState(res.ok ? 'sent' : 'error');
    } catch {
      setState('error');
    }
  };

  if (state === 'sent') {
    const first = f.name.trim().split(' ')[0];
    const via = f.channel || (f.phone ? 'WhatsApp' : 'email');
    return (
      <div className="sent" role="status">
        <div className="ok">✓</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="label" style={{ fontSize: 12, color: 'var(--acc-ink)' }}>Request received</div>
          <h3>{first ? `Thanks, ${first}.` : 'Thanks.'}</h3>
          <p>We&apos;ll review your request and reply within one working day{via ? ' via ' + via : ''}.</p>
        </div>
        <button type="button" className="btn btn-line btn-sm" style={{ alignSelf: 'flex-start' }} onClick={() => { setState('edit'); setF(s => ({ ...s, message: '' })); }}>Send another request</button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={submit} noValidate>
      <label className="field">
        <span className="label">Name *</span>
        <input className={'inp' + (show && er.name ? ' bad' : '')} type="text" value={f.name} onChange={set('name')} autoComplete="name" placeholder="Your full name" aria-invalid={show && er.name} />
        {show && er.name && <span className="err">Please tell us your name.</span>}
      </label>
      <label className="field">
        <span className="label">Company</span>
        <input className="inp" type="text" value={f.company} onChange={set('company')} autoComplete="organization" placeholder="Company name" />
      </label>
      <label className="field">
        <span className="label">Phone / WhatsApp</span>
        <input className={'inp' + (show && er.contact ? ' bad' : '')} type="tel" value={f.phone} onChange={set('phone')} autoComplete="tel" placeholder="+993 6X XX XX XX" />
      </label>
      <label className="field">
        <span className="label">Email</span>
        <input className={'inp' + (show && (er.contact || er.emailBad) ? ' bad' : '')} type="email" value={f.email} onChange={set('email')} autoComplete="email" placeholder="you@company.com" />
      </label>
      {show && (er.contact || er.emailBad) && (
        <span className="err row">{er.contact ? 'Add a phone/WhatsApp number or an email so we can reply.' : 'That email address looks incomplete.'}</span>
      )}
      <label className="field full">
        <span className="label">Service</span>
        <span className="sel">
          <select className="inp" value={f.service} onChange={set('service')}>
            {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </span>
      </label>
      <Options label="Budget range (USD)" list={BUDGETS} value={f.budget} onPick={pick('budget')} />
      {full && <Options label="When do you want to start?" list={TIMELINES} value={f.timeline} onPick={pick('timeline')} />}
      {full && <Options label="Best way to reach you" list={CHANNELS} value={f.channel} onPick={pick('channel')} />}
      <label className="field full">
        <span className="label">Message</span>
        <textarea className="inp" value={f.message} onChange={set('message')} rows={full ? 6 : 4} placeholder="What do you want to build or fix? Which systems do you use today?" />
      </label>
      <label className="hp" aria-hidden="true">Website<input type="text" tabIndex={-1} autoComplete="off" value={f.website} onChange={set('website')} /></label>
      {state === 'error' && (
        <div className="form-error" role="alert">
          The message could not be sent. Please{' '}
          <a href={`${site.whatsapp}?text=${encodeURIComponent(summary(f))}`} target="_blank" rel="noopener noreferrer">send it via WhatsApp</a>{' '}
          or call <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>.
        </div>
      )}
      <div className="form-foot">
        <span>We reply within one working day. Your details are used only to answer this request.</span>
        <button type="submit" className="btn btn-acc" disabled={state === 'sending'}>{state === 'sending' ? 'Sending…' : 'Send request'} <span>→</span></button>
      </div>
    </form>
  );
}
