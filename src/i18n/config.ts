export const locales = ['tk', 'ru', 'en', 'tr'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const isLocale = (v: string): v is Locale => (locales as readonly string[]).includes(v);

// Code shown in the switcher, full name, Open Graph locale.
export const localeInfo: Record<Locale, { code: string; name: string; og: string }> = {
  tk: { code: 'TM', name: 'Türkmen', og: 'tk_TM' },
  ru: { code: 'RU', name: 'Русский', og: 'ru_RU' },
  en: { code: 'EN', name: 'English', og: 'en_US' },
  tr: { code: 'TR', name: 'Türkçe', og: 'tr_TR' }
};

// Canonical + hreflang alternates for a path without the locale prefix ('' for home).
export function alternates(lang: Locale, path: string) {
  return {
    canonical: `/${lang}${path}`,
    languages: { ...Object.fromEntries(locales.map(l => [l, `/${l}${path}`])), 'x-default': `/${defaultLocale}${path}` }
  };
}
