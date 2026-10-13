'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  X,
  Share2
} from '@/components/Icons'

interface CaseStudy {
  id: string
  title: string
  sector: string
  image: string
  challenge: string
  solution: string
  impact: string[]
  technologies: string[]
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'kpn-agentic-customer-care',
    title: 'How KPN is building an agentic AI engine for customer care',
    sector: 'Telecommunications & Customer Support',
    image: '/images/mobile-banking.jpg',
    challenge:
      'High inquiry volume across multi-lingual customer support channels causing response delays and costly manual escalations.',
    solution:
      'Engineered an agentic RAG workflow with deterministic Pydantic schema validation connected to central banking core APIs with strict role-based access control.',
    impact: [
      '78% first-contact resolution for routine account and transaction inquiries',
      'Average customer response time dropped from 45 minutes to 4.2 seconds',
      'Zero hallucinations on account balance and KYC lookup queries'
    ],
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'LangChain', 'Redis', 'Docker']
  },
  {
    id: 'team-visma-racing-smarter',
    title: 'How Team Visma | Lease a Bike and DataSphere are racing smarter with AI',
    sector: 'Sports Telemetry & Analytics',
    image: '/images/logistics-terminal.jpg',
    challenge:
      'High-frequency telemetry from hundreds of athlete sensors and race route topography required real-time pacing models and energy expenditure optimization.',
    solution:
      'Deployed a streaming telemetry ingestion and predictive pacing engine calculating dynamic power thresholds in real time during stage races.',
    impact: [
      'Sub-second race telemetry analysis across 100+ sensor metrics',
      'Personalized dynamic nutrition and power strategies for riders',
      'Data-backed strategic decision-making in competitive race conditions'
    ],
    technologies: ['Kafka', 'Python', 'ClickHouse', 'PyTorch', 'FastAPI']
  },
  {
    id: 'next-gen-communicators',
    title: 'Preparing the next generation of confident communicators in an AI-driven economy',
    sector: 'Enterprise Education & Skills',
    image: '/images/hero-team.jpg',
    challenge:
      'Severe skills gap where operational teams lacked practical data fluency and generative AI literacy for day-to-day workflow automation.',
    solution:
      'Designed a structured 8-week corporate upskilling program with hands-on labs in prompt engineering, automated reporting, and modern data stack tools.',
    impact: [
      'Over 250 enterprise professionals certified in applied AI workflows',
      '300% increase in autonomous workflow automation across business units',
      'Reduced dependence on central IT for routine analytical reports'
    ],
    technologies: ['dbt', 'Python', 'Power BI', 'LangChain', 'SQL']
  },
  {
    id: 'entel-connect-conversations',
    title: 'From call to opportunity: Entel Connect reimagines customer conversations with DataSphere and Google Cloud',
    sector: 'Telecommunications & Cloud',
    image: '/images/insights/neural_helix.jpg',
    challenge:
      'Millions of customer audio call hours remained unindexed and unusable for customer retention, satisfaction analysis, and compliance audits.',
    solution:
      'Constructed a low-latency speech-to-text transcription and sentiment extraction pipeline feeding an enterprise Medallion Delta Lakehouse.',
    impact: [
      '100% of customer support audio transcribed and indexed within 5 minutes',
      'Early identification of churn risks boosted customer retention by 14%',
      'Automated compliance auditing on regulatory script disclosures'
    ],
    technologies: ['Google Cloud', 'Whisper NLP', 'Delta Lake', 'dbt', 'FastAPI']
  },
  {
    id: 'modernizing-100-year-business',
    title: 'Modernizing a 100-year-old business model with AI',
    sector: 'Manufacturing & Distribution',
    image: '/images/executive-strategy.jpg',
    challenge:
      'Legacy on-premise relational database slowed by 14-hour batch jobs that frequently timed out and delayed morning warehouse dispatches.',
    solution:
      'Migrated legacy database workloads to a scalable ClickHouse and PostgreSQL lakehouse with incremental dbt models and zero downtime.',
    impact: [
      'Nightly batch transformation time slashed from 14 hours to 18 minutes',
      'Real-time inventory visibility across 12 regional distribution hubs',
      '40% lower monthly cloud infrastructure maintenance costs'
    ],
    technologies: ['ClickHouse', 'dbt', 'Airflow', 'PostgreSQL', 'Docker']
  },
  {
    id: 'toshiba-tec-realtime-decisions',
    title: 'How Toshiba Tec and DataSphere are turning retail data into real-time decisions with NVIDIA',
    sector: 'Retail & Consumer Tech',
    image: '/images/insights/light_trails.jpg',
    challenge:
      'Stockouts on high-velocity items and delayed price adjustments during high-inflation periods eroding retail gross profit margins.',
    solution:
      'Built a low-latency price elasticity and automated demand forecasting model deployed on GPU-accelerated containerized inference APIs.',
    impact: [
      'Stockout incidents decreased by 34% across 80+ retail locations',
      'Dynamic price adjustments preserved 4.2% in gross commercial margin',
      'Sub-second API response time during peak holiday checkout traffic'
    ],
    technologies: ['NVIDIA CUDA', 'Scikit-Learn', 'FastAPI', 'Redis', 'PostgreSQL']
  },
  {
    id: 'merck-clinical-authoring',
    title: 'With gen AI, Merck and DataSphere transform clinical authoring',
    sector: 'Healthcare & Pharmaceuticals',
    image: '/images/team-atrium.jpg',
    challenge:
      'Clinical trial data reconciliation required hundreds of hours of manual verification to ensure consistency with stringent regulatory schemas.',
    solution:
      'Developed a deterministic LLM document extraction and schema reconciliation pipeline with cryptographic audit logs.',
    impact: [
      'Document authoring time reduced by 65% with zero schema compliance breaches',
      'Automated cross-referencing of medical lab metrics against baseline protocols',
      'Full audit trail and HIPAA/GDPR data masking built into pipeline boundaries'
    ],
    technologies: ['Python', 'FastAPI', 'Pydantic', 'LangChain', 'PostgreSQL']
  },
  {
    id: 'jubilant-ingrevia-transformation',
    title: "How a digital, operational, and skills transformation took Jubilant Ingrevia's business to the next level",
    sector: 'Chemicals & Manufacturing',
    image: '/images/data-engineer.jpg',
    challenge:
      'Disparate plant telemetry and manual maintenance logging causing unexpected equipment downtime and batch yield variations.',
    solution:
      'Deployed an IoT sensor ingestion platform paired with predictive maintenance models predicting machine failure days in advance.',
    impact: [
      'Unscheduled equipment downtime reduced by 41%',
      'Batch yield consistency improved by 3.8% across core production lines',
      'Centralized plant telemetry visible on real-time executive dashboards'
    ],
    technologies: ['PostgreSQL', 'Kafka', 'FastAPI', 'Superset', 'Docker']
  },
  {
    id: 'family-kitchen-power-of-ai',
    title: 'A family owned kitchen and homeware company brings the power of AI to the dinner table',
    sector: 'E-Commerce & Retail',
    image: '/images/insights/ring_segment.jpg',
    challenge:
      'E-commerce customer support overloaded with product sizing, recipe pairing, and warranty questions during seasonal peak campaigns.',
    solution:
      'Integrated an intelligent catalog search and customer recommendation agent grounded in verified product specifications.',
    impact: [
      'Average order value (AOV) increased by 19% via personalized bundle recommendations',
      'Customer support resolution rate reached 82% without human intervention',
      'Zero catalog hallucination across 5,000+ SKU inventory items'
    ],
    technologies: ['FastAPI', 'LangChain', 'Redis', 'PostgreSQL', 'React']
  },
  {
    id: 'ai-native-dispute-resolution',
    title: 'DataSphere helps pioneer an AI-native approach in dispute resolution',
    sector: 'Legal & Regulatory Tech',
    image: '/images/insights/trends_outlook_hero.jpg',
    challenge:
      'High volume of transaction dispute claims requiring manual case evidence gathering across multiple legacy financial databases.',
    solution:
      'Constructed an automated evidence synthesis engine that gathers audit logs, cross-references transaction ledgers, and drafts resolution dossiers.',
    impact: [
      'Case resolution turnaround improved from 5 business days to 4 hours',
      '94% accuracy in automated preliminary claim categorization',
      'Auditors review standardized executive briefs rather than searching raw logs'
    ],
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker']
  },
  {
    id: 'nvidia-powered-avatars',
    title: 'DataSphere creates a new generation of NVIDIA-powered avatars',
    sector: 'Interactive AI & Media',
    image: '/images/insights/fiber_cables.jpg',
    challenge:
      'Creating realistic, low-latency conversational interactive digital avatars for customer kiosks and banking branch terminals.',
    solution:
      'Built a GPU-optimized speech-to-video inference pipeline synchronizing real-time voice synthesis with photorealistic avatar lip-sync.',
    impact: [
      'Sub-200ms end-to-end voice-to-video generation latency',
      'Deployed across multi-lingual kiosk environments',
      'Natural conversational cadence with high user satisfaction ratings'
    ],
    technologies: ['NVIDIA Omniverse', 'PyTorch', 'FastAPI', 'WebRTC', 'Docker']
  },
  {
    id: 'emirates-global-aluminium',
    title: 'Emirates Global Aluminium: Leading the industry with AI-driven transformation',
    sector: 'Heavy Industry & Mining',
    image: '/images/kigali-skyline.jpg',
    challenge:
      'Smelting pot energy efficiency and anode degradation management requiring complex physical modeling under extreme heat conditions.',
    solution:
      'Trained deep reinforcement learning algorithms to dynamically adjust pot voltage and chemical feed rates in real time.',
    impact: [
      'Substantial reduction in per-ton electricity consumption',
      'Extended potline lifespan through predictive thermal equilibrium control',
      'Automated safety monitoring alerts for field operators'
    ],
    technologies: ['PyTorch', 'ClickHouse', 'PostgreSQL', 'FastAPI', 'Grafana']
  },
  {
    id: 'telecom-personalized-training',
    title: 'Empowering telecom employees with personalized AI-powered training and coaching tools',
    sector: 'Telecommunications & HR',
    image: '/images/insights/wave_grid.jpg',
    challenge:
      'Training thousands of distributed sales and support agents with static manuals led to inconsistent customer service quality.',
    solution:
      'Developed an adaptive AI roleplay simulator that gives agents instant feedback on pitch clarity, objection handling, and product knowledge.',
    impact: [
      'Agent ramp-up time shortened by 50% across 2,000+ staff members',
      'Customer satisfaction scores increased by 22 points post-training',
      'Automated compliance scoring on regulatory disclosures'
    ],
    technologies: ['Python', 'FastAPI', 'LangChain', 'PostgreSQL', 'React']
  },
  {
    id: 'aviva-digital-claims',
    title: 'Instilling a digital-first culture and settling customer claims faster and more accurately for Aviva',
    sector: 'Insurance & Risk Management',
    image: '/images/team-atrium.jpg',
    challenge:
      'Manual damage photo inspection and repair cost estimation causing multi-week claim processing backlogs.',
    solution:
      'Constructed a computer vision damage assessment pipeline that verifies photo metadata, estimates repair costs, and flags fraud anomalies.',
    impact: [
      'Claim approval turnaround reduced from 12 days to under 30 minutes for standard claims',
      'Fraud detection accuracy improved by 38% via image EXIF anomaly detection',
      'Customer Net Promoter Score (NPS) rose by 18 points'
    ],
    technologies: ['PyTorch Vision', 'FastAPI', 'PostgreSQL', 'Docker', 'AWS']
  },
  {
    id: 'one-ocean-foundation',
    title: 'Using gen AI, One Ocean Foundation creates an accurate picture of how businesses are sustaining our oceans',
    sector: 'Sustainability & ESG Analytics',
    image: '/images/hero-team.jpg',
    challenge:
      'Analyzing thousands of unstructured ESG corporate disclosures to evaluate real ocean sustainability impact.',
    solution:
      'Engineered an automated ESG document extraction and structured disclosure scoring pipeline with verifiable citation links.',
    impact: [
      'Standardized scoring across 1,200+ global corporate sustainability filings',
      'Identified data gaps and greenwashing risks with automated evidence trails',
      'Published comprehensive global ocean sustainability benchmark reports'
    ],
    technologies: ['Python', 'LangChain', 'PostgreSQL', 'dbt', 'Metabase']
  },
  {
    id: 'ing-gen-ai-people-first',
    title: 'How ING uses gen AI to put people first',
    sector: 'Banking & Financial Services',
    image: '/images/mobile-banking.jpg',
    challenge:
      'Retail banking branch staff and mortgage advisors spending hours navigating fragmented policy documents and risk compliance manuals.',
    solution:
      'Implemented a secure enterprise knowledge assistant with semantic citation linking directly to verified compliance guidelines.',
    impact: [
      'Advisor documentation retrieval time cut from 18 minutes to 15 seconds',
      'Consistent, audit-compliant mortgage advice provided across 400+ branches',
      'Staff satisfaction rating improved by 32%'
    ],
    technologies: ['Python', 'PostgreSQL', 'LangChain', 'FastAPI', 'Azure']
  },
  {
    id: 'formula-e-world-record',
    title: 'A world record for Formula E',
    sector: 'Motorsport & Real-Time Telemetry',
    image: '/images/case-studies/formula-e.jpg',
    challenge:
      'Extreme environmental conditions and milli-second braking energy recovery calculations during high-speed acceleration runs.',
    solution:
      'Engineered an edge telemetry inference system processing real-time battery thermal dissipation and inverter torque limits.',
    impact: [
      'Official Guinness World Record for indoor land speed in electric vehicles',
      'Sub-5ms telemetry round-trip latency at 218.71 km/h',
      'Zero sensor telemetry packet loss during extreme vibration runs'
    ],
    technologies: ['C++', 'Rust', 'ClickHouse', 'Kafka', 'Grafana']
  },
  {
    id: 'vistra-efficiency-emissions',
    title: 'AI helps Vistra improve efficiency and reduce emissions',
    sector: 'Energy & Utilities',
    image: '/images/insights/light_trails.jpg',
    challenge:
      'Complex thermodynamic variability across power generation boilers resulting in excess carbon emissions and fuel waste.',
    solution:
      'Deployed a digital twin thermodynamic optimizer adjusting fuel-to-air ratios dynamically across varying grid load demands.',
    impact: [
      'Over 1.6 million tons of carbon emissions eliminated annually',
      'Thermal efficiency increased by 1.8% across generating units',
      '$23M in annual fuel cost savings achieved across power stations'
    ],
    technologies: ['Python', 'PyTorch', 'ClickHouse', 'FastAPI', 'TimescaleDB']
  },
  {
    id: 'tata-steel-global-acclaim',
    title: "How Tata Steel's plant in India tapped the value of data – and won global acclaim",
    sector: 'Heavy Manufacturing & Metals',
    image: '/images/case-studies/tata-steel.jpg',
    challenge:
      'Variable raw material grades causing blast furnace thermal instability and costly refractory lining replacements.',
    solution:
      'Built an end-to-end blast furnace predictive analytics system optimizing raw burden mix and hot blast temperatures in real time.',
    impact: [
      'World Economic Forum Global Lighthouse Network recognition',
      'Specific fuel consumption reduced by 4.1%',
      'Annual operational cost reduction of $12M+'
    ],
    technologies: ['Python', 'Apache Spark', 'PostgreSQL', 'Airflow', 'Tableau']
  },
  {
    id: 'americas-cup-title-defense',
    title: 'AI bot helps Emirates Team New Zealand successfully defend their America’s Cup title',
    sector: 'High-Performance Sailing & Aerodynamics',
    image: '/images/case-studies/americas-cup.jpg',
    challenge:
      'Evaluating millions of complex hydrofoil and aerodynamic design iterations prior to physical boat construction on the water.',
    solution:
      'Constructed a deep reinforcement learning sailing bot that simulated thousands of race hours to optimize foil geometry and trimming tactics.',
    impact: [
      'Foil design cycle accelerated by 10x with zero human sailor fatigue',
      'Discovered non-intuitive hydrofoil trimming maneuvers that won critical match races',
      'Successful back-to-back America’s Cup title defense'
    ],
    technologies: ['PyTorch', 'Reinforcement Learning', 'CUDA', 'Python', 'C++']
  },
  {
    id: 'ascendum-field-equipment-ai',
    title: 'Ascendum, a global provider of machinery and equipment, empowers field agents with AI tools to diagnose and resolve customer issues faster',
    sector: 'Industrial Machinery & Equipment',
    image: '/images/case-studies/mining-machinery.jpg',
    challenge:
      'Complex telemetry fault codes on heavy excavators and construction machinery required senior master technician field dispatches.',
    solution:
      'Developed a mobile multimodal diagnostics application with sound analysis, fault code matching, and step-by-step guided repair workflows.',
    impact: [
      'Field mean-time-to-repair (MTTR) reduced by 44%',
      'First-visit resolution rate jumped from 58% to 86%',
      'Standardized technician onboarding across 4 continents'
    ],
    technologies: ['FastAPI', 'PyTorch Vision', 'LangChain', 'React Native', 'PostgreSQL']
  },
  {
    id: 'freeport-mcmoran-ai-transformation',
    title: 'How a copper-mining giant Freeport-McMoRan unlocked next-level performance by undergoing AI transformation',
    sector: 'Mining & Natural Resources',
    image: '/images/case-studies/mining-machinery.jpg',
    challenge:
      'Ore grade variability at bagdad copper concentrator mill causing recovery rate drops and mineral tailings loss.',
    solution:
      'Created an AI-driven concentrator operating model optimizing crusher feed rates and flotation chemical additions in real time.',
    impact: [
      'Copper recovery increased by 10%, generating over 200 million lbs of additional copper',
      'Mill operating efficiency reached historic high with zero additional capital expenditure',
      'Expanded AI operating model across the entire global mining asset portfolio'
    ],
    technologies: ['Apache Spark', 'Python', 'ClickHouse', 'FastAPI', 'Databricks']
  }
]

export default function WorkPage() {
  const [activeCase, setActiveCase] = useState<CaseStudy | null>(null)
  const [copied, setCopied] = useState(false)

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  return (
    <div className="w-full min-h-screen bg-white dark:bg-[#0b0f19] text-slate-900 dark:text-stone-100 transition-colors duration-300">
      
      {/* 1. Header Masthead (Exact McKinsey QuantumBlack Style) */}
      <section className="pt-6 sm:pt-8 md:pt-10 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-[1240px] mx-auto text-center space-y-5">
        
        {/* Top-Left Back Link */}
        <div className="text-left mb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-stone-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="h-3 w-3" />
            <span>Back to Overview</span>
          </Link>
        </div>

        {/* Centered Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 max-w-3xl mx-auto text-center"
        >
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-slate-950 dark:text-white leading-[1.15]">
            Case Studies
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-stone-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Learn how we&rsquo;re helping clients capture the potential of generative AI to transform their organizations.
          </p>

          {/* Centered Blue CTA Button */}
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#1A56DB] hover:bg-blue-700 text-white font-bold px-7 py-2.5 text-xs tracking-wide shadow-sm transition-colors"
            >
              <span>Connect with us</span>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. 3-Column Case Study Grid (Exact Screenshot Layout: Clean rectangular image + Bold sans-serif title with bright blue chevron) */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 sm:gap-x-10 sm:gap-y-16">
          {CASE_STUDIES.map((study, idx) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.06, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setActiveCase(study)}
              className="group cursor-pointer flex flex-col justify-start"
            >
              {/* Image Card: Clean 16:9 / 16:10 aspect ratio, no borders, natural photo */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-stone-900 mb-3.5">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
              </div>

              {/* Title with Blue Angle Bracket (Exact Screenshot Style: Dark bold sans-serif text followed by blue >) */}
              <h3 className="font-sans font-bold text-[15px] sm:text-[16px] text-slate-950 dark:text-stone-100 leading-[1.35] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                <span>{study.title}</span>
                <span className="text-[#1A56DB] dark:text-[#3B82F6] font-bold ml-1.5 inline-block text-[17px] leading-none">&rsaquo;</span>
              </h3>
            </motion.article>
          ))}
        </div>
      </section>

      {/* 3. Interactive Case Study Reading Drawer/Modal */}
      <AnimatePresence>
        {activeCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-stone-950 p-6 sm:p-10 shadow-2xl border border-slate-200 dark:border-stone-800 space-y-6"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveCase(null)}
                className="absolute top-6 right-6 h-9 w-9 rounded-full bg-slate-100 dark:bg-stone-900 border border-slate-200 dark:border-stone-800 flex items-center justify-center text-slate-600 dark:text-stone-300 hover:bg-slate-200 dark:hover:bg-stone-800 transition-colors"
                aria-label="Close reader"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Header */}
              <div className="space-y-3 pr-10 border-b border-slate-200 dark:border-stone-800 pb-5">
                <div className="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">
                  Case Study &bull; {activeCase.sector}
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white leading-tight">
                  {activeCase.title}
                </h2>
              </div>

              {/* Case Breakdown Grid */}
              <div className="space-y-5 text-sm text-slate-700 dark:text-stone-300 leading-relaxed font-normal">
                
                {/* Challenge */}
                <div className="space-y-1.5">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    The Challenge:
                  </h4>
                  <p className="leading-relaxed">{activeCase.challenge}</p>
                </div>

                {/* Solution */}
                <div className="space-y-1.5">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    Our Architecture &amp; Delivery:
                  </h4>
                  <p className="leading-relaxed">{activeCase.solution}</p>
                </div>

                {/* Impact Takeaways */}
                <div className="bg-slate-50 dark:bg-stone-900 border border-slate-200 dark:border-stone-800 p-5 space-y-3">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                    <span>Measured Business Impact:</span>
                  </h4>
                  <ul className="space-y-2">
                    {activeCase.impact.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-stone-300">
                        <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="space-y-2 pt-2">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white block">
                    Technology Toolchain:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeCase.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-slate-100 dark:bg-stone-800 border border-slate-200 dark:border-stone-700 px-3 py-1 font-mono text-xs font-medium text-slate-800 dark:text-stone-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Modal Footer Actions */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-slate-200 dark:border-stone-800">
                <button
                  type="button"
                  onClick={handleShare}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-stone-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Share2 className="h-3.5 w-3.5" />
                  <span>{copied ? 'Link Copied!' : 'Share Case Study'}</span>
                </button>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveCase(null)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-stone-400 hover:text-slate-900 dark:hover:text-white"
                  >
                    Close
                  </button>

                  <Link
                    href="/contact"
                    onClick={() => setActiveCase(null)}
                    className="inline-flex items-center gap-2 bg-[#1A56DB] hover:bg-blue-700 text-white font-bold px-5 py-2.5 text-xs shadow transition-colors"
                  >
                    <span>Schedule architecture session</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  )
}
