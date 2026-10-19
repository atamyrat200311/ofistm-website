'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

// Fades [data-reveal] elements in as they scroll into view; the value is a delay in ms.
export default function Reveal() {
  const path = usePathname();

  useEffect(() => {
    if (!document.documentElement.classList.contains('rv')) return;
    const io = new IntersectionObserver(entries => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        const el = e.target as HTMLElement;
        el.style.transitionDelay = (Number(el.dataset.reveal) || 0) + 'ms';
        el.classList.add('in');
        io.unobserve(el);
      }
    }, { rootMargin: '0px 0px -6% 0px' });
    const raf = requestAnimationFrame(() => {
      document.querySelectorAll('[data-reveal]:not(.in)').forEach(el => io.observe(el));
    });
    return () => { cancelAnimationFrame(raf); io.disconnect(); };
  }, [path]);

  return null;
}
