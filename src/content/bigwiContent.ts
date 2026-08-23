// Single source of truth for copy pulled from the BIGWI HOUSE
// Corporate & Capability Profile (Aug 1, 2026). Update this file when the
// source document changes — pages consume it, they don't hardcode copy.

export interface Service {
  title: string
  description: string
}

export const services: Service[] = [
  {
    title: 'Enterprise Software Development',
    description: 'Custom systems that automate operations and scale with the organization.',
  },
  {
    title: 'Web & Mobile Applications',
    description: 'Customer- and staff-facing apps built for real-world connectivity conditions.',
  },
  {
    title: 'AI & Machine Learning Solutions',
    description: 'Applied models tuned to local data, not generic global datasets.',
  },
  {
    title: 'Data Analytics & Business Intelligence',
    description: 'Dashboards and pipelines that turn raw data into decisions.',
  },
  {
    title: 'Digital Transformation Consulting',
    description: 'Strategy and roadmaps for modernizing legacy operations.',
  },
  {
    title: 'Cloud Solutions',
    description: 'Resilient, cost-aware infrastructure and migration support.',
  },
  {
    title: 'UI/UX Design',
    description: 'Interfaces designed around how people actually work.',
  },
  {
    title: 'Branding & Digital Marketing',
    description: 'Identity and visibility for organizations competing online.',
  },
  {
    title: 'SaaS Product Development',
    description: 'Multi-tenant products built for recurring revenue.',
  },
  {
    title: 'Technical Support & Maintenance',
    description: 'Long-term reliability after the initial launch.',
  },
]

export const problems: string[] = [
  'Poor or outdated websites',
  'Weak brand identity',
  'Low online visibility',
  'Limited digital marketing knowledge',
  'Poor customer engagement online',
  'Inconsistent social media presence',
  'Lack of professional content',
  'Difficulty adopting modern digital technologies',
]

export const competitiveAdvantage: string[] = [
  'Business-first consulting backed by in-house engineering',
  'End-to-end delivery, from strategy through implementation',
  'Multidisciplinary teams under one roof',
  'Focus on measurable outcomes, not just software',
  'Long-term client support after launch',
]

export const targetClients: string[] = [
  'Government institutions',
  'NGOs',
  'Development partners',
  'Financial institutions',
  'Healthcare organizations',
  'Educational institutions',
  'SMEs',
  'Large enterprises',
  'Startups',
]

export const vision =
  "To become East Africa's leading innovation and engineering division, delivering technology solutions that create measurable business value."

export const mission =
  'To transform business challenges into scalable digital solutions through innovation, engineering excellence, data-driven decision making, and long-term partnerships.'

export interface OrgTier {
  label: string
  items: string[]
}

export const orgStructure: { parent: OrgTier; child: OrgTier } = {
  parent: {
    label: 'DataSphere Consulting Ltd.',
    items: [
      'Business Strategy & Management Consulting',
      'Data Analytics & Business Intelligence',
      'Artificial Intelligence & Machine Learning',
      'Research, Monitoring & Evaluation',
      'Digital Transformation Advisory',
      'Capacity Building & Professional Training',
    ],
  },
  child: {
    label: 'Digital Innovation & Product Development — BIGWI HOUSE',
    items: [
      'Enterprise Software Development',
      'Mobile Application Development',
      'Web Platforms',
      'Cloud Solutions',
      'AI Product Development',
      'UI/UX Design',
      'Branding & Creative Design',
      'Digital Marketing',
      'Product Engineering',
      'SaaS Products',
      'Technical Support & Maintenance',
    ],
  },
}

export interface Phase {
  name: string
  items: string[]
}

export const growthPhases: Phase[] = [
  {
    name: 'Foundation',
    items: [
      'Build a strong portfolio',
      'Acquire local clients',
      'Establish strategic partnerships',
      'Develop standard service packages',
    ],
  },
  {
    name: 'Expansion',
    items: [
      'Expand across Rwanda',
      'Hire specialized staff',
      'Launch advanced digital marketing services',
      'Build recurring subscription revenue',
    ],
  },
  {
    name: 'Regional Growth',
    items: [
      'Expand across East Africa',
      'Serve international clients remotely',
      'Introduce SaaS and AI-powered digital products',
      'Build regional partnerships',
    ],
  },
]
