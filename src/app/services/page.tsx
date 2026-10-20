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
  ShieldCheck,
  FileText
} from '@/components/Icons'

interface ServiceItem {
  id: string
  number: string
  title: string
  pillar: string
  image: string
  deliverablesSummary: string
  problemSolves: string
  clientReceives: string[]
  clientProvides: string
  successEvaluation: string
  ngoApplication: string
  technologies: string[]
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'data-management-engineering',
    number: '01',
    title: 'Data management and engineering',
    pillar: 'Data Foundations & Modern Data Stack',
    image: '/images/data-engineer.jpg',
    deliverablesSummary: 'Data cleaning, integrated datasets, pipelines, and quality checks.',
    problemSolves:
      'Organizations and development programs frequently struggle with data scattered across fragmented spreadsheets, mobile field tools, paper surveys, and legacy databases. Inconsistent schemas, duplicated beneficiary records, and missing validation checks lead to compromised reporting, audit vulnerabilities, and slow decision cycles.',
    clientReceives: [
      'Automated, resilient ETL/ELT pipelines with built-in error handling and recovery',
      'Harmonized master datasets with deduplicated records and consistent schemas',
      'Automated data quality checks, schema validation, and drift anomaly alerts',
      'Offline-first synchronization pipelines for remote field data collection',
      'Secure, centralized storage (database, warehouse, or lakehouse) with access controls'
    ],
    clientProvides:
      'Read-only access or exports of raw data sources (databases, spreadsheets, survey platforms), field definitions or data dictionaries where available, and access to program or technical staff to clarify workflow rules.',
    successEvaluation:
      'Evaluated by the elimination of manual data preparation hours (e.g. cutting 2–3 days of monthly spreadsheet collation to automated zero-touch runs), zero undetected schema or pipeline errors, and verifiable data integrity audits.',
    ngoApplication:
      'Integrating remote field surveys (ODK, KoboToolbox, CommCare) from distributed community workers into an automated, central database; deduplicating beneficiary registries; and enforcing automated data quality checks required for strict donor compliance (e.g. USAID, Global Fund, FCDO).',
    technologies: ['PostgreSQL', 'ClickHouse', 'Apache Kafka', 'dbt', 'Python', 'Docker']
  },
  {
    id: 'dashboards-reporting',
    number: '02',
    title: 'Dashboards and reporting',
    pillar: 'Decision Intelligence & Monitoring',
    image: '/images/executive-strategy.jpg',
    deliverablesSummary: 'KPI definitions, management dashboards, automated reporting, and user training.',
    problemSolves:
      'Managers, directors, and donor partners often lack timely visibility into day-to-day operations and program progress. Teams spend countless hours each reporting cycle manually assembling static slide decks and conflicting spreadsheets, resulting in delayed interventions and disputed numbers.',
    clientReceives: [
      'Standardized KPI definitions establishing a documented single source of truth',
      'Interactive executive and operational management dashboards with drill-downs',
      'Automated scheduled report distribution (PDF/email digests) for leadership & donors',
      'Indicator tracking portals directly linked to program targets and milestones',
      'Practical user training sessions and operating manuals for in-house teams'
    ],
    clientProvides:
      'Existing reporting templates, donor indicator guidelines (e.g. PIRS or logframes), access to verified underlying datasets, and feedback from key users on decision priorities during initial layout reviews.',
    successEvaluation:
      'Evaluated by dramatic reduction in reporting cycle turnaround (e.g. from 2 weeks of manual assembly to instant, automated delivery), consistent indicator values across all organizational units, and high weekly active usage by program leaders.',
    ngoApplication:
      'Real-time tracking of indicators against logframe targets (e.g. health facility stock levels, training completion rates, water point uptime); automated monthly donor briefs; and regional/district performance maps that enable coordinators to redirect resources to underperforming sites.',
    technologies: ['Apache Superset', 'Power BI', 'Metabase', 'dbt', 'SQL', 'PostgreSQL']
  },
  {
    id: 'applied-analytics',
    number: '03',
    title: 'Applied analytics',
    pillar: 'Advanced Analytics & Statistical Modeling',
    image: '/images/insights/neural_helix.jpg',
    deliverablesSummary: 'Forecasting, segmentation, statistical predictive models, and decision intelligence.',
    problemSolves:
      'Organizations often make critical resource allocation choices—such as supply orders, beneficiary prioritization, or seasonal staffing—based on intuition or backward-looking averages. Unnecessary manual workflows slow down operations where practical statistical models and clear decision intelligence can provide reliable guidance.',
    clientReceives: [
      'Custom predictive models tailored to operational realities (e.g. risk scoring, demand forecasting)',
      'Beneficiary, facility, or client segmentation models identifying distinct behavioral clusters',
      'Carefully scoped workflow automation for routine data categorization and document extraction',
      'Lightweight, containerized inference endpoints or integrated dashboard scorecards',
      'Full model evaluation benchmarks, error analysis, and operational guidelines'
    ],
    clientProvides:
      'Historical operational records with documented outcomes, clear business criteria or threshold guidelines, and access to subject-matter experts to validate whether model predictions align with operational realities.',
    successEvaluation:
      'Evaluated by measurable accuracy improvements over baseline heuristics (e.g. fewer supply stock-outs, improved targeting precision), low latency, transparent model explainability, and sustained adoption by front-line staff without workflow disruption.',
    ngoApplication:
      'Predictive stock-out forecasting for essential medicines and agricultural inputs; vulnerability segmentation to prioritize cash transfer or nutrition interventions; and automated categorization for incoming field incident reports. (Emphasizing robust, interpretable statistical methods and actionable decision modeling).',
    technologies: ['Python', 'Scikit-Learn', 'Pandas', 'FastAPI', 'Docker', 'PostgreSQL']
  },
  {
    id: 'data-strategy-training',
    number: '04',
    title: 'Data strategy and training',
    pillar: 'Strategic Advisory & Institutional Capability',
    image: '/images/hero-team.jpg',
    deliverablesSummary: 'Readiness assessments, implementation roadmaps, governance guidance, and staff development.',
    problemSolves:
      'Organizations frequently purchase expensive software licenses, cloud services, or one-off tools without an overarching data architecture, resulting in shelfware, security liabilities, skill bottlenecks, and perpetual dependence on external contractors.',
    clientReceives: [
      'Institutional data maturity audits identifying architectural bottlenecks and immediate quick wins',
      'Actionable, phased 12-month technology and implementation roadmaps with clear cost projections',
      'Data governance and data protection frameworks (compliant with Rwanda Law No. 058/2021 & GDPR)',
      'Structured, hands-on training bootcamps customized for technical and program staff',
      'Standard operating procedures (SOPs) enabling long-term internal technical independence'
    ],
    clientProvides:
      'Organizational charts, current software and tool inventories, strategic program goals, and dedicated time for leadership and technical staff to participate in capability assessments and training workshops.',
    successEvaluation:
      'Evaluated by successful completion of prioritized roadmap milestones on time and within budget, verified compliance with national data privacy statutes, and demonstrated independent execution of data tasks by internal staff.',
    ngoApplication:
      'Designing institutional data governance policies for sensitive beneficiary records (e.g. child protection, health status); building sustainable in-house capacity so country-office M&E teams can manage data pipelines independently; and aligning data platforms with national digital health or statistical strategies.',
    technologies: ['Data Governance', 'Rwanda Law 058/2021', 'dbt Semantic Layer', 'Open Policy Agent']
  }
]

const TABS = [
  { label: 'All Practices', value: 'All' },
  { label: 'Data management and engineering', value: 'data-management-engineering' },
  { label: 'Dashboards and reporting', value: 'dashboards-reporting' },
  { label: 'Applied analytics', value: 'applied-analytics' },
  { label: 'Data strategy and training', value: 'data-strategy-training' }
]

export default function ServicesPage() {
  const [selectedTab, setSelectedTab] = useState<string>('All')
  const [activeService, setActiveService] = useState<ServiceItem | null>(null)

  const filteredServices =
    selectedTab === 'All'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.id === selectedTab)

  return (
    <div className="w-full min-h-screen bg-white dark:bg-[#080a11] text-slate-900 dark:text-stone-100 transition-colors duration-300">

      {/* 1. Header Masthead */}
      <section className="pt-8 sm:pt-12 md:pt-14 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto text-center space-y-6">

        {/* Top-Left Back Link */}
        {/* <div className="text-left mb-2">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-stone-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Return to Overview</span>
          </Link>
        </div> */}

        {/* Centered Page Title & Strategic Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 max-w-3xl mx-auto text-center"
        >
          {/* <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-stone-800 bg-slate-50 dark:bg-stone-900 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-teal-400">
            Specialized Practice Areas
          </div> */}

          <h1 className="font-display text-2xl sm:text-4xl md:text-[42px] font-extrabold tracking-tight text-slate-950 dark:text-white leading-tight">
            Capabilities &amp; Services
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-stone-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Four specialized practices delivering practical, end-to-end data capability for commercial enterprises, NGOs, and development programs across Africa: from solid data foundations and indicator reporting to applied analytics and institutional strategy.
          </p>

          {/* Primary Action Button */}
          {/* <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 dark:bg-teal-500 hover:bg-slate-800 dark:hover:bg-teal-400 text-white dark:text-slate-950 font-bold px-7 py-3 text-xs sm:text-sm tracking-wide shadow-md transition-all duration-300"
            >
              <span>Discuss your project</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div> */}
        </motion.div>

        {/* Filter Navigation Tabs */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-2 border-b border-slate-200 dark:border-stone-800 pb-6">
          {TABS.map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => setSelectedTab(tab.value)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${selectedTab === tab.value
                ? 'bg-slate-950 text-white shadow-sm dark:bg-blue-600 dark:text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-stone-900 dark:text-stone-300 dark:hover:bg-stone-800'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

      </section>

      {/* 2. Services Grid (Clean McKinsey Style Matching /work) */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 sm:gap-x-10 sm:gap-y-16">
          {filteredServices.map((service, idx) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: (idx % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setActiveService(service)}
              className="group cursor-pointer flex flex-col justify-start"
            >
              {/* Image Card: Clean 16:10 aspect ratio, no borders, natural photo, exact work style */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-stone-900 mb-3.5">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
              </div>

              {/* Eyebrow / Pillar Tag */}
              <div className="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider mb-1.5">
                Practice {service.number} &bull; {service.pillar}
              </div>

              {/* Title with Blue Angle Bracket (Exact /work Style) */}
              <h3 className="font-sans font-bold text-[17px] sm:text-[19px] text-slate-950 dark:text-stone-100 leading-[1.35] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                <span>{service.title}</span>
                <span className="text-[#1A56DB] dark:text-[#3B82F6] font-bold ml-1.5 inline-block text-[19px] leading-none">&rsaquo;</span>
              </h3>

              {/* Deliverables Summary */}
              <p className="text-xs sm:text-sm text-slate-600 dark:text-stone-400 leading-relaxed mt-2 font-normal">
                {service.deliverablesSummary}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* 3. Bottom Consultation Section */}
      <section className="bg-[#080a11] text-white py-20 sm:py-24 text-center border-t border-stone-800/80">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Ready to structure your enterprise data foundations?
          </h2>

          <p className="text-stone-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Schedule a strategic discovery session with our senior solution architects in Kigali to assess your infrastructure, M&amp;E workflows, data sovereignty, and roadmap realistic implementation milestones.
          </p>

          <div className="pt-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white hover:bg-stone-200 text-slate-950 font-bold px-8 py-3.5 text-xs sm:text-sm tracking-wide shadow-md transition-all duration-300"
            >
              <span>Discuss your project</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Interactive Service Modal (Full Detailed McKinsey Reader) */}
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
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveService(null)}
                className="absolute top-6 right-6 h-9 w-9 rounded-full bg-slate-100 dark:bg-stone-900 border border-slate-200 dark:border-stone-800 flex items-center justify-center text-slate-600 dark:text-stone-300 hover:bg-slate-200 dark:hover:bg-stone-800 transition-colors"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Header */}
              <div className="space-y-3 pr-10 border-b border-slate-200 dark:border-stone-800 pb-5">
                <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">
                  <span>Practice {activeService.number}</span>
                  <span>&bull;</span>
                  <span>{activeService.pillar}</span>
                </div>

                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white leading-tight">
                  {activeService.title}
                </h2>

                <div className="p-3 rounded-lg bg-slate-50 dark:bg-stone-900 border border-slate-200 dark:border-stone-800">
                  <span className="text-[10px] font-mono uppercase text-blue-600 dark:text-teal-400 font-bold block">
                    Core Deliverables Summary:
                  </span>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {activeService.deliverablesSummary}
                  </p>
                </div>
              </div>

              {/* Four Core Practice Questions */}
              <div className="space-y-6 text-sm text-slate-700 dark:text-stone-300 leading-relaxed">

                {/* 1. What problem does it solve? */}
                <div className="space-y-2">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                    <span>What Problem Does It Solve?</span>
                  </h4>
                  <p className="leading-relaxed bg-slate-50/50 dark:bg-stone-900/40 p-4 rounded-xl border border-slate-200/60 dark:border-stone-800/60">
                    {activeService.problemSolves}
                  </p>
                </div>

                {/* 2. What will the client receive? */}
                <div className="space-y-2">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                    <span>What Will The Client Receive?</span>
                  </h4>
                  <div className="bg-slate-50/50 dark:bg-stone-900/40 p-4 rounded-xl border border-slate-200/60 dark:border-stone-800/60 space-y-2">
                    <ul className="space-y-2">
                      {activeService.clientReceives.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 3. What does the client need to provide? */}
                <div className="space-y-2">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-amber-600 dark:bg-amber-400" />
                    <span>What Does The Client Need To Provide?</span>
                  </h4>
                  <p className="leading-relaxed bg-slate-50/50 dark:bg-stone-900/40 p-4 rounded-xl border border-slate-200/60 dark:border-stone-800/60">
                    {activeService.clientProvides}
                  </p>
                </div>

                {/* 4. How is success evaluated? */}
                <div className="space-y-2">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-purple-600 dark:bg-purple-400" />
                    <span>How Is Success Evaluated?</span>
                  </h4>
                  <p className="leading-relaxed bg-slate-50/50 dark:bg-stone-900/40 p-4 rounded-xl border border-slate-200/60 dark:border-stone-800/60">
                    {activeService.successEvaluation}
                  </p>
                </div>

                {/* 5. NGO & Development Program Application Spotlight */}
                <div className="rounded-xl border border-teal-500/30 bg-teal-50/40 dark:bg-teal-950/20 p-5 space-y-2">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-teal-800 dark:text-teal-300 flex items-center gap-2">
                    <FileText className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                    <span>NGO, Donor &amp; Development Program Application:</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-stone-300 leading-relaxed font-normal">
                    {activeService.ngoApplication}
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-stone-400">
                  <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Delivered in-house from Kigali Engineering Hub &bull; Rwanda Law No. 058/2021 Compliant</span>
                </div>

              </div>

              {/* Modal Footer Actions */}
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
                  className="inline-flex items-center gap-2 rounded-full bg-slate-950 dark:bg-white hover:bg-slate-800 dark:hover:bg-stone-200 text-white dark:text-slate-950 font-bold px-6 py-2.5 text-xs shadow transition-all duration-300"
                >
                  <span>Discuss your project</span>
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
