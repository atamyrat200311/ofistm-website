import type { Metadata } from 'next';
import WorkGrid from '@/components/WorkGrid';
import { CtaBand } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Selected projects: e-commerce, mobile apps, Logo ERP integrations and Power BI reporting for manufacturers, distributors and retailers.',
  alternates: { canonical: '/work' }
};

export default function WorkPage() {
  return (
    <>
      <section className="clip">
        <div className="gridbg" style={{ WebkitMaskImage: 'radial-gradient(60% 80% at 85% 10%,#000 10%,transparent 75%)', maskImage: 'radial-gradient(60% 80% at 85% 10%,#000 10%,transparent 75%)' }} />
        <div className="wrap rel" style={{ paddingTop: 'clamp(56px,8vw,120px)', paddingBottom: 'clamp(40px,5vw,64px)', display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div data-reveal="0" className="eyebrow"><span className="n">Work</span><span className="ln" /><span>Selected projects, 2019–2026</span></div>
          <div data-reveal="80" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '32px 48px' }}>
            <h1 className="h1" style={{ flex: '1 1 560px', maxWidth: 900 }}>Software that runs real businesses.</h1>
            <p className="lead" style={{ flex: '0 1 380px' }}>Some clients are under NDA, so we describe them by industry. Ask us for references in your sector.</p>
          </div>
        </div>
      </section>
      <WorkGrid />
      <CtaBand title="Your project could be next." text="Tell us about your business and the system you need. We'll share relevant work from your industry on the first call." />
    </>
  );
}
