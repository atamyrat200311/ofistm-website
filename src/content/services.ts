export type Phase = { label: string; start: number; span: number; solid?: boolean };

export type Service = {
  id: string;
  slug: string;
  num: string;
  title: string;
  menuTitle: string;
  short: string;
  tags: string[];
  desc: string;
  time: string;
  best: string;
  items: string[];
  hero: string;
  cta: string;
  facts: [string, string][];
  whatTitle: string;
  what: [string, string][];
  whoTitle: string;
  who: [string, string][];
  deliverables: string[];
  timelineTitle: string;
  timelineText: string;
  weeks: number;
  phases: Phase[];
  caseSlug: string;
  band: { title: string; text: string };
};

export const services: Service[] = [
  {
    id: 'web',
    slug: 'web-development',
    num: '01',
    title: 'Web Development',
    menuTitle: 'Web Development',
    short: 'Corporate sites, online stores and the admin panels your team uses every day.',
    tags: ['Corporate sites', 'E-commerce', 'Admin panels'],
    desc: 'Fast, clear websites and online stores, plus the admin panels your staff use to run them. Connected to your ERP, so prices, stock and orders stay in sync.',
    time: '3–12 weeks',
    best: 'Distributors, retailers, B2B suppliers',
    items: ['Corporate websites', 'E-commerce with online payments', 'Admin panels and CMS', 'Catalog and stock synced with ERP'],
    hero: 'Websites and online stores that load fast, rank well and stay in sync with your ERP. Your team edits content and manages orders without calling a developer.',
    cta: 'Discuss your website',
    facts: [['Typical timeline', '3–12 weeks'], ['Pricing', 'Fixed price per stage'], ['Team', 'Designer, developer, project lead'], ['After launch', 'Monthly support plan']],
    whatTitle: 'A website that works as hard as your sales team.',
    what: [
      ['Corporate websites', 'Clear structure, fast pages and content your team can update in three languages.'],
      ['Online stores', 'Catalog, cart, online payments and delivery options, built around how you actually sell.'],
      ['Admin panels', 'Order lists, customer records and content editing in one place, with roles for each team.'],
      ['ERP sync', 'Prices, stock and orders exchanged with Logo Tiger or Logo Unity automatically.']
    ],
    whoTitle: 'Companies that sell more than they can type up.',
    who: [
      ['Distributors & wholesalers', 'A B2B catalog with dealer price lists, stock levels and online ordering.'],
      ['Retailers', 'An online store connected to the shop floor, the warehouse and the till.'],
      ['Manufacturers', 'A corporate site that turns visitors into dealer and project enquiries.']
    ],
    deliverables: ['Sitemap and content plan', 'Designed and tested page templates', 'Website or store, live on your domain', 'Admin panel with user roles', 'ERP and payment integrations', 'Analytics, SEO setup and handover guide'],
    timelineTitle: 'Live in about eight weeks.',
    timelineText: 'An online store with ERP sync. A corporate website takes three to six weeks; large B2B portals up to twelve.',
    weeks: 8,
    phases: [
      { label: 'Discovery & structure', start: 0, span: 1 },
      { label: 'Design', start: 1, span: 2 },
      { label: 'Development', start: 2, span: 4 },
      { label: 'ERP & payments', start: 4, span: 3 },
      { label: 'Launch & support', start: 7, span: 1, solid: true }
    ],
    caseSlug: 'heating-plumbing-ecommerce',
    band: { title: 'Ready for a website that sells?', text: 'Tell us what you sell and how orders reach you today. We reply within one working day with a first plan.' }
  },
  {
    id: 'mobile',
    slug: 'mobile-apps',
    num: '02',
    title: 'Mobile Apps',
    menuTitle: 'Mobile Apps',
    short: 'iOS and Android apps from one Flutter codebase, connected to the systems you already run.',
    tags: ['iOS', 'Android', 'Flutter'],
    desc: 'iOS and Android apps built in Flutter from one codebase. For customers, field sales teams and warehouse staff.',
    time: '8–16 weeks',
    best: 'Retail chains, field sales, logistics',
    items: ['Customer and loyalty apps', 'Sales rep and field apps', 'Offline mode with background sync', 'App Store and Google Play release'],
    hero: 'One Flutter codebase for iOS and Android, connected to your ERP and back office. Apps your customers keep and your field team relies on every day.',
    cta: 'Discuss your app',
    facts: [['Typical timeline', '8–16 weeks'], ['Pricing', 'Fixed price per stage'], ['Team', 'Designer, Flutter developers, backend developer'], ['After launch', 'Monthly support plan']],
    whatTitle: 'Apps that keep working when the signal drops.',
    what: [
      ['Customer apps', 'Catalog, orders, loyalty points and push notifications in your brand.'],
      ['Field & sales apps', 'Sales reps take orders on site with live prices and stock from your ERP.'],
      ['Offline-first', 'Work continues without internet and syncs in the background once back online.'],
      ['Store release', 'App Store and Google Play publishing, updates and crash monitoring.']
    ],
    whoTitle: 'Teams that work away from a desk.',
    who: [
      ['Retail chains', 'Loyalty, personal offers and order history for repeat customers.'],
      ['Distributors', 'Sales rep apps with routes, orders, payments and live stock.'],
      ['Logistics & warehouses', 'Scanning, picking and delivery confirmation on any phone.']
    ],
    deliverables: ['User flows and clickable prototype', 'iOS and Android apps from one codebase', 'Backend API and admin panel', 'ERP integration with background sync', 'App Store and Google Play release', 'Crash reporting and usage analytics'],
    timelineTitle: 'In the stores in about twelve weeks.',
    timelineText: 'A field sales app with ERP sync. Simple customer apps take eight weeks; complex multi-role apps up to sixteen.',
    weeks: 12,
    phases: [
      { label: 'Discovery & flows', start: 0, span: 2 },
      { label: 'Design & prototype', start: 1, span: 3 },
      { label: 'Development', start: 3, span: 7 },
      { label: 'Testing & release', start: 9, span: 2 },
      { label: 'Launch & support', start: 11, span: 1, solid: true }
    ],
    caseSlug: 'beverage-sales-rep-app',
    band: { title: 'Have an app idea or a team on the road?', text: 'Tell us who will use the app and what they need to do. We reply within one working day with questions and a rough scope.' }
  },
  {
    id: 'erp',
    slug: 'erp-consulting',
    num: '03',
    title: 'ERP Consulting & Integration',
    menuTitle: 'ERP Consulting',
    short: 'Logo Tiger and Logo Unity setup, customization, and integrations with your website, warehouse and banks.',
    tags: ['Logo Tiger', 'Logo Unity', 'Integrations'],
    desc: 'Logo Tiger and Logo Unity implemented and adjusted to your processes, then connected to your website, apps, banks and warehouse.',
    time: '4–12 weeks',
    best: 'Manufacturers, distributors, trading',
    items: ['Setup and configuration', 'Custom fields, forms and reports', 'Integrations via Logo objects and REST', 'Data migration and staff training'],
    hero: 'Logo Tiger and Logo Unity, set up to match how your company works and connected to everything else you run. Fewer spreadsheets, no double entry, numbers you can trust.',
    cta: 'Discuss your ERP',
    facts: [['Typical timeline', '4–12 weeks'], ['Pricing', 'Fixed price per stage'], ['Team', 'ERP consultant, developer, analyst'], ['After launch', 'Monthly support plan']],
    whatTitle: 'Your ERP, configured for your processes. Not the other way around.',
    what: [
      ['Implementation', 'Install and configure Logo Tiger or Logo Unity: chart of accounts, warehouses, price lists, user roles.'],
      ['Customization', 'Custom fields, forms, approval flows and reports, so the system matches how each department works.'],
      ['Integrations', 'Connect Logo to your online store, mobile apps, banks, scales, barcode scanners and Excel uploads.'],
      ['Migration & training', 'Move data from old systems or spreadsheets, then train each department on its part of the system.']
    ],
    whoTitle: 'Companies that have outgrown spreadsheets.',
    who: [
      ['Manufacturers', 'Production orders, bills of materials and costing in Logo, connected to the shop floor and to sales.'],
      ['Distributors & wholesalers', 'Price lists, stock across several warehouses and sales rep orders flowing into one ledger.'],
      ['Trading & export companies', 'Multi-currency deals, contracts and export documents tied directly to accounting.']
    ],
    deliverables: ['Map of your current and target workflows', 'Configured Logo Tiger or Unity environment', 'Custom reports and print forms', 'Integration services with monitoring and logs', 'Migrated master data and opening balances', 'User guides and training for each role'],
    timelineTitle: 'Live in about ten weeks.',
    timelineText: 'A mid-size implementation with two integrations. Smaller setups take four weeks; complex multi-company rollouts up to twelve.',
    weeks: 10,
    phases: [
      { label: 'Audit & discovery', start: 0, span: 2 },
      { label: 'Configuration', start: 1, span: 3 },
      { label: 'Integrations & reports', start: 2, span: 6 },
      { label: 'Migration & training', start: 6, span: 3 },
      { label: 'Go-live & support', start: 9, span: 1, solid: true }
    ],
    caseSlug: 'manufacturer-order-management',
    band: { title: 'Make Logo work the way your company works.', text: "Tell us which version you run and what hurts today. We'll suggest a first step within one working day." }
  },
  {
    id: 'data',
    slug: 'data-reporting',
    num: '04',
    title: 'Data & Reporting',
    menuTitle: 'Data & Reporting',
    short: 'SQL and Power BI dashboards that give management the numbers without manual Excel work.',
    tags: ['SQL', 'Power BI', 'Management reports'],
    desc: 'One source of truth for management. We model your data in SQL and build Power BI dashboards that refresh on their own.',
    time: '3–8 weeks',
    best: 'Owners, CFOs, operations leads',
    items: ['Data warehouse on SQL Server or PostgreSQL', 'Power BI dashboards', 'Automated management reports', 'KPI definitions agreed with finance'],
    hero: 'Sales, stock, margin and cash in one place, refreshed automatically from your ERP and other systems. Management stops waiting for Excel files at month-end.',
    cta: 'Discuss your reports',
    facts: [['Typical timeline', '3–8 weeks'], ['Pricing', 'Fixed price per stage'], ['Team', 'BI developer, data engineer, analyst'], ['After launch', 'Monthly support plan']],
    whatTitle: 'Numbers management trusts, without the spreadsheet marathon.',
    what: [
      ['Data model', 'Sales, stock, finance and operations data combined in a SQL warehouse with clear definitions.'],
      ['Dashboards', 'Power BI reports for owners, finance and department heads, on desktop and phone.'],
      ['Automation', 'Scheduled refreshes and e-mailed reports, so nobody exports and pastes data by hand.'],
      ['KPI definitions', 'Metrics agreed with finance, so every report shows the same margin and the same revenue.']
    ],
    whoTitle: 'Leaders who need answers before the month ends.',
    who: [
      ['Owners & CEOs', 'One dashboard for sales, margin, receivables and cash across every company in the group.'],
      ['Finance teams', 'Month-end reporting built from ERP data automatically, reconciled with the books.'],
      ['Operations leads', 'Stock, turnover and stock-outs by warehouse, branch and product group.']
    ],
    deliverables: ['KPI catalog agreed with finance', 'SQL data warehouse and refresh jobs', 'Power BI dashboards and reports', 'Row-level security by role or branch', 'Automated report distribution', 'Documentation and training for report owners'],
    timelineTitle: 'First dashboards in about six weeks.',
    timelineText: 'A management reporting suite on top of Logo ERP. A single dashboard takes three weeks; group-wide reporting up to eight.',
    weeks: 6,
    phases: [
      { label: 'KPIs & data audit', start: 0, span: 1 },
      { label: 'Data model', start: 1, span: 2 },
      { label: 'Dashboards', start: 2, span: 3 },
      { label: 'Validation & training', start: 4, span: 1 },
      { label: 'Go-live & support', start: 5, span: 1, solid: true }
    ],
    caseSlug: 'trading-power-bi-reporting',
    band: { title: 'Still building reports in Excel?', text: 'Tell us which numbers you need and where they live today. We reply within one working day with a first step.' }
  },
  {
    id: 'custom',
    slug: 'custom-software',
    num: '05',
    title: 'Custom Business Software',
    menuTitle: 'Custom Software',
    short: 'Order management, export and trade documents, and internal tools built around how you work.',
    tags: ['Order management', 'Trade documents', 'Internal tools'],
    desc: 'Tools for the work no standard product covers: order management, export and trade documents, approvals and internal portals.',
    time: '6–20 weeks',
    best: 'Exporters, manufacturers, holdings',
    items: ['Order management systems', 'Export and trade document generators', 'Approval workflows', 'Internal portals and tools'],
    hero: 'When no standard product fits, we build the tool your team actually needs, connected to your ERP and designed around the way your company works.',
    cta: 'Discuss your system',
    facts: [['Typical timeline', '6–20 weeks'], ['Pricing', 'Fixed price per stage'], ['Team', 'Analyst, designer, developers'], ['After launch', 'Monthly support plan']],
    whatTitle: 'Software for the work no off-the-shelf product covers.',
    what: [
      ['Order management', 'One system for orders from every channel, with approvals, reservations and statuses.'],
      ['Trade documents', 'Invoices, packing lists, contracts and certificates generated from one record.'],
      ['Approval workflows', 'Discounts, payments and purchases approved in a few clicks, with a full audit trail.'],
      ['Internal portals', 'Dashboards, request forms and tools that replace scattered spreadsheets and chats.']
    ],
    whoTitle: 'Companies whose process is their advantage.',
    who: [
      ['Exporters & traders', 'Contracts, shipments and export documents in one place, tied to accounting.'],
      ['Manufacturers', 'Orders, production planning and dealer communication without retyping.'],
      ['Holdings', 'Shared tools and approvals across several companies and departments.']
    ],
    deliverables: ['Process map and requirements', 'Clickable prototype tested with your team', 'Web application with user roles', 'ERP and messenger integrations', 'Source code and technical documentation', 'Training and support plan'],
    timelineTitle: 'First version in about twelve weeks.',
    timelineText: 'An order management system with ERP sync. Small internal tools take six weeks; multi-department systems up to twenty.',
    weeks: 12,
    phases: [
      { label: 'Discovery & process map', start: 0, span: 2 },
      { label: 'Design & prototype', start: 1, span: 3 },
      { label: 'Development sprints', start: 3, span: 7 },
      { label: 'Integration & testing', start: 7, span: 4 },
      { label: 'Launch & support', start: 11, span: 1, solid: true }
    ],
    caseSlug: 'cotton-export-documents',
    band: { title: 'Doing important work in spreadsheets?', text: 'Describe the process that slows your team down. We reply within one working day with questions and a rough scope.' }
  },
  {
    id: 'design',
    slug: 'ui-ux-design',
    num: '06',
    title: 'UI/UX Design',
    menuTitle: 'UI/UX Design',
    short: 'Research, flows and interfaces that staff and customers understand without training.',
    tags: ['Research', 'Prototypes', 'Design systems'],
    desc: 'Research, user flows and interface design, for new products or for systems your team struggles to use today.',
    time: '2–6 weeks',
    best: 'New products, legacy system redesigns',
    items: ['Interviews and process mapping', 'Wireframes and clickable prototypes', 'UI design and design systems', 'Usability testing'],
    hero: 'Interfaces your staff and customers understand without a manual. We research how people work, then design screens that fit, and test them before any code is written.',
    cta: 'Discuss your product',
    facts: [['Typical timeline', '2–6 weeks'], ['Pricing', 'Fixed price per stage'], ['Team', 'Product designer, researcher'], ['After launch', 'Design support for development']],
    whatTitle: 'Design that starts with how people actually work.',
    what: [
      ['Research', 'Interviews and observation with the people who will use the system every day.'],
      ['Flows & wireframes', 'User journeys and screen structure agreed before visual design begins.'],
      ['UI design', 'Clean, consistent screens for web and mobile, in your brand.'],
      ['Testing', 'Clickable prototypes tested with real users, then refined.']
    ],
    whoTitle: 'Products people should enjoy using.',
    who: [
      ['New products', 'From idea to a tested prototype your developers or ours can build.'],
      ['Legacy systems', 'Redesigns for internal tools that staff find slow or confusing.'],
      ['Growing teams', 'A design system so every new screen looks and works the same way.']
    ],
    deliverables: ['Research findings and personas', 'User flows and wireframes', 'High-fidelity UI for all key screens', 'Clickable prototype', 'Design system and component library', 'Usability test report'],
    timelineTitle: 'Tested prototype in about four weeks.',
    timelineText: 'Research and design for a new web product. Small redesigns take two weeks; full design systems up to six.',
    weeks: 4,
    phases: [
      { label: 'Research', start: 0, span: 1 },
      { label: 'Flows & wireframes', start: 0.5, span: 1.5 },
      { label: 'UI design', start: 1.5, span: 2 },
      { label: 'Testing & refinement', start: 3, span: 0.75 },
      { label: 'Handover', start: 3.6, span: 0.4, solid: true }
    ],
    caseSlug: 'grocery-loyalty-app',
    band: { title: 'Is your team fighting its own software?', text: 'Show us the screens that slow people down. We reply within one working day with a first idea.' }
  }
];

export const getService = (slug: string) => services.find(s => s.slug === slug);
