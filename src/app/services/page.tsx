'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import {
  Layers,
  Smartphone,
  Cpu,
  BarChart3,
  Workflow,
  Cloud,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Activity,
  Landmark,
  Building2,
  Globe2,
  Sprout,
  Truck,
  Briefcase
} from '@/components/Icons'
import { services, targetClientsDetailed } from '@/content/bigwiContent'

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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const CATEGORIES = [
  'All Capabilities',
  'AI & Machine Learning',
  'Data & Analytics',
  'Data & AI Consultancy',
  'Digital Solutions'
]

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('All Capabilities')

  const filtered = activeCategory === 'All Capabilities'
    ? services
    : services.filter((s) => s.category === activeCategory)

  return (
    <div className="w-full bg-white dark:bg-stone-950 transition-colors duration-300 overflow-x-hidden">
      {/* 1. Header Banner (Full-Bleed Hero with Curved Bottom) */}
      <section className="relative z-10 w-full min-h-[460px] sm:min-h-[520px] overflow-hidden rounded-b-[40px] sm:rounded-b-[60px] lg:rounded-b-[80px] shadow-2xl border-b border-slate-200/20 dark:border-stone-800/40 bg-stone-950 flex flex-col justify-end pt-36 sm:pt-44 pb-16 sm:pb-24">
        {/* Full-Bleed Atmospheric Background Image */}
        <div className="absolute inset-0 h-full w-full overflow-hidden bg-stone-950">
          <Image
            src="/images/data-engineer.jpg"
            alt="Data & AI Services by DataSphere & BIGWI HOUSE"
            fill
            priority
            className="object-cover object-center opacity-60 contrast-125 grayscale hover:scale-105 transition-transform duration-10000 ease-out"
          />
          {/* Cinematic Gradient Fade */}
          <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-stone-950 via-stone-950/75 to-stone-950/20" />
          <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-r from-stone-950/85 via-stone-950/45 to-transparent" />
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-20 mx-auto max-w-[1400px] w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl space-y-5"
          >
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-950/80 border border-teal-500/30">
              <Layers className="h-3.5 w-3.5" />
              <span>Capabilities &amp; Solutions</span>
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight">
              Specialized Data &amp; Applied AI Capabilities.
            </h1>

            <p className="text-base sm:text-lg text-stone-300 leading-relaxed font-normal max-w-2xl">
              We help organizations gather structured records, develop custom machine learning models, build executive dashboards, and maintain systems in production with dedicated SLAs.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-full bg-teal-500 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-teal-500/20 transition-all duration-300 hover:scale-105 hover:bg-teal-400"
              >
                <span>Request a consultation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Frame */}
      <div className="relative mx-auto max-w-[1400px] bg-white dark:bg-stone-950 transition-colors duration-300">
        {/* 2. Category Filter & Service List */}
        <section className="relative p-6 sm:p-10 lg:p-14 border-b border-slate-200 dark:border-stone-900">
          <div className="space-y-10">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 pb-2 border-b border-slate-200 dark:border-stone-800">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-slate-900 text-white font-semibold shadow-sm dark:bg-teal-500 dark:text-slate-950'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-stone-900 dark:text-stone-300 dark:hover:bg-stone-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Detailed Service Cards Grid */}
            <motion.div
              key={activeCategory}
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {filtered.map((service, idx) => {
                const Icon = SERVICE_ICONS[service.icon] || Layers

                return (
                  <motion.div
                    key={service.id}
                    id={service.id}
                    variants={itemVariants}
                    className="flex flex-col justify-between p-7 sm:p-8 scroll-mt-28 bg-white dark:bg-stone-900/60 border border-slate-200 dark:border-stone-800/80 rounded-3xl shadow-sm hover:border-teal-500/40 transition-all duration-300"
                  >
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 border border-teal-200 dark:bg-teal-950/60 dark:text-teal-300 dark:border-teal-800">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <span className="font-mono text-[11px] font-bold text-teal-800 dark:text-teal-400">
                              0{idx + 1} &bull; {service.category}
                            </span>
                            <h2 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                              {service.title}
                            </h2>
                          </div>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-stone-300 leading-relaxed font-normal">
                        {service.description}
                      </p>

                      {/* Deliverables */}
                      <div className="space-y-2 rounded-2xl border border-slate-200 dark:border-stone-800 bg-slate-50/70 dark:bg-stone-950/60 p-4">
                        <h3 className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-800 dark:text-stone-200">
                          Primary Deliverables:
                        </h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                          {service.deliverables.map((del) => (
                            <li key={del} className="flex items-start gap-2 text-xs text-slate-700 dark:text-stone-300">
                              <CheckCircle2 className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                              <span>{del}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stacks */}
                      <div>
                        <span className="font-mono text-[11px] text-slate-500 dark:text-stone-400 font-semibold block mb-2">
                          Technologies:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {service.techHighlights.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-md border border-slate-200 dark:border-stone-700 bg-white dark:bg-stone-800 px-2 py-0.5 font-mono text-[11px] text-slate-700 dark:text-stone-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-stone-800 flex items-center justify-between">
                      <span className="font-mono text-[11px] text-slate-400 dark:text-stone-500">Production SLA Ready</span>
                      <Link
                        href="/contact"
                        className="font-sans text-xs text-teal-700 dark:text-teal-400 hover:text-teal-900 dark:hover:text-teal-300 flex items-center gap-1 font-semibold"
                      >
                        <span>Inquire about this service</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* 3. Sectors & Institutional Focus */}
        <section id="sectors" className="relative p-6 sm:p-10 lg:p-14">
          <div className="space-y-10">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-teal-700 dark:text-teal-400">
                Sector Applications
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white mt-1">
                Solutions Tailored to Your Industry
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-stone-400">
                How our data infrastructure and applied AI capabilities address specific domain constraints.
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {targetClientsDetailed.map((sector) => {
                const Icon = SECTOR_ICONS[sector.icon] || Landmark
                return (
                  <motion.div
                    key={sector.name}
                    variants={itemVariants}
                    className="rounded-2xl border border-slate-200 dark:border-stone-800 bg-white dark:bg-stone-900/60 p-6 shadow-sm flex flex-col justify-between hover:border-teal-500/40 transition-all duration-300"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 dark:bg-stone-800 text-slate-800 dark:text-stone-200">
                          <Icon className="h-4.5 w-4.5" />
                        </div>
                        <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">{sector.name}</h3>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-stone-400 leading-relaxed mb-4">
                        {sector.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-stone-800">
                      {sector.focusAreas.map((area) => (
                        <span
                          key={area}
                          className="rounded bg-slate-50 dark:bg-stone-800/80 border border-slate-200 dark:border-stone-700 px-2 py-0.5 font-mono text-[10px] text-slate-600 dark:text-stone-300"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>
      </div>

      {/* 4. Full-Bleed Curved Canopy CTA */}
      <div className="relative w-full bg-white dark:bg-stone-950 transition-colors duration-300">
        {/* Top Arch Canopy Curve */}
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

        <section className="relative z-10 w-full bg-[#080d1a] text-white py-16 sm:py-24 text-center overflow-hidden">
          <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[800px] rounded-full bg-teal-500/10 blur-[120px]" />
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
            <span className="font-mono text-xs uppercase tracking-widest text-teal-400 font-semibold">
              Get Started
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Need a tailored data or machine learning engagement?
            </h2>
            <p className="text-stone-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              Schedule a discovery session with our senior consultants to review your system requirements and project roadmap.
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-full bg-teal-500 px-8 py-3.5 text-sm sm:text-base font-bold text-slate-950 shadow-lg shadow-teal-500/20 transition-all duration-300 hover:scale-105 hover:bg-teal-400"
              >
                <span>Discuss your project</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
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
    </div>
  )
}
