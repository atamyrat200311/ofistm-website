'use client';

import { useState } from 'react';
import type { Dict } from '@/i18n/dicts/en';
import { site } from '@/lib/site';

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
    'ofistm.com',
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

type Props = { t: Dict['form']; services: string[]; variant?: 'compact' | 'full'; service?: string };

export default function ContactForm({ t, services, variant = 'compact', service }: Props) {
  const [f, setF] = useState<Fields>({ name: '', company: '', phone: '', email: '', service: service ?? t.notSure, budget: '', timeline: '', channel: t.channels[0], message: '', website: '' });
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
    const via = f.channel;
    return (
      <div className="sent" role="status">
        <div className="ok">✓</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="label" style={{ fontSize: 12, color: 'var(--acc-ink)' }}>{t.received}</div>
          <h3>{first ? `${t.thanks}, ${first}.` : `${t.thanks}.`}</h3>
          <p>{t.reply}{via ? ` ${t.via} ${via}` : ''}.</p>
        </div>
        <button type="button" className="btn btn-line btn-sm" style={{ alignSelf: 'flex-start' }} onClick={() => { setState('edit'); setF(s => ({ ...s, message: '' })); }}>{t.another}</button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={submit} noValidate>
      <label className="field">
        <span className="label">{t.name}</span>
        <input className={'inp' + (show && er.name ? ' bad' : '')} type="text" value={f.name} onChange={set('name')} autoComplete="name" placeholder={t.namePh} aria-invalid={show && er.name} />
        {show && er.name && <span className="err">{t.errName}</span>}
      </label>
      <label className="field">
        <span className="label">{t.company}</span>
        <input className="inp" type="text" value={f.company} onChange={set('company')} autoComplete="organization" placeholder={t.companyPh} />
      </label>
      <label className="field">
        <span className="label">{t.phone}</span>
        <input className={'inp' + (show && er.contact ? ' bad' : '')} type="tel" value={f.phone} onChange={set('phone')} autoComplete="tel" placeholder="+993 6X XX XX XX" />
      </label>
      <label className="field">
        <span className="label">{t.email}</span>
        <input className={'inp' + (show && (er.contact || er.emailBad) ? ' bad' : '')} type="email" value={f.email} onChange={set('email')} autoComplete="email" placeholder="you@company.com" />
      </label>
      {show && (er.contact || er.emailBad) && (
        <span className="err row">{er.contact ? t.errContact : t.errEmail}</span>
      )}
      <label className="field full">
        <span className="label">{t.service}</span>
        <span className="sel">
          <select className="inp" value={f.service} onChange={set('service')}>
            {[t.notSure, ...services].map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </span>
      </label>
      <Options label={t.budget} list={t.budgets} value={f.budget} onPick={pick('budget')} />
      {full && <Options label={t.start} list={t.timelines} value={f.timeline} onPick={pick('timeline')} />}
      {full && <Options label={t.channel} list={t.channels} value={f.channel} onPick={pick('channel')} />}
      <label className="field full">
        <span className="label">{t.message}</span>
        <textarea className="inp" value={f.message} onChange={set('message')} rows={full ? 6 : 4} placeholder={t.messagePh} />
      </label>
      <label className="hp" aria-hidden="true">Website<input type="text" tabIndex={-1} autoComplete="off" value={f.website} onChange={set('website')} /></label>
      {state === 'error' && (
        <div className="form-error" role="alert">
          {t.errSend}{' '}
          <a href={`${site.whatsapp}?text=${encodeURIComponent(summary(f))}`} target="_blank" rel="noopener noreferrer">{t.errSendWa}</a>{' '}
          {t.errSendCall} <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>.
        </div>
      )}
      <div className="form-foot">
        <span>{t.note}</span>
        <button type="submit" className="btn btn-acc" disabled={state === 'sending'}>{state === 'sending' ? t.sending : t.send} <span>→</span></button>
      </div>
    </form>
  );
}
