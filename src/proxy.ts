import { NextResponse, type NextRequest } from 'next/server';
import { defaultLocale, isLocale, locales, type Locale } from './i18n/config';

// Saved choice first, then the browser's languages, then the default.
function pickLocale(req: NextRequest): Locale {
  const saved = req.cookies.get('NEXT_LOCALE')?.value;
  if (saved && isLocale(saved)) return saved;
  const accepted = (req.headers.get('accept-language') || '')
    .split(',')
    .map(part => part.split(';')[0].trim().toLowerCase().split('-')[0]);
  for (const code of accepted) {
    if (isLocale(code)) return code;
  }
  return defaultLocale;
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (locales.some(l => pathname === `/${l}` || pathname.startsWith(`/${l}/`))) return;
  const url = req.nextUrl.clone();
  url.pathname = `/${pickLocale(req)}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip API routes, Next internals and files with an extension (icons, images, sitemap.xml…).
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
