'use client';

import { useEffect, useState } from 'react';

// Ashgabat is UTC+5 all year.
function ashgabat(now: number) {
  return new Date(now + 5 * 3600 * 1000);
}

function useNow(interval: number) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const iv = setInterval(() => setNow(Date.now()), interval);
    return () => clearInterval(iv);
  }, [interval]);
  return now;
}

export function LocalTime() {
  const now = useNow(30000);
  if (now === null) return <>--:--</>;
  const d = ashgabat(now);
  return <>{String(d.getUTCHours()).padStart(2, '0')}:{String(d.getUTCMinutes()).padStart(2, '0')}</>;
}

export function OpenNow() {
  const now = useNow(60000);
  if (now === null) return <span className="open-now">&nbsp;</span>;
  const d = ashgabat(now);
  const day = d.getUTCDay(), m = d.getUTCHours() * 60 + d.getUTCMinutes();
  const open = (day >= 1 && day <= 5 && m >= 540 && m < 1080) || (day === 6 && m >= 600 && m < 840);
  return (
    <span className={'open-now' + (open ? ' on' : '')}><i />{open ? 'Open now in Ashgabat' : 'Closed now. Messages are answered next working day.'}</span>
  );
}
