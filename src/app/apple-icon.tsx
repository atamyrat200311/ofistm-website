import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0A0B0D' }}>
        <svg width="104" height="104" viewBox="0 0 364 364" fill="#fff"><path d="M0 0H364V162H296V68H70V162H0Z" /><path d="M0 202H70V296H296V202H364V364H0Z" /></svg>
      </div>
    ),
    size
  );
}
