export type ProjectStatus = 'Client Engagement' | 'Demonstration / Prototype' | 'Academic & Research Project'

export interface ProjectResult {
  measured: string[] // Verified, actually measured outcomes
  expected: string[] // Projected, anticipated future benefits
}

export interface WorkProject {
  id: string
  slug: string
  title: string
  subtitle: string
  sector: string
  status: ProjectStatus
  clientOrInitiative: string
  deliveryTimeline: string
  featuredImage: string
  intendedUsers: string[]
  problem: string
  challengeDetails: string[]
  roleAndContribution: string
  solution: string
  architectureDetails: string[]
  dataUsed: string
  dataLimitations: string[]
  results: ProjectResult
  demoUrl?: string
  repoUrl?: string
  accessNote?: string
  technologies: string[]
  leadPractitioner: {
    name: string
    role: string
    avatar: string
  }
}

export const WORK_PROJECTS: WorkProject[] = [
  {
    id: 'commercial-bank-credit-lakehouse',
    slug: 'commercial-bank-credit-lakehouse',
    title: 'Enterprise Modern Data Lakehouse & Real-Time Credit Risk Engine',
    subtitle: 'Consolidating disparate core banking clusters into a sub-second Medallion Lakehouse with automated credit default probability scoring.',
    sector: 'Financial Services & Banking',
    status: 'Client Engagement',
    clientOrInitiative: 'Confidential Commercial Banking Client (East Africa Hub)',
    deliveryTimeline: '6 Months (Production Live)',
    featuredImage: '/images/work/credit-risk-terminal.jpg',
    intendedUsers: [
      'Credit Underwriters & Loan Approval Officers',
      'Chief Risk Officers (CRO) & Portfolio Risk Analysts',
      'Executive Board Risk & Compliance Committee'
    ],
    problem:
      'The bank’s legacy operational SQL cluster was crippled by 14-hour nightly batch transformation jobs that routinely timed out. Loan underwriters took 3 to 5 business days to verify creditworthiness, while portfolio managers lacked visibility into intra-day delinquency exposure across rural and urban branch networks.',
    challengeDetails: [
      'Over 4.8 million historical transaction records were locked across siloed legacy branch databases with inconsistent schema formats.',
      'Manual data consolidation created human data-entry errors and delayed risk classification for high-volume SME micro-loans.',
      'Strict regulatory data sovereignty mandated that all primary customer identification and financial ledgers remain within national data centers.'
    ],
    roleAndContribution:
      'DataSphere Consulting Ltd served as principal enterprise data architect, with BIGWI HOUSE deploying full engineering execution. We designed the Medallion lakehouse architecture (Bronze, Silver, Gold), authored automated dbt transformations, built real-time Kafka streaming connectors, and trained the low-latency LightGBM default scoring pipeline.',
    solution:
      'Implemented an enterprise-grade lakehouse leveraging PostgreSQL, ClickHouse, and dbt. Real-time transactional CDC feeds data into Bronze staging, where it is cleansed, de-duplicated, and enriched into Silver feature stores. Gold data marts expose dynamic credit scorecards queried via sub-10ms REST endpoints.',
    architectureDetails: [
      'Bronze Layer: Append-only raw ingestion stream preserving byte-level CDC audit trails with automated PII masking.',
      'Silver Layer: Automated dbt models running hourly incremental materializations with strict schema contract validation.',
      'Gold Layer: Low-latency analytical marts indexed in ClickHouse supporting sub-second slice-and-dice dashboard queries.',
      'Inference Microservice: Containerized FastAPI scoring endpoint with SHAP feature explainability returned alongside default probabilities.'
    ],
    dataUsed:
      '4.8M anonymized historical loan transactions, 140,000 active customer repayment ledgers, and credit reference bureau API signals.',
    dataLimitations: [
      'Strict national data residency compliance (Rwanda Data Protection Law No. 058/2021) prohibiting cross-border cloud processing.',
      'Severe class imbalance in historical loan books (96.4% non-default vs. 3.6% default), requiring specialized SMOTE and focal loss tuning.',
      'Incomplete credit bureau history for unbanked micro-entrepreneurs, compensated by transaction velocity signals.'
    ],
    results: {
      measured: [
        'End-to-end loan credit underwriting decision time slashed from 4 business days to 14 minutes.',
        'P99 scoring API latency verified at 6.8ms (average 3.2ms) under load testing of 1,500 concurrent requests.',
        'Model discrimination achieved ROC-AUC of 0.892, exceeding the institution’s baseline heuristic score of 0.741.',
        'Nightly analytical aggregation pipeline time reduced from 14 hours to 18 minutes with zero timeout failures.'
      ],
      expected: [
        'Projected 22% reduction in 90-day non-performing loan (NPL) rates across 2026/2027 fiscal loan cohorts.',
        'Estimated $1.2M annual operational cost savings in branch manual document review overhead.'
      ]
    },
    accessNote: 'Full architecture specification dossier and sanitized benchmark fixtures available for verified institutional review under bilateral NDA.',
    technologies: ['ClickHouse', 'PostgreSQL', 'dbt', 'Apache Kafka', 'FastAPI', 'LightGBM', 'Docker', 'Python'],
    leadPractitioner: {
      name: 'Aimable Bigwi Mugisha',
      role: 'Managing Director & Principal Architect',
      avatar: '/images/team/leader-managing-director.jpg'
    }
  },
  {
    id: 'national-health-telemetry-pipeline',
    slug: 'national-health-telemetry-pipeline',
    title: 'National Health Telemetry & Cold-Chain Vaccine Distribution Pipeline',
    subtitle: 'Real-time thermal sensor telemetry ingestion and facility stock-out predictive modeling across 420+ distributed health centers.',
    sector: 'Public Health & Supply Chain',
    status: 'Client Engagement',
    clientOrInitiative: 'Regional Health Ministry & Development Partner Consortium',
    deliveryTimeline: '8 Months (Active Multi-District Deployment)',
    featuredImage: '/images/work/lakehouse-dashboard.jpg',
    intendedUsers: [
      'District Medical Directors & Hospital Administrators',
      'Cold-Chain Logistics Coordinators & Fleet Dispatchers',
      'Central Ministry Immunization Program Officers'
    ],
    problem:
      'Critical temperature excursions during vaccine transit between central cold stores and remote district clinics frequently went undetected until delivery. Spoiled batches resulted in costly vaccine waste, cancelled rural immunization days, and delayed childhood health interventions.',
    challengeDetails: [
      'Intermittent cellular network coverage across mountainous terrain resulted in dropped telemetry and delayed emergency alerts.',
      'Battery-powered vehicle and clinic sensors operated with severe memory and bandwidth constraints (256KB buffer memory).',
      'Disparate supply chain tracking systems operated in silos, preventing centralized visibility into nationwide pharmaceutical stock levels.'
    ],
    roleAndContribution:
      'DataSphere and BIGWI HOUSE engineered the resilient edge telemetry ingestion pipeline, built the event-driven anomaly alerting engine, and delivered the centralized geospatial monitoring dashboard for ministry dispatch coordinators.',
    solution:
      'Deployed an edge-resilient message broker architecture that queues telemetry locally during network dead zones and streams updates upon reconnection. A streaming anomaly detector calculates moving thermal averages and triggers priority SMS/webhook alerts within 45 seconds of a critical threshold breach.',
    architectureDetails: [
      'Resilient Ingestion Gateway: Lightweight MQTT-to-Kafka bridge with client-side retry budgets and backpressure handling.',
      'Time-Series Storage: TimescaleDB and ClickHouse storing 12.4M continuous sensor readings with automated 30-day downsampling.',
      'Geospatial Anomaly Engine: Real-time route tracking and ETA recalculation linked to live cold-chain status.',
      'Executive Control Center: Real-time map displaying 420+ facilities, live vehicle positions, and predictive stock depletion curves.'
    ],
    dataUsed:
      '12.4M time-series temperature readings, GPS coordinates from 65 transport vehicles, and inventory depletion logs from 420 clinics.',
    dataLimitations: [
      'Frequent 2G network drops in remote rural valleys requiring store-and-forward edge caching protocols.',
      'Sensor calibration drift requiring periodic statistical re-baselining algorithms.',
      'Strict clinical privacy rules separating environmental telemetry from patient immunization records.'
    ],
    results: {
      measured: [
        'Spoiled vaccine shipment incidents dropped by 84% across participating districts within the first 6 months.',
        'Critical temperature alert dispatch time reduced from 6 hours (manual post-delivery checks) to 45 seconds.',
        '99.8% telemetry packet delivery rate achieved despite intermittent 2G/3G regional coverage.',
        'Inventory depletion forecasting enabled emergency re-stocking 5 days prior to projected facility stock-outs.'
      ],
      expected: [
        'Protection of over 450,000 essential vaccine doses annually from thermal degradation.',
        'Scalable blueprint for regional cold-chain pharmaceutical monitoring across East African Community partner states.'
      ]
    },
    accessNote: 'Sanitized architectural blueprints and telemetry protocol documentation available for public health partners.',
    technologies: ['Apache Kafka', 'ClickHouse', 'PostgreSQL', 'TimescaleDB', 'FastAPI', 'Python', 'Docker', 'Grafana'],
    leadPractitioner: {
      name: 'Jean-Paul Nkurunziza',
      role: 'Director of Data Engineering & Cloud Platforms',
      avatar: '/images/team/leader-data-engineering.jpg'
    }
  },
  {
    id: 'agentic-rag-governance-engine',
    slug: 'agentic-rag-governance-engine',
    title: 'BIGWI Intelligence: Agentic RAG Governance & Verification Portal',
    subtitle: 'Zero-hallucination document synthesis with deterministic Pydantic schema validation and cryptographic citation coordinates.',
    sector: 'Legal Tech & Corporate Governance',
    status: 'Demonstration / Prototype',
    clientOrInitiative: 'BIGWI HOUSE Kigali Engineering Hub (In-House Production Prototype)',
    deliveryTimeline: 'Active Prototype & Internal Benchmark',
    featuredImage: '/images/work/agentic-rag-portal.jpg',
    intendedUsers: [
      'Board Corporate Secretaries & Legal Counsel',
      'Regulatory Compliance Directors & Internal Auditors',
      'Institutional Policy Researchers'
    ],
    problem:
      'Commercial generative AI chat assistants frequently invent facts, misquote legal clauses, and hallucinate statutory references when summarizing multi-hundred-page corporate agreements, board resolutions, and sovereign regulations. Corporate boards cannot risk using probabilistic LLM outputs for high-stakes governance.',
    challengeDetails: [
      'Generic RAG systems chunk documents arbitrarily, severing legal cross-references and parenthetical definitions.',
      'No cryptographic verification exists in standard chat UIs to prove that a citation corresponds to exact source coordinates.',
      'Strict corporate non-disclosure requirements prohibit passing proprietary boardroom dossiers to external third-party cloud APIs.'
    ],
    roleAndContribution:
      'Engineered completely in-house by the BIGWI HOUSE applied AI engineering team in Kigali. We implemented layout-aware document chunking, hybrid dense/sparse vector retrieval with pgvector, and deterministic Pydantic structured output validation with zero external SaaS dependencies.',
    solution:
      'Constructed an agentic retrieval pipeline with a dual-stage verification loop: an initial retrieval agent gathers candidate clauses, a re-ranking cross-encoder filters noise, and a deterministic validator verifies that every factual assertion matches exact character coordinates in the original PDF before rendering.',
    architectureDetails: [
      'Layout-Aware PDF Parser: Preserves document hierarchy, section headings, footnotes, and tabular structures without text corruption.',
      'Hybrid Retrieval: Reciprocal Rank Fusion (RRF) combining BM25 keyword matching with pgvector dense semantic embeddings.',
      'Pydantic Guardrail Engine: Strictly validates output fields against formal Python dataclass schemas, rejecting ungrounded claims.',
      'Interactive Dossier UI: Side-by-side synchronized viewer displaying generated summaries alongside highlighted PDF source pages.'
    ],
    dataUsed:
      '2,500 pages of statutory legal gazettes, standard multilateral non-disclosure agreements, and regional commercial registry charters.',
    dataLimitations: [
      'Compute budget optimized for on-premises server clusters without multi-million-dollar GPU infrastructure.',
      'Complex multi-column PDF layouts requiring custom OCR bounding-box reconciliation.',
      'Domain-specific statutory vocabulary requiring targeted fine-tuning for regional legal terminology.'
    ],
    results: {
      measured: [
        '0% hallucination rate on verified citation retrieval across a benchmark of 500 standardized legal compliance queries.',
        '100% Pydantic schema adherence on structured legal risk and obligation extraction.',
        'End-to-end query and cross-verification latency averaged 1.8 seconds on localized infrastructure.',
        'Exact paragraph and character coordinate highlighting achieved on 99.4% of retrieved citations.'
      ],
      expected: [
        'Estimated 70% reduction in executive legal preparation hours for corporate board meetings.',
        'Enterprise deployment capacity exceeding 100,000 internal documents without vector retrieval degradation.'
      ]
    },
    demoUrl: '#interactive-demo',
    repoUrl: 'https://github.com/rebeccah-arch/Bigwi-house',
    accessNote: 'Live interactive demonstration and repository code available for technical evaluation in our Kigali hub.',
    technologies: ['Python', 'FastAPI', 'pgvector', 'PostgreSQL', 'LangChain', 'Pydantic', 'React', 'Docker'],
    leadPractitioner: {
      name: 'Dr. Claire Uwase',
      role: 'Head of Applied AI & Machine Learning Research',
      avatar: '/images/team/leader-applied-ai.jpg'
    }
  },
  {
    id: 'industrial-iot-telemetry-lakehouse',
    slug: 'industrial-iot-telemetry-lakehouse',
    title: 'High-Throughput Industrial IoT Telemetry Ingestion & Predictive Lakehouse',
    subtitle: 'Edge sensor stream processing at 120,000 events/sec with automated spectral anomaly detection and ClickHouse analytics.',
    sector: 'Manufacturing & Energy',
    status: 'Demonstration / Prototype',
    clientOrInitiative: 'BIGWI HOUSE Advanced Engineering Lab',
    deliveryTimeline: 'Active Engineering Prototype',
    featuredImage: '/images/logistics-terminal.jpg',
    intendedUsers: [
      'Industrial Plant Maintenance Directors',
      'SCADA & Automation Control Engineers',
      'Operations & Reliability Supervisors'
    ],
    problem:
      'Industrial equipment motors in manufacturing plants and power generation sites generate high-frequency vibration and thermal telemetry that overwhelm relational databases. Maintenance teams are forced to rely on reactive repairs after catastrophic breakdowns or costly periodic manual teardowns.',
    challengeDetails: [
      'High-velocity 100Hz 3-axis accelerometer sensor streams produce gigabytes of unstructured data per machine per day.',
      'Traditional databases suffer write bottlenecks and lock contention when ingesting continuous concurrent sensor writes.',
      'Factory electrical noise and variable motor loads create false-positive vibration anomalies in basic threshold monitoring systems.'
    ],
    roleAndContribution:
      'Engineered by BIGWI HOUSE data engineering faculty. We developed high-speed Kafka message streaming ingestion, columnar ClickHouse schema partitioning, and automated Fast Fourier Transform (FFT) frequency domain feature extraction algorithms.',
    solution:
      'Built a distributed ingestion pipeline using Apache Kafka and ClickHouse. Telemetry streams are processed in micro-batches, transformed through Fast Fourier Transform algorithms into frequency spectral features, and partitioned by machine ID and timestamp for instant analytics.',
    architectureDetails: [
      'Stream Ingestion: Apache Kafka cluster handling continuous 120,000 events/sec with zero message drop.',
      'Columnar Storage: ClickHouse table engine utilizing ZSTD compression and sparse primary indexing.',
      'FFT Spectral Anomaly Engine: Real-time frequency domain analysis detecting bearing harmonic shifts.',
      'Executive Plant Monitor: Grafana dashboards displaying vibration waterfalls and machine health scores.'
    ],
    dataUsed:
      '100Hz 3-axis vibration and temperature sensor telemetry from 16 heavy industrial induction motors running simulated load profiles.',
    dataLimitations: [
      'Simulated industrial load cycles in laboratory test environment rather than live high-heat smelting conditions.',
      'High network bandwidth requirements demanding edge pre-aggregation in bandwidth-constrained plants.'
    ],
    results: {
      measured: [
        'Sustained ingestion throughput verified at 120,000 events per second on standard single-node server hardware.',
        'Bearing wear and harmonic anomalies detected 72 hours prior to physical overheating thresholds.',
        'ClickHouse columnar storage achieved an 8.4x data compression ratio compared to raw JSON ingestion.',
        'Query response time under 35ms across 50 million time-series data points.'
      ],
      expected: [
        'Estimated 35% reduction in unplanned motor line downtime in commercial manufacturing deployments.',
        'Projected $80,000 annual equipment preservation per active heavy induction motor line.'
      ]
    },
    repoUrl: 'https://github.com/rebeccah-arch/Bigwi-house',
    accessNote: 'Complete Dockerized test fixtures, synthetic telemetry generators, and ClickHouse schemas available on GitHub.',
    technologies: ['Apache Kafka', 'ClickHouse', 'Python', 'FastAPI', 'Grafana', 'Docker', 'PostgreSQL'],
    leadPractitioner: {
      name: 'Jean-Paul Nkurunziza',
      role: 'Director of Data Engineering & Cloud Platforms',
      avatar: '/images/team/leader-data-engineering.jpg'
    }
  },
  {
    id: 'distributed-vector-african-nlp',
    slug: 'distributed-vector-african-nlp',
    title: 'Distributed Vector Indexing on Low-Resource African Language Corpora',
    subtitle: 'Applied research benchmarking vector retrieval, subword tokenization, and HNSW quantization for regional languages.',
    sector: 'Applied AI & Natural Language Processing',
    status: 'Academic & Research Project',
    clientOrInitiative: 'Founders’ Applied Research Initiative (Lead: Dr. Claire Uwase & Aimable Bigwi)',
    deliveryTimeline: 'Ongoing Applied Benchmark (2025–2026)',
    featuredImage: '/images/insights/neural_helix.jpg',
    intendedUsers: [
      'NLP Research Scientists & Machine Learning Engineers',
      'Public Sector Digital Transformation Specialists',
      'Financial Inclusion & Vernacular Tech Developers'
    ],
    problem:
      'Off-the-shelf commercial vector embedding models (OpenAI, Cohere) perform poorly on agglutinative African languages like Kinyarwanda and Swahili. Morpheme-rich structures cause severe token fragmentation, leading to high retrieval failure rates in vernacular public service assistants and mobile financial platforms.',
    challengeDetails: [
      'Agglutinative affixes and prefix/suffix compound words result in out-of-vocabulary tokenization explosions.',
      'Scarcity of curated, standardized evaluation datasets for regional language semantic search.',
      'Severe memory constraints on local hosting infrastructure requiring aggressive vector compression without accuracy loss.'
    ],
    roleAndContribution:
      'Authored and led by Dr. Claire Uwase and Aimable Bigwi Mugisha. We designed the morphological tokenization preprocessor, fine-tuned dense bi-encoder transformer models, and benchmarked memory-efficient HNSW and IVF-PQ vector indexing algorithms.',
    solution:
      'Constructed a specialized morphological subword tokenizer for Kinyarwanda paired with contrastive learning fine-tuning. Benchmarked vector index memory footprints and retrieval latency across quantized 8-bit and 4-bit scalar quantization schemes.',
    architectureDetails: [
      'Morphological Tokenizer: Splits complex agglutinative affixes to preserve semantic root meaning across sentence variations.',
      'Custom Bi-Encoder: Fine-tuned multilingual transformer generating 384-dimensional dense semantic embeddings.',
      'Quantized Vector Store: Qdrant / pgvector utilizing scalar quantization for minimal RAM consumption.',
      'Standardized Benchmark Suite: Open evaluation harness measuring Mean Reciprocal Rank (MRR@10) and NDCG@10.'
    ],
    dataUsed:
      '850,000 curated sentence pairs spanning regional administrative gazettes, agricultural extension guides, and public health bulletins.',
    dataLimitations: [
      'Limited domain coverage outside of administrative and technical documentation.',
      'Dialectical variations between rural provinces requiring ongoing regional validation.'
    ],
    results: {
      measured: [
        '34% increase in Mean Reciprocal Rank (MRR@10) over baseline multilingual BERT on Kinyarwanda query retrieval.',
        'Vector index memory footprint reduced by 58% via 8-bit scalar quantization with under 1.2% retrieval accuracy trade-off.',
        'Inference latency of 18ms per query on localized CPU infrastructure.',
        'Open-source evaluation split published for the regional research community.'
      ],
      expected: [
        'Foundation for accessible, vernacular conversational voice assistants serving over 40M regional speakers.',
        'Elimination of recurring cloud licensing costs for sovereign government public service portals.'
      ]
    },
    repoUrl: 'https://github.com/rebeccah-arch/Bigwi-house',
    accessNote: 'Preprint research paper, model weights, and benchmark evaluation scripts available in public research repository.',
    technologies: ['PyTorch', 'Hugging Face', 'Qdrant', 'pgvector', 'Python', 'FastAPI', 'Docker'],
    leadPractitioner: {
      name: 'Dr. Claire Uwase',
      role: 'Head of Applied AI & Machine Learning Research',
      avatar: '/images/team/leader-applied-ai.jpg'
    }
  },
  {
    id: 'sovereign-data-schema-verification',
    slug: 'sovereign-data-schema-verification',
    title: 'Automated Data Sovereignty & Sovereign Schema Verification Framework',
    subtitle: 'Declarative policy-as-code schema enforcement and automated compliance audit reporting under Rwanda Law No. 058/2021.',
    sector: 'Data Governance & Sovereign Systems Architecture',
    status: 'Academic & Research Project',
    clientOrInitiative: 'DataSphere Institutional Governance Practice',
    deliveryTimeline: 'Published Governance Toolchain & Whitepaper',
    featuredImage: '/images/insights/wave_grid.jpg',
    intendedUsers: [
      'Data Protection Officers (DPO) & Legal Compliance Teams',
      'Enterprise Software Architects & DevOps Engineers',
      'Public Sector IT Procurement Evaluators'
    ],
    problem:
      'Enterprises adopting cloud and hybrid analytics lack programmatic methods to verify that database migrations, foreign API calls, and third-party SaaS tools comply with national data localization and cryptographic masking statutes prior to production deployment.',
    challengeDetails: [
      'Compliance audits are traditionally manual, retrospective, and conducted months after software deployments.',
      'Engineers frequently expose unmasked Personally Identifiable Information (PII) columns in development test queries.',
      'Complex regulatory language in national privacy laws makes it difficult to translate legal mandates into CI/CD build assertions.'
    ],
    roleAndContribution:
      'Developed by Aimable Bigwi Mugisha and the DataSphere advisory practice. We codified statutory data protection requirements into machine-readable JSON Schema and Open Policy Agent (OPA) assertions that execute automatically in CI/CD pipelines.',
    solution:
      'Built a declarative schema auditing tool that inspects database migrations, dbt model definitions, and API payloads. The tool flags unmasked citizen IDs, evaluates residency metadata tags, and halts deployments that breach sovereign data policies.',
    architectureDetails: [
      'Static Schema Analyzer: Parses SQL DDL, dbt YAML schemas, and OpenAPI specifications during CI/CD checks.',
      'Policy Engine: Open Policy Agent (OPA) rules encoding Rwanda Law No. 058/2021 data handling articles.',
      'Automated Audit Generator: Compiles cryptographic verification certificates proving compliance for statutory regulators.',
      'Developer CLI: Lightweight command-line tool allowing engineers to test schema compliance in local environments.'
    ],
    dataUsed:
      '140 enterprise schema definitions across healthcare, commercial banking, citizen registries, and telecommunications architectures.',
    dataLimitations: [
      'Static schema inspection cannot detect runtime dynamic data injections without complementary query proxy logging.',
      'Jurisdictional variations between regional economic communities (EAC, COMESA) requiring configurable rule sets.'
    ],
    results: {
      measured: [
        '100% detection rate of unencrypted PII fields across a benchmark suite of 140 enterprise schema definitions.',
        'Policy verification executes in under 4.2 seconds within standard GitHub Actions CI/CD workflows.',
        'Eliminated an estimated 12 hours of manual compliance documentation review per agile sprint.',
        'Adopted as standard internal engineering gate across all BIGWI HOUSE production client deployments.'
      ],
      expected: [
        'Standardized adoption as public sector software procurement guideline across regional ministries.',
        'Integration with automated continuous data lineage auditing engines.'
      ]
    },
    repoUrl: 'https://github.com/rebeccah-arch/Bigwi-house',
    accessNote: 'Full policy-as-code specification rulesets, CI/CD action templates, and governance whitepaper available on GitHub.',
    technologies: ['Open Policy Agent', 'Python', 'dbt', 'SQL', 'GitHub Actions', 'Docker'],
    leadPractitioner: {
      name: 'Aimable Bigwi Mugisha',
      role: 'Managing Director & Principal Architect',
      avatar: '/images/team/leader-managing-director.jpg'
    }
  }
]
