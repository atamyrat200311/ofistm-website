'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

// not-found can't receive params, so the few strings live here per language.
const T = {
  en: ['Page not found', "This page doesn't exist.", 'The link may be old or mistyped. Start from the home page or tell us what you were looking for.', 'Back to home', 'Contact us'],
  ru: ['Страница не найдена', 'Такой страницы нет.', 'Возможно, ссылка устарела или в ней опечатка. Начните с главной или напишите нам, что вы искали.', 'На главную', 'Связаться с нами'],
  tk: ['Sahypa tapylmady', 'Beýle sahypa ýok.', 'Salgy könelen ýa-da ýalňyş ýazylan bolmagy mümkin. Baş sahypadan başlaň ýa-da näme gözleýändigiňizi bize ýazyň.', 'Baş sahypa', 'Habarlaşmak'],
  tr: ['Sayfa bulunamadı', 'Böyle bir sayfa yok.', 'Bağlantı eski ya da hatalı yazılmış olabilir. Ana sayfadan başlayın ya da ne aradığınızı bize yazın.', 'Ana sayfaya dön', 'Bize ulaşın']
};

export default function NotFound() {
  const params = useParams<{ lang?: string }>();
  const lang = params?.lang && params.lang in T ? (params.lang as keyof typeof T) : 'en';
  const [eyebrow, title, text, home, contact] = T[lang];
  return (
    <section className="sec">
      <div className="wrap py-xl nf">
        <div className="eyebrow"><span className="n">404</span><span className="ln" /><span>{eyebrow}</span></div>
        <h1 className="h1">{title}</h1>
        <p className="sub" style={{ maxWidth: 520 }}>{text}</p>
        <div className="btn-row">
          <Link href={`/${lang}`} className="btn btn-acc">{home} <span>→</span></Link>
          <Link href={`/${lang}/contact`} className="btn btn-line">{contact}</Link>
        </div>
      </div>
    </section>
  );
}
