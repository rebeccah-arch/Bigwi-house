'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Layers,
  Smartphone,
  Cpu,
  BarChart3,
  Workflow,
  Cloud,
  Palette,
  Rocket,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Code2,
  Activity,
  Zap,
  Compass,
} from '@/components/Icons'

import {
  services,
} from '@/content/bigwiContent'

const SERVICE_ICONS: Record<string, React.ElementType> = {
  Layers,
  Smartphone,
  Cpu,
  BarChart3,
  Workflow,
  Cloud,
  Palette,
  Megaphone: Palette,
  Rocket,
  ShieldCheck,
}

const CASE_STUDIES = [
  {
    id: 'risk-fraud-hub',
    sector: 'Banking & Financial Switch',
    client: 'Regional Banking Consortium',
    title: 'Core Banking & Credit Analytics Engine',
    description: 'A high-concurrency transaction routing and fraud detection dashboard processing rolling 24-hour incidents across 140+ branch nodes with sub-second latency.',
    metric: '99.99% Uptime & 12x Faster Underwriting',
    image: '/images/hero-team.jpg',
    tags: ['Next.js', 'Go / Python', 'PostgreSQL', 'Docker'],
    href: '/work',
  },
  {
    id: 'mobile-fintech-gateway',
    sector: 'Mobile FinTech & Payments',
    client: 'East Africa Digital Payments Switch',
    title: 'Mobile Commerce & Instant Settlement Switch',
    description: 'End-to-end payment gateway integrating USSD, card rails, and mobile wallets for frictionless multi-currency merchant settlements.',
    metric: '4.8M Monthly API Invocations',
    image: '/images/mobile-banking.jpg',
    tags: ['React Native', 'Node.js', 'Redis', 'Kafka'],
    href: '/work',
  },
  {
    id: 'logistics-telematics-mart',
    sector: 'Supply Chain & Freight',
    client: 'Cross-Border Logistics Network',
    title: 'Real-Time Fleet & Cold Chain Telematics Hub',
    description: 'IoT telemetry ingestion engine consolidating GPS tracking, temperature compliance, and automated customs documentation dispatch.',
    metric: '+28% Fleet Operational Efficiency',
    image: '/images/logistics-terminal.jpg',
    tags: ['ClickHouse', 'dbt', 'Python', 'FastAPI'],
    href: '/work',
  },
]

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [servicePage, setServicePage] = useState<number>(0)
  const SERVICES_PER_PAGE = 3

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat)
    setServicePage(0)
  }

  const filteredServices = selectedCategory === 'All'
    ? services
    : services.filter((s) => s.category === selectedCategory)

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
    <div className="relative mx-auto max-w-[1400px] border-x border-slate-200 dark:border-stone-900 bg-white dark:bg-stone-950 transition-colors duration-300">
      {/* Background Architectural Grid Guide Lines */}
      <div className="pointer-events-none absolute inset-0 z-0 grid h-full w-full grid-cols-1 gap-0 md:grid-cols-12">
        <div className="hidden h-full border-r border-slate-200/40 dark:border-stone-900/40 md:col-span-3 md:block" />
        <div className="hidden h-full border-r border-slate-200/40 dark:border-stone-900/40 md:col-span-6 md:block" />
        <div className="hidden h-full md:col-span-3 md:block" />
      </div>

      {/* 1. FULL-WIDTH ARCHITECTURAL HERO SECTION */}
      <section className="relative z-10 w-full min-h-[640px] sm:min-h-[720px] md:min-h-[820px] overflow-hidden border-b border-slate-200 dark:border-stone-900 bg-stone-950 flex flex-col justify-end">
        {/* Full-Bleed Atmospheric Background Image */}
        <div className="absolute inset-0 h-full w-full overflow-hidden bg-stone-950">
          <Image
            src="/images/kigali-skyline.jpg"
            alt="DataSphere Consulting Ltd — Enterprise Software & Data Engineering"
            fill
            priority
            className="object-cover object-center opacity-65 contrast-125 grayscale hover:scale-105 transition-transform duration-10000 ease-out"
          />
          {/* Cinematic Gradient Fade */}
          <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-950/20" />
          <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-r from-stone-950/80 via-stone-950/40 to-transparent" />
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-20 p-6 sm:p-10 md:p-14 lg:p-16 max-w-5xl text-white space-y-6">
          <div className="space-y-2">
            <span className="inline-block font-mono text-xs uppercase tracking-[0.25em] text-teal-400 font-semibold">
              DataSphere Consulting Ltd &bull; Kigali, Rwanda
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-white">
              <span className="block text-slate-100">Building</span>
              <span className="block text-slate-100">Software</span>
              <span className="block text-gradient">For Humans.</span>
            </h1>
          </div>

          <p className="max-w-2xl text-base sm:text-lg md:text-xl text-stone-300 leading-relaxed font-normal">
            We design and build fault-tolerant enterprise systems, real-time data pipelines, and scalable digital products that transform organizational operations across East Africa and beyond.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 via-teal-400 to-cyan-400 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-teal-500/20 transition-all duration-300 hover:scale-105 hover:opacity-95"
            >
              <span>Start a Project</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/work"
              className="rounded-full border border-stone-500/40 bg-stone-900/60 px-7 py-3.5 text-sm font-semibold text-stone-200 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-stone-400 hover:bg-stone-800/70"
            >
              Explore Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* 2. 3-COLUMN METRIC STAT BAR */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-stone-900 border-b border-slate-200 dark:border-stone-900 bg-white dark:bg-stone-950">
        <div className="spotlight-card group flex flex-col justify-between p-6 sm:p-8 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-slate-500 dark:text-stone-500 font-semibold">
              /01 Capability
            </span>
            <Layers className="h-6 w-6 text-teal-600 dark:text-teal-400 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-stone-100 tracking-tight transition-all duration-300 group-hover:translate-x-1">
              10+
            </h2>
            <span className="mt-1 block font-mono text-xs text-slate-500 dark:text-stone-400 uppercase tracking-wider">
              Core Tech Capabilities
            </span>
          </div>
        </div>

        <div className="spotlight-card group flex flex-col justify-between p-6 sm:p-8 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-slate-500 dark:text-stone-500 font-semibold">
              /02 Reliability
            </span>
            <ShieldCheck className="h-6 w-6 text-cyan-600 dark:text-cyan-400 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-teal-700 dark:text-teal-400 tracking-tight transition-all duration-300 group-hover:translate-x-1">
              99.9%
            </h2>
            <span className="mt-1 block font-mono text-xs text-slate-500 dark:text-stone-400 uppercase tracking-wider">
              Uptime SLA Standard
            </span>
          </div>
        </div>

        <div className="spotlight-card group flex flex-col justify-between p-6 sm:p-8 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-slate-500 dark:text-stone-500 font-semibold">
              /03 Code Ownership
            </span>
            <Code2 className="h-6 w-6 text-amber-600 dark:text-amber-400 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-stone-100 tracking-tight transition-all duration-300 group-hover:translate-x-1">
              100%
            </h2>
            <span className="mt-1 block font-mono text-xs text-slate-500 dark:text-stone-400 uppercase tracking-wider">
              Custom Architecture &amp; IP
            </span>
          </div>
        </div>
      </div>

      {/* 3. CONTINUOUS INFINITE TICKER MARQUEE */}
      <div className="overflow-hidden border-b border-slate-200 dark:border-stone-900 bg-slate-50/70 dark:bg-stone-950/40 py-4 sm:py-5">
        <div className="animate-marquee">
          <div className="flex shrink-0 items-center">
            <span className="mx-6 font-mono text-xs md:text-sm text-slate-600 dark:text-stone-400 uppercase tracking-widest font-semibold">
              SOFTWARE BUILT FOR HUMANS
            </span>
            <span className="mx-6 font-mono text-teal-600 dark:text-teal-400 text-sm">&bull;</span>
            <span className="mx-6 font-mono text-xs md:text-sm text-slate-600 dark:text-stone-400 uppercase tracking-widest font-semibold">
              SUB-SECOND DATA PIPELINES
            </span>
            <span className="mx-6 font-mono text-cyan-600 dark:text-cyan-400 text-sm">&bull;</span>
            <span className="mx-6 font-mono text-xs md:text-sm text-slate-600 dark:text-stone-400 uppercase tracking-widest font-semibold">
              ZERO TECHNICAL DEBT
            </span>
            <span className="mx-6 font-mono text-teal-600 dark:text-teal-400 text-sm">&bull;</span>
            <span className="mx-6 font-mono text-xs md:text-sm text-slate-600 dark:text-stone-400 uppercase tracking-widest font-semibold">
              RIGOROUS SLA GOVERNANCE
            </span>
            <span className="mx-6 font-mono text-amber-600 dark:text-amber-400 text-sm">&bull;</span>
            <span className="mx-6 font-mono text-xs md:text-sm text-slate-600 dark:text-stone-400 uppercase tracking-widest font-semibold">
              TOP-TIER AFRICAN ENGINEERING TALENT
            </span>
            <span className="mx-6 font-mono text-teal-600 dark:text-teal-400 text-sm">&bull;</span>
            <span className="mx-6 font-mono text-xs md:text-sm text-slate-600 dark:text-stone-400 uppercase tracking-widest font-semibold">
              TRANSPARENCY &amp; DIRECT ACCESS
            </span>
            <span className="mx-6 font-mono text-cyan-600 dark:text-cyan-400 text-sm">&bull;</span>
          </div>

          <div className="flex shrink-0 items-center">
            <span className="mx-6 font-mono text-xs md:text-sm text-slate-600 dark:text-stone-400 uppercase tracking-widest font-semibold">
              SOFTWARE BUILT FOR HUMANS
            </span>
            <span className="mx-6 font-mono text-teal-600 dark:text-teal-400 text-sm">&bull;</span>
            <span className="mx-6 font-mono text-xs md:text-sm text-slate-600 dark:text-stone-400 uppercase tracking-widest font-semibold">
              SUB-SECOND DATA PIPELINES
            </span>
            <span className="mx-6 font-mono text-cyan-600 dark:text-cyan-400 text-sm">&bull;</span>
            <span className="mx-6 font-mono text-xs md:text-sm text-slate-600 dark:text-stone-400 uppercase tracking-widest font-semibold">
              ZERO TECHNICAL DEBT
            </span>
            <span className="mx-6 font-mono text-teal-600 dark:text-teal-400 text-sm">&bull;</span>
            <span className="mx-6 font-mono text-xs md:text-sm text-slate-600 dark:text-stone-400 uppercase tracking-widest font-semibold">
              RIGOROUS SLA GOVERNANCE
            </span>
            <span className="mx-6 font-mono text-amber-600 dark:text-amber-400 text-sm">&bull;</span>
            <span className="mx-6 font-mono text-xs md:text-sm text-slate-600 dark:text-stone-400 uppercase tracking-widest font-semibold">
              TOP-TIER AFRICAN ENGINEERING TALENT
            </span>
            <span className="mx-6 font-mono text-teal-600 dark:text-teal-400 text-sm">&bull;</span>
            <span className="mx-6 font-mono text-xs md:text-sm text-slate-600 dark:text-stone-400 uppercase tracking-widest font-semibold">
              TRANSPARENCY &amp; DIRECT ACCESS
            </span>
            <span className="mx-6 font-mono text-cyan-600 dark:text-cyan-400 text-sm">&bull;</span>
          </div>
        </div>
      </div>

      {/* 4. SEVENX EDITORIAL STATEMENT BANNER (AS IN SCREENSHOT) */}
      <section className="relative z-10 overflow-hidden border-b border-slate-200 dark:border-stone-900 py-24 sm:py-32 md:py-36 text-center bg-white dark:bg-stone-950">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center justify-center gap-4 md:gap-8">
            <h2 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-slate-900 dark:text-stone-100 tracking-tight">
              Enterprise
            </h2>
            <Link
              href="/contact"
              aria-label="Contact DataSphere"
              className="flex h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 items-center justify-center rounded-full border border-slate-300 dark:border-stone-700 text-slate-800 dark:text-stone-200 transition-all duration-500 hover:border-teal-500 hover:bg-teal-500 hover:text-slate-950 group"
            >
              <ArrowRight className="h-6 w-6 sm:h-8 sm:w-8 rotate-45 transition-transform duration-300 group-hover:scale-110" />
            </Link>
          </div>
          <h2 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-gradient pb-2">
            Architects.
          </h2>
        </div>
        <div className="absolute top-1/2 left-0 -z-10 h-px w-full bg-slate-200 dark:bg-stone-800" />
      </section>

      {/* 5. WHY ENTERPRISE TEAMS CHOOSE US (SPLIT + 5-MODULE BENTO GRID) */}
      <section className="relative z-10 border-b border-slate-200 dark:border-stone-900">
        {/* Split Narrative Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-b border-slate-200 dark:border-stone-900">
          <div className="col-span-1 md:col-span-4 border-b md:border-b-0 md:border-r border-slate-200 dark:border-stone-900 p-8 sm:p-12 flex flex-col justify-between">
            <div className="space-y-6">
              <ShieldCheck className="h-10 w-10 text-teal-600 dark:text-teal-400" />
              <div>
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-stone-100 mb-4">
                  Why Enterprise Teams Choose Us
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-200 dark:border-stone-900 pb-2.5">
                    <span className="text-sm font-medium text-slate-700 dark:text-stone-400">Dedicated Senior Engineers</span>
                    <CheckCircle2 className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-200 dark:border-stone-900 pb-2.5">
                    <span className="text-sm font-medium text-slate-700 dark:text-stone-400">Direct Engineering Access</span>
                    <CheckCircle2 className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-200 dark:border-stone-900 pb-2.5">
                    <span className="text-sm font-medium text-slate-700 dark:text-stone-400">Zero Technical Debt Guarantee</span>
                    <CheckCircle2 className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-8 p-8 sm:p-12 lg:pr-20 flex flex-col justify-center space-y-6">
            <h2 className="font-display font-medium text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-stone-100 leading-tight">
              We&apos;re a dedicated team of systems architects, data engineers, and UI strategists.{' '}
              <span className="text-slate-500 dark:text-stone-500">
                Headquartered in Kigali Heights, we engineer modern software and automated business intelligence pipelines for forward-thinking organizations.
              </span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div>
                <h4 className="font-display font-bold text-base text-teal-700 dark:text-teal-400 mb-1">
                  Engineered for Scale.
                </h4>
                <p className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed">
                  We build robust, multi-tenant platforms that withstand high concurrency, erratic connectivity, and strict regional regulatory standards.
                </p>
              </div>
              <div>
                <h4 className="font-display font-bold text-base text-amber-700 dark:text-amber-400 mb-1">
                  Quality Over Shortcuts.
                </h4>
                <p className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed">
                  Every pipeline, schema, and API endpoint is audited against strict SLAs, automated test suites, and zero-trust security postures.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Module Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x border-b border-slate-200 dark:border-stone-900 bg-slate-50/40 dark:bg-stone-950">
          <div className="spotlight-card p-8 sm:p-10 transition-colors md:col-span-2">
            <span className="font-mono text-xs uppercase tracking-widest text-slate-500 dark:text-stone-500 font-semibold">
              /01 Architectural Integrity
            </span>
            <div className="my-8 flex h-28 items-center justify-center text-teal-600 dark:text-teal-400">
              <svg className="h-20 w-40 fill-none stroke-current" strokeWidth="1.5" viewBox="0 0 200 100">
                <circle cx="50" cy="50" r="30" />
                <circle cx="150" cy="50" r="30" />
                <line strokeDasharray="6 6" x1="80" x2="120" y1="50" y2="50" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold text-slate-900 dark:text-stone-100 mb-2">
              Retained Top-Tier Engineering Talent
            </h3>
            <p className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed max-w-xl">
              High turnover kills mission-critical enterprise systems. Our engineers stay and grow with us, ensuring uninterrupted institutional knowledge and predictable execution.
            </p>
          </div>

          <div className="spotlight-card p-8 sm:p-10 transition-colors md:col-span-1">
            <span className="font-mono text-xs uppercase tracking-widest text-slate-500 dark:text-stone-500 font-semibold">
              /02 Data Sovereignty
            </span>
            <div className="my-8 flex h-28 items-center justify-center text-cyan-600 dark:text-cyan-400">
              <div className="grid grid-cols-2 gap-3">
                <div className="h-8 w-8 rounded-full border border-current" />
                <div className="h-8 w-8 rounded-full bg-current" />
                <div className="h-8 w-8 rounded-full bg-current" />
                <div className="h-8 w-8 rounded-full border border-current" />
              </div>
            </div>
            <h3 className="font-display text-xl font-bold text-slate-900 dark:text-stone-100 mb-2">
              Full IP &amp; Code Ownership
            </h3>
            <p className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed">
              You own 100% of the intellectual property, database schemas, and source code. No vendor lock-ins or proprietary walled gardens.
            </p>
          </div>

          <div className="spotlight-card p-8 sm:p-10 transition-colors md:col-span-1">
            <span className="font-mono text-xs uppercase tracking-widest text-slate-500 dark:text-stone-500 font-semibold">
              /03 Production Observability
            </span>
            <div className="my-8 flex h-28 items-center justify-center text-amber-600 dark:text-amber-400">
              <Activity className="h-16 w-16" />
            </div>
            <h3 className="font-display text-xl font-bold text-slate-900 dark:text-stone-100 mb-2">
              Sub-Second Telemetry
            </h3>
            <p className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed">
              Continuous health checks, anomaly detection alerts, and 24/7 dedicated SRE support for board-level peace of mind.
            </p>
          </div>

          <div className="spotlight-card p-8 sm:p-10 transition-colors md:col-span-1">
            <span className="font-mono text-xs uppercase tracking-widest text-slate-500 dark:text-stone-500 font-semibold">
              /04 Direct Engineering Access
            </span>
            <div className="my-8 flex h-28 items-center justify-center text-teal-600 dark:text-teal-400">
              <Zap className="h-16 w-16" />
            </div>
            <h3 className="font-display text-xl font-bold text-slate-900 dark:text-stone-100 mb-2">
              No Middlemen Or Gatekeepers
            </h3>
            <p className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed">
              Your technical leads collaborate directly with principal architects and senior developers via real-time Slack/Discord channels.
            </p>
          </div>

          <div className="spotlight-card p-8 sm:p-10 transition-colors md:col-span-1">
            <span className="font-mono text-xs uppercase tracking-widest text-slate-500 dark:text-stone-500 font-semibold">
              /05 Pan-African &amp; Global Reach
            </span>
            <div className="my-8 flex h-28 items-center justify-center text-cyan-600 dark:text-cyan-400">
              <Compass className="h-16 w-16" />
            </div>
            <h3 className="font-display text-xl font-bold text-slate-900 dark:text-stone-100 mb-2">
              Multi-Region Cloud Readiness
            </h3>
            <p className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed">
              Multi-region cloud infrastructure and cross-border edge networks serving enterprises across East Africa and internationally.
            </p>
          </div>
        </div>
      </section>

      {/* 6. SEVENX 4-STAGE PROCESS GRID ("HOW WE WORK") */}
      <section id="process" className="relative z-10 border-b border-slate-200 dark:border-stone-900 bg-white dark:bg-stone-950">
        <div className="p-8 sm:p-10 md:p-12 border-b border-slate-200 dark:border-stone-900 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-slate-500 dark:text-stone-500 font-semibold">
              /03 Delivery Lifecycle
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-stone-100 tracking-tight mt-1">
              How We Engineer &amp; Deliver
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-stone-400 max-w-md">
            Disciplined two-week agile sprints, transparent milestone deliverables, and automated regression testing.
          </p>
        </div>

        <div className="grid grid-cols-1 divide-y md:divide-y-0 md:grid-cols-4 md:divide-x divide-slate-200 dark:divide-stone-900">
          <div className="group p-8 sm:p-10 transition-colors hover:bg-slate-50 dark:hover:bg-stone-900/60">
            <span className="font-mono text-xs font-bold text-teal-600 dark:text-teal-400 mb-3 block">01</span>
            <h3 className="font-display text-xl font-bold text-slate-900 dark:text-stone-100 mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
              Discover &amp; Audit
            </h3>
            <p className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed">
              We audit existing data schemas, system bottlenecks, and user journeys to validate architecture before committing capital.
            </p>
          </div>

          <div className="group p-8 sm:p-10 transition-colors hover:bg-slate-50 dark:hover:bg-stone-900/60">
            <span className="font-mono text-xs font-bold text-cyan-600 dark:text-cyan-400 mb-3 block">02</span>
            <h3 className="font-display text-xl font-bold text-slate-900 dark:text-stone-100 mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              Architect &amp; Design
            </h3>
            <p className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed">
              We blueprint database models, API contracts, and high-fidelity interactive user interfaces aligned with operational speed.
            </p>
          </div>

          <div className="group p-8 sm:p-10 transition-colors hover:bg-slate-50 dark:hover:bg-stone-900/60">
            <span className="font-mono text-xs font-bold text-amber-600 dark:text-amber-400 mb-3 block">03</span>
            <h3 className="font-display text-xl font-bold text-slate-900 dark:text-stone-100 mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
              Build &amp; Verify
            </h3>
            <p className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed">
              Clean modular codebases, automated CI/CD pipelines, and continuous regression testing with live staging previews.
            </p>
          </div>

          <div className="group p-8 sm:p-10 transition-colors hover:bg-slate-50 dark:hover:bg-stone-900/60">
            <span className="font-mono text-xs font-bold text-teal-600 dark:text-teal-400 mb-3 block">04</span>
            <h3 className="font-display text-xl font-bold text-slate-900 dark:text-stone-100 mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
              Deploy &amp; Scale
            </h3>
            <p className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed">
              Zero-downtime production deployments, telemetry instrumentation, SLA governance, and post-launch optimization.
            </p>
          </div>
        </div>
      </section>

      {/* 7. CORE SERVICES & DIGITAL SOLUTIONS (PAGINATED 3-CARD SLIDER) */}
      <section id="services" className="relative z-10 border-b border-slate-200 dark:border-stone-900 bg-white dark:bg-stone-950">
        <div className="p-8 sm:p-10 md:p-12 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-mono text-xs font-semibold text-teal-800 dark:text-teal-400 uppercase tracking-widest">
                /04 Solutions Directory
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mt-1 tracking-tight">
                Disciplined engineering and data solutions.
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
                From data pipelines and cloud infrastructure to web and mobile apps, our multidisciplinary team delivers end-to-end reliability.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-1 rounded-xl border border-slate-200 dark:border-stone-800 bg-slate-50 dark:bg-stone-900 p-1">
                {['All', 'Engineering', 'Intelligence', 'Strategy', 'Design'].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => handleCategoryChange(cat)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-sans font-medium transition-all ${
                      selectedCategory === cat
                        ? 'bg-slate-900 text-white font-semibold shadow-sm dark:bg-teal-500 dark:text-slate-950'
                        : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white dark:hover:bg-stone-800'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Prev / Next Quick Header Controls */}
              <div className="hidden sm:flex items-center gap-1.5 border border-slate-200 dark:border-stone-800 rounded-xl p-1 bg-slate-50 dark:bg-stone-900">
                <button
                  type="button"
                  onClick={handlePrevService}
                  disabled={currentServicePage === 0}
                  aria-label="Previous capabilities page"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-transparent text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-stone-800 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
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
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-transparent text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-stone-800 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Paginated Services Grid with Animated Transition */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`page-${currentServicePage}-${selectedCategory}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[380px]"
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

                      <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors">
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
                              <span className="h-1.5 w-1.5 rounded-full bg-teal-600 dark:bg-teal-400 flex-shrink-0" />
                              <span className="line-clamp-1">{del}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-stone-800 flex items-center justify-between">
                      <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500">Enterprise Ready</span>
                      <Link
                        href={`/services#${service.id}`}
                        className="font-sans text-xs text-teal-700 dark:text-teal-400 hover:text-teal-900 dark:hover:text-teal-300 flex items-center gap-1 font-semibold group-hover:translate-x-0.5 transition-transform"
                      >
                        <span>Explore</span>
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
              capabilities
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
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentServicePage === idx
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

      {/* 8. SEVENX HORIZONTAL SPLIT CASE STUDIES ("OUR WORK") */}
      <section id="work" className="relative z-10 border-b border-slate-200 dark:border-stone-900 bg-white dark:bg-stone-950">
        <div className="p-8 sm:p-10 md:p-12 border-b border-slate-200 dark:border-stone-900 flex items-end justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-slate-500 dark:text-stone-500 font-semibold">
              /05 Featured Deployments
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-stone-100 tracking-tight mt-1">
              Case Studies &amp; Proven Impact
            </h2>
          </div>
          <Link
            href="/work"
            className="hidden sm:flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400 hover:underline"
          >
            <span>View All Projects</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Full-Width Split Rows */}
        <div className="divide-y divide-slate-200 dark:divide-stone-900">
          {CASE_STUDIES.map((study) => (
            <Link key={study.id} href={study.href} className="group block">
              <div className="grid grid-cols-1 md:grid-cols-12 min-h-[300px] transition-colors duration-500 hover:bg-slate-50 dark:hover:bg-stone-900/40">
                {/* Left 5 cols: Details */}
                <div className="col-span-1 md:col-span-5 p-8 sm:p-10 md:p-12 border-b md:border-b-0 md:border-r border-slate-200 dark:border-stone-900 flex flex-col justify-center space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-teal-700 dark:text-teal-400 font-semibold uppercase tracking-wider">
                      {study.sector}
                    </span>
                    <div className="h-px w-6 bg-slate-300 dark:bg-stone-700" />
                    <span className="font-mono text-xs text-slate-500 dark:text-stone-400">
                      {study.client}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-stone-100 tracking-tight group-hover:translate-x-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-all duration-300">
                    {study.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-stone-400 leading-relaxed">
                    {study.description}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-2">
                    <span className="inline-block rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800/80 px-3 py-1 font-mono text-xs font-semibold text-teal-800 dark:text-teal-300">
                      {study.metric}
                    </span>
                  </div>
                </div>

                {/* Right 7 cols: Image with hover zoom */}
                <div className="col-span-1 md:col-span-7 relative min-h-[240px] md:min-h-full overflow-hidden bg-stone-950">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent md:hidden" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 9. BIG STATEMENT CALL-TO-ACTION (CONTACT US) */}
      <section className="relative z-10 overflow-hidden py-24 sm:py-32 md:py-40 text-center bg-slate-50/70 dark:bg-stone-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          <span className="font-mono text-xs uppercase tracking-widest text-teal-700 dark:text-teal-400 font-semibold">
            /06 Ready to Engineer Your Future?
          </span>

          <div className="space-y-4">
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-slate-900 dark:text-stone-100 tracking-tight leading-tight">
              Let&apos;s Build Together.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-stone-400 max-w-2xl mx-auto leading-relaxed">
              Have a mission-critical enterprise challenge, data pipeline modernization, or custom software vision? Our senior architects are ready to execute.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
            <Link
              href="/contact"
              className="group flex items-center gap-3 rounded-full bg-slate-900 dark:bg-teal-500 text-white dark:text-slate-950 font-bold px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg shadow-xl shadow-teal-500/20 transition-all duration-300 hover:scale-105 hover:bg-slate-800 dark:hover:bg-teal-400"
            >
              <span>Contact Us</span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 dark:bg-slate-950/20 transition-transform group-hover:translate-x-1">
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>

            <Link
              href="/services"
              className="rounded-full border border-slate-300 dark:border-stone-700 bg-white dark:bg-stone-900/80 px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-semibold text-slate-700 dark:text-stone-200 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-slate-400 hover:bg-slate-50 dark:hover:bg-stone-800"
            >
              Explore Solutions
            </Link>
          </div>

          <div className="pt-10 border-t border-slate-200/80 dark:border-stone-800/80 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-slate-500 dark:text-stone-400">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-teal-500" />
              <span>Direct email: info@datasphere.rw</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-teal-500" />
              <span>Kigali Heights, 5th Floor</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-teal-500" />
              <span>Response SLA: &lt;24 business hours</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
