export interface Service {
  slug: string;
  icon: string;
  title: string;
  summary: string;
  body: string[];
  options?: { title: string; text: string }[];
  outcomes: string[];
  cta: string;
}

/** Copy carried over from workplacelegal.ca/services, lightly tightened. */
export const services: Service[] = [
  {
    slug: 'workplace-investigation',
    icon: 'search',
    title: 'Workplace & Institutional Investigations',
    summary:
      'Independent, conduct-based investigations into harassment, discrimination, violence and policy breaches.',
    body: [
      'The business must launch workplace investigations when it receives allegations or becomes aware of workplace violence, harassment, discrimination, accidents or incidents. It should launch investigations when it becomes aware of theft and failure to comply with company policies, by-laws and collective agreements.',
    ],
    options: [
      {
        title: 'Report-based investigations',
        text: 'For organizations with a workplace legal infrastructure in place and a healthy, wealthy work climate.',
      },
      {
        title: 'Data-seeking investigations',
        text: 'For toxic work climates with no workplace legal infrastructure in place.',
      },
    ],
    outcomes: ['Defensible findings', 'Procedural fairness', 'Interviews in Spanish available'],
    cta: 'Discuss an investigation',
  },
  {
    slug: 'learning',
    icon: 'book',
    title: 'Learning: Litecamp & Bootcamp',
    summary:
      'Creative, engaging workplace-law training that helps leaders make legally-sound decisions — quickly.',
    body: [
      "Employment relations laws are designed to manage expectations. Expectations are well-managed with a better understanding of these laws. Unfortunately, litigation and contractual principles influence decision-making when managing these expectations. Let's change the perspective and reduce legal costs together.",
      'Workplace Legal Litecamp & Bootcamp are training programs for business leaders, entrepreneurs, managers, supervisors and HR professionals, designed to improve legal information retention and mitigate workplace conflicts, lawsuits and claims.',
    ],
    options: [
      {
        title: 'Litecamp',
        text: 'Pressing needs, limited legal budget? Litecamp finds the pain points and lets you pick from modular, scalable training sessions.',
      },
      {
        title: 'Bootcamp',
        text: 'A budget-friendly solution: priority modules packaged into one day of valuable legal information delivery.',
      },
    ],
    outcomes: ['For leaders, managers & HR', 'Modular & scalable', 'Prevent claims early'],
    cta: 'Plan a training session',
  },
  {
    slug: 'business-transformation',
    icon: 'compass',
    title: 'Business Transformation Advisory',
    summary:
      'Coaching-style legal advisory for new, growing and reorganizing businesses — scaled to your budget.',
    body: [
      'Whether you are a new business, a growing one, or going through a reorganization, get coaching-styled legal advisory services. Scale them up or down according to the project and your legal budget.',
    ],
    options: [
      {
        title: 'Entrepreneurs',
        text: 'Growing exposure to employees and independent contractors? Tackle mitigation early with a scalable workplace legal infrastructure.',
      },
      {
        title: 'Small & family-owned businesses',
        text: 'Manage employee expectations accurately through growth — and keep morale high.',
      },
      {
        title: 'Larger organizations',
        text: 'Transformation brings turnover, hiring, investigations, terminations, constructive dismissal and insubordination risk. Know what to do.',
      },
    ],
    outcomes: ['Prevention-first', 'Scales with you', 'Predictable legal spend'],
    cta: 'Talk through your plans',
  },
  {
    slug: 'dispute-resolution',
    icon: 'scale',
    title: 'Dispute Resolution & Representation',
    summary:
      'When a claim lands, experienced representation before Ontario and federal courts, tribunals and boards.',
    body: [
      'Businesses allocate tons of effort to prevent claims, applications and lawsuits. Experienced leaders know the business is always exposed to a forced legal budget — at any time — because of one employee’s unmet expectation.',
      'Lawyer Antonio F. Urdaneta represents workplaces before:',
    ],
    options: [
      { title: 'Courts', text: 'Superior Court of Justice, including Small Claims Court.' },
      { title: 'Human rights', text: 'Human Rights Tribunal of Ontario and the Canadian Human Rights Commission.' },
      { title: 'Labour', text: 'Labour arbitrators, Ontario Labour Relations Board and federal employee & labour programs.' },
      { title: 'Safety & pay', text: 'WSIB and its Appeals Tribunal, Pay Equity Board, mediators and arbitrators.' },
    ],
    outcomes: ['Courts & tribunals', 'Mediation & arbitration', 'Employer-side'],
    cta: 'Get help with a claim',
  },
];
