export interface MediaItem {
  id: string; // YouTube video id
  title: string;
  lang: 'EN' | 'ES';
  topic: string;
}

/** Order and titles carried over from workplacelegal.ca/media. */
export const media: MediaItem[] = [
  { id: 'beqP7DMwIVQ', title: 'LAWGICALLY Ep. 20 — Derechos del Trabajador (Pt. 2)', lang: 'ES', topic: 'Employee rights' },
  { id: '670pDrl8t4Q', title: 'Professional Requalification: The Overlap of Employment and Immigration Law', lang: 'ES', topic: 'Immigration' },
  { id: 'hn78Ce1EbeA', title: 'Combat Bias, Racism, and Discrimination at the Workplace', lang: 'EN', topic: 'Discrimination' },
  { id: 'sp9WRGPEEGY', title: 'Discriminación en el trabajo', lang: 'ES', topic: 'Discrimination' },
  { id: 'SxEPvUtrQLs', title: 'Anti-Racism in the Workplace', lang: 'EN', topic: 'Discrimination' },
  { id: '5Mf1nfx4iX8', title: 'Preventing Outbreaks in High Traffic Workplaces', lang: 'EN', topic: 'Health & safety' },
  { id: 'AapzxgmilSU', title: 'COVID-19 & Emergency Employment Leaves', lang: 'EN', topic: 'Leaves' },
  { id: 'iNVNuW9jXO0', title: 'The Test for Discrimination Under the Human Rights Code', lang: 'EN', topic: 'Human rights' },
  { id: 'EwkIc7mWMcQ', title: 'Business Operations Reduction & Workers’ Hours', lang: 'EN', topic: 'Employment standards' },
  { id: 'jZ06EqXn5RM', title: 'Workplace Rights and Responsibilities amid COVID-19', lang: 'EN', topic: 'Health & safety' },
];

export const memberships = [
  { name: 'Law Society of Ontario', href: 'https://lso.ca/', logo: '/brand/members/lso.png' },
  { name: 'Ontario Bar Association', href: 'https://www.oba.org/Home', logo: '/brand/members/oba.png' },
  { name: 'Canadian Bar Association', href: 'https://www.cba.org/Home', logo: '/brand/members/cba.png' },
  { name: 'Canadian Hispanic Bar Association', href: 'https://chbalegal.com/', logo: '/brand/members/chba.png' },
  { name: 'TRIEC', href: 'http://triec.ca/', logo: '/brand/members/triec.png' },
  { name: 'Internationally Trained Lawyers Network', href: 'https://itln.ca/', logo: '/brand/members/itln.png' },
  { name: 'CAEZ', href: 'https://www.facebook.com/caezulia/', logo: '/brand/members/caez.png' },
] as const;
