// Single source of truth for DataSphere Consulting Ltd & BIGWI HOUSE Data & AI Profile
// Benchmarked against premier global AI consultancies (Quantium, QuantumBlack McKinsey AI, Aimpoint Digital, Tiger Analytics, Tredence)

export interface Service {
  id: string
  title: string
  shortDesc: string
  description: string
  category: 'Applied AI & Machine Learning' | 'Data Foundations & Modern Data Stack' | 'Decision Intelligence & Dashboards' | 'Strategic Advisory & Governance'
  deliverables: string[]
  icon: string
}

export const services: Service[] = [
  {
    id: 'applied-ai-ml',
    title: 'Model Building & Predictive Analytics',
    shortDesc: 'Custom machine learning models built on your specific operational data.',
    description: 'We develop tailored statistical and machine learning models designed to solve concrete operational problems, from credit risk scoring and demand forecasting to automated document extraction and classification.',
    category: 'Applied AI & Machine Learning',
    deliverables: [
      'Custom predictive algorithms & supervised learning',
      'Natural Language Processing (NLP) & text classification',
      'Document intelligence & data extraction pipelines',
      'Risk modeling & anomaly detection algorithms'
    ],
    icon: 'Cpu'
  },
  {
    id: 'model-evaluation-monitoring',
    title: 'Model Evaluation, Deployment & Drift Telemetry',
    shortDesc: 'Taking models from experimentation into stable, monitored production.',
    description: 'A model is only valuable if it performs consistently in production. We implement rigorous validation frameworks, containerized API deployments, and continuous drift monitoring to ensure accuracy over time.',
    category: 'Applied AI & Machine Learning',
    deliverables: [
      'Model performance benchmarking & bias audits',
      'Containerized inference APIs & low-latency endpoints',
      'Automated data drift & model decay monitoring',
      'CI/CD pipelines for periodic model retraining'
    ],
    icon: 'Activity'
  },
  {
    id: 'modern-data-stack',
    title: 'Data Collection & Modern Pipeline Infrastructure',
    shortDesc: 'Reliable ingestion pipelines that aggregate data across disparate sources.',
    description: 'We design resilient automated ETL/ELT pipelines that collect, clean, and standardize structured and unstructured data from field apps, databases, IoT telemetry, and third-party APIs.',
    category: 'Data Foundations & Modern Data Stack',
    deliverables: [
      'Automated batch and real-time ingestion pipelines',
      'Offline-first field data collection tools',
      'Data cleaning, validation & schema harmonization',
      'API connectors for legacy databases & public records'
    ],
    icon: 'Layers'
  },
  {
    id: 'decision-intelligence-bi',
    title: 'Analytics & Decision Support Dashboards',
    shortDesc: 'Interactive dashboards that turn raw records into clear executive decisions.',
    description: 'We build tailored analytics platforms and business intelligence dashboards that give leaders and program managers instantaneous visibility into key metrics, regional trends, and operational performance.',
    category: 'Decision Intelligence & Dashboards',
    deliverables: [
      'Executive KPI dashboards & operational reports',
      'Geospatial (GIS) mapping & regional heatmaps',
      'Automated recurring email/PDF briefing reports',
      'Self-service exploratory analytics tools'
    ],
    icon: 'BarChart3'
  },
  {
    id: 'data-ai-strategy-advisory',
    title: 'Data & AI Strategic Advisory',
    shortDesc: 'Practical roadmaps for organizations adopting data-driven workflows.',
    description: 'We evaluate organizational readiness, audit data quality, identify high-ROI use cases, and structure realistic phased roadmaps for government agencies, financial institutions, and enterprises.',
    category: 'Strategic Advisory & Governance',
    deliverables: [
      'Data maturity audits & readiness assessments',
      'Applied AI feasibility studies & ROI calculations',
      'Data governance & regulatory compliance roadmaps',
      'Institutional capacity building & team coaching'
    ],
    icon: 'Workflow'
  },
  {
    id: 'custom-software-platforms',
    title: 'Enterprise Data Applications & Custom Systems',
    shortDesc: 'Software systems built to operationalize your data and workflows.',
    description: 'When off-the-shelf software falls short, we build custom web portals, field mobile applications, and internal management tools that integrate directly with your central data infrastructure.',
    category: 'Data Foundations & Modern Data Stack',
    deliverables: [
      'Role-based staff portals & administrative platforms',
      'Offline-capable mobile apps for field teams (iOS & Android)',
      'Secure multi-tenant databases with role-based access',
      'API integrations with existing legacy enterprise tools'
    ],
    icon: 'Smartphone'
  },
  {
    id: 'cloud-infrastructure-devops',
    title: 'Cloud Infrastructure & Data Warehousing',
    shortDesc: 'Secure, cost-conscious cloud hosting and database architecture.',
    description: 'We architect cloud environments that protect sensitive organizational data, minimize hosting costs, and ensure high availability across international and regional networks.',
    category: 'Data Foundations & Modern Data Stack',
    deliverables: [
      'Modern data warehouse setup (ClickHouse, PostgreSQL, Snowflake)',
      'Automated database backups & disaster recovery plans',
      'Infrastructure as Code (IaC) & zero-downtime deployments',
      'Security hardening & role-based access controls'
    ],
    icon: 'Cloud'
  },
  {
    id: 'sla-support-maintenance',
    title: 'Technical Support & SLA Maintenance',
    shortDesc: 'Dedicated post-launch monitoring, security updates, and performance tuning.',
    description: 'We partner for the long term, offering structured service level agreements (SLAs) covering 24/7 uptime monitoring, security patching, and continuous pipeline optimization.',
    category: 'Strategic Advisory & Governance',
    deliverables: [
      'Proactive system health & uptime monitoring',
      'Security vulnerability audits & regular patching',
      'Database optimization & query performance tuning',
      'Guaranteed SLA response times for critical incidents'
    ],
    icon: 'ShieldCheck'
  },
]

export const corePillars = [
  {
    number: '01',
    title: 'Data Collection & Ingestion',
    description: 'Gathering structured and unstructured data from field operations, mobile apps, databases, and third-party systems reliably.'
  },
  {
    number: '02',
    title: 'Insights from Data (Data Analyst)',
    description: 'Transforming raw records into clean data warehouses, interactive dashboards, and executive decision-support tools.'
  },
  {
    number: '03',
    title: 'Model Building (Data Scientist)',
    description: 'Training practical machine learning algorithms tailored to specific regional contexts and organizational workflows.'
  },
  {
    number: '04',
    title: 'Model Evaluation & Audits',
    description: 'Auditing predictive accuracy, testing against edge cases, and validating performance before production rollout.'
  },
  {
    number: '05',
    title: 'Deployment & Monitoring',
    description: 'Integrating models into production systems via low-latency APIs and tracking accuracy with automated drift alerts.'
  },
  {
    number: '06',
    title: 'Custom Data Software',
    description: 'Developing operational web portals and field applications that connect teams directly to central data pipelines.'
  },
  {
    number: '07',
    title: 'Strategic AI & Data Advisory',
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
    name: 'International Companies & Partners',
    description: 'Regional data infrastructure, customer analytics, and enterprise data warehousing with high reliability.',
    icon: 'Globe2',
    focusAreas: ['Enterprise BI', 'Regional Infrastructure', 'Data Warehousing', 'SLA Monitoring']
  },
  {
    name: 'Government & Public Institutions',
    description: 'Citizen service platforms, national registry management, revenue analytics, and public telemetry portals.',
    icon: 'Building2',
    focusAreas: ['Open Data Portals', 'Service Monitoring', 'Public Telemetry', 'Identity Verification']
  },
  {
    name: 'Financial Institutions & Fintechs',
    description: 'Underwriting models, credit risk assessment pipelines, automated reconciliation, and fraud detection systems.',
    icon: 'Landmark',
    focusAreas: ['Credit Risk Scoring', 'Transaction Analytics', 'Regulatory Compliance', 'Mobile Money Integrations']
  },
  {
    name: 'International NGOs & Development Programs',
    description: 'Offline field data collection, monitoring & evaluation (M&E) systems, donor reporting dashboards, and GIS maps.',
    icon: 'Globe2',
    focusAreas: ['M&E Dashboards', 'Offline Field Surveys', 'Impact Measurement', 'GIS Spatial Mapping']
  },
  {
    name: 'Supply Chain, Logistics & Agriculture',
    description: 'Fleet GPS telematics, dispatch automation, route efficiency analytics, and farm-level traceability platforms.',
    icon: 'Truck',
    focusAreas: ['GPS Telematics', 'Dispatch Optimization', 'Yield Models', 'Traceability Portals']
  },
  {
    name: 'Growing Businesses & Enterprises',
    description: 'Production-ready data platforms, automated business intelligence, and custom analytics workflows that scale with confidence.',
    icon: 'Briefcase',
    focusAreas: ['Automated Reporting', 'Predictive Modeling', 'Cost-Conscious Cloud', 'Data Scalability']
  }
]

export const vision =
  'To be a trusted international data consulting partner, helping organizations solve complex challenges with robust data infrastructure, decision intelligence, and production-grade software.'

export const mission =
  'We build data and software solutions that help organizations make better decisions, automate operations, and scale with confidence.'

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

// QuantumBlack by McKinsey style editorial papers and research insights
export interface InsightArticle {
  id: string
  title: string
  subtitle?: string
  category: 'Executive Strategy & Transformation' | 'Generative AI & Agentic Systems' | 'Applied AI Playbooks' | 'Data Engineering & Lakehouses' | 'Governance & Risk' | 'Industry Perspectives'
  topicBadge: string
  readTime: string
  publishDate: string
  authorRole: string
  authorName?: string
  summary: string
  keyTakeaways: string[]
  featured?: boolean
  editorialQuote?: string
  methodologyOverview?: string
  sections?: {
    heading: string
    paragraphs: string[]
  }[]
}

export const insightArticles: InsightArticle[] = [
  {
    id: 'practical-ai-readiness',
    title: 'The AI Scaling Playbook: Why 72% of Pilots Stumble on Pipeline Debt, Not Model Accuracy',
    subtitle: 'A strategic blueprint for enterprise leaders moving from isolated AI experimentation to production-grade decision intelligence.',
    category: 'Executive Strategy & Transformation',
    topicBadge: 'Flagship Research',
    readTime: '7 min read',
    publishDate: 'August 2026',
    authorRole: 'Senior Solutions Architect & Practice Lead',
    authorName: 'DataSphere Applied AI Practice',
    summary: 'Why clean, accessible data pipelines, disciplined data governance, and automated CI/CD for data matter far more than model complexity when scaling applied AI in institutional environments.',
    featured: true,
    editorialQuote: 'The primary failure mode in enterprise AI is not algorithmic deficiency; it is the absence of deterministic, clean data feeding production models.',
    methodologyOverview: 'Synthesized from over 40 enterprise deployment cycles, infrastructure audits, and continuous MLOps telemetry across regional banks, logistics networks, and public institutions.',
    keyTakeaways: [
      'Define clear decision unit economics before commissioning model training sprints',
      'Eliminate silent pipeline decay through automated dbt testing and data-contract enforcement',
      'Institute strict telemetry for feature drift, prediction variance, and model decay from day one',
      'Align executive KPIs with operational adoption thresholds rather than raw theoretical accuracy'
    ],
    sections: [
      {
        heading: '1. The Proof-of-Concept Trap vs. Production Reality',
        paragraphs: [
          'Across modern enterprises, leadership teams frequently celebrate initial AI pilots that demonstrate impressive benchmark accuracy in sandbox notebooks. Yet, when these algorithms are introduced to live enterprise workflows, adoption plummets and reliability fractures.',
          'Our practice analysis reveals that over 70% of enterprise AI friction originates in data pipeline debt—unversioned schemas, inconsistent ingestion schedules, unmonitored upstream API changes, and lack of deterministic data validation.'
        ]
      },
      {
        heading: '2. The 4-Pillar Operational Framework for Sustainable AI',
        paragraphs: [
          'To bridge this chasm, organizations must transition from ad-hoc data science projects to an institutional Data & AI Operating Model centered on four foundational pillars:',
          'Pillar 1: Resilient Ingestion & Automated Normalization. Pillar 2: Semantic Layer & Unified Business Metrics. Pillar 3: Containerized Inference with MLOps Telemetry. Pillar 4: Human-in-the-Loop Operational Workflows.'
        ]
      },
      {
        heading: '3. Establishing the Decision Dividend',
        paragraphs: [
          'High-performing organizations measure AI initiatives not by compute consumed or models registered, but by the "decision dividend"—the reduction in manual reconciliation time, the decrease in underwriting default rates, or the optimization of logistics dispatch turnaround times.'
        ]
      }
    ]
  },
  {
    id: 'genai-agentic-data-architecture',
    title: 'From Chatbots to Agentic Systems: Designing Reliable LLM Architectures with Grounded Data',
    subtitle: 'How enterprise data lakes, semantic caching, and vector indexing prevent hallucination in mission-critical operational workflows.',
    category: 'Generative AI & Agentic Systems',
    topicBadge: 'GenAI & Agents',
    readTime: '6 min read',
    publishDate: 'July 2026',
    authorRole: 'Head of Applied AI & LLM Systems',
    authorName: 'Applied AI Practice Group',
    summary: 'Deploying autonomous AI agents requires rigorous data grounding. We explore retrieval-augmented generation (RAG) architectures, structured output validation, and low-latency vector pipelines.',
    keyTakeaways: [
      'Grounded RAG pipelines outperform fine-tuning for dynamic enterprise knowledge retrieval',
      'Implement deterministic validation layers (e.g., Pydantic schemas) on all LLM output boundaries',
      'Semantic caching reduces token expenditure by up to 64% on repetitive institutional queries',
      'Zero-trust logging and prompt injection safeguards are non-negotiable for customer-facing agents'
    ],
    sections: [
      {
        heading: 'Beyond Unbounded Conversational AI',
        paragraphs: [
          'While generic conversational chatbots provide impressive demos, institutional environments demand determinism. When an agent queries a database or interacts with an ERP system, hallucinations represent severe operational and regulatory risks.',
          'By combining hybrid search (sparse BM25 + dense vector embeddings) with deterministic schema validators, enterprise teams achieve auditable, compliant reasoning systems.'
        ]
      }
    ]
  },
  {
    id: 'lakehouse-bronze-silver-gold',
    title: 'Architecting Enterprise Lakehouses: Implementing the Medallion Pattern for Zero-Downtime Analytics',
    subtitle: 'Structuring raw object storage into queryable, high-speed analytical layers using Delta Lake, dbt, and ClickHouse.',
    category: 'Data Engineering & Lakehouses',
    topicBadge: 'Data Architecture',
    readTime: '8 min read',
    publishDate: 'June 2026',
    authorRole: 'Principal Data Engineer',
    authorName: 'Data Infrastructure Team',
    summary: 'A deep dive into decomposing raw enterprise telemetry into Bronze (Raw Append), Silver (Cleaned & Conformed), and Gold (Business Aggregated) layers for sub-second executive queries.',
    keyTakeaways: [
      'Bronze layer preserves immutable raw payloads with original ingestion timestamps',
      'Silver layer enforces schema validation, deduplication, and referential integrity checks',
      'Gold layer pre-aggregates KPI cubes for instantaneous Power BI & Superset dashboard loading',
      'Automated dbt unit tests ensure bad upstream data halts pipeline runs before contaminating reports'
    ],
    sections: [
      {
        heading: 'The Fallacy of the Monolithic Warehouse',
        paragraphs: [
          'Modern enterprises generate multi-modal data: high-frequency IoT pings, transaction logs, unstructured PDF receipts, and relational CRM records. Attempting to ingest all of this directly into rigid relational schemas creates severe pipeline brittleness.',
          'The Medallion Lakehouse architecture separates ingestion physics from consumption logic, allowing data engineering teams to scale ingest throughput independently of analytical query loads.'
        ]
      }
    ]
  },
  {
    id: 'offline-first-field-data',
    title: 'Designing Offline-First Systems for Rural Telemetry and Edge Data Collection',
    subtitle: 'Architectural patterns for mobile surveys and telemetry in areas with intermittent connectivity, ensuring zero data loss.',
    category: 'Data Engineering & Lakehouses',
    topicBadge: 'Field Engineering',
    readTime: '5 min read',
    publishDate: 'May 2026',
    authorRole: 'Lead Mobile & Edge Architect',
    authorName: 'Systems Engineering Group',
    summary: 'How local-first SQLite storage, cryptographic device signatures, and idempotent background sync queues enable seamless field operations across remote regions.',
    keyTakeaways: [
      'Local-first SQLite storage paired with idempotent background sync queues',
      'Conflict-free Replicated Data Types (CRDTs) resolve simultaneous multi-agent edits',
      'Battery and bandwidth compression protocols optimized for standard low-cost Android hardware',
      'Cryptographic data validation at device level before central database ingestion'
    ],
    sections: [
      {
        heading: 'Solving the Intermittent Connectivity Barrier',
        paragraphs: [
          'In rural logistics and NGO field monitoring, cellular connectivity is frequently unavailable for hours or days. Applications that assume constant network access fail catastrophically in these conditions.',
          'By engineering an offline-first synchronization engine with binary differential sync, field operators can collect thousands of records offline with total assurance of zero data corruption upon reconnection.'
        ]
      }
    ]
  },
  {
    id: 'credit-scoring-models-local-context',
    title: 'Building Credit Risk & Underwriting Models for Informal Economies',
    subtitle: 'How alternative data points such as mobile money velocity and utility records create fairer, highly predictive risk models.',
    category: 'Applied AI Playbooks',
    topicBadge: 'Fintech & Risk',
    readTime: '7 min read',
    publishDate: 'April 2026',
    authorRole: 'Applied AI & Risk Modeling Specialist',
    authorName: 'Risk & Financial Analytics Practice',
    summary: 'Developing explainable, compliant machine learning algorithms that evaluate creditworthiness for unbanked micro-entrepreneurs using cash-flow regularities.',
    keyTakeaways: [
      'Traditional bureau data excludes viable micro-entrepreneurs and agricultural cooperatives',
      'Feature engineering with transaction velocity, supplier regularity, and network centrality',
      'Strict SHAP / LIME explainability layers for regulatory auditability and fair lending compliance',
      'Automated population stability index (PSI) tracking to detect macroeconomic credit drift'
    ],
    sections: [
      {
        heading: 'Overcoming Data Scarcity with Contextual Features',
        paragraphs: [
          'In emerging markets, standard credit bureau scores cover less than 25% of active economic participants. However, transaction streams from digital wallets and cooperative ledgers contain rich behavioral signatures.',
          'By extracting rolling window variances in cash inflows and customer retention patterns, our models achieve AUC-ROC scores exceeding 0.84 while maintaining full compliance with fair lending guidelines.'
        ]
      }
    ]
  },
  {
    id: 'data-governance-public-sector',
    title: 'Institutional Data Governance: Safeguarding Privacy While Scaling National Analytics',
    subtitle: 'Establishing role-based access controls, data residency guidelines, and immutable audit trails in public and NGO platforms.',
    category: 'Governance & Risk',
    topicBadge: 'Policy & Governance',
    readTime: '8 min read',
    publishDate: 'March 2026',
    authorRole: 'Data Governance & Regulatory Advisor',
    authorName: 'Governance & Security Practice',
    summary: 'Balancing open data accessibility with citizen privacy safeguards, sovereign data residency, and automated compliance reporting.',
    keyTakeaways: [
      'Balancing open data accessibility with citizen privacy safeguards via automated masking',
      'Implementing strict national data residency and cryptographic access logging protocols',
      'Transitioning from departmental data silos to unified, role-governed data cataloging',
      'Establishing cross-agency data harmonization standards and SLA benchmarks'
    ],
    sections: [
      {
        heading: 'Building Trustworthy Public Infrastructure',
        paragraphs: [
          'Public sector analytics initiatives require rigorous governance from inception. Without robust anonymization and role-based access controls, cross-agency data sharing creates unacceptable exposure.',
          'We implement column-level masking, automated PII detection during pipeline ingestion, and tamper-evident audit logs to guarantee compliance with regional data protection acts.'
        ]
      }
    ]
  },
  {
    id: 'logistics-dispatch-telematics',
    title: 'From Telematics Pings to Dynamic Dispatch: Geospatial Analytics at Scale',
    subtitle: 'Transforming high-frequency fleet telemetry into real-time driver routing, fuel anomaly detection, and accurate ETA forecasts.',
    category: 'Industry Perspectives',
    topicBadge: 'Logistics & Supply Chain',
    readTime: '6 min read',
    publishDate: 'February 2026',
    authorRole: 'Senior Geospatial Systems Architect',
    authorName: 'Supply Chain Practice Group',
    summary: 'Processing millions of continuous GPS signals to optimize transport corridors, reduce vehicle dwell times, and automate delivery reconciliations.',
    keyTakeaways: [
      'Stream processing raw vehicle telemetry with low-latency Redis and Kafka queues',
      'Automated geospatial polygon geofencing and dwell-time anomaly detection',
      'Real-time fuel consumption modeling identifying route inefficiencies and mechanical faults',
      'Sub-second trip reconciliations saving dozens of administrative hours weekly'
    ],
    sections: [
      {
        heading: 'Unlocking Operational Efficiency in Fleet Networks',
        paragraphs: [
          'Raw GPS coordinates alone do not solve dispatch bottlenecks. Value emerges when coordinates are continuously snapped to road graphs, cross-referenced with elevation maps, and fed into dispatch optimization heuristics.',
          'Our streaming architectures process vehicle sensor payloads in sub-50ms intervals, giving fleet controllers real-time visibility into driver safety, idling costs, and precise delivery delivery milestones.'
        ]
      }
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
    category: 'Data Ingestion & Pipelines',
    items: ['PostgreSQL & ClickHouse', 'dbt & Apache Airflow', 'Pandas & NumPy', 'Kafka & Redis', 'Automated ETL/ELT', 'Data Warehousing'],
    icon: 'Database'
  },
  {
    category: 'Machine Learning & Applied AI',
    items: ['Python & PyTorch', 'Scikit-Learn', 'FastAPI Inference', 'MLflow Tracking', 'Model Drift Telemetry', 'NLP & Document Extraction'],
    icon: 'Brain'
  },
  {
    category: 'Decision Dashboards & BI',
    items: ['Power BI & Superset', 'PostGIS & Spatial Maps', 'Executive KPI Reports', 'Automated PDF/Email Feeds', 'Telemetry Dashboards', 'Self-Service BI'],
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
    category: 'Cloud Infrastructure & Security',
    items: ['AWS & Google Cloud', 'Docker & Kubernetes', 'Terraform (IaC)', 'CI/CD Pipelines', 'Cloudflare CDN', 'Prometheus & Grafana'],
    icon: 'CloudLightning'
  }
]

export interface LeaderProfile {
  id: string
  name: string
  shortName: string
  displayRole: string
  role: string
  division: 'DataSphere Advisory' | 'BIGWI HOUSE Delivery'
  credential: string
  bio: string
  image: string
  specialties: string[]
  certifications: string[]
  education: string
  linkedinUrl: string
  email: string
  authoredInsightId?: string
}

export const leadershipTeam: LeaderProfile[] = [
  {
    id: 'sandrine-umutoni',
    name: 'Sandrine Umutoni',
    shortName: 'Sandrine',
    displayRole: 'Senior Geospatial Analyst',
    role: 'Lead GIS & Geospatial Telemetry Specialist',
    division: 'BIGWI HOUSE Delivery',
    credential: 'PostGIS & Remote Sensing Analytics Specialist',
    bio: 'Transforms high-frequency GPS telemetry, farm-level spatial maps, and regional logistics data into interactive executive decision cockpits and routing heatmaps.',
    image: '/images/team/member-sandrine.jpg',
    specialties: ['Geospatial GIS Telemetry', 'PostGIS & Spatial SQL', 'Fleet Route Optimization', 'Remote Sensing'],
    certifications: ['PostGIS GIS Specialist', 'QGIS Remote Sensing', 'Carto Spatial Analyst'],
    education: 'B.Sc. Geomatics & Environmental Engineering, UR',
    linkedinUrl: 'https://linkedin.com',
    email: 'sandrine.u@datasphere.rw'
  },
  {
    id: 'aimable-bigwi',
    name: 'Aimable Bigwi Mugisha',
    shortName: 'Aimable',
    displayRole: 'Agency Director',
    role: 'Managing Director & Principal Architect',
    division: 'DataSphere Advisory',
    credential: 'M.Sc. Enterprise Architecture & Systems Design',
    bio: 'Over 14 years advising boardrooms, ministries, and regional commercial enterprises on data sovereignty, modern lakehouse roadmaps, and digital capability building. Direct engagement on high-stakes institutional advisory and technical governance.',
    image: '/images/team/leader-managing-director.jpg',
    specialties: ['Enterprise Data Strategy', 'National Data Sovereignty', 'Lakehouse Architecture', 'Executive Advisory'],
    certifications: ['AWS Solutions Architect Professional', 'TOGAF 9 Enterprise Architect', 'Certified Data Management Professional (CDMP)'],
    education: 'M.Sc. Computer Engineering, University of Rwanda / Carnegie Mellon Africa',
    linkedinUrl: 'https://linkedin.com',
    email: 'aimable.b@datasphere.rw',
    authoredInsightId: 'practical-ai-readiness'
  },
  {
    id: 'dr-claire-uwase',
    name: 'Dr. Claire Uwase',
    shortName: 'Claire',
    displayRole: 'Head of Applied AI',
    role: 'Head of Applied AI & Machine Learning',
    division: 'BIGWI HOUSE Delivery',
    credential: 'Ph.D. in Computational Intelligence & Statistics',
    bio: 'Directs the applied data science and predictive analytics practice at BIGWI HOUSE. Specializes in explainable machine learning, credit underwriting algorithms, NLP document intelligence, and real-time MLOps model decay telemetry.',
    image: '/images/team/leader-applied-ai.jpg',
    specialties: ['Predictive ML Modeling', 'Credit Risk & Scoring', 'NLP Document Intelligence', 'MLOps & Drift Telemetry'],
    certifications: ['PyTorch Deep Learning Specialist', 'TensorFlow Production ML', 'Stanford ML Specialization'],
    education: 'Ph.D. Computer Science & Applied Statistics',
    linkedinUrl: 'https://linkedin.com',
    email: 'claire.u@datasphere.rw',
    authoredInsightId: 'genai-agentic-data-architecture'
  },
  {
    id: 'diane-mukamana',
    name: 'Diane Mukamana',
    shortName: 'Diane',
    displayRole: 'People & Culture',
    role: 'Director of Decision Intelligence & Client Solutions',
    division: 'DataSphere Advisory',
    credential: 'Lead Analytics & Executive Intelligence Consultant',
    bio: 'Bridges institutional leadership strategy and operational execution. Specializes in executive KPI portals, geospatial GIS telemetry systems, self-service BI governance, and change management for enterprise clients.',
    image: '/images/team/leader-analytics.jpg',
    specialties: ['Executive Decision Dashboards', 'Geospatial GIS Telemetry', 'Self-Service BI Adoption', 'Institutional Change Management'],
    certifications: ['Microsoft Certified Power BI Data Analyst', 'GIS & Remote Sensing Specialist', 'Certified Scrum Product Owner (CSPO)'],
    education: 'M.Sc. Information Systems Management & Economics',
    linkedinUrl: 'https://linkedin.com',
    email: 'diane.m@datasphere.rw',
    authoredInsightId: 'logistics-dispatch-telematics'
  },
  {
    id: 'kevin-mugabo',
    name: 'Kevin Mugabo',
    shortName: 'Kevin',
    displayRole: 'Front-end Developer',
    role: 'Senior Lakehouse & Data Platform Engineer',
    division: 'BIGWI HOUSE Delivery',
    credential: 'Delta Lake & Modern Data Stack Specialist',
    bio: 'Builds automated batch and streaming ingestion pipelines, Medallion layer transformations in dbt, and clean dashboard data models for low-latency queries.',
    image: '/images/team/member-kevin.jpg',
    specialties: ['dbt SQL Transformations', 'ClickHouse Analytics', 'Airflow Orchestration', 'Data Quality Contracts'],
    certifications: ['dbt Certified Developer', 'Databricks Associate Engineer'],
    education: 'B.Sc. Computer Science',
    linkedinUrl: 'https://linkedin.com',
    email: 'kevin.m@datasphere.rw'
  },
  {
    id: 'jean-paul-habimana',
    name: 'Jean-Paul Habimana',
    shortName: 'Jean-Paul',
    displayRole: 'Head of Engineering',
    role: 'Head of Data Engineering & Cloud Platforms',
    division: 'BIGWI HOUSE Delivery',
    credential: 'Principal Lakehouse & Streaming Architect',
    bio: 'Architects robust, high-throughput ingestion pipelines and scalable cloud data warehouses. Deep technical authority across Medallion Delta Lake layers, ClickHouse, Apache Kafka, dbt transformations, and zero-downtime cloud infrastructure.',
    image: '/images/team/leader-data-engineering.jpg',
    specialties: ['Medallion Lakehouse (Delta/dbt)', 'Streaming Ingestion (Kafka/Redis)', 'High-Speed SQL (ClickHouse)', 'Infrastructure as Code (Terraform)'],
    certifications: ['Databricks Certified Data Engineer Professional', 'dbt Certified Developer', 'Google Cloud Professional Data Engineer'],
    education: 'B.Sc. Software Engineering & Distributed Systems',
    linkedinUrl: 'https://linkedin.com',
    email: 'jp.habimana@datasphere.rw',
    authoredInsightId: 'lakehouse-bronze-silver-gold'
  },
  {
    id: 'aline-gasana',
    name: 'Aline Gasana',
    shortName: 'Aline',
    displayRole: 'MLOps Lead',
    role: 'Applied ML & Model Drift Telemetry Specialist',
    division: 'BIGWI HOUSE Delivery',
    credential: 'M.Sc. Machine Learning & Computer Vision',
    bio: 'Designs containerized inference microservices, automated validation test suites, and model decay telemetry tracking population drift in production financial models.',
    image: '/images/team/member-aline.jpg',
    specialties: ['MLOps & Automated CI/CD', 'Model Drift Telemetry', 'FastAPI Microservices', 'PyTorch Inference'],
    certifications: ['AWS Machine Learning Specialty', 'Kubernetes CKA', 'MLflow Certified'],
    education: 'M.Sc. Artificial Intelligence, CMU Africa',
    linkedinUrl: 'https://linkedin.com',
    email: 'aline.g@datasphere.rw'
  },
  {
    id: 'eric-nkurunziza',
    name: 'Eric Nkurunziza',
    shortName: 'Eric',
    displayRole: 'Lead Systems Engineer',
    role: 'Lead Platform & Cloud Architect',
    division: 'BIGWI HOUSE Delivery',
    credential: 'Cloud Infrastructure & Offline Sync Architect',
    bio: 'Leads edge computing, offline-first mobile survey engines, multi-tenant cloud hosting, and security hardening for government and enterprise deployments.',
    image: '/images/team/member-eric.jpg',
    specialties: ['Offline-First Sync Engines', 'Kubernetes & Docker', 'Terraform Cloud IaC', 'SOC 2 & ISO Security'],
    certifications: ['AWS DevOps Professional', 'HashiCorp Terraform Associate'],
    education: 'B.Sc. Computer Engineering',
    linkedinUrl: 'https://linkedin.com',
    email: 'eric.n@datasphere.rw'
  }
]


export interface TeamPractice {
  title: string
  code: string
  disciplines: string[]
  focus: string
  leadRole: string
  headcount: string
  certifications: string[]
}

export const teamPractices: TeamPractice[] = [
  {
    title: 'Data Foundations & Lakehouse Engineering',
    code: 'PRACTICE 01',
    disciplines: ['Lakehouse Architects', 'Senior Pipeline Engineers', 'Analytics Engineers', 'Database Tuning Specialists'],
    focus: 'Resilient ETL/ELT pipelines, Medallion storage layers, schema validation, and real-time Kafka/ClickHouse telemetry.',
    leadRole: 'Led by Principal Lakehouse Architect',
    headcount: '8 In-House Engineers',
    certifications: ['Databricks Certified', 'dbt Core', 'AWS Data Analytics']
  },
  {
    title: 'Applied AI, Machine Learning & MLOps',
    code: 'PRACTICE 02',
    disciplines: ['Machine Learning Engineers', 'Research Statisticians', 'NLP Specialists', 'MLOps Infrastructure Leads'],
    focus: 'Custom risk models, predictive forecasting, automated document extraction, and containerized inference APIs.',
    leadRole: 'Led by Head of Applied AI',
    headcount: '6 Applied Data Scientists',
    certifications: ['PyTorch', 'MLflow', 'Kubernetes CKA']
  },
  {
    title: 'Decision Intelligence & Executive Portals',
    code: 'PRACTICE 03',
    disciplines: ['BI Solutions Architects', 'Data Visualization Designers', 'GIS Spatial Analysts', 'Business Domain Leads'],
    focus: 'Tailored executive dashboards, geospatial heatmaps, automated PDF/email board briefings, and self-service analytics.',
    leadRole: 'Led by Director of Decision Intelligence',
    headcount: '5 Analytics Consultants',
    certifications: ['Power BI Certified', 'PostGIS GIS', 'Tableau Desktop']
  },
  {
    title: 'Enterprise Software & Cloud Platforms',
    code: 'PRACTICE 04',
    disciplines: ['Full-Stack Software Engineers', 'Mobile/Offline Systems Developers', 'DevSecOps & Cloud Engineers'],
    focus: 'Offline-capable mobile apps (React Native/Flutter), secure multi-tenant web portals, and zero-downtime cloud hosting.',
    leadRole: 'Led by Lead Systems Architect',
    headcount: '7 Platform Engineers',
    certifications: ['AWS DevOps Professional', 'Docker/K8s', 'ISO 27001 Foundation']
  }
]

export const verifiableGovernancePoints = [
  {
    title: '100% In-House Engineering',
    description: 'We do not subcontract or outsource client projects to anonymous third parties. Every line of code, pipeline, and model is engineered by our verified Kigali team.',
    badge: 'Direct Accountability'
  },
  {
    title: 'Direct Senior Partner Access',
    description: 'Clients work directly alongside senior enterprise architects and practice directors from initial discovery through production deployment and SLA reviews.',
    badge: 'No Account Managers'
  },
  {
    title: 'Verifiable Credentials & Track Record',
    description: 'Our consultants hold certified credentials across AWS, Databricks, dbt, and Linux foundations, with verifiable delivery milestones across Africa.',
    badge: 'Industry Certified'
  },
  {
    title: 'Data Sovereignty & IP Ownership',
    description: 'Clients retain 100% ownership of source code, schemas, and proprietary trained weights. Complete documentation and knowledge transfer guaranteed.',
    badge: 'Zero Vendor Lock-in'
  }
]

