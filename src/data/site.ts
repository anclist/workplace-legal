export const site = {
  name: 'Workplace Legal',
  tagline: 'Build wealthier & healthier workplaces.',
  description:
    'Workplace Legal provides independent, conduct-based workplace investigations, employment law advisory, training and representation for employers in Ontario. Led by lawyer and investigator Antonio F. Urdaneta.',
  url: 'https://www.workplacelegal.ca',
  lawyer: 'Antonio F. Urdaneta',
  phone: { display: '(647) 381-5323', href: 'tel:+1-647-381-5323' },
  fax: { display: '(647) 695-6993', href: 'tel:+1-647-695-6993' },
  email: 'antonio@workplacelegal.ca',
  address: {
    line1: '2000 - 2 Sheppard Ave E',
    city: 'North York',
    region: 'ON',
    postal: 'M2N 5Y7',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=2+Sheppard+Ave+E+North+York+ON+M2N+5Y7',
    embedUrl: 'https://www.google.com/maps?q=2+Sheppard+Ave+E,+North+York,+ON+M2N+5Y7&output=embed',
  },
  bookingUrl: 'https://calendly.com/workplacelegal',
  clientLoginUrl: 'https://client.cosmolex.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/antonio-f-urdaneta-92299a32/',
    twitter: 'https://twitter.com/antophranco',
  },
  languages: ['English', 'Español'],
} as const;

export const nav = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/blog' },
  { label: 'Media', href: '/media' },
  { label: 'Podcast', href: '/podcast' },
  { label: 'Contact', href: '/contact' },
] as const;

/** Allegation types that trigger a duty to investigate — used on Home & Services. */
export const triggers = [
  { icon: 'shield', title: 'Harassment', text: 'Workplace and personal harassment complaints, including by or against leadership.' },
  { icon: 'alert', title: 'Sexual harassment', text: 'Sensitive, trauma-informed fact-finding that protects every party’s dignity.' },
  { icon: 'scale', title: 'Discrimination', text: 'Allegations grounded in the Human Rights Code and related protected grounds.' },
  { icon: 'flame', title: 'Workplace violence', text: 'Threats, incidents and reprisals under occupational health & safety obligations.' },
  { icon: 'doc', title: 'Policy breaches', text: 'Failure to comply with company policies, by-laws, codes of conduct and theft.' },
  { icon: 'handshake', title: 'Collective agreements', text: 'Conduct issues in unionized settings, campuses, councils and institutions.' },
] as const;

export const valueAdded = [
  'Competent, independent investigator',
  'Personalized service',
  'Experienced in employment and labour relations',
  'Flexibility and adaptability',
  'Employment lawyer — licensed in Ontario',
  'Witness interviews available in Spanish',
] as const;

export const process = [
  { title: 'Confidential intake', text: 'A call to understand the allegations, the parties and the policies in play. We confirm scope and independence.' },
  { title: 'Investigation plan', text: 'Terms of reference, timeline and budget — report-based or data-seeking, sized to your situation.' },
  { title: 'Interviews & evidence', text: 'Procedurally fair, trauma-informed interviews with complainants, respondents and witnesses.' },
  { title: 'Findings & report', text: 'A defensible written report with findings on a balance of probabilities, ready for decision-makers.' },
] as const;

export const faqs = [
  {
    q: 'When is an employer required to investigate?',
    a: 'In Ontario, employers must investigate incidents and complaints of workplace harassment and violence under the Occupational Health and Safety Act. You should also investigate when you become aware of discrimination, theft, or failure to comply with policies, by-laws and collective agreements.',
  },
  {
    q: 'Why use an external investigator instead of HR?',
    a: 'An independent investigator removes perceived bias, protects internal relationships, and produces findings that are more defensible if the matter proceeds to a tribunal, arbitration or court.',
  },
  {
    q: 'How long does a workplace investigation take?',
    a: 'It depends on the number of allegations, parties and witnesses. Scope, timeline and budget are agreed up-front in the investigation plan so there are no surprises.',
  },
  {
    q: 'Can interviews be conducted in Spanish?',
    a: 'Yes. Witness and party interviews can be conducted in Spanish, avoiding the cost and nuance lost through interpreters.',
  },
  {
    q: 'Do you work with campuses, councils and institutions?',
    a: 'Yes. Workplace Legal works with businesses, post-secondary campuses, municipal bodies and other institutions, including public-sector investigations.',
  },
  {
    q: 'Is my first message confidential?',
    a: 'Contacting us through this site does not create a lawyer-client relationship, and email is not guaranteed to be confidential. If your matter is sensitive, please call us directly.',
  },
] as const;
