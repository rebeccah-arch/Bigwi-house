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

interface ServiceItem {
  id: string
  pillar: 'Data Engineering' | 'Analytics & BI' | 'Applied Machine Learning' | 'Strategic Advisory'
  title: string
  image: string
  description: string
  deliverables: string[]
}

const SERVICES_DATA: ServiceItem[] = [
  // 1. Data Engineering
  {
    id: 'data-pipelines-etl',
    pillar: 'Data Engineering',
    title: 'Automated Ingestion & ETL/ELT Pipelines',
    image: '/images/data-engineer.jpg',
    description:
      'We design and build resilient, automated pipelines that extract, normalize, and load data from databases, third-party APIs, IoT sensors, and unstructured files into centralized warehouses.',
    deliverables: [
      'Idempotent ingestion schedules with automated error recovery',
      'Continuous data contract validation and schema drift alerts',
      'Sub-minute stream processing for high-velocity transaction feeds'
    ]
  },
  {
    id: 'lakehouse-medallion',
    pillar: 'Data Engineering',
    title: 'Medallion Lakehouse Architecture (Bronze/Silver/Gold)',
    image: '/images/insights/light_trails.jpg',
    description:
      'Structuring raw storage into high-speed queryable layers, separating raw telemetry from cleaned business entities and executive aggregations.',
    deliverables: [
      'Immutable Bronze raw event capture with point-in-time recovery',
      'Silver conformed data layers with referential integrity guarantees',
      'Gold pre-aggregated analytical cubes optimized for sub-second BI loading'
    ]
  },
  {
    id: 'offline-field-telemetry',
    pillar: 'Data Engineering',
    title: 'Offline-First Telemetry & Edge Data Collection',
    image: '/images/logistics-terminal.jpg',
    description:
      'Custom mobile sync engines for field operators in low-connectivity environments, ensuring zero data loss and automated queue synchronization upon reconnection.',
    deliverables: [
      'Local-first SQLite storage with cryptographic device signatures',
      'Conflict-free multi-agent sync queues with automatic resolution',
      'Battery and bandwidth compression protocols for remote field hardware'
    ]
  },

  // 2. Analytics & BI
  {
    id: 'executive-kpi-dashboards',
    pillar: 'Analytics & BI',
    title: 'Executive Decision Portals & KPI Trees',
    image: '/images/executive-strategy.jpg',
    description:
      'We design intuitive, real-time executive dashboards that link daily operational metrics directly to quarterly financial targets and strategic EBITDA objectives.',
    deliverables: [
      'Automated executive summary dashboards updated in real time',
      'Semantic KPI trees establishing single-source-of-truth definitions',
      'Scheduled daily PDF and email briefing digests for leadership'
    ]
  },
  {
    id: 'commercial-cohort-analytics',
    pillar: 'Analytics & BI',
    title: 'Customer Intelligence & Cohort Modeling',
    image: '/images/mobile-banking.jpg',
    description:
      'Deconstructing customer lifecycle patterns, identifying high-value subscriber segments, predicting churn risks, and optimizing pricing strategies.',
    deliverables: [
      'Customer lifetime value (LTV) and churn hazard rate models',
      'RFM (Recency, Frequency, Monetary) behavioral segmentation',
      'Marketing campaign attribution and unit payback telemetry'
    ]
  },

  // 3. Applied Machine Learning
  {
    id: 'production-ml-models',
    pillar: 'Applied Machine Learning',
    title: 'Custom Machine Learning & Scoring Algorithms',
    image: '/images/insights/neural_helix.jpg',
    description:
      'Developing, evaluating, and deploying practical machine learning models tailored to specific institutional workflows, risk parameters, and regional market realities.',
    deliverables: [
      'Alternative data credit risk and underwriting models',
      'Dynamic geospatial logistics dispatch and route optimization heuristics',
      'Document NLP and automated form classification pipelines'
    ]
  },
  {
    id: 'mlops-drift-telemetry',
    pillar: 'Applied Machine Learning',
    title: 'Production MLOps, Drift Telemetry & Retraining',
    image: '/images/insights/wave_grid.jpg',
    description:
      'Continuous telemetry layers tracking prediction latency, Population Stability Index (PSI), and feature drift to prevent silent model degradation.',
    deliverables: [
      'Containerized low-latency FastAPI inference endpoints',
      'Real-time feature distribution and accuracy drift monitors',
      'Automated pipeline retraining triggers with historical versioning'
    ]
  },

  // 4. Strategic Advisory & Governance
  {
    id: 'data-maturity-audits',
    pillar: 'Strategic Advisory',
    title: 'Institutional Data Readiness & Modern Stack Advisory',
    image: '/images/team-atrium.jpg',
    description:
      'Evaluating enterprise data infrastructure, pipeline debt, and AI feasibility to build actionable 12-month technology roadmaps with defined ROI payback.',
    deliverables: [
      'Comprehensive data architecture audit and bottleneck assessment',
      'Target modern data stack blueprint and vendor evaluation',
      '2-week zero-risk pilot sprint specifications'
    ]
  },
  {
    id: 'governance-data-sovereignty',
    pillar: 'Strategic Advisory',
    title: 'Data Governance, Sovereignty & Compliance Audits',
    image: '/images/hero-team.jpg',
    description:
      'Implementing role-based access control (RBAC), data cataloging, column-level masking, and immutable access logging compliant with regional data protection acts.',
    deliverables: [
      'Data cataloging and enterprise dictionary governance',
      'PII masking and sovereign cloud hosting frameworks',
      'Immutable audit logging ensuring 100% regulatory readiness'
    ]
  }
]

const PILLARS = [
  'All Capabilities',
  'Data Engineering',
  'Analytics & BI',
  'Applied Machine Learning',
  'Strategic Advisory'
]

export default function ServicesPage() {
  const [selectedPillar, setSelectedPillar] = useState('All Capabilities')
  const [activeService, setActiveService] = useState<ServiceItem | null>(null)

  const filteredServices =
    selectedPillar === 'All Capabilities'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.pillar === selectedPillar)

  return (
    <div className="w-full min-h-screen bg-white dark:bg-[#080a11] text-slate-900 dark:text-stone-100 transition-colors duration-300">

      {/* 1. Header Masthead (Exact Quantium / McKinsey Style) */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-[1240px] mx-auto text-center space-y-5">

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
            Capabilities &amp; Services
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-stone-300 max-w-2xl mx-auto leading-relaxed font-normal">
            From modern data engineering and executive analytics to applied machine learning and strategic cloud advisory, we provide end-to-end data capability for scaling enterprises.
          </p>

          {/* Centered Blue CTA Button */}
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#1A56DB] hover:bg-blue-700 text-white font-bold px-7 py-2.5 text-xs tracking-wide shadow-sm transition-colors"
            >
              <span>Schedule a practice consultation</span>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. Main Content Container */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-12">

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-200 dark:border-stone-800 pb-6">
          {PILLARS.map((pil) => (
            <button
              key={pil}
              type="button"
              onClick={() => setSelectedPillar(pil)}
              className={`rounded-full px-5 py-2 text-xs font-semibold transition-all ${
                selectedPillar === pil
                  ? 'bg-slate-950 text-white shadow-sm dark:bg-blue-600 dark:text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-stone-900 dark:text-stone-300 dark:hover:bg-stone-800'
              }`}
            >
              {pil}
            </button>
          ))}
        </div>

        {/* 3. Services Grid (Cards with Sample Images, No Icons, No Tech Tags) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredServices.map((service, idx) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.06 }}
              onClick={() => setActiveService(service)}
              className="group cursor-pointer flex flex-col justify-between border border-slate-200 dark:border-stone-800 bg-white dark:bg-stone-900/40 p-6 sm:p-7 shadow-sm hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-md transition-all duration-300"
            >
              <div className="space-y-4">
                
                {/* Clean Image Card */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-stone-900">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Pillar Tag */}
                <span className="font-mono text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block">
                  {service.pillar}
                </span>

                {/* Title with Blue Angle Bracket */}
                <h3 className="font-serif font-bold text-lg sm:text-xl text-slate-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                  <span>{service.title}</span>
                  <span className="text-[#1A56DB] dark:text-[#3B82F6] font-bold ml-1.5 inline-block text-[17px] leading-none">&rsaquo;</span>
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-stone-300 leading-relaxed font-normal">
                  {service.description}
                </p>

                {/* Deliverables */}
                <div className="pt-3 border-t border-slate-100 dark:border-stone-800 space-y-2">
                  <span className="text-[11px] font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider block">
                    Core Deliverables:
                  </span>
                  <ul className="space-y-1.5">
                    {service.deliverables.slice(0, 3).map((del, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-stone-300">
                        <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Action Link at Bottom */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-stone-800 flex items-center justify-between">
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:underline">
                  View Practice Scope &rsaquo;
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* 4. Quantium-Style Bottom Consultation CTA Section */}
      <section className="bg-[#080a11] text-white py-20 sm:py-24 text-center border-t border-stone-800/80">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-blue-400 font-semibold">
            Institutional Partnership
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Ready to structure your enterprise data foundations?
          </h2>

          <p className="text-stone-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Schedule a strategic discovery session with our senior solution architects to assess your infrastructure and roadmap realistic implementation milestones.
          </p>

          <div className="pt-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-stone-200 text-slate-950 font-bold px-8 py-3.5 text-xs tracking-wide shadow-md transition-colors"
            >
              <span>Schedule a consultation</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Interactive Service Modal */}
      <AnimatePresence>
        {activeService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-stone-950 p-6 sm:p-10 shadow-2xl border border-slate-200 dark:border-stone-800 space-y-6"
            >
              <button
                type="button"
                onClick={() => setActiveService(null)}
                className="absolute top-6 right-6 h-9 w-9 rounded-full bg-slate-100 dark:bg-stone-900 border border-slate-200 dark:border-stone-800 flex items-center justify-center text-slate-600 dark:text-stone-300 hover:bg-slate-200 dark:hover:bg-stone-800 transition-colors"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="space-y-3 pr-10 border-b border-slate-200 dark:border-stone-800 pb-5">
                <div className="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">
                  {activeService.pillar}
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white leading-tight">
                  {activeService.title}
                </h2>
                <p className="text-sm text-slate-600 dark:text-stone-300 leading-relaxed font-normal">
                  {activeService.description}
                </p>
              </div>

              {/* Service Details & Deliverables */}
              <div className="bg-slate-50 dark:bg-stone-900 border border-slate-200 dark:border-stone-800 p-5 space-y-3">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                  <span>Standard Practice Deliverables:</span>
                </h4>
                <ul className="space-y-2">
                  {activeService.deliverables.map((del, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-stone-300">
                      <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-slate-200 dark:border-stone-800">
                <button
                  type="button"
                  onClick={() => setActiveService(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-stone-400 hover:text-slate-900 dark:hover:text-white"
                >
                  Close
                </button>

                <Link
                  href="/contact"
                  onClick={() => setActiveService(null)}
                  className="inline-flex items-center gap-2 bg-[#1A56DB] hover:bg-blue-700 text-white font-bold px-5 py-2.5 text-xs shadow transition-colors"
                >
                  <span>Discuss requirements with practice lead</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  )
}
