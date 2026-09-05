// Single source of truth for DataSphere Consulting Ltd Corporate & Capability Profile

export interface Service {
  id: string
  title: string
  shortDesc: string
  description: string
  category: 'Engineering' | 'Intelligence' | 'Strategy' | 'Design'
  deliverables: string[]
  techHighlights: string[]
  icon: string
}

export const services: Service[] = [
  {
    id: 'enterprise-software',
    title: 'Enterprise Software Development',
    shortDesc: 'Custom systems that automate operations and scale with your organization.',
    description: 'We architect and build fault-tolerant, high-concurrency enterprise platforms designed around complex business workflows, multi-tenant architectures, and strict compliance standards.',
    category: 'Engineering',
    deliverables: ['Custom ERP & CRM systems', 'Workflow automation engines', 'Role-based access & auditing', 'Legacy system modernization'],
    techHighlights: ['Next.js', 'Node.js / Go', 'PostgreSQL', 'Docker / Kubernetes', 'Microservices'],
    icon: 'Layers'
  },
  {
    id: 'web-mobile-apps',
    title: 'Web & Mobile Applications',
    shortDesc: 'Customer- and staff-facing apps built for real-world connectivity conditions.',
    description: 'High-performance web and native mobile applications crafted for seamless user journeys, offline resilience, and rapid cross-platform deployment.',
    category: 'Engineering',
    deliverables: ['iOS & Android mobile apps', 'Progressive Web Apps (PWAs)', 'Responsive customer portals', 'Real-time sync architectures'],
    techHighlights: ['React Native / Flutter', 'TypeScript', 'Tailwind CSS', 'GraphQL', 'Edge Caching'],
    icon: 'Smartphone'
  },
  {
    id: 'ai-ml-solutions',
    title: 'AI & Machine Learning Solutions',
    shortDesc: 'Applied models tuned to local data, not generic global datasets.',
    description: 'Production-ready machine learning pipelines tailored to specific operational contexts, predictive modeling, and intelligent automation.',
    category: 'Intelligence',
    deliverables: ['Custom predictive algorithms', 'Natural Language Processing (NLP)', 'Document intelligence & OCR', 'Recommendation engines'],
    techHighlights: ['Python / PyTorch', 'Scikit-Learn', 'FastAPI', 'Vector Databases', 'LLM Fine-Tuning'],
    icon: 'Cpu'
  },
  {
    id: 'data-analytics-bi',
    title: 'Data Analytics & Business Intelligence',
    shortDesc: 'Dashboards and pipelines that turn raw data into actionable decisions.',
    description: 'End-to-end data engineering, modern data warehouses, ETL pipelines, and interactive executive dashboards delivering real-time clarity across organizational KPIs.',
    category: 'Intelligence',
    deliverables: ['Executive BI dashboards', 'Automated ETL/ELT pipelines', 'Data warehouse architecture', 'Real-time telemetry & alerts'],
    techHighlights: ['PowerBI / Superset', 'dbt', 'PostgreSQL / ClickHouse', 'Apache Spark', 'Snowflake'],
    icon: 'BarChart3'
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation Consulting',
    shortDesc: 'Strategy and roadmaps for modernizing legacy operations.',
    description: 'Strategic advisory that evaluates operational bottlenecks, identifies high-leverage technology investments, and structures phased implementation roadmaps.',
    category: 'Strategy',
    deliverables: ['Digital readiness audits', 'Technology roadmaps', 'Change management frameworks', 'System integration blueprints'],
    techHighlights: ['Enterprise Architecture', 'TOGAF', 'Business Process Modeling', 'Cloud Migration Matrix'],
    icon: 'Workflow'
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions & DevOps',
    shortDesc: 'Resilient, cost-aware infrastructure and migration support.',
    description: 'Secure, cost-optimized cloud architectures engineered for high availability, zero-downtime CI/CD automation, and multi-region disaster recovery.',
    category: 'Engineering',
    deliverables: ['Cloud architecture & migration', 'Automated CI/CD pipelines', 'Infrastructure as Code (IaC)', 'Security & compliance hardening'],
    techHighlights: ['AWS / GCP / Azure', 'Terraform', 'Kubernetes', 'GitHub Actions', 'Cloudflare'],
    icon: 'Cloud'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design & Product Strategy',
    shortDesc: 'Interfaces designed around how people actually work.',
    description: 'Human-centered user experience design, rapid interactive prototyping, and design systems tailored to user mental models and operational speed.',
    category: 'Design',
    deliverables: ['User journey & wireframing', 'High-fidelity design systems', 'Usability testing & audits', 'Interactive design prototypes'],
    techHighlights: ['Figma', 'Design Tokens', 'Accessibility (WCAG 2.1)', 'Prototyping', 'User Research'],
    icon: 'Palette'
  },
  {
    id: 'branding-digital-marketing',
    title: 'Branding & Digital Marketing',
    shortDesc: 'Identity and visibility for organizations competing online.',
    description: 'Strategic visual identities, conversion-focused brand positioning, and performance marketing infrastructure built to establish digital authority.',
    category: 'Design',
    deliverables: ['Corporate brand guidelines', 'Conversion-optimized assets', 'SEO & content strategy', 'Market positioning analysis'],
    techHighlights: ['Brand Systems', 'Technical SEO', 'Performance Analytics', 'Campaign Orchestration'],
    icon: 'Megaphone'
  },
  {
    id: 'saas-product-development',
    title: 'SaaS Product Development',
    shortDesc: 'Multi-tenant products built for recurring revenue.',
    description: 'Full lifecycle software product incubation, tenant isolation, billing engine integrations, self-serve onboarding, and growth telemetry.',
    category: 'Engineering',
    deliverables: ['Multi-tenant SaaS architecture', 'Subscription & billing gateways', 'Usage analytics & metering', 'Admin & customer tenant portals'],
    techHighlights: ['Next.js', 'Stripe / Paypack / MOMO API', 'Supabase / Prisma', 'Redis', 'Webhooks'],
    icon: 'Rocket'
  },
  {
    id: 'technical-support-maintenance',
    title: 'Technical Support & Maintenance',
    shortDesc: 'Long-term reliability and SLA support after initial launch.',
    description: 'Dedicated post-launch SLA support, 24/7 uptime monitoring, security patching, and ongoing feature enhancements to protect tech investments.',
    category: 'Strategy',
    deliverables: ['24/7 system health monitoring', 'Security patching & vulnerability audits', 'Performance optimization SLAs', 'Continuous feature delivery'],
    techHighlights: ['Datadog / Prometheus', 'Sentry', 'Automated Backups', 'SLA Response Guarantee'],
    icon: 'ShieldCheck'
  },
]

export const problems: string[] = [
  'Legacy, fragmented databases with slow manual reporting',
  'Inadequate operational software that cannot scale with business volume',
  'Low digital customer engagement and outdated web platforms',
  'Security and compliance risks in unmanaged IT infrastructure',
  'Lack of data-driven insights to make executive decisions',
  'High engineering cost without clear business ROI',
]

export const competitiveAdvantage: string[] = [
  'Data-first consulting backed by experienced senior software engineers',
  'End-to-end delivery: from strategy and data pipelines through cloud deployment',
  'Rigorous human-crafted engineering without generic AI shortcuts',
  'Focus on measurable business metrics, speed, and reliability',
  'Dedicated long-term SLA support and infrastructure maintenance',
]

export interface TargetClientSector {
  name: string
  description: string
  icon: string
  focusAreas: string[]
}

export const targetClientsDetailed: TargetClientSector[] = [
  {
    name: 'Financial Institutions',
    description: 'Core banking portals, loan origination systems, microfinance platforms, and fraud detection engines.',
    icon: 'Landmark',
    focusAreas: ['FinTech Integration', 'Regulatory Compliance', 'Automated Reconciliation', 'Mobile Money APIs']
  },
  {
    name: 'Healthcare Organizations',
    description: 'Telemedicine apps, hospital management systems, patient records, and medical supply chain tracking.',
    icon: 'HeartPulse',
    focusAreas: ['Health Information Systems', 'Electronic Medical Records', 'Patient Portals', 'Data Privacy']
  },
  {
    name: 'Government Institutions',
    description: 'Public service delivery portals, digital revenue collection, citizen identification, and registry systems.',
    icon: 'Building2',
    focusAreas: ['E-Government Services', 'Open Data Platforms', 'Secure Identity Verification', 'Civic Portals']
  },
  {
    name: 'NGOs & Development Partners',
    description: 'Field data collection tools, impact monitoring dashboards, grant management, and community platforms.',
    icon: 'Globe2',
    focusAreas: ['M&E Dashboards', 'Offline Field Surveys', 'Donor Reporting Tools', 'GIS Mapping']
  },
  {
    name: 'Educational Institutions',
    description: 'Learning management systems (LMS), student information portals, and automated tuition processing.',
    icon: 'GraduationCap',
    focusAreas: ['Online Learning Portals', 'Student Portals', 'Course Analytics', 'Exam Management']
  },
  {
    name: 'Agriculture & Supply Chain',
    description: 'Farm-to-market traceability platforms, cooperative management software, and weather intelligence tools.',
    icon: 'Sprout',
    focusAreas: ['Agri-Fintech', 'Traceability Systems', 'Cooperative Portals', 'IoT Sensor Data']
  },
  {
    name: 'Logistics & Transportation',
    description: 'Fleet tracking, route optimization engines, inventory management, and cross-border shipment monitoring.',
    icon: 'Truck',
    focusAreas: ['GPS Fleet Telematics', 'Warehouse Systems', 'Dispatch Automation', 'Real-Time Tracking']
  },
  {
    name: 'Large Enterprises & Corporates',
    description: 'Custom ERPs, centralized business intelligence, customer engagement engines, and workflow automation.',
    icon: 'Briefcase',
    focusAreas: ['Enterprise Architecture', 'Departmental Integration', 'Data Warehousing', 'Legacy Modernization']
  },
  {
    name: 'High-Growth Startups & SMEs',
    description: 'Rapid MVP development, SaaS product engineering, scalable cloud infrastructure, and go-to-market tech.',
    icon: 'TrendingUp',
    focusAreas: ['MVP Prototyping', 'SaaS Scaling', 'Payment Gateways', 'Growth Analytics']
  },
]

export const targetClients: string[] = targetClientsDetailed.map(t => t.name)

export const vision =
  "To be the premier data engineering, enterprise software, and digital consulting partner across East Africa, empowering organizations with reliable technology."

export const mission =
  'To turn complex business challenges and raw organizational data into resilient software systems, actionable intelligence, and long-term digital value.'

export interface OrgTier {
  label: string
  tagline: string
  items: string[]
}

export const orgStructure: { parent: OrgTier; child: OrgTier } = {
  parent: {
    label: 'DataSphere Consulting Ltd',
    tagline: 'Enterprise Advisory, Data & Software Engineering Firm',
    items: [
      'Business Strategy & Enterprise Architecture',
      'Data Engineering & Business Intelligence',
      'Artificial Intelligence & Predictive Analytics',
      'Cloud Architecture & DevOps Governance',
      'Digital Transformation & Legacy Modernization',
      'Capacity Building & Engineering Training',
    ],
  },
  child: {
    label: 'DataSphere Digital Solutions',
    tagline: 'Custom Software & Product Engineering Unit',
    items: [
      'Enterprise Software & Core ERPs',
      'Mobile Applications (iOS & Android)',
      'Web Platforms & Client Portals',
      'Cloud Solutions & CI/CD Pipelines',
      'Data Warehousing & Real-Time Dashboards',
      'Human-Centered UI/UX Design',
      'Technical Support & 24/7 SLA Maintenance',
    ],
  },
}

export interface Phase {
  step: string
  name: string
  subtitle: string
  items: string[]
}

export const growthPhases: Phase[] = [
  {
    step: 'Phase 01',
    name: 'Foundation & Rigor',
    subtitle: 'Core Enterprise Delivery & Architecture',
    items: [
      'Build robust reference enterprise systems and verified case studies',
      'Partner with leading regional financial institutions, public bodies, and enterprises',
      'Establish enterprise cloud, database, and security standards',
      'Standardize development pipelines, code review protocols, and SLA packages',
    ],
  },
  {
    step: 'Phase 02',
    name: 'Expansion',
    subtitle: 'Regional Penetration & Advanced Data Units',
    items: [
      'Expand cross-sector footprint across Rwanda and East African commercial hubs',
      'Scale specialized engineering, data engineering, and BI analytics units',
      'Deploy mission-critical data pipelines and executive monitoring dashboards',
      'Accelerate long-term maintenance and technical partnership agreements',
    ],
  },
  {
    step: 'Phase 03',
    name: 'Regional Hub',
    subtitle: 'Pan-African & Global Engineering Excellence',
    items: [
      'Scale engineering presence across East Africa and international clients',
      'Deliver distributed engineering for global technology organizations',
      'Introduce high-performance SaaS products and multi-tenant architectures',
      'Lead high-impact regional digital transformation initiatives',
    ],
  },
]

export interface ProcessStep {
  number: string
  title: string
  tagline: string
  description: string
  outputs: string[]
  icon: string
}

export const deliveryProcess: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover & Align',
    tagline: 'Business Diagnosis',
    description: 'We conduct deep discovery workshops to understand your organizational objectives, user pain points, system bottlenecks, and market opportunity.',
    outputs: ['Stakeholder alignment', 'Requirement specification', 'Technical feasibility study', 'Risk assessment'],
    icon: 'Search'
  },
  {
    number: '02',
    title: 'Strategize & Architect',
    tagline: 'System Blueprint',
    description: 'We define the technical architecture, data model, security framework, and product roadmap before writing a single line of code.',
    outputs: ['System architecture diagram', 'Data schema & API spec', 'Technology stack selection', 'Sprint delivery roadmap'],
    icon: 'Compass'
  },
  {
    number: '03',
    title: 'Design & Prototype',
    tagline: 'Human-Centered UX',
    description: 'We craft intuitive user journeys, interactive wireframes, and production design systems with rigorous usability testing.',
    outputs: ['Figma design system', 'Interactive prototype', 'WCAG accessibility audit', 'Component library'],
    icon: 'Figma'
  },
  {
    number: '04',
    title: 'Build & Engineer',
    tagline: 'Agile Implementation',
    description: 'Our engineering teams build scalable, cleanly typed code with continuous integration, automated unit tests, and bi-weekly milestone demos.',
    outputs: ['Production codebase', 'Automated test suite', 'CI/CD deployment pipeline', 'API documentation'],
    icon: 'Code2'
  },
  {
    number: '05',
    title: 'Deploy & Optimize',
    tagline: 'Production Readiness',
    description: 'We orchestrate secure cloud deployments, conduct penetration testing, load test concurrency, and configure telemetry monitoring.',
    outputs: ['Cloud infrastructure (IaC)', 'Load & security audit', 'Telemetry & alerting setup', 'User onboarding & training'],
    icon: 'Rocket'
  },
  {
    number: '06',
    title: 'Scale & Support',
    tagline: 'Continuous Growth',
    description: 'We monitor live performance, extract real-time data insights, provide 24/7 SLA maintenance, and iteratively build new capability.',
    outputs: ['24/7 SLA monitoring', 'Quarterly data reviews', 'Feature backlog iteration', 'Performance optimizations'],
    icon: 'TrendingUp'
  }
]

export interface CaseStudy {
  id: string
  title: string
  clientType: string
  sector: string
  problem: string
  solution: string
  technologies: string[]
  impact: string[]
  metrics: { label: string; value: string }[]
}

export const featuredCaseStudies: CaseStudy[] = [
  {
    id: 'financial-analytics-engine',
    title: 'Enterprise Analytics & Credit Intelligence Engine',
    clientType: 'Regional Financial Institution',
    sector: 'Banking & Financial Services',
    problem: 'The client struggled with fragmented loan applicant data across branches, causing slow underwriting times and high risk of non-performing loans.',
    solution: 'Engineered an automated data pipeline, risk-scoring ML model, and real-time executive dashboard integrating multiple core banking data streams.',
    technologies: ['Next.js', 'Python / ML', 'PostgreSQL', 'PowerBI', 'Docker'],
    impact: [
      'Accelerated credit assessment turn-around from 5 days to under 4 hours',
      'Unified data across 32 regional branch locations into real-time KPI feeds',
      'Decreased loan assessment calculation errors by over 90%'
    ],
    metrics: [
      { label: 'Processing Speed', value: '12x Faster' },
      { label: 'Data Accuracy', value: '99.8%' },
      { label: 'Branches Unified', value: '32+' }
    ]
  },
  {
    id: 'field-data-monitoring',
    title: 'Nationwide Field Data & Impact Monitoring System',
    clientType: 'International Development Organization',
    sector: 'NGOs & Development Partners',
    problem: 'Field agents in rural zones lacked offline data capture tools, resulting in delayed beneficiary reporting, missing telemetry, and tedious manual paperwork.',
    solution: 'Designed and deployed an offline-first mobile application paired with a cloud-synchronized central registry and GIS visual mapping interface.',
    technologies: ['React Native', 'Node.js', 'PostgreSQL / PostGIS', 'AWS', 'PWA'],
    impact: [
      'Enabled 100% offline survey capture with automatic background sync upon cellular connection',
      'Reduced national quarterly reporting lag from 4 weeks to instantaneous live metrics',
      'Successfully mapped over 45,000 community beneficiary interventions'
    ],
    metrics: [
      { label: 'Offline Sync', value: '100% Reliable' },
      { label: 'Field Records', value: '45,000+' },
      { label: 'Reporting Lag', value: '< 1 min' }
    ]
  },
  {
    id: 'logistics-supply-chain',
    title: 'Real-Time Multi-Tenant Logistics & Dispatch Platform',
    clientType: 'Commercial Freight & Logistics Operator',
    sector: 'Logistics & Supply Chain',
    problem: 'Manual dispatch logs, lack of real-time GPS visibility, and paper invoices led to lost driver hours, customer billing friction, and idle vehicle downtime.',
    solution: 'Architected a cloud-native SaaS dispatch portal, driver mobile companion, automated electronic invoicing, and IoT telemetry tracking engine.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Go API', 'Redis', 'Leaflet / GIS'],
    impact: [
      'Delivered live GPS tracking and automated delivery milestone notifications for shippers',
      'Automated invoice generation and payment verification, saving 35 administrative hours weekly',
      'Increased fleet capacity utilization by 28%'
    ],
    metrics: [
      { label: 'Fleet Efficiency', value: '+28%' },
      { label: 'Admin Hours Saved', value: '35h / wk' },
      { label: 'On-Time Dispatch', value: '96.4%' }
    ]
  }
]

export const techCapabilities = [
  {
    category: 'Modern Web & Frontend',
    items: ['Next.js (App Router)', 'React 18 / 19', 'TypeScript', 'Tailwind CSS', 'Accessible UI', 'PWA / Offline Workers'],
    icon: 'Layout'
  },
  {
    category: 'Backend & APIs',
    items: ['Node.js / Express', 'Go (Golang)', 'Python (FastAPI / Django)', 'REST & GraphQL', 'gRPC', 'Event-Driven Architecture'],
    icon: 'Server'
  },
  {
    category: 'Mobile Applications',
    items: ['React Native', 'Flutter', 'iOS (Swift)', 'Android (Kotlin)', 'Offline-First SQLite', 'Push Telemetry'],
    icon: 'Smartphone'
  },
  {
    category: 'Data Engineering & Analytics',
    items: ['PostgreSQL & ClickHouse', 'dbt & Airflow', 'Pandas & NumPy', 'PowerBI & Superset', 'Data Pipelines', 'Predictive Modeling'],
    icon: 'Brain'
  },
  {
    category: 'Databases & Cache',
    items: ['PostgreSQL', 'Supabase', 'Redis', 'ClickHouse', 'MongoDB', 'Elasticsearch'],
    icon: 'Database'
  },
  {
    category: 'Cloud, DevOps & Security',
    items: ['AWS / Google Cloud', 'Docker & Kubernetes', 'Terraform (IaC)', 'CI/CD Pipelines', 'Cloudflare CDN & WAF', 'OAuth / RBAC'],
    icon: 'CloudLightning'
  }
]
