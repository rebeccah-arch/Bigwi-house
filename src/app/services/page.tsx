'use client'

import React from 'react'
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
  Palette,
  Rocket,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Landmark,
  HeartPulse,
  Building2,
  Globe2,
  Sprout,
  Truck,
  Briefcase,
  TrendingUp,
} from '@/components/Icons'
import { services, targetClientsDetailed } from '@/content/bigwiContent'

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

const SECTOR_ICONS: Record<string, React.ElementType> = {
  Landmark,
  HeartPulse,
  Building2,
  Globe2,
  GraduationCap: Building2,
  Sprout,
  Truck,
  Briefcase,
  TrendingUp,
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

export default function ServicesPage() {
  return (
    <div className="space-y-20 md:space-y-28 py-10">
      {/* 1. Header Banner with Full Cover Background */}
      <section className="relative min-h-[480px] lg:min-h-[540px] flex items-center overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/data-engineer.jpg"
            alt="DataSphere Senior Architect &amp; Data Pipeline"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/30" />
        </div>

        <div className="relative z-10 mx-auto max-w-wide w-full px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 leading-tight">
              Enterprise software and data solutions engineered for scale.
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal bg-white/60 backdrop-blur-xs p-1 rounded-lg">
              From high-concurrency custom platforms and native mobile apps to modern data pipelines and real-time BI telemetry, DataSphere delivers robust, maintainable technology systems.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link href="/contact" className="btn btn-primary text-sm py-3 px-6 shadow-md">
                <span>Inquire for Your Organization</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Detailed Service Lines */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8 space-y-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service, idx) => {
              const Icon = SERVICE_ICONS[service.icon] || Layers

              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  variants={itemVariants}
                  className="card-enterprise flex flex-col justify-between p-8 scroll-mt-28"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 border border-teal-200">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <span className="font-mono text-xs font-bold text-teal-800">
                            0{idx + 1} • {service.category}
                          </span>
                          <h2 className="font-display text-xl font-bold text-slate-900">
                            {service.title}
                          </h2>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {service.description}
                    </p>

                    {/* Deliverables */}
                    <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-800">
                        Primary Deliverables &amp; Outcomes
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {service.deliverables.map((del) => (
                          <li key={del} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="h-3.5 w-3.5 text-teal-600 mt-0.5 flex-shrink-0" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stacks */}
                    <div>
                      <span className="font-mono text-[11px] text-slate-500 font-semibold block mb-2">
                        Core Tech Stack &amp; Toolchains:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {service.techHighlights.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-slate-200 bg-white px-2.5 py-1 font-mono text-[11px] text-slate-700 shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="font-mono text-xs text-slate-400">Production SLA Ready</span>
                    <Link
                      href="/contact"
                      className="font-sans text-xs text-teal-700 hover:text-teal-900 flex items-center gap-1 font-semibold"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* 3. Target Sectors & Clients */}
      <section id="sectors" className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900">
              Who We Serve
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              We engineer specialized technology solutions across institutional, private enterprise, and high-growth SME domains.
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
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-slate-300 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-800 border border-slate-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-base font-bold text-slate-900">{sector.name}</h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {sector.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                    {sector.focusAreas.map((area) => (
                      <span
                        key={area}
                        className="rounded bg-slate-50 border border-slate-200 px-2 py-0.5 font-mono text-[10px] text-slate-600"
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
          <div className="rounded-3xl border border-slate-200 bg-slate-900 text-white p-8 md:p-12 text-center shadow-xl space-y-6">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Need a tailored software or data engineering engagement?
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
              Whether you require a complete enterprise platform or specialized data pipeline engineering for an existing system, our team is ready.
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <Link href="/contact" className="btn btn-teal py-3 px-7">
                <span>Start Technical Discovery</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
