import 'server-only';
import type { Locale } from './config';
import en from './dicts/en';
import ru from './dicts/ru';
import tk from './dicts/tk';
import tr from './dicts/tr';

const dicts = { en, ru, tk, tr };

export const getDict = (lang: Locale) => dicts[lang];
