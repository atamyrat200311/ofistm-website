'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { localeInfo, locales, type Locale } from '@/i18n/config';
import type { Dict } from '@/i18n/dicts/en';

const PATHS = ['/services', '/work', '#process', '/about', '/contact'];

function activeIndex(rest: string) {
  if (rest.startsWith('/services')) return 0;
  if (rest.startsWith('/work')) return 1;
  if (rest.startsWith('/about')) return 3;
  if (rest.startsWith('/contact')) return 4;
  return -1;
}

const remember = (l: Locale) => {
  document.cookie = `NEXT_LOCALE=${l};path=/;max-age=31536000;samesite=lax`;
};

export default function SiteHeader({ lang, t }: { lang: Locale; t: Dict['nav'] }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  // Path without the locale prefix, so the language switch keeps the current page.
  const rest = path.replace(/^\/[^/]+/, '');
  const active = activeIndex(rest);
  const href = (p: string) => `/${lang}${p}`;

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => { setOpen(false); }, [path]);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1100px)');
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('ofis-theme', next); } catch {}
  };
  const themeLabel = theme === 'dark' ? t.light : t.dark;

  return (
    <div className={'hdr-wrap' + (open ? ' menu-open' : '')}>
      <header className="hdr">
        <div className="wrap hdr-in">
          <Link href={`/${lang}`} aria-label={t.home} className="hdr-logo">
            <img src="/brand/wordmark-white.png" alt="ofis.tm" width={90} height={32} className="logo" />
          </Link>
          <nav className="hdr-nav" aria-label="Main">
            {t.items.map((label, i) => (
              <Link key={PATHS[i]} href={href(PATHS[i])} className={i === active ? 'on' : undefined} aria-current={i === active ? 'page' : undefined}>{label}</Link>
            ))}
          </nav>
          <div className="hdr-tools">
            <div role="group" aria-label={t.language} className="langs">
              {locales.map(l => (
                <Link key={l} href={`/${l}${rest}`} hrefLang={l} title={localeInfo[l].name} aria-pressed={lang === l} onClick={() => remember(l)}>{localeInfo[l].code}</Link>
              ))}
            </div>
            <button type="button" className="theme-btn" onClick={toggleTheme} aria-label={t.theme} title={themeLabel}>
              <span className="theme-ico" />
            </button>
            <Link href={`/${lang}/contact`} className="hdr-cta">{t.cta}<span>→</span></Link>
          </div>
          <button type="button" className="menu-btn" onClick={() => setOpen(o => !o)} aria-expanded={open} aria-controls="mobile-menu">
            <span>{open ? t.close : t.menu}</span>
            <span className="burger"><span /><span /></span>
          </button>
        </div>
      </header>
      {open && (
        <div className="mmenu" id="mobile-menu">
          <nav aria-label="Mobile">
            {t.items.map((label, i) => (
              <Link key={PATHS[i]} href={href(PATHS[i])} onClick={() => setOpen(false)}>
                <span className="n">0{i + 1}</span>
                <span className="t">{label}</span>
              </Link>
            ))}
          </nav>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div className="label">{t.language}</div>
            <div className="mlangs">
              {locales.map(l => (
                <Link key={l} href={`/${l}${rest}`} hrefLang={l} className="toggle" aria-pressed={lang === l} onClick={() => remember(l)}>{localeInfo[l].name}</Link>
              ))}
            </div>
          </div>
          <div className="mmenu-foot">
            <button type="button" onClick={toggleTheme}><span className="theme-ico" />{themeLabel}</button>
            <Link href={`/${lang}/contact`} onClick={() => setOpen(false)}>{t.cta} →</Link>
          </div>
        </div>
      )}
    </div>
  );
}
