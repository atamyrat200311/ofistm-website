import { NextResponse } from 'next/server';

type Body = Record<string, unknown>;

const str = (v: unknown, max = 200) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

function format(b: Body) {
  const lines: [string, string][] = [
    ['Name', str(b.name)],
    ['Company', str(b.company)],
    ['Phone', str(b.phone, 50)],
    ['Email', str(b.email)],
    ['Service', str(b.service)],
    ['Budget', str(b.budget)],
    ['Start', str(b.timeline)],
    ['Reply via', str(b.channel)]
  ];
  const head = lines.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join('\n');
  const msg = str(b.message, 4000);
  return `New project request · ofistm.com\n\n${head}${msg ? `\n\n${msg}` : ''}`;
}

async function sendTelegram(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chat = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chat) return null;
  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chat, text, disable_web_page_preview: true })
  });
  return res.ok;
}

async function sendEmail(text: string, replyTo: string) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!key || !to) return null;
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || 'ofis.tm <noreply@ofistm.com>',
      to: [to],
      subject: 'New project request · ofistm.com',
      text,
      ...(replyTo ? { reply_to: replyTo } : {})
    })
  });
  return res.ok;
}

export async function POST(req: Request) {
  let b: Body;
  try { b = await req.json(); } catch { return NextResponse.json({ ok: false }, { status: 400 }); }

  // Honeypot: bots fill the hidden "website" field; pretend success.
  if (str(b.website)) return NextResponse.json({ ok: true });

  const email = str(b.email);
  if (!str(b.name) || (!str(b.phone) && !email) || (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
    return NextResponse.json({ ok: false, error: 'invalid' }, { status: 422 });
  }

  const text = format(b);
  const results = await Promise.all([sendTelegram(text), sendEmail(text, email)].map(p => p.catch(() => false)));
  const configured = results.filter(r => r !== null);
  if (!configured.length) {
    console.error('Contact form: no delivery channel configured (set TELEGRAM_* or RESEND_* env vars).');
    return NextResponse.json({ ok: false, error: 'not_configured' }, { status: 503 });
  }
  return configured.some(Boolean) ? NextResponse.json({ ok: true }) : NextResponse.json({ ok: false }, { status: 502 });
}
