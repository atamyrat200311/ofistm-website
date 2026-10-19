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
| Phone, WhatsApp, Telegram, email, social links | `src/lib/site.ts` |
| Services (list + detail pages) | `src/content/services.ts` |
| Case studies (work list + detail pages) | `src/content/work.ts` |
| Header / hero translations (TM, RU, EN) | `src/components/Lang.tsx` |
| Team members | `src/app/about/page.tsx` |
| Colors, typography, all styles | `src/app/globals.css` |
| Original design handoff | `ofis-tm-website-design-system/` (not deployed) |

## Deploy on Vercel

1. Import the GitHub repo in Vercel (framework is detected as Next.js, no settings needed).
2. Add environment variables for the contact form (see `.env.example`). Without them the form
   shows a "send via WhatsApp" fallback.
   - Telegram: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`
   - or email via Resend: `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`
3. Project → Settings → Domains: add `ofistm.com` and `www.ofistm.com`, then set the DNS records
   Vercel shows at your domain registrar. `www` redirects to the bare domain.
