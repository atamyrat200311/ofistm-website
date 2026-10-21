// Single place for contact details and links used across the site.
export const site = {
  name: 'ofis.tm',
  url: 'https://ofistm.com',
  domain: 'ofistm.com',
  phone: { display: '+993 61 35 22 23', tel: '+99361352223' },
  whatsapp: 'https://wa.me/99361352223',
  telegram: { handle: '@ofistm', url: 'https://t.me/ofistm' },
  email: 'hello@ofistm.com',
  instagram: 'https://www.instagram.com/ofis_tm/',
  // Working hours in Ashgabat time (UTC+5), minutes from midnight.
  hours: { weekday: [9 * 60, 18 * 60], weekend: [10 * 60, 18 * 60] },
  // Numbers shown in the About → Team section.
  team: { lead: 1, specialists: 5, disciplines: 6 }
};
