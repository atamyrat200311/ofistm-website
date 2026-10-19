'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LANGS, headerText, useLang } from './Lang';

const HREFS = ['/services', '/work', '/#process', '/about', '/contact'];

function activeIndex(path: string) {
  if (path.startsWith('/services')) return 0;
  if (path.startsWith('/work')) return 1;
  if (path.startsWith('/about')) return 3;
  if (path.startsWith('/contact')) return 4;
  return -1;
}

export default function SiteHeader() {
  const path = usePathname();
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const s = headerText[lang];
  const active = activeIndex(path);

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
    const t = theme === 'dark' ? 'light' : 'dark';
    setTheme(t);
    document.documentElement.dataset.theme = t;
    try { localStorage.setItem('ofis-theme', t); } catch {}
  };
  const themeLabel = theme === 'dark' ? s.light : s.dark;

  return (
    <div className={'hdr-wrap' + (open ? ' menu-open' : '')}>
      <header className="hdr">
        <div className="wrap hdr-in">
          <Link href="/" aria-label="ofis.tm home" className="hdr-logo">
            <img src="/brand/wordmark-white.png" alt="ofis.tm" width={90} height={32} className="logo" />
          </Link>
          <nav className="hdr-nav" aria-label="Main">
            {s.nav.map((label, i) => (
              <Link key={HREFS[i]} href={HREFS[i]} className={i === active ? 'on' : undefined} aria-current={i === active ? 'page' : undefined}>{label}</Link>
            ))}
          </nav>
          <div className="hdr-tools">
            <div role="group" aria-label={s.language} className="langs">
              {LANGS.map(([c, code, full]) => (
                <button key={c} type="button" title={full} aria-pressed={lang === c} onClick={() => setLang(c)}>{code}</button>
              ))}
            </div>
            <button type="button" className="theme-btn" onClick={toggleTheme} aria-label="Toggle colour theme" title={themeLabel}>
              <span className="theme-ico" />
            </button>
            <Link href="/contact" className="hdr-cta">{s.cta}<span>→</span></Link>
          </div>
          <button type="button" className="menu-btn" onClick={() => setOpen(o => !o)} aria-expanded={open} aria-controls="mobile-menu">
            <span>{open ? s.close : s.menu}</span>
            <span className="burger"><span /><span /></span>
          </button>
        </div>
      </header>
      {open && (
        <div className="mmenu" id="mobile-menu">
          <nav aria-label="Mobile">
            {s.nav.map((label, i) => (
              <Link key={HREFS[i]} href={HREFS[i]} onClick={() => setOpen(false)}>
                <span className="n">0{i + 1}</span>
                <span className="t">{label}</span>
              </Link>
            ))}
          </nav>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div className="label">{s.language}</div>
            <div className="mlangs">
              {LANGS.map(([c, , full]) => (
                <button key={c} type="button" className="toggle" aria-pressed={lang === c} onClick={() => setLang(c)}>{full}</button>
              ))}
            </div>
          </div>
          <div className="mmenu-foot">
            <button type="button" onClick={toggleTheme}><span className="theme-ico" />{themeLabel}</button>
            <Link href="/contact" onClick={() => setOpen(false)}>{s.cta} →</Link>
          </div>
        </div>
      )}
    </div>
  );
}
