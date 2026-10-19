'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';

export type Lang = 'tk' | 'ru' | 'en';

export const LANGS: [Lang, string, string][] = [
  ['tk', 'TM', 'Türkmen'],
  ['ru', 'RU', 'Русский'],
  ['en', 'EN', 'English']
];

const htmlLang: Record<Lang, string> = { tk: 'tk', ru: 'ru', en: 'en' };

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: 'en', setLang: () => {} });

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, set] = useState<Lang>('en');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('ofis-lang') as Lang | null;
      if (saved && saved in htmlLang) set(saved);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = htmlLang[lang];
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    set(l);
    try { localStorage.setItem('ofis-lang', l); } catch {}
  }, []);

  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);

export const headerText = {
  en: { nav: ['Services', 'Work', 'Process', 'About', 'Contact'], cta: 'Start a project', menu: 'Menu', close: 'Close', dark: 'Dark mode', light: 'Light mode', language: 'Language' },
  ru: { nav: ['Услуги', 'Работы', 'Процесс', 'О нас', 'Контакты'], cta: 'Начать проект', menu: 'Меню', close: 'Закрыть', dark: 'Тёмная тема', light: 'Светлая тема', language: 'Язык' },
  tk: { nav: ['Hyzmatlar', 'Işlerimiz', 'Iş tertibi', 'Biz barada', 'Habarlaşmak'], cta: 'Taslama başlaň', menu: 'Menýu', close: 'Ýap', dark: 'Garaňky', light: 'Ýagty', language: 'Dil' }
};

export const heroText = {
  en: { eyebrow: 'Software agency · Ashgabat', status: 'Booking projects for Q1 2027', h1a: 'We build the software your business', h1b: 'runs on.', sub: 'Websites and apps, plus the ERP, data and reporting layer behind them. Designed, built and supported by one team.', cta1: 'Start a project', cta2: 'See our work', cue: 'Scroll to explore' },
  ru: { eyebrow: 'Разработка ПО · Ашхабад', status: 'Берём проекты на I квартал 2027', h1a: 'Мы создаём программы, на которых', h1b: 'работает ваш бизнес.', sub: 'Сайты и приложения, а также ERP, данные и отчётность, которые стоят за ними. Проектируем, разрабатываем и поддерживаем одной командой.', cta1: 'Начать проект', cta2: 'Наши работы', cue: 'Листайте вниз' },
  tk: { eyebrow: 'Programma üpjünçiligi · Aşgabat', status: '2027-nji ýylyň I çärýegi üçin taslamalar', h1a: 'Biz işiňiziň daýanýan', h1b: 'programmalaryny döredýäris.', sub: 'Saýtlar we programmalar, şeýle hem olaryň aňyrsyndaky ERP, maglumat we hasabat ulgamlary. Bir topar bilen taslaýarys, döredýäris we goldaýarys.', cta1: 'Taslama başlaň', cta2: 'Işlerimiz', cue: 'Aşak geçiň' }
};
