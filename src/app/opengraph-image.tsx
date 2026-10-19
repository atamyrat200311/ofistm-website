import { ImageResponse } from 'next/og';

export const alt = 'ofis.tm — We build the software your business runs on';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 80, background: '#0A0B0D', color: '#F3F4F6', backgroundImage: 'radial-gradient(circle at 85% 10%, rgba(46,91,255,.35), transparent 55%)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <svg width="56" height="56" viewBox="0 0 364 364" fill="#fff"><path d="M0 0H364V162H296V68H70V162H0Z" /><path d="M0 202H70V296H296V202H364V364H0Z" /></svg>
          <span style={{ fontSize: 36, fontWeight: 700, letterSpacing: -1 }}>ofis.tm</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', fontSize: 84, fontWeight: 700, lineHeight: 1, letterSpacing: -4, maxWidth: 1000 }}>
            We build the software your business&nbsp;<span style={{ color: '#7D9BFF' }}>runs on.</span>
          </div>
          <div style={{ fontSize: 28, color: '#A6ABB5' }}>Web · Mobile · Logo ERP · Data & Reporting · Ashgabat</div>
        </div>
      </div>
    ),
    size
  );
}
