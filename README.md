# ofistm.com

Website for ofis.tm. Next.js (App Router) + TypeScript, plain CSS with design tokens.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Where things live

| What | File |
| --- | --- |
| Phone, WhatsApp, Telegram, email, Instagram, hours, team numbers | `src/lib/site.ts` |
| All text, per language (TM, RU, EN, TR) | `src/i18n/dicts/{tk,ru,en,tr}.ts` |
| Services: slugs, timeline bars, related case | `src/content/services.ts` |
| Case studies: slugs, categories, tech stack | `src/content/work.ts` |
| Language detection for `/` | `src/proxy.ts` |
| Colors, typography, all styles | `src/app/globals.css` |
| Original design handoff | `ofis-tm-website-design-system/` (not deployed) |

## Languages

Every page lives under a language prefix: `/tk`, `/ru`, `/en`, `/tr`. Visiting `/` redirects to the
language saved from the switcher, otherwise the browser's language, otherwise English.
`en.ts` defines the shape; TypeScript reports any key missing from the other three files.

## Deploy on Vercel

1. Import the GitHub repo in Vercel (framework is detected as Next.js, no settings needed).
2. Add environment variables for the contact form (see `.env.example`). Without them the form
   shows a "send via WhatsApp" fallback.
   - Email via Resend: `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`
     (verify `ofistm.com` in Resend first so it can send from `noreply@ofistm.com`)
   - or Telegram: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`
3. Project → Settings → Domains: add `ofistm.com` and `www.ofistm.com`, then set the DNS records
   Vercel shows at your domain registrar. `www` redirects to the bare domain.
