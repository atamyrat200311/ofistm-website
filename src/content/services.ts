// Language-independent service data. Text lives in src/i18n/dicts/*.ts under `services`.
export type ServiceId = 'web' | 'mobile' | 'erp' | 'data' | 'custom' | 'design';

export type Service = {
  id: ServiceId;
  slug: string;
  num: string;
  weeks: number;
  // Gantt bars in weeks; labels come from the dictionary in the same order.
  phases: { start: number; span: number; solid?: boolean }[];
  caseSlug: string;
};

export const services: Service[] = [
  { id: 'web', slug: 'web-development', num: '01', weeks: 8, caseSlug: 'heating-plumbing-ecommerce', phases: [{ start: 0, span: 1 }, { start: 1, span: 2 }, { start: 2, span: 4 }, { start: 4, span: 3 }, { start: 7, span: 1, solid: true }] },
  { id: 'mobile', slug: 'mobile-apps', num: '02', weeks: 12, caseSlug: 'beverage-sales-rep-app', phases: [{ start: 0, span: 2 }, { start: 1, span: 3 }, { start: 3, span: 7 }, { start: 9, span: 2 }, { start: 11, span: 1, solid: true }] },
  { id: 'erp', slug: 'erp-consulting', num: '03', weeks: 10, caseSlug: 'manufacturer-order-management', phases: [{ start: 0, span: 2 }, { start: 1, span: 3 }, { start: 2, span: 6 }, { start: 6, span: 3 }, { start: 9, span: 1, solid: true }] },
  { id: 'data', slug: 'data-reporting', num: '04', weeks: 6, caseSlug: 'trading-power-bi-reporting', phases: [{ start: 0, span: 1 }, { start: 1, span: 2 }, { start: 2, span: 3 }, { start: 4, span: 1 }, { start: 5, span: 1, solid: true }] },
  { id: 'custom', slug: 'custom-software', num: '05', weeks: 12, caseSlug: 'cotton-export-documents', phases: [{ start: 0, span: 2 }, { start: 1, span: 3 }, { start: 3, span: 7 }, { start: 7, span: 4 }, { start: 11, span: 1, solid: true }] },
  { id: 'design', slug: 'ui-ux-design', num: '06', weeks: 4, caseSlug: 'grocery-loyalty-app', phases: [{ start: 0, span: 1 }, { start: 0.5, span: 1.5 }, { start: 1.5, span: 2 }, { start: 3, span: 0.75 }, { start: 3.6, span: 0.4, solid: true }] }
];

export const getService = (slug: string) => services.find(s => s.slug === slug);
