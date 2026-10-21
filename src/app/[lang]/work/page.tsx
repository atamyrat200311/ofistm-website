import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CtaBand } from '@/components/ui';
import WorkGrid from '@/components/WorkGrid';
import { projects } from '@/content/work';
import { alternates, isLocale } from '@/i18n/config';
import { getDict } from '@/i18n';

export async function generateMetadata({ params }: PageProps<'/[lang]/work'>): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDict(lang).meta;
  return { title: t.work, description: t.workDesc, alternates: alternates(lang, '/work') };
}

export default async function WorkPage({ params }: PageProps<'/[lang]/work'>) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDict(lang);
  const w = t.workPage;
  const items = projects.map(p => {
    const pt = t.projects[p.slug];
    return { slug: p.slug, kind: p.kind, cats: p.cats, industry: pt.industry, title: pt.title, result: pt.result };
  });
  return (
    <>
      <section className="clip">
        <div className="gridbg" style={{ WebkitMaskImage: 'radial-gradient(60% 80% at 85% 10%,#000 10%,transparent 75%)', maskImage: 'radial-gradient(60% 80% at 85% 10%,#000 10%,transparent 75%)' }} />
        <div className="wrap rel" style={{ paddingTop: 'clamp(56px,8vw,120px)', paddingBottom: 'clamp(40px,5vw,64px)', display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div data-reveal="0" className="eyebrow"><span className="n">{w.eyebrow}</span><span className="ln" /><span>{w.eyebrow2}</span></div>
          <div data-reveal="80" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '32px 48px' }}>
            <h1 className="h1" style={{ flex: '1 1 560px', maxWidth: 900 }}>{w.title}</h1>
            <p className="lead" style={{ flex: '0 1 380px' }}>{w.text}</p>
          </div>
        </div>
      </section>
      <WorkGrid lang={lang} items={items} tabs={w.tabs} label={w.filter} />
      <CtaBand lang={lang} t={t} title={w.bandTitle} text={w.bandText} />
    </>
  );
}
