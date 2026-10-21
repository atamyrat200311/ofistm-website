'use client';

import { useEffect, useState } from 'react';
import { site } from '@/lib/site';

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

export function OpenNow({ open: openText, closed }: { open: string; closed: string }) {
  const now = useNow(60000);
  if (now === null) return <span className="open-now">&nbsp;</span>;
  const d = ashgabat(now);
  const day = d.getUTCDay(), m = d.getUTCHours() * 60 + d.getUTCMinutes();
  const [from, to] = day === 0 || day === 6 ? site.hours.weekend : site.hours.weekday;
  const open = m >= from && m < to;
  return (
    <span className={'open-now' + (open ? ' on' : '')}><i />{open ? openText : closed}</span>
  );
}
