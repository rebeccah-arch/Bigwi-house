'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  Layers,
  Smartphone,
  Cpu,
  BarChart3,
  Workflow,
  Cloud,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Activity,
  Landmark,
  Building2,
  Globe2,
  Sprout,
  Truck,
  Briefcase,
  Compass,
  CheckCircle2,
  Mail,
} from '@/components/Icons'

import {
  services,
  corePillars,
  targetClientsDetailed,
  growthPhases
} from '@/content/bigwiContent'

const SERVICE_ICONS: Record<string, React.ElementType> = {
  Cpu,
  Activity,
  Layers,
  BarChart3,
  Workflow,
  Smartphone,
  Cloud,
  ShieldCheck,
}

const SECTOR_ICONS: Record<string, React.ElementType> = {
  Landmark,
  Building2,
  Globe2,
  Sprout,
  Truck,
  Briefcase,
}

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [selectedCaseSector, setSelectedCaseSector] = useState<string>('All')
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0)
  const [servicePage, setServicePage] = useState<number>(0)
  const SERVICES_PER_PAGE = 3

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat)
    setServicePage(0)
  }

  const filteredServices = selectedCategory === 'All'
    ? services
    : services.filter((s) => s.category === catMap(selectedCategory))

  function catMap(label: string) {
    if (label === 'AI & ML') return 'AI & Machine Learning'
    if (label === 'Data & BI') return 'Data & Analytics'
    if (label === 'Advisory') return 'Data & AI Consultancy'
    if (label === 'Digital') return 'Digital Solutions'
    return label
  }

  const totalServicePages = Math.max(1, Math.ceil(filteredServices.length / SERVICES_PER_PAGE))
  const currentServicePage = Math.min(servicePage, totalServicePages - 1)
  const paginatedServices = filteredServices.slice(
    currentServicePage * SERVICES_PER_PAGE,
    (currentServicePage + 1) * SERVICES_PER_PAGE
  )

  const handlePrevService = () => {
    setServicePage((prev) => Math.max(0, prev - 1))
  }

  const handleNextService = () => {
    setServicePage((prev) => Math.min(totalServicePages - 1, prev + 1))
  }

  return (
    <div className="w-full bg-white dark:bg-stone-950 transition-colors duration-300 overflow-x-hidden">

      {/* 1. SECTION 1 — WHO WE ARE (FULL-BLEED HERO COVERING BEHIND NAVBAR WITH CURVED BOTTOM) */}
      <section className="relative z-10 w-full h-screen min-h-screen overflow-hidden rounded-b-[40px] sm:rounded-b-[60px] lg:rounded-b-[80px] shadow-2xl border-b border-slate-200/20 dark:border-stone-800/40 bg-stone-950 flex flex-col justify-end pt-36 sm:pt-44 md:pt-48 pb-20 sm:pb-28">
        {/* Full-Bleed Atmospheric Background Image Across 100% Viewport */}
        <div className="absolute inset-0 h-full w-full overflow-hidden bg-stone-950">
          <Image
            src="/images/kigali-skyline.jpg"
            alt="DataSphere & BIGWI HOUSE — Data & AI Consultancy"
            fill
            priority
            className="object-cover object-center opacity-65 contrast-125 grayscale hover:scale-105 transition-transform duration-10000 ease-out"
          />
          {/* Cinematic Gradient Fade */}
          <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-stone-950 via-stone-950/75 to-stone-950/20" />
          <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-r from-stone-950/85 via-stone-950/45 to-transparent" />
        </div>

        {/* Hero Content Overlay (Aligned to 1400px grid) */}
        <div className="relative z-20 mx-auto max-w-[1400px] w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl text-white space-y-6"
          >
            <div className="space-y-3">
              <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-white">
                Data, Machine Learning &amp; Practical Implementation.
              </h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl text-base sm:text-lg text-stone-300 leading-relaxed font-normal"
            >
              We build data pipelines, machine learning models, and custom software that help organizations make better decisions, automate field operations, and scale with confidence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-full bg-teal-500 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-teal-500/20 transition-all duration-300 hover:scale-105 hover:bg-teal-400"
              >
                <span>Discuss your project</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/services"
                className="rounded-full border border-stone-600/60 bg-stone-900/70 px-7 py-3.5 text-sm font-semibold text-stone-200 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-stone-400 hover:bg-stone-800/80"
              >
                View our capabilities
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Architectural Grid Frame */}
      <div className="relative mx-auto max-w-[1400px] border-x border-slate-200 dark:border-stone-900 bg-white dark:bg-stone-950 transition-colors duration-300">
        {/* 2. SECTION: WHO WE ARE — ARCHITECTURAL OVERVIEW & IMPLEMENTATION LAYER */}
        <section id="who-we-are" className="relative z-10 border-b border-slate-200 dark:border-stone-900 bg-white dark:bg-stone-950 p-6 sm:p-10 lg:p-16 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

            {/* Left Column: Asymmetric Visual Composition (Scroll Reveal from Left) */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative"
            >
              <div className="relative mx-auto max-w-[540px] lg:max-w-none">

                {/* Visual Grid / Arrangement */}
                <div className="grid grid-cols-12 gap-4 items-start">

                  {/* Card 1: Top-Left Rounded Photo */}
                  <div className="col-span-7 relative h-56 sm:h-72 w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-stone-800 bg-stone-900 group">
                    <Image
                      src="/images/data-engineer.jpg"
                      alt="DataSphere Senior Engineer Data Architecture"
                      fill
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                  </div>

                  {/* Card 2: Top-Right Overlapping Floating Dark Pill */}
                  <div className="col-span-5 relative mt-4">
                    <div className="rounded-2xl border border-teal-500/30 bg-[#080d1a] p-4 sm:p-5 text-white shadow-2xl backdrop-blur-xl">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
                        <span className="font-mono text-[11px] uppercase tracking-wider text-teal-400 font-bold">
                          Live Architecture
                        </span>
                      </div>
                      <h4 className="font-display text-sm sm:text-base font-bold text-white leading-snug">
                        Production-Grade AI
                      </h4>
                      <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                        Engineered for live operations &amp; auditability.
                      </p>
                    </div>
                  </div>

                  {/* Card 3: Floating Bottom-Left Brand Accent Card (DataSphere Teal Gradient) */}
                  <div className="col-span-5 relative -mt-4 sm:-mt-6 z-20">
                    <div className="rounded-2xl bg-gradient-to-br from-teal-500 via-teal-600 to-emerald-600 p-4 sm:p-5 text-slate-950 shadow-xl shadow-teal-500/25">
                      <h4 className="font-display text-sm sm:text-base font-extrabold leading-snug tracking-tight">
                        BIGWI HOUSE
                      </h4>
                      <p className="mt-1 text-xs font-semibold text-slate-900/90 leading-relaxed">
                        Data &amp; AI Consultancy Hub under DataSphere.
                      </p>
                    </div>
                  </div>

                  {/* Card 4: Bottom-Right Image Card with Curvature */}
                  <div className="col-span-7 relative h-48 sm:h-60 w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-stone-800 bg-stone-900 group">
                    <Image
                      src="/images/hero-team.jpg"
                      alt="DataSphere Consultancy Team in Kigali Rwanda"
                      fill
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                  </div>

                </div>

                {/* Decorative Background Glow */}
                <div className="pointer-events-none absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl -z-10" />
              </div>
            </motion.div>

            {/* Right Column: Structured Content Narrative (Scroll Reveal from Right) */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="lg:col-span-6 space-y-6"
            >

              {/* Category Pill */}
              <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800/80">
                <Compass className="h-3.5 w-3.5" />
                <span>Who We Are</span>
              </div>

              {/* Main Headline */}
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white tracking-tight leading-[1.15]">
                An Implementation Layer for Data Systems &amp; Applied AI
              </h2>

              {/* Narrative Description */}
              <p className="text-sm sm:text-base text-slate-600 dark:text-stone-300 leading-relaxed font-normal">
                <strong className="text-slate-900 dark:text-white font-semibold">DataSphere Consulting Ltd</strong> operates <strong className="text-teal-600 dark:text-teal-400 font-semibold">BIGWI HOUSE</strong>, our specialized Data &amp; AI consultancy practice. We bridge the gap between organizational records and production-ready machine learning — transforming fragmented databases into reliable pipelines, high-impact predictive models, and intuitive executive dashboards.
              </p>

              {/* Dual Highlight Feature Pills (Matching Reference Layout) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                <div className="flex items-start gap-3 rounded-xl border border-slate-200 dark:border-stone-800 bg-slate-50/80 dark:bg-stone-900/60 p-3.5 transition-colors hover:border-teal-500/40">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
                    <Layers className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h4 className="font-display text-xs sm:text-sm font-bold text-slate-900 dark:text-stone-100">
                      Structured Workflows
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-stone-400 leading-tight mt-0.5">
                      Ingestion, automated validation &amp; warehousing
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-slate-200 dark:border-stone-800 bg-slate-50/80 dark:bg-stone-900/60 p-3.5 transition-colors hover:border-cyan-500/40">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                    <Cpu className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h4 className="font-display text-xs sm:text-sm font-bold text-slate-900 dark:text-stone-100">
                      Governed Machine Learning
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-stone-400 leading-tight mt-0.5">
                      Evaluation, scoring &amp; live production monitoring
                    </p>
                  </div>
                </div>
              </div>

              {/* Checklist */}
              <div className="space-y-2.5 pt-2 border-t border-slate-200 dark:border-stone-800/80">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-stone-300">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 dark:text-white font-semibold">Direct Senior Engineering:</strong> Direct practitioner delivery — no junior handoffs or theoretical slide decks.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-stone-300">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 dark:text-white font-semibold">Continuous Governance:</strong> Rigorous evaluation, model drift detection, and compliance built in.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-stone-300">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 dark:text-white font-semibold">Pan-African &amp; Global Delivery:</strong> Headquartered in Kigali, Rwanda with deployments across Africa and internationally.
                  </span>
                </div>
              </div>

              {/* CTAs and Contact */}
              <div className="flex flex-wrap items-center gap-5 pt-3">
                <Link
                  href="/services"
                  className="flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-teal-500/25 transition-all duration-300 hover:scale-105 hover:from-teal-400 hover:to-teal-500"
                >
                  <span>Explore Capabilities</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="mailto:contact@datasphere.rw"
                  className="inline-flex items-center gap-3 text-left group no-underline"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-900 dark:bg-stone-900 border border-slate-800 text-teal-400 transition-transform duration-300 group-hover:scale-110 shadow-md">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-slate-500 dark:text-stone-400 leading-tight">
                      Direct Inquiries:
                    </span>
                    <span className="block text-xs sm:text-sm font-bold text-slate-900 dark:text-teal-400 group-hover:underline">
                      contact@datasphere.rw
                    </span>
                  </div>
                </a>
              </div>

            </motion.div>

          </div>
        </section>

        {/* 3. SECTION 2 — WHAT WE SOLVE (7 CORE PILLARS) */}
        <section id="what-we-solve" className="relative z-10 border-b border-slate-200 dark:border-stone-900 bg-slate-50/50 dark:bg-stone-950">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-10 md:p-12 border-b border-slate-200 dark:border-stone-900 flex flex-col md:flex-row md:items-end justify-between gap-4"
          >
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-teal-700 dark:text-teal-400 font-semibold">
                /02 What We Solve
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-stone-100 tracking-tight mt-1">
                The Data &amp; AI Lifecycle
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-stone-400 max-w-md">
              From initial field collection to production machine learning and strategic advisory, we support organizations at every stage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:gap-px bg-slate-200 dark:bg-stone-900">
            {corePillars.map((pillar, idx) => (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white dark:bg-stone-950 p-6 sm:p-7 flex flex-col justify-between transition-colors hover:bg-slate-50 dark:hover:bg-stone-900/60"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-teal-600 dark:text-teal-400">
                    {pillar.number}
                  </span>
                  <h3 className="font-display text-base font-bold text-slate-900 dark:text-stone-100 mt-2">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 dark:text-stone-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* 8th card linking to consultation */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="bg-teal-50/40 dark:bg-teal-950/20 p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold text-teal-700 dark:text-teal-400">
                  Next Steps
                </span>
                <h3 className="font-display text-base font-bold text-slate-900 dark:text-stone-100 mt-2">
                  Have a specific data challenge?
                </h3>
                <p className="mt-2 text-xs text-slate-600 dark:text-stone-400 leading-relaxed">
                  Our senior consultants will review your data readiness and outline practical technical options.
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 dark:text-teal-400 hover:underline"
              >
                <span>Schedule a discovery call</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 4. SECTION 3 — TARGET AUDIENCE: WHO WE SERVE (ZIPLINE-INSPIRED SECTOR SHOWCASE) */}
        <section id="who-we-serve" className="relative z-10 border-b border-slate-200 dark:border-stone-900 bg-slate-50/50 dark:bg-stone-950/70 py-16 sm:py-24">
          <div className="px-4 sm:px-8 lg:px-12 max-w-[1400px] mx-auto">

            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200 dark:border-stone-800"
            >
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800/80">
                  <Building2 className="h-3.5 w-3.5" />
                  <span>/03 Sector Focus &amp; Partners</span>
                </div>
                <h2 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight">
                  Who We Work With
                </h2>
                <p className="text-xs sm:text-base text-slate-600 dark:text-stone-300 max-w-2xl leading-relaxed">
                  We partner with international organizations, government authorities, regional banks, and enterprises to architect and operate robust Data &amp; AI systems.
                </p>
              </div>

              <Link
                href="/work"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 hover:text-teal-600 dark:hover:text-teal-300 hover:underline shrink-0"
              >
                <span>View Sector Impact</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>

            {/* Interactive Sector Cards Grid */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {targetClientsDetailed.map((sector, idx) => {
                const Icon = SECTOR_ICONS[sector.icon] || Landmark
                // Directional stagger inspired by Zipline (left column from left, middle from bottom, right from right)
                const xOffset = idx % 3 === 0 ? -40 : idx % 3 === 2 ? 40 : 0
                const yOffset = idx % 3 === 1 ? 40 : 25

                return (
                  <motion.div
                    key={sector.name}
                    initial={{ opacity: 0, x: xOffset, y: yOffset }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.7, delay: (idx % 3) * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative rounded-3xl border border-slate-200/90 dark:border-stone-800 bg-white dark:bg-stone-900/80 p-7 sm:p-8 flex flex-col justify-between shadow-xl shadow-slate-100/50 dark:shadow-none hover:shadow-2xl hover:border-teal-500/40 hover:-translate-y-1.5 transition-all duration-300"
                  >
                    <div>
                      {/* Top Icon Badge & Index */}
                      <div className="flex items-center justify-between gap-4 mb-5">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-teal-500 group-hover:text-slate-950">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="font-mono text-xs font-bold text-slate-400 dark:text-stone-500">
                          0{idx + 1}
                        </span>
                      </div>

                      <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                        {sector.name}
                      </h3>

                      <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-stone-300 leading-relaxed">
                        {sector.description}
                      </p>
                    </div>

                    {/* Domain Focus Tags & CTA Link */}
                    <div className="pt-6 mt-6 border-t border-slate-100 dark:border-stone-800/80 space-y-4">
                      <div className="flex flex-wrap gap-1.5">
                        {sector.focusAreas.map((area) => (
                          <span
                            key={area}
                            className="rounded-lg bg-slate-50 dark:bg-stone-800 border border-slate-200/80 dark:border-stone-700/60 px-2.5 py-1 font-mono text-[11px] font-medium text-slate-700 dark:text-stone-300 transition-colors group-hover:border-teal-500/30"
                          >
                            {area}
                          </span>
                        ))}
                      </div>

                      <Link
                        href="/services"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline pt-1 transition-transform group-hover:translate-x-1"
                      >
                        <span>Explore capabilities</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </motion.div>
                )
              })}
            </div>

          </div>
        </section>
      </div>

      {/* SECTION: THE DELIVERY ENGINE — 3-STEP SEQUENTIAL STORYTELLING (ZIPLINE-INSPIRED) */}
      <div className="relative w-full bg-white dark:bg-stone-950 transition-colors duration-300">
        {/* Top Arch Canopy Curve (Zipline-Inspired Arch) */}
        <div className="w-full overflow-hidden leading-none -mb-[1px]">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-12 sm:h-20 lg:h-28 block text-[#080d1a]"
            preserveAspectRatio="none"
          >
            <path
              d="M0,100 L0,65 Q35,32 90,26 L450,14 Q600,0 720,0 Q840,0 990,14 L1350,26 Q1405,32 1440,65 L1440,100 Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <section id="how-we-deliver" className="relative z-10 w-full bg-[#080d1a] text-white pt-6 pb-16 sm:pb-24 overflow-hidden">
          {/* Ambient Lighting & Glow */}
          <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[800px] rounded-full bg-teal-500/10 blur-[120px]" />

          <div className="px-4 sm:px-8 lg:px-12 max-w-[1400px] mx-auto relative z-10">

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="text-center max-w-3xl mx-auto space-y-4 mb-16"
            >
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-950/80 border border-teal-500/30">
                <Workflow className="h-3.5 w-3.5" />
                <span>How We Deliver</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                The DataSphere Implementation Engine
              </h2>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                From fragmented organizational records to production-hardened machine learning systems — engineered through three disciplined milestones.
              </p>
            </motion.div>

            {/* 3-Step Interactive Process Deck */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

              {/* Left Column: Interactive Step Selector */}
              <div className="lg:col-span-5 space-y-3 flex flex-col justify-center">
                {growthPhases.map((phase, idx) => {
                  const isActive = activePhaseIndex === idx
                  return (
                    <motion.button
                      key={phase.step}
                      type="button"
                      onClick={() => setActivePhaseIndex(idx)}
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className={`w-full text-left p-6 sm:p-7 rounded-3xl border transition-all duration-300 ${isActive
                        ? 'border-teal-400/60 bg-white/10 backdrop-blur-xl shadow-2xl shadow-teal-500/10 scale-[1.02]'
                        : 'border-white/10 bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/20'
                        }`}
                    >
                      <div className="flex items-center justify-between gap-4 mb-2">
                        <span className={`font-mono text-xs font-bold uppercase tracking-wider ${isActive ? 'text-teal-400' : 'text-stone-400'
                          }`}>
                          {phase.step}
                        </span>
                        {isActive && (
                          <span className="flex h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
                        )}
                      </div>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                        {phase.name}
                      </h3>
                      <p className="mt-1 text-xs text-stone-300">
                        {phase.subtitle}
                      </p>
                    </motion.button>
                  )
                })}
              </div>

              {/* Right Column: Active Step Stage Details & Deliverables Showcase */}
              <div className="lg:col-span-7">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePhaseIndex}
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 sm:p-12 flex flex-col justify-between shadow-2xl relative overflow-hidden"
                  >
                    {/* Background Graphic Watermark */}
                    <span className="pointer-events-none absolute -bottom-10 -right-6 font-display font-black text-9xl text-white/[0.03] select-none">
                      0{activePhaseIndex + 1}
                    </span>

                    <div className="space-y-6 relative z-10">
                      <div>
                        <span className="font-mono text-xs font-bold text-teal-400 uppercase tracking-widest block mb-2">
                          {growthPhases[activePhaseIndex].step} Milestone
                        </span>
                        <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                          {growthPhases[activePhaseIndex].name}
                        </h3>
                        <p className="text-xs sm:text-sm text-stone-300 mt-1">
                          {growthPhases[activePhaseIndex].subtitle}
                        </p>
                      </div>
                      {/* Deliverables Checklist */}
                      <div className="space-y-3.5 pt-4 border-t border-white/10">
                        <span className="font-mono text-xs uppercase tracking-wider text-stone-400 font-semibold block">
                          Key Deliverables &amp; Engineering Activities:
                        </span>
                        {growthPhases[activePhaseIndex].items.map((item) => (
                          <div key={item} className="flex items-start gap-3 text-xs sm:text-sm text-stone-200">
                            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-400 border border-teal-500/30 mt-0.5">
                              <CheckCircle2 className="h-3.5 w-3.5" />
                            </div>
                            <span className="leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 relative z-10">
                      <span className="font-mono text-xs text-stone-400">
                        Phase 0{activePhaseIndex + 1} of 03 &bull; SLA Protected Delivery
                      </span>
                      <Link
                        href="/approach"
                        className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-6 py-2.5 text-xs font-bold text-slate-950 hover:bg-teal-400 transition-all shadow-md hover:scale-105"
                      >
                        <span>Explore full methodology</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Live Impact Counters Strip */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 border-t border-white/10 pt-12"
            >
              <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
                <span className="font-display text-3xl sm:text-4xl font-extrabold text-teal-400 block tracking-tight">
                  15M+
                </span>
                <span className="font-mono text-xs text-stone-400 block mt-1">
                  Data Records Processed
                </span>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
                <span className="font-display text-3xl sm:text-4xl font-extrabold text-teal-400 block tracking-tight">
                  &lt; 4 Hours
                </span>
                <span className="font-mono text-xs text-stone-400 block mt-1">
                  Average Underwriting Time
                </span>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
                <span className="font-display text-3xl sm:text-4xl font-extrabold text-teal-400 block tracking-tight">
                  99.2%
                </span>
                <span className="font-mono text-xs text-stone-400 block mt-1">
                  Production Model Accuracy
                </span>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
                <span className="font-display text-3xl sm:text-4xl font-extrabold text-teal-400 block tracking-tight">
                  100%
                </span>
                <span className="font-mono text-xs text-stone-400 block mt-1">
                  Data &amp; IP Sovereignty
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bottom Arch Canopy Curve */}
        <div className="w-full overflow-hidden leading-none -mt-[1px]">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-12 sm:h-20 lg:h-28 block text-[#080d1a]"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 L0,35 Q35,68 90,74 L450,86 Q600,100 720,100 Q840,100 990,86 L1350,74 Q1405,68 1440,35 L1440,0 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      {/* Main Content Architectural Grid Frame (Continued) */}
      <div className="relative mx-auto max-w-[1400px] border-x border-slate-200 dark:border-stone-900 bg-white dark:bg-stone-950 transition-colors duration-300">
        {/* 5. SECTION 4 — SERVICES DIRECTORY */}
        <section id="services" className="relative z-10 border-b border-slate-200 dark:border-stone-900 bg-slate-50/40 dark:bg-stone-950">
          <div className="p-8 sm:p-10 md:p-12 space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <span className="font-mono text-xs font-semibold text-teal-800 dark:text-teal-400 uppercase tracking-widest">
                  /04 Services Directory
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mt-1 tracking-tight">
                  Specialized Capabilities
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl">
                  Organized around client operational needs: machine learning models, data pipelines, business analytics, and supporting software.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {/* Category Filter Pills */}
                <div className="flex flex-wrap gap-1 rounded-xl border border-slate-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-1">
                  {['All', 'AI & ML', 'Data & BI', 'Advisory', 'Digital'].map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => handleCategoryChange(cat)}
                      className={`rounded-lg px-3 py-1.5 text-xs font-sans font-medium transition-all ${selectedCategory === cat
                        ? 'bg-slate-900 text-white font-semibold shadow-sm dark:bg-teal-500 dark:text-slate-950'
                        : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white dark:hover:bg-stone-800'
                        }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
                {/* Prev / Next Quick Header Controls */}
                <div className="hidden sm:flex items-center gap-1.5 border border-slate-200 dark:border-stone-800 rounded-xl p-1 bg-white dark:bg-stone-900">
                  <button
                    type="button"
                    onClick={handlePrevService}
                    disabled={currentServicePage === 0}
                    aria-label="Previous capabilities page"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-stone-800 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400 px-2 font-medium">
                    {String(currentServicePage + 1).padStart(2, '0')} / {String(totalServicePages).padStart(2, '0')}
                  </span>
                  <button
                    type="button"
                    onClick={handleNextService}
                    disabled={currentServicePage >= totalServicePages - 1}
                    aria-label="Next capabilities page"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-stone-800 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
            {/* Paginated Services Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`page-${currentServicePage}-${selectedCategory}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[360px]"
              >
                {paginatedServices.map((service) => {
                  const Icon = SERVICE_ICONS[service.icon] || Layers
                  return (
                    <div
                      key={service.id}
                      className="card-enterprise flex flex-col justify-between group h-full bg-white dark:bg-stone-900/90 border border-slate-200 dark:border-stone-800 rounded-2xl p-6"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700 border border-teal-200 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 dark:bg-teal-950/60 dark:text-teal-300 dark:border-teal-800 dark:group-hover:bg-teal-500 dark:group-hover:text-slate-950 dark:group-hover:border-teal-400 transition-colors">
                            <Icon className="h-5 w-5" />
                          </div>
                          <span className="font-mono text-[11px] text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-stone-800 border border-slate-200 dark:border-stone-700 px-2.5 py-0.5 rounded-full font-medium">
                            {service.category}
                          </span>
                        </div>

                        <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors">
                          {service.title}
                        </h3>
                        <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          {service.shortDesc}
                        </p>

                        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-stone-800">
                          <p className="font-mono text-[11px] text-slate-500 dark:text-slate-400 font-semibold mb-2">Key Deliverables:</p>
                          <ul className="space-y-1.5">
                            {service.deliverables.slice(0, 3).map((del) => (
                              <li key={del} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                                <span className="h-1.5 w-1.5 rounded-full bg-teal-600 dark:text-teal-400 flex-shrink-0" />
                                <span className="line-clamp-1">{del}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-stone-800 flex items-center justify-between">
                        <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500">Production Ready</span>
                        <Link
                          href={`/services#${service.id}`}
                          className="font-sans text-xs text-teal-700 dark:text-teal-400 hover:text-teal-900 dark:hover:text-teal-300 flex items-center gap-1 font-semibold group-hover:translate-x-0.5 transition-transform"
                        >
                          <span>Explore details</span>
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  )
                })}
              </motion.div>
            </AnimatePresence>

            {/* Bottom Pagination & Navigation Controls */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200/80 dark:border-stone-800">
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Showing{' '}
                <span className="font-mono font-semibold text-slate-900 dark:text-slate-200">
                  {filteredServices.length === 0 ? 0 : currentServicePage * SERVICES_PER_PAGE + 1}–
                  {Math.min((currentServicePage + 1) * SERVICES_PER_PAGE, filteredServices.length)}
                </span>{' '}
                of{' '}
                <span className="font-mono font-semibold text-slate-900 dark:text-slate-200">
                  {filteredServices.length}
                </span>{' '}
                services
              </div>

              {/* Pagination Dots */}
              {totalServicePages > 1 && (
                <div className="flex items-center gap-2">
                  {Array.from({ length: totalServicePages }).map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setServicePage(idx)}
                      aria-label={`Go to page ${idx + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${currentServicePage === idx
                        ? 'w-8 bg-teal-600 dark:bg-teal-400'
                        : 'w-2 bg-slate-300 dark:bg-stone-700 hover:bg-slate-400 dark:hover:bg-stone-600'
                        }`}
                    />
                  ))}
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrevService}
                  disabled={currentServicePage === 0}
                  className="flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-stone-800 bg-white dark:bg-stone-900 px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-stone-800 hover:text-slate-900 dark:hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm"
                >
                  <ChevronLeft className="h-3.5 w-3.5" />
                  <span>Previous</span>
                </button>

                <button
                  type="button"
                  onClick={handleNextService}
                  disabled={currentServicePage >= totalServicePages - 1}
                  className="flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-stone-800 bg-white dark:bg-stone-900 px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-stone-800 hover:text-slate-900 dark:hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm"
                >
                  <span>Next</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* 7. SECTION 6 — CLEAR PRIMARY CTA */}
        <section className="relative z-10 overflow-hidden py-20 sm:py-28 text-center bg-slate-50/80 dark:bg-stone-950">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-teal-700 dark:text-teal-400 font-semibold">
              /06 Work With Us
            </span>

            <div className="space-y-3">
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-stone-100 tracking-tight leading-tight">
                Start with a clear technical conversation.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-stone-400 max-w-xl mx-auto leading-relaxed">
                Whether you are evaluating your organization&apos;s data readiness or seeking a reliable partner to deploy machine learning models, our team is ready to assist.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-full bg-slate-900 dark:bg-teal-500 text-white dark:text-slate-950 font-bold px-8 py-3.5 text-sm sm:text-base shadow-md transition-all duration-300 hover:scale-105 hover:bg-slate-800 dark:hover:bg-teal-400"
              >
                <span>Discuss your project</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-slate-300 dark:border-stone-700 bg-white dark:bg-stone-900 px-7 py-3.5 text-sm sm:text-base font-semibold text-slate-700 dark:text-stone-200 transition-all duration-300 hover:scale-105 hover:border-slate-400"
              >
                View our capabilities
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
