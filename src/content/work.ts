// Language-independent project data. Text lives in src/i18n/dicts/*.ts under `projects`.
export type Kind = 'web' | 'mobile' | 'erp' | 'data';

export type ProjectSlug =
  | 'heating-plumbing-ecommerce'
  | 'manufacturer-order-management'
  | 'trading-power-bi-reporting'
  | 'beverage-sales-rep-app'
  | 'building-materials-website'
  | 'cotton-export-documents'
  | 'grocery-loyalty-app'
  | 'pharmacy-inventory-dashboards';

export type Project = {
  slug: ProjectSlug;
  kind: Kind;
  cats: Kind[];
  stack: string[];
  keyTech: string;
  keyBlock: number;
};

export const projects: Project[] = [
  { slug: 'heating-plumbing-ecommerce', kind: 'web', cats: ['web', 'erp'], stack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Logo Tiger objects', 'Docker'], keyTech: 'Logo Tiger objects', keyBlock: 2 },
  { slug: 'manufacturer-order-management', kind: 'erp', cats: ['erp'], stack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'SQL Server', 'Logo Tiger objects', 'Telegram Bot API', 'Docker'], keyTech: 'Logo Tiger objects', keyBlock: 2 },
  { slug: 'trading-power-bi-reporting', kind: 'data', cats: ['data'], stack: ['SQL Server', 'Power BI', 'Python', 'Logo Tiger database', 'Azure Data Factory'], keyTech: 'Power BI', keyBlock: 0 },
  { slug: 'beverage-sales-rep-app', kind: 'mobile', cats: ['mobile', 'erp'], stack: ['Flutter', 'Dart', 'Go', 'PostgreSQL', 'Logo Tiger objects', 'Firebase Messaging'], keyTech: 'Flutter', keyBlock: 2 },
  { slug: 'building-materials-website', kind: 'web', cats: ['web'], stack: ['Next.js', 'TypeScript', 'Headless CMS', 'PostgreSQL', 'Vercel'], keyTech: 'Next.js', keyBlock: 2 },
  { slug: 'cotton-export-documents', kind: 'erp', cats: ['erp'], stack: ['React', 'TypeScript', 'FastAPI', 'SQL Server', 'Logo Unity objects', 'Docker'], keyTech: 'Logo Unity objects', keyBlock: 1 },
  { slug: 'grocery-loyalty-app', kind: 'mobile', cats: ['mobile'], stack: ['Flutter', 'Dart', 'Go', 'PostgreSQL', 'Firebase Messaging', 'Docker'], keyTech: 'Flutter', keyBlock: 1 },
  { slug: 'pharmacy-inventory-dashboards', kind: 'data', cats: ['data'], stack: ['PostgreSQL', 'Power BI', 'Python', 'Logo Tiger database'], keyTech: 'Power BI', keyBlock: 2 }
];

export const getProject = (slug: string) => projects.find(p => p.slug === slug);
