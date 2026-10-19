export type Kind = 'web' | 'mobile' | 'erp' | 'data';

export type Result = { value: string; unit: string; accent?: boolean; text: string };

export type Project = {
  slug: string;
  kind: Kind;
  industry: string;
  cats: Kind[];
  title: string;
  shortTitle: string;
  result: string;
  label: string;
  intro: string;
  client: string;
  services: string;
  duration: string;
  location: string;
  challengeTitle: string;
  challenge: string;
  pains: string[];
  solutionTitle: string;
  solution: string;
  blocks: { tag: string; title: string; text: string; key?: boolean }[];
  stack: string[];
  keyTech: string;
  resultsTitle: string;
  results: Result[];
  shots: [string, string, string];
  band: { title: string; text: string };
};

export const kindLabel: Record<Kind, string> = { web: 'Web', mobile: 'Mobile', erp: 'ERP', data: 'Data' };

export const projects: Project[] = [
  {
    slug: 'heating-plumbing-ecommerce',
    kind: 'web',
    industry: 'Distribution',
    cats: ['web', 'erp'],
    title: 'E-commerce platform for a heating & plumbing distributor',
    shortTitle: 'E-commerce for a heating & plumbing distributor',
    result: 'Online orders grew to 38% of sales within a year.',
    label: 'Distribution · Web + ERP',
    intro: 'A B2B and retail online store with 6,000 products, dealer price lists and live stock from Logo Tiger. Customers order online instead of calling the sales desk.',
    client: 'Heating & plumbing distributor (NDA)',
    services: 'Web development, ERP integration, UI/UX',
    duration: '12 weeks · 2024',
    location: 'Ashgabat, Turkmenistan',
    challengeTitle: 'A catalog nobody could see.',
    challenge: 'The client stocks thousands of boilers, radiators and fittings across two warehouses. Customers and installers had to call or visit to check prices and availability, and the sales desk spent most of the day answering the same questions.',
    pains: ['Prices and stock only visible inside Logo Tiger', 'Sales staff tied up with availability calls', 'Different dealer prices kept in separate Excel files', 'No way to order outside office hours'],
    solutionTitle: 'An online store that reads straight from the ERP.',
    solution: 'We built an online store for retail customers and a dealer area with personal price lists. Products, prices and stock come from Logo Tiger automatically, and every order goes back into Logo as a sales order.',
    blocks: [
      { tag: '01 · Web', title: 'Online store', text: 'Fast catalog with filters by brand, power and size, cart and delivery options.' },
      { tag: '02 · B2B', title: 'Dealer area', text: 'Dealers see their own prices and credit limits and reorder in a few clicks.' },
      { tag: '03 · Integration', title: 'Logo Tiger sync', text: 'Products, prices, stock and orders exchanged with Logo every few minutes.', key: true },
      { tag: '04 · Admin', title: 'Content panel', text: 'Marketing edits banners, pages and product descriptions in three languages.' }
    ],
    stack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Logo Tiger objects', 'Docker'],
    keyTech: 'Logo Tiger objects',
    resultsTitle: 'One year after launch.',
    results: [
      { value: '38', unit: '%', accent: true, text: 'Share of total sales now ordered online.' },
      { value: '−60', unit: '%', accent: true, text: 'Availability calls to the sales desk.' },
      { value: '24/7', unit: '', text: 'Dealers place orders outside office hours.' }
    ],
    shots: ['Online store: catalog with live stock', 'Dealer area: personal price list', 'Admin panel: orders synced with Logo'],
    band: { title: 'Want customers to order online?', text: 'We can connect your catalog to Logo Tiger or Logo Unity. Tell us how customers order today.' }
  },
  {
    slug: 'manufacturer-order-management',
    kind: 'erp',
    industry: 'Manufacturing',
    cats: ['erp'],
    title: 'Order management & ERP sync for a manufacturer',
    shortTitle: 'Order management & ERP sync',
    result: 'Order entry time cut from 20 minutes to 4.',
    label: 'Manufacturing · Custom software + ERP',
    intro: 'Three sales channels, one order system, and a two-way connection to Logo Tiger. Orders no longer get retyped, and dealers see their status without calling.',
    client: 'Building materials manufacturer (NDA)',
    services: 'Custom software, ERP integration, UI/UX',
    duration: '14 weeks · 2025',
    location: 'Ashgabat, Turkmenistan',
    challengeTitle: 'Every order was typed twice.',
    challenge: 'The client sells through dealers, direct corporate sales and a showroom. Each channel took orders its own way: phone calls, Excel files, WhatsApp messages. Sales staff then retyped every order into Logo Tiger.',
    pains: ['About 20 minutes of manual entry per order', 'Pricing errors on roughly one order in 25', 'No live view of stock reserved for confirmed orders', 'Dealers phoning every day to ask about status'],
    solutionTitle: 'One order system, connected both ways.',
    solution: 'We built one order management system for all three channels and connected it to Logo Tiger in both directions. Orders, prices, stock and statuses stay in sync without anyone retyping them.',
    blocks: [
      { tag: '01 · Web', title: 'Dealer portal', text: 'Dealers place and track orders with their own price lists and credit limits.' },
      { tag: '02 · Internal', title: 'Sales desk', text: 'Corporate and showroom orders in one screen, with approval steps for discounts.' },
      { tag: '03 · Integration', title: 'Logo Tiger sync', text: 'Two-way sync of orders, customers, prices, stock and invoices, with retry and audit logs.', key: true },
      { tag: '04 · Notifications', title: 'Status updates', text: 'Dealers get a Telegram message when an order is confirmed, shipped and invoiced.' }
    ],
    stack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'SQL Server', 'Logo Tiger objects', 'Telegram Bot API', 'Docker'],
    keyTech: 'Logo Tiger objects',
    resultsTitle: 'Three months after launch.',
    results: [
      { value: '20→4', unit: ' min', text: 'Time to enter an order, across all three channels.' },
      { value: '−96', unit: '%', accent: true, text: 'Pricing errors, now that price lists come straight from Logo.' },
      { value: '−70', unit: '%', accent: true, text: 'Status calls from dealers, replaced by Telegram updates.' }
    ],
    shots: ['Dealer portal: orders with live status from Logo Tiger', 'Sales desk: one screen for corporate and showroom orders', 'Sync monitor: every exchange with Logo Tiger, logged'],
    band: { title: 'Retyping orders into your ERP?', text: 'We can connect your channels to Logo Tiger or Logo Unity. Tell us how orders reach you today.' }
  },
  {
    slug: 'trading-power-bi-reporting',
    kind: 'data',
    industry: 'Trading',
    cats: ['data'],
    title: 'Power BI reporting suite for a trading group',
    shortTitle: 'Power BI reporting suite',
    result: 'Month-end reporting in 1 day instead of 6.',
    label: 'Trading · Data & Reporting',
    intro: 'Four companies, one data warehouse and a set of Power BI dashboards that refresh every night. Management sees sales, margin and receivables the morning after month-end.',
    client: 'Trading group, four companies (NDA)',
    services: 'Data & reporting, ERP consulting',
    duration: '8 weeks · 2025',
    location: 'Ashgabat, Turkmenistan',
    challengeTitle: 'Six days of Excel every month.',
    challenge: 'Each company in the group ran its own Logo database. At month-end, accountants exported data, cleaned it in Excel and merged it by hand. Management saw the numbers almost a week late, and the totals rarely matched.',
    pains: ['Six working days to close management reports', 'Different margin formulas in each company', 'No group-wide view of receivables', 'Reports out of date as soon as they were sent'],
    solutionTitle: 'One data model for the whole group.',
    solution: 'We combined the four Logo databases into one SQL data warehouse with agreed KPI definitions, then built Power BI dashboards for owners, finance and sales managers, each seeing only what their role needs.',
    blocks: [
      { tag: '01 · Data', title: 'SQL warehouse', text: 'Nightly loads from four Logo databases into one consistent model.', key: true },
      { tag: '02 · Finance', title: 'KPI catalog', text: 'Revenue, margin and DSO defined once with the CFO and used everywhere.' },
      { tag: '03 · BI', title: 'Dashboards', text: 'Group, company and salesperson views, on desktop and phone.' },
      { tag: '04 · Automation', title: 'Scheduled reports', text: 'Management pack e-mailed as PDF on the first working day of each month.' }
    ],
    stack: ['SQL Server', 'Power BI', 'Python', 'Logo Tiger database', 'Azure Data Factory'],
    keyTech: 'Power BI',
    resultsTitle: 'After the first quarter.',
    results: [
      { value: '6→1', unit: ' days', text: 'Time to close monthly management reporting.' },
      { value: '4', unit: ' in 1', text: 'Companies reported in one consistent model.' },
      { value: '−9', unit: ' d', accent: true, text: 'Average days sales outstanding, after receivables became visible.' }
    ],
    shots: ['Group dashboard: revenue, margin and cash by company', 'Receivables: ageing by customer and salesperson', 'Mobile view: daily sales for owners'],
    band: { title: 'Waiting a week for month-end numbers?', text: 'Tell us which systems hold your data. We will suggest a first dashboard within one working day.' }
  },
  {
    slug: 'beverage-sales-rep-app',
    kind: 'mobile',
    industry: 'Distribution',
    cats: ['mobile', 'erp'],
    title: 'Sales rep app for a beverage distributor',
    shortTitle: 'Sales rep app',
    result: 'Orders placed on site, with live stock from Logo Tiger.',
    label: 'Distribution · Mobile + ERP',
    intro: 'A Flutter app for 40 sales reps visiting shops every day. Orders go straight into Logo Tiger, with live stock, customer debts and offline mode for areas with poor signal.',
    client: 'Beverage distributor (NDA)',
    services: 'Mobile apps, ERP integration, UI/UX',
    duration: '13 weeks · 2024',
    location: 'Turkmenistan, 5 regions',
    challengeTitle: 'Orders on paper, stock unknown.',
    challenge: 'Sales reps wrote orders in notebooks and phoned them to the office at the end of the day. They could not see stock or customer debt during the visit, so orders were often cut or delayed after the fact.',
    pains: ['Orders phoned in at the end of each day', 'Out-of-stock items promised to shops', 'Customer debts unknown during visits', 'No record of which shops were actually visited'],
    solutionTitle: 'The office in every sales rep’s pocket.',
    solution: 'We built an Android and iOS app that shows each rep their route, the shop’s debt and live stock. Orders are sent to Logo Tiger instantly, or stored offline and synced once the phone is back online.',
    blocks: [
      { tag: '01 · Mobile', title: 'Route & visits', text: 'Daily route with check-in by location, so managers see real visits.' },
      { tag: '02 · Sales', title: 'Order taking', text: 'Price lists, promotions and live stock while standing in the shop.' },
      { tag: '03 · Integration', title: 'Logo Tiger sync', text: 'Orders, customers, debts and stock synced in the background, even after offline work.', key: true },
      { tag: '04 · Management', title: 'Supervisor panel', text: 'Visits, orders and plan progress per rep, updated in real time.' }
    ],
    stack: ['Flutter', 'Dart', 'Go', 'PostgreSQL', 'Logo Tiger objects', 'Firebase Messaging'],
    keyTech: 'Flutter',
    resultsTitle: 'Six months after launch.',
    results: [
      { value: '0', unit: ' calls', text: 'End-of-day order calls to the office.' },
      { value: '+18', unit: '%', accent: true, text: 'Average order size, with stock and promotions visible on site.' },
      { value: '40', unit: ' reps', text: 'Using the app daily across five regions.' }
    ],
    shots: ['Order screen: live stock and promotions', 'Route view: today’s shops and visit status', 'Supervisor panel: plan vs. actual by rep'],
    band: { title: 'Sales team still on paper?', text: 'Tell us how your reps take orders today. We reply within one working day with a first plan.' }
  },
  {
    slug: 'building-materials-website',
    kind: 'web',
    industry: 'Manufacturing',
    cats: ['web'],
    title: 'Corporate website for a building materials producer',
    shortTitle: 'Corporate website',
    result: 'Dealer enquiries up 2.4× in the first six months.',
    label: 'Manufacturing · Web',
    intro: 'A new corporate website in Türkmen, Russian and English, with a product catalog, technical documents and a dealer enquiry form that lands directly with the sales team.',
    client: 'Building materials producer (NDA)',
    services: 'Web development, UI/UX',
    duration: '6 weeks · 2025',
    location: 'Ashgabat, Turkmenistan',
    challengeTitle: 'A website that said nothing.',
    challenge: 'The old site was a few static pages with outdated photos. Architects and builders could not find product specifications, and dealer enquiries arrived by phone to whoever happened to answer.',
    pains: ['No product specifications or certificates online', 'Only one language', 'Enquiries lost between departments', 'Marketing unable to update content'],
    solutionTitle: 'A catalog builders actually use.',
    solution: 'We designed a clear, fast website around the product catalog, with downloadable specifications and certificates, three languages and a CMS so marketing can update content without a developer.',
    blocks: [
      { tag: '01 · Web', title: 'Product catalog', text: 'Products with specifications, photos and downloadable certificates.' },
      { tag: '02 · Content', title: 'Three languages', text: 'Türkmen, Russian and English, edited from one admin panel.' },
      { tag: '03 · Sales', title: 'Dealer enquiries', text: 'Enquiry form routed to the right sales manager by region.', key: true },
      { tag: '04 · SEO', title: 'Search visibility', text: 'Fast pages, structured data and analytics from day one.' }
    ],
    stack: ['Next.js', 'TypeScript', 'Headless CMS', 'PostgreSQL', 'Vercel'],
    keyTech: 'Next.js',
    resultsTitle: 'Six months after launch.',
    results: [
      { value: '2.4', unit: '×', accent: true, text: 'Dealer enquiries compared with the old website.' },
      { value: '3', unit: ' langs', text: 'Türkmen, Russian and English, managed by marketing.' },
      { value: '<1', unit: ' s', text: 'Typical page load on mobile.' }
    ],
    shots: ['Home page: product families and projects', 'Product page: specifications and certificates', 'Admin panel: content in three languages'],
    band: { title: 'Is your website working for sales?', text: 'Tell us who your customers are and what they need to find. We reply within one working day.' }
  },
  {
    slug: 'cotton-export-documents',
    kind: 'erp',
    industry: 'Trading',
    cats: ['erp'],
    title: 'Export document generator for a cotton trader',
    shortTitle: 'Export document generator',
    result: 'Invoice, packing list and certificates drafted in one click.',
    label: 'Trading · Custom software + ERP',
    intro: 'A tool that turns one shipment record into the full export document set, using data already in Logo Unity. No more copying the same numbers into ten Word files.',
    client: 'Cotton export company (NDA)',
    services: 'Custom software, ERP integration',
    duration: '9 weeks · 2024',
    location: 'Ashgabat, Turkmenistan',
    challengeTitle: 'Ten documents, the same numbers.',
    challenge: 'For every shipment, the export team prepared invoices, packing lists, specifications and certificates in Word and Excel, retyping weights, prices and buyer details each time. One typo could hold a shipment at the border.',
    pains: ['Half a day of paperwork per shipment', 'Mismatched weights between documents', 'Templates scattered across personal folders', 'No link between documents and accounting'],
    solutionTitle: 'One shipment, one click, every document.',
    solution: 'We built a shipment register connected to Logo Unity. The team enters a shipment once, and the system generates every document in the buyer’s required format and language, ready to sign.',
    blocks: [
      { tag: '01 · Records', title: 'Shipment register', text: 'Contracts, lots, weights and buyers in one place, linked to Logo Unity.' },
      { tag: '02 · Documents', title: 'Document generator', text: 'Invoice, packing list, specification and certificates from one record.', key: true },
      { tag: '03 · Control', title: 'Approval steps', text: 'Documents checked and approved before they leave the company.' },
      { tag: '04 · Archive', title: 'Searchable archive', text: 'Every document stored with its shipment, found in seconds.' }
    ],
    stack: ['React', 'TypeScript', 'FastAPI', 'SQL Server', 'Logo Unity objects', 'Docker'],
    keyTech: 'Logo Unity objects',
    resultsTitle: 'After the first season.',
    results: [
      { value: '4h→10', unit: ' min', text: 'Time to prepare a full export document set.' },
      { value: '0', unit: ' errors', text: 'Weight mismatches between documents since launch.' },
      { value: '100', unit: '%', accent: true, text: 'Shipments documented and archived in one system.' }
    ],
    shots: ['Shipment register: contracts and lots', 'Document set: generated in one click', 'Archive: every document by shipment'],
    band: { title: 'Paperwork slowing your shipments?', text: 'Tell us which documents you prepare and where the data lives. We reply within one working day.' }
  },
  {
    slug: 'grocery-loyalty-app',
    kind: 'mobile',
    industry: 'Retail',
    cats: ['mobile'],
    title: 'Loyalty app for a grocery chain',
    shortTitle: 'Loyalty app',
    result: '42,000 members in the first six months.',
    label: 'Retail · Mobile',
    intro: 'A loyalty app for a grocery chain: digital card at the till, points, personal offers and push notifications, connected to the stores’ point-of-sale system.',
    client: 'Grocery chain (NDA)',
    services: 'Mobile apps, UI/UX',
    duration: '14 weeks · 2025',
    location: 'Ashgabat, Turkmenistan',
    challengeTitle: 'Plastic cards and no data.',
    challenge: 'The chain used plastic discount cards with no customer profile behind them. Marketing could not reach regular customers or see what they bought, and promotions went to everyone at once.',
    pains: ['Plastic cards lost or forgotten', 'No customer contact details', 'Same promotions for every customer', 'No measure of whether promotions worked'],
    solutionTitle: 'A loyalty program in every phone.',
    solution: 'We designed and built an iOS and Android app with a digital card, points and personal offers, connected to the point-of-sale system so purchases are recorded automatically.',
    blocks: [
      { tag: '01 · Mobile', title: 'Digital card', text: 'QR card scanned at the till, with points added instantly.' },
      { tag: '02 · Marketing', title: 'Personal offers', text: 'Offers based on purchase history, sent by push notification.', key: true },
      { tag: '03 · Integration', title: 'POS connection', text: 'Purchases and points synced with every till in the chain.' },
      { tag: '04 · Admin', title: 'Campaign panel', text: 'Marketing creates offers and sees their results by store.' }
    ],
    stack: ['Flutter', 'Dart', 'Go', 'PostgreSQL', 'Firebase Messaging', 'Docker'],
    keyTech: 'Flutter',
    resultsTitle: 'Six months after launch.',
    results: [
      { value: '42k', unit: '', text: 'Members registered in the first six months.' },
      { value: '+12', unit: '%', accent: true, text: 'Average basket for app members vs. non-members.' },
      { value: '4.8', unit: ' ★', text: 'Average rating in the App Store and Google Play.' }
    ],
    shots: ['Home screen: card, points and offers', 'Offer detail: personal promotion', 'Campaign panel: results by store'],
    band: { title: 'Want to know your regular customers?', text: 'Tell us about your stores and your current loyalty program. We reply within one working day.' }
  },
  {
    slug: 'pharmacy-inventory-dashboards',
    kind: 'data',
    industry: 'Retail',
    cats: ['data'],
    title: 'Inventory and margin dashboards for a pharmacy chain',
    shortTitle: 'Inventory & margin dashboards',
    result: 'Stock-outs down 31% over two quarters.',
    label: 'Retail · Data & Reporting',
    intro: 'Daily dashboards for stock, turnover and margin across every pharmacy in the chain, with automatic reorder suggestions for purchasing.',
    client: 'Pharmacy chain (NDA)',
    services: 'Data & reporting',
    duration: '7 weeks · 2025',
    location: 'Turkmenistan, 3 cities',
    challengeTitle: 'Too much of one thing, none of another.',
    challenge: 'Each pharmacy ordered stock on its own judgement. Some products expired on the shelf while others ran out, and purchasing had no single view of stock and sales across the chain.',
    pains: ['Frequent stock-outs of fast-moving products', 'Expired stock written off every month', 'No chain-wide view of margin by product', 'Reorders based on guesswork'],
    solutionTitle: 'Stock and margin, visible every morning.',
    solution: 'We built a data model on top of the chain’s ERP and point-of-sale data, with Power BI dashboards for purchasing, branch managers and owners, and a daily reorder suggestion for each pharmacy.',
    blocks: [
      { tag: '01 · Data', title: 'Daily data model', text: 'Sales and stock from every branch loaded into one SQL model each night.' },
      { tag: '02 · BI', title: 'Stock dashboards', text: 'Stock, cover days and expiry risk by branch and product.' },
      { tag: '03 · Purchasing', title: 'Reorder suggestions', text: 'Suggested order quantities based on sales speed and cover targets.', key: true },
      { tag: '04 · Finance', title: 'Margin view', text: 'Margin by product group, supplier and branch for management.' }
    ],
    stack: ['PostgreSQL', 'Power BI', 'Python', 'Logo Tiger database'],
    keyTech: 'Power BI',
    resultsTitle: 'Two quarters after launch.',
    results: [
      { value: '−31', unit: '%', accent: true, text: 'Stock-outs of fast-moving products.' },
      { value: '−22', unit: '%', accent: true, text: 'Write-offs from expired stock.' },
      { value: '1', unit: ' view', text: 'Stock and margin for every branch, every morning.' }
    ],
    shots: ['Stock dashboard: cover days by branch', 'Reorder suggestions for purchasing', 'Margin by product group and supplier'],
    band: { title: 'Do you know what is on every shelf?', text: 'Tell us how you track stock today. We will suggest a first dashboard within one working day.' }
  }
];

export const getProject = (slug: string) => projects.find(p => p.slug === slug);
