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
    <div className="space-y-20 md:space-y-28 py-10">
      {/* 1. Header Banner */}
      <section className="relative min-h-[440px] lg:min-h-[500px] flex items-center overflow-hidden border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/data-engineer.jpg"
            alt="Data & AI Services by DataSphere & BIGWI HOUSE"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/60 dark:from-[#07090E] dark:via-[#07090E]/95 dark:to-[#07090E]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/30 dark:from-[#07090E] dark:via-transparent dark:to-[#07090E]/30" />
        </div>

        <div className="relative z-10 mx-auto max-w-wide w-full px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-5"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-50 dark:bg-teal-950/60 px-3 py-1 text-xs font-mono text-teal-800 dark:text-teal-300">
              <span>Capabilities &amp; Solutions</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Data &amp; AI services organized around organizational challenges.
            </h1>

            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              We help organizations gather structured data, develop custom machine learning models, build executive dashboards, and maintain systems in production with dedicated SLAs.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link href="/contact" className="btn btn-primary text-xs sm:text-sm py-2.5 px-5">
                <span>Request a consultation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Category Filter & Service List */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white font-semibold shadow-sm dark:bg-teal-500 dark:text-slate-950'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
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
                  className="card-enterprise flex flex-col justify-between p-7 sm:p-8 scroll-mt-28 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-3xl"
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

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {service.description}
                    </p>

                    {/* Deliverables */}
                    <div className="space-y-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-4">
                      <h3 className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                        Primary Deliverables:
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {service.deliverables.map((del) => (
                          <li key={del} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                            <CheckCircle2 className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stacks */}
                    <div>
                      <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400 font-semibold block mb-2">
                        Technologies:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {service.techHighlights.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-2 py-0.5 font-mono text-[11px] text-slate-700 dark:text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span className="font-mono text-[11px] text-slate-400 dark:text-slate-500">Production SLA Ready</span>
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
      <section id="sectors" className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-teal-700 dark:text-teal-400">
              Sector Applications
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white mt-1">
              Solutions Tailored to Your Industry
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
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
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-6 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">{sector.name}</h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                      {sector.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                    {sector.focusAreas.map((area) => (
                      <span
                        key={area}
                        className="rounded bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2 py-0.5 font-mono text-[10px] text-slate-600 dark:text-slate-300"
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

      {/* 4. Bottom CTA */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-900 text-white p-8 md:p-12 text-center shadow-xl space-y-5">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Need a tailored data or machine learning engagement?
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto text-xs sm:text-sm">
              Schedule a discovery session with our senior consultants to review your system requirements and project roadmap.
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <Link href="/contact" className="btn btn-teal text-xs sm:text-sm py-2.5 px-6">
                <span>Discuss your project</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
