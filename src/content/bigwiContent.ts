// Single source of truth for DataSphere Consulting Ltd & BIGWI HOUSE Data & AI Profile

export interface Service {
  id: string
  title: string
  shortDesc: string
  description: string
  category: 'AI & Machine Learning' | 'Data & Analytics' | 'Data & AI Consultancy' | 'Digital Solutions'
  deliverables: string[]
  techHighlights: string[]
  icon: string
}

export const services: Service[] = [
  {
    id: 'ai-model-building',
    title: 'Model Building & Predictive Analytics',
    shortDesc: 'Custom machine learning models built on your specific operational data.',
    description: 'We develop tailored statistical and machine learning models designed to solve concrete operational problems, from credit risk scoring and demand forecasting to automated document extraction and classification.',
    category: 'AI & Machine Learning',
    deliverables: [
      'Custom predictive algorithms & supervised learning',
      'Natural Language Processing (NLP) & text classification',
      'Document intelligence & data extraction pipelines',
      'Risk modeling & anomaly detection algorithms'
    ],
    techHighlights: ['Python', 'PyTorch', 'Scikit-Learn', 'FastAPI', 'Pandas', 'NumPy'],
    icon: 'Cpu'
  },
  {
    id: 'model-evaluation-monitoring',
    title: 'Model Evaluation, Deployment & Monitoring',
    shortDesc: 'Taking models from experimentation into stable, monitored production.',
    description: 'A model is only valuable if it performs consistently in production. We implement rigorous validation frameworks, containerized API deployments, and continuous drift monitoring to ensure accuracy over time.',
    category: 'AI & Machine Learning',
    deliverables: [
      'Model performance benchmarking & bias audits',
      'Containerized inference APIs & low-latency endpoints',
      'Automated data drift & model decay monitoring',
      'CI/CD pipelines for periodic model retraining'
    ],
    techHighlights: ['Docker', 'MLflow', 'FastAPI', 'Prometheus', 'Grafana', 'Kubernetes'],
    icon: 'Activity'
  },
  {
    id: 'data-collection-pipelines',
    title: 'Data Collection & Pipeline Infrastructure',
    shortDesc: 'Reliable ingestion pipelines that aggregate data across disparate sources.',
    description: 'We design resilient automated ETL/ELT pipelines that collect, clean, and standardize structured and unstructured data from field apps, databases, IoT telemetry, and third-party APIs.',
    category: 'Data & Analytics',
    deliverables: [
      'Automated batch and real-time ingestion pipelines',
      'Offline-first field data collection tools',
      'Data cleaning, validation & schema harmonization',
      'API connectors for legacy databases & public records'
    ],
    techHighlights: ['Python', 'PostgreSQL', 'dbt', 'Apache Airflow', 'Kafka', 'Redis'],
    icon: 'Layers'
  },
  {
    id: 'bi-dashboards-insights',
    title: 'Analytics & Decision Support Dashboards',
    shortDesc: 'Interactive dashboards that turn raw records into clear executive decisions.',
    description: 'We build tailored analytics platforms and business intelligence dashboards that give leaders and program managers instantaneous visibility into key metrics, regional trends, and operational performance.',
    category: 'Data & Analytics',
    deliverables: [
      'Executive KPI dashboards & operational reports',
      'Geospatial (GIS) mapping & regional heatmaps',
      'Automated recurring email/PDF briefing reports',
      'Self-service exploratory analytics tools'
    ],
    techHighlights: ['PowerBI', 'Apache Superset', 'PostgreSQL', 'PostGIS', 'ClickHouse', 'TypeScript'],
    icon: 'BarChart3'
  },
  {
    id: 'data-ai-strategy-advisory',
    title: 'Data & AI Strategic Advisory',
    shortDesc: 'Practical roadmaps for organizations adopting data-driven workflows.',
    description: 'We evaluate organizational readiness, audit data quality, identify high-ROI use cases, and structure realistic phased roadmaps for government agencies, financial institutions, and enterprises.',
    category: 'Data & AI Consultancy',
    deliverables: [
      'Data maturity audits & readiness assessments',
      'Applied AI feasibility studies & ROI calculations',
      'Data governance & regulatory compliance roadmaps',
      'Institutional capacity building & team coaching'
    ],
    techHighlights: ['Data Governance Frameworks', 'Architecture Audits', 'Compliance Reviews', 'Roadmapping'],
    icon: 'Workflow'
  },
  {
    id: 'custom-software-platforms',
    title: 'Enterprise Software & Digital Applications',
    shortDesc: 'Software systems built to operationalize your data and workflows.',
    description: 'When off-the-shelf software falls short, we build custom web portals, field mobile applications, and internal management tools that integrate directly with your central data infrastructure.',
    category: 'Digital Solutions',
    deliverables: [
      'Role-based staff portals & administrative platforms',
      'Offline-capable mobile apps for field teams (iOS & Android)',
      'Secure multi-tenant databases with role-based access',
      'API integrations with existing legacy enterprise tools'
    ],
    techHighlights: ['Next.js', 'React Native', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
    icon: 'Smartphone'
  },
  {
    id: 'cloud-infrastructure-devops',
    title: 'Cloud Infrastructure & Data Warehousing',
    shortDesc: 'Secure, cost-conscious cloud hosting and database architecture.',
    description: 'We architect cloud environments that protect sensitive organizational data, minimize hosting costs, and ensure high availability across international and regional networks.',
    category: 'Digital Solutions',
    deliverables: [
      'Modern data warehouse setup (ClickHouse, PostgreSQL, Snowflake)',
      'Automated database backups & disaster recovery plans',
      'Infrastructure as Code (IaC) & zero-downtime deployments',
      'Security hardening & role-based access controls'
    ],
    techHighlights: ['AWS', 'Google Cloud', 'Terraform', 'PostgreSQL', 'Cloudflare', 'Docker'],
    icon: 'Cloud'
  },
  {
    id: 'sla-support-maintenance',
    title: 'Technical Support & SLA Maintenance',
    shortDesc: 'Dedicated post-launch monitoring, security updates, and performance tuning.',
    description: 'We partner for the long term, offering structured service level agreements (SLAs) covering 24/7 uptime monitoring, security patching, and continuous pipeline optimization.',
    category: 'Data & AI Consultancy',
    deliverables: [
      'Proactive system health & uptime monitoring',
      'Security vulnerability audits & regular patching',
      'Database optimization & query performance tuning',
      'Guaranteed SLA response times for critical incidents'
    ],
    techHighlights: ['Datadog', 'Prometheus', 'Sentry', 'Automated Backups', 'SLA Response Guarantee'],
    icon: 'ShieldCheck'
  },
]

export const corePillars = [
  {
    number: '01',
    title: 'Data Collection',
    description: 'Gathering structured and unstructured data from field operations, mobile apps, databases, and third-party systems reliably.'
  },
  {
    number: '02',
    title: 'Insights & Analytics',
    description: 'Transforming raw records into clean data warehouses, interactive dashboards, and executive decision-support tools.'
  },
  {
    number: '03',
    title: 'Model Building',
    description: 'Training practical machine learning algorithms tailored to specific regional contexts and organizational workflows.'
  },
  {
    number: '04',
    title: 'Model Evaluation',
    description: 'Auditing predictive accuracy, testing against edge cases, and validating performance before production rollout.'
  },
  {
    number: '05',
    title: 'Model Deployment',
    description: 'Integrating models into production systems via low-latency, scalable APIs that staff and customer apps can rely on.'
  },
  {
    number: '06',
    title: 'Model Monitoring',
    description: 'Tracking accuracy in real-time, detecting data drift, and maintaining retraining schedules for ongoing reliability.'
  },
  {
    number: '07',
    title: 'Data & AI Consultancy',
    description: 'Advising leadership on data governance, technology strategy, compliance, and long-term capability building.'
  }
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
    description: 'Underwriting models, credit risk assessment pipelines, automated reconciliation, and fraud detection systems.',
    icon: 'Landmark',
    focusAreas: ['Credit Risk Scoring', 'Transaction Analytics', 'Regulatory Compliance', 'Mobile Money Integration']
  },
  {
    name: 'Government & Public Institutions',
    description: 'Citizen service platforms, registry data management, revenue analytics, and national telemetry portals.',
    icon: 'Building2',
    focusAreas: ['Open Data Portals', 'Service Monitoring', 'Public Health Telemetry', 'Secure Identity Verification']
  },
  {
    name: 'International NGOs & Development Partners',
    description: 'Offline field data collection, monitoring & evaluation (M&E) systems, donor reporting dashboards, and GIS maps.',
    icon: 'Globe2',
    focusAreas: ['M&E Dashboards', 'Offline Field Surveys', 'Impact Measurement', 'GIS Spatial Mapping']
  },
  {
    name: 'Agriculture & Supply Chain',
    description: 'Farm-level data collection, yield forecasting models, inventory tracking, and cooperative management platforms.',
    icon: 'Sprout',
    focusAreas: ['Traceability Systems', 'Yield Forecasting', 'Cooperative Data Portals', 'Commodity Price Feeds']
  },
  {
    name: 'Logistics & Transportation',
    description: 'Fleet GPS telematics, dispatch automation, route efficiency analytics, and cold chain temperature compliance.',
    icon: 'Truck',
    focusAreas: ['GPS Telematics', 'Dispatch Optimization', 'Warehouse Analytics', 'Delivery Verification']
  },
  {
    name: 'Commercial Enterprises & Businesses',
    description: 'Centralized business intelligence, customer behavior analytics, automated reporting, and custom software systems.',
    icon: 'Briefcase',
    focusAreas: ['BI Dashboards', 'Customer Analytics', 'Workflow Automation', 'Data Warehousing']
  }
]

export const vision =
  'To be a trusted international Data & AI consultancy partner, helping organizations solve practical problems with robust data infrastructure and reliable machine learning.'

export const mission =
  'To build data and software solutions that help organizations make better decisions, automate operations, and scale with confidence.'

export const companyValues = [
  {
    title: 'Evidence Over Buzzwords',
    description: 'We focus on measurable outcomes, clean code, and working systems rather than exaggerated promises or AI hype.'
  },
  {
    title: 'Human-Centered Design',
    description: 'We build technology that matches how teams actually work in the real world, prioritizing usability and offline reliability.'
  },
  {
    title: 'Data Integrity & Sovereignty',
    description: 'Our clients retain 100% ownership of their data, algorithms, and intellectual property without vendor lock-in.'
  },
  {
    title: 'Long-Term Partnership',
    description: 'We support our deployments with transparent governance, ongoing monitoring, and disciplined SLA commitments.'
  }
]

export interface OrgTier {
  label: string
  tagline: string
  items: string[]
}

export const orgStructure: { parent: OrgTier; child: OrgTier } = {
  parent: {
    label: 'DataSphere Consulting Ltd',
    tagline: 'Enterprise Advisory & Technology Firm',
    items: [
      'Strategic Advisory & Technology Roadmaps',
      'Data Governance & Compliance Architecture',
      'Enterprise Solution Architecture',
      'Institutional Capacity Building',
      'Long-Term SLA Governance & Support',
    ],
  },
  child: {
    label: 'BIGWI HOUSE',
    tagline: 'Data & AI Consultancy Hub',
    items: [
      'Data Collection & Pipeline Infrastructure',
      'Business Intelligence & Executive Dashboards',
      'Machine Learning Model Building & Evaluation',
      'Model Deployment & Real-Time Monitoring',
      'Applied Data Science & Predictive Analytics',
      'Custom Software & Mobile Applications',
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
    name: 'Discovery & Diagnosis',
    subtitle: 'Understanding the Business Problem',
    items: [
      'Audit existing data sources, schemas, and operational bottlenecks',
      'Define clear business objectives and target metrics with leadership',
      'Assess technical feasibility and data quality constraints',
      'Establish security, privacy, and compliance guidelines',
    ],
  },
  {
    step: 'Phase 02',
    name: 'Architecture & Prototyping',
    subtitle: 'Blueprint & Model Validation',
    items: [
      'Design data pipelines, database models, and API interfaces',
      'Develop baseline ML models and benchmark against test datasets',
      'Create interactive UI prototypes and review with key stakeholders',
      'Define sprint delivery milestones and evaluation criteria',
    ],
  },
  {
    step: 'Phase 03',
    name: 'Deployment & Monitoring',
    subtitle: 'Production Rollout & Long-Term Reliability',
    items: [
      'Deploy containerized systems to secure cloud infrastructure',
      'Configure automated data quality checks and model drift alerts',
      'Train operational staff and hand over system documentation',
      'Provide structured SLA maintenance and iterative enhancements',
    ],
  },
]

export interface CaseStudy {
  id: string
  caseNumber: string
  title: string
  clientClassification: 'Real Client' | 'Confidential Client' | 'Internal Project' | 'Prototype / Demonstration'
  client: string
  region: string
  sector: string
  problem: string
  solution: string
  impact: string[]
  metrics: { label: string; value: string }[]
  technologies: string[]
  image: string
}

export const featuredCaseStudies: CaseStudy[] = [
  {
    id: 'case-01',
    caseNumber: 'Case 01',
    title: 'Credit Intelligence & Risk Assessment Platform',
    clientClassification: 'Real Client',
    client: 'Regional Microfinance Institution',
    region: 'East Africa',
    sector: 'Financial Services',
    problem: 'Loan officers relied on fragmented branch spreadsheets and manual paperwork, resulting in slow underwriting turnaround of 5 days and elevated default rates due to inconsistent risk checks.',
    solution: 'BIGWI HOUSE designed an automated data pipeline consolidating branch records, built a statistical credit risk model, and deployed an intuitive assessment portal for underwriting teams.',
    impact: [
      'Reduced credit assessment turnaround time from 5 business days to under 4 hours',
      'Harmonized customer loan histories across 32 regional branch locations into a single database',
      'Decreased calculation errors and missing documentation incidents by over 90%'
    ],
    metrics: [
      { label: 'Turnaround Time', value: 'Under 4 hrs' },
      { label: 'Branches Unified', value: '32 Locations' },
      { label: 'Data Accuracy', value: '99.8%' }
    ],
    technologies: ['Python', 'PostgreSQL', 'PowerBI', 'Docker', 'FastAPI', 'Next.js'],
    image: '/images/hero-team.jpg'
  },
  {
    id: 'case-02',
    caseNumber: 'Case 02',
    title: 'Field Data Infrastructure & Impact Monitoring System',
    clientClassification: 'Real Client',
    client: 'Community Development Organization',
    region: 'Rwanda & Regional Zones',
    sector: 'Public Sector & NGOs',
    problem: 'Field workers surveying rural beneficiary communities faced poor network connectivity, resulting in lost paper forms, delayed quarterly reporting, and no spatial visibility into aid distribution.',
    solution: 'Engineered an offline-first mobile data collection application with automated background synchronization, coupled with a central registry and geospatial (GIS) impact dashboard.',
    impact: [
      'Achieved 100% reliable offline data capture with automatic queue sync once mobile connectivity resumes',
      'Shortened quarterly donor reporting cycles from 4 weeks to instantaneous live metrics',
      'Mapped and verified over 45,000 community beneficiary interventions on interactive GIS layers'
    ],
    metrics: [
      { label: 'Field Records', value: '45,000+' },
      { label: 'Offline Sync', value: '100% Reliable' },
      { label: 'Reporting Lag', value: 'Instant' }
    ],
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'PostGIS', 'AWS', 'TypeScript'],
    image: '/images/mobile-banking.jpg'
  },
  {
    id: 'case-03',
    caseNumber: 'Case 03',
    title: 'Logistics Intelligence & Fleet Telematics Hub',
    clientClassification: 'Real Client',
    client: 'Commercial Freight & Logistics Operator',
    region: 'East Africa Corridor',
    sector: 'Supply Chain & Logistics',
    problem: 'Manual paper logbooks and lack of real-time GPS visibility caused route delays, unexpected vehicle downtime, driver overtime disputes, and slow billing reconciliations.',
    solution: 'Developed a real-time dispatch dashboard, driver mobile companion tool, and automated telematics pipeline that processes live GPS coordinates, fuel sensor data, and digital delivery confirmations.',
    impact: [
      'Provided dispatch managers with live vehicle tracking and automated ETA alerts for customers',
      'Automated trip reconciliation and electronic invoicing, saving approximately 35 administrative hours weekly',
      'Improved overall fleet capacity utilization by 28% across active transit corridors'
    ],
    metrics: [
      { label: 'Fleet Efficiency', value: '+28%' },
      { label: 'Admin Time Saved', value: '35 hrs / wk' },
      { label: 'On-Time Dispatch', value: '96.4%' }
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Python', 'Redis', 'PostGIS', 'Leaflet'],
    image: '/images/logistics-terminal.jpg'
  }
]

export interface InsightArticle {
  id: string
  title: string
  category: 'Data Strategy' | 'Applied AI' | 'Case Perspective' | 'Technology Review'
  readTime: string
  publishDate: string
  summary: string
  keyTakeaways: string[]
}

export const insightArticles: InsightArticle[] = [
  {
    id: 'practical-ai-readiness',
    title: 'Assessing Organizational AI Readiness: A Practical Framework for Leaders',
    category: 'Data Strategy',
    readTime: '6 min read',
    publishDate: 'August 2026',
    summary: 'Why clean, accessible data pipelines matter far more than model complexity when deploying AI in institutional environments.',
    keyTakeaways: [
      'Start with a well-defined business problem before selecting modeling approaches',
      'Audit existing data quality and collection consistency across operational departments',
      'Plan for model evaluation and ongoing drift monitoring from day one'
    ]
  },
  {
    id: 'offline-first-field-data',
    title: 'Designing Offline-First Systems for Rural Data Collection in East Africa',
    category: 'Technology Review',
    readTime: '5 min read',
    publishDate: 'July 2026',
    summary: 'Architectural patterns for mobile surveys and telemetry in areas with intermittent connectivity, ensuring zero data loss.',
    keyTakeaways: [
      'Local-first SQLite storage paired with idempotent sync queues',
      'Conflict resolution strategies when multiple field officers update shared records',
      'Battery and bandwidth optimization for standard low-cost Android hardware'
    ]
  },
  {
    id: 'credit-scoring-models-local-context',
    title: 'Building Credit Scoring Models Tailored to Informal Economy Realities',
    category: 'Applied AI',
    readTime: '7 min read',
    publishDate: 'June 2026',
    summary: 'How alternative data points such as mobile money transactions and utility records create fairer, more accurate risk models.',
    keyTakeaways: [
      'Traditional bureau data often excludes viable micro-entrepreneurs',
      'Feature engineering with mobile transaction frequency and cash-flow regularity',
      'Ensuring model explainability for regulatory audits and fair lending standards'
    ]
  }
]

export const contactDetails = {
  company: 'DataSphere Consulting Ltd',
  division: 'BIGWI HOUSE — Data & AI Consultancy Hub',
  address: 'Kigali, Rwanda',
  email: 'contact@datasphere.rw',
  inquiriesEmail: 'info@datasphere.rw',
  hours: 'Monday – Friday, 8:30 AM – 5:30 PM (CAT)',
  responseSLA: 'Inquiries answered within 24 business hours'
}

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
    title: 'Discover & Diagnose',
    tagline: 'Problem Diagnosis',
    description: 'We conduct discovery sessions with your operational leads to understand data sources, reporting bottlenecks, and institutional objectives.',
    outputs: ['Data source audit', 'Requirement specification', 'Feasibility analysis', 'Security & compliance plan'],
    icon: 'Search'
  },
  {
    number: '02',
    title: 'Strategize & Blueprint',
    tagline: 'System Architecture',
    description: 'We map the database models, API contracts, model validation parameters, and cloud hosting plan before writing code.',
    outputs: ['Architecture blueprint', 'Data schema & API spec', 'Toolchain selection', 'Sprint delivery roadmap'],
    icon: 'Compass'
  },
  {
    number: '03',
    title: 'Design & Prototype',
    tagline: 'Interactive UX',
    description: 'We design intuitive executive dashboards, reporting interfaces, and field app screens tailored to operational speed.',
    outputs: ['Interactive wireframes', 'UI design system', 'Usability review', 'Field survey forms'],
    icon: 'Palette'
  },
  {
    number: '04',
    title: 'Build & Train',
    tagline: 'Data & Model Delivery',
    description: 'Our team builds automated ingestion pipelines, trains machine learning models, and develops custom software with automated testing.',
    outputs: ['Data ingestion pipelines', 'Model weights & training code', 'Automated test suite', 'Technical documentation'],
    icon: 'Code2'
  },
  {
    number: '05',
    title: 'Evaluate & Deploy',
    tagline: 'Production Verification',
    description: 'We conduct rigorous model evaluation, test inference latency under load, and deploy containerized services to secure infrastructure.',
    outputs: ['Model evaluation report', 'Cloud infrastructure setup', 'Telemetry & alerting setup', 'User onboarding & training'],
    icon: 'Rocket'
  },
  {
    number: '06',
    title: 'Monitor & Support',
    tagline: 'Long-Term Reliability',
    description: 'We track live accuracy, detect data drift, provide 24/7 SLA uptime maintenance, and support periodic model retraining.',
    outputs: ['24/7 SLA monitoring', 'Model drift alerts', 'Quarterly data reviews', 'Scheduled retraining pipelines'],
    icon: 'TrendingUp'
  }
]

export const techCapabilities = [
  {
    category: 'Data Engineering & Pipelines',
    items: ['PostgreSQL & ClickHouse', 'dbt & Apache Airflow', 'Pandas & NumPy', 'Kafka & Redis', 'Automated ETL/ELT', 'Data Warehousing'],
    icon: 'Database'
  },
  {
    category: 'Machine Learning & AI',
    items: ['Python & PyTorch', 'Scikit-Learn', 'FastAPI Inference', 'MLflow Tracking', 'Model Drift Telemetry', 'NLP & Text Classification'],
    icon: 'Brain'
  },
  {
    category: 'Analytics & Dashboards',
    items: ['PowerBI & Superset', 'PostGIS & Spatial Maps', 'Executive KPI Reports', 'Automated PDF/Email Feeds', 'Telemetry Dashboards', 'Self-Service BI'],
    icon: 'Layout'
  },
  {
    category: 'Backend & APIs',
    items: ['Python (FastAPI / Django)', 'Node.js & Express', 'Go (Golang)', 'REST & GraphQL', 'Role-Based Access (RBAC)', 'Microservices'],
    icon: 'Server'
  },
  {
    category: 'Mobile & Field Applications',
    items: ['React Native', 'Flutter', 'Offline SQLite Sync', 'PWA / Web Portals', 'USSD Integrations', 'GIS Field Mapping'],
    icon: 'Smartphone'
  },
  {
    category: 'Cloud & Infrastructure',
    items: ['AWS & Google Cloud', 'Docker & Kubernetes', 'Terraform (IaC)', 'CI/CD Pipelines', 'Cloudflare CDN', 'Prometheus & Grafana'],
    icon: 'CloudLightning'
  }
]

