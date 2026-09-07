'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import {
  Building2,
  Layers,
  ArrowRight,
  CheckCircle2,
  Compass,
  Target,
  ShieldCheck,
} from '@/components/Icons'
import {
  orgStructure,
  vision,
  mission,
  competitiveAdvantage,
} from '@/content/bigwiContent'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

export default function AboutPage() {
  return (
    <div className="space-y-20 md:space-y-28 py-10">
      {/* 1. Header Banner with Full Cover Background Image */}
      <section className="relative min-h-[480px] lg:min-h-[540px] flex items-center overflow-hidden border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-team.jpg"
            alt="DataSphere Engineering and Advisory Team in Kigali"
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
            className="max-w-3xl space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Where strategic advisory and software engineering meet.
            </h1>

            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal bg-white/60 dark:bg-slate-900/60 backdrop-blur-xs p-1 rounded-lg">
              <strong className="text-slate-900 dark:text-white font-semibold">DataSphere Consulting Ltd</strong> is a premier software engineering, data analytics, and digital transformation consulting firm based in Kigali, Rwanda. We turn complex organizational challenges and disparate data assets into scalable, resilient digital platforms.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/contact" className="btn btn-primary text-sm py-3 px-6 shadow-md">
                <span>Partner With Us</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/work" className="btn btn-ghost text-sm py-3 px-6 shadow-sm">
                <span>Explore Deployments</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Dual-Tier Corporate Structure */}
      <section id="structure" className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
              Integrated Capabilities &amp; Specialized Units
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
              A cohesive architecture combining executive advisory with deep in-house engineering and data intelligence capabilities.
            </p>
          </div>

          <div className="space-y-6">
            {/* Parent Firm: DataSphere Consulting */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-6 md:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm dark:bg-teal-500 dark:text-slate-950">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">{orgStructure.parent.label}</h3>
                    <p className="font-sans text-xs text-teal-700 dark:text-teal-400 font-semibold">{orgStructure.parent.tagline}</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1 rounded-full font-medium">
                  Advisory &amp; Data Intelligence
                </span>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {orgStructure.parent.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 p-3 shadow-sm"
                  >
                    <CheckCircle2 className="h-4 w-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Connection Flow Arrow */}
            <div className="flex justify-center">
              <div className="flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-1.5 font-sans text-xs text-slate-600 dark:text-slate-400 shadow-sm font-medium">
                <span>Direct Strategic Alignment &amp; Engineering Pipeline</span>
                <span className="text-teal-600 dark:text-teal-400">↓</span>
              </div>
            </div>

            {/* Solutions Division */}
            <div className="rounded-2xl border border-teal-200 dark:border-teal-800/80 bg-teal-50/50 dark:bg-teal-950/30 p-6 md:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-teal-200/60 dark:border-teal-800/60 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-700 dark:bg-teal-600 text-white shadow-sm">
                    <Layers className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">{orgStructure.child.label}</h3>
                    <p className="font-sans text-xs text-teal-800 dark:text-teal-300 font-semibold">{orgStructure.child.tagline}</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800 bg-white dark:bg-slate-800 px-3 py-1 rounded-full font-medium">
                  Engineering &amp; Product Delivery
                </span>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {orgStructure.child.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 rounded-xl border border-teal-100 dark:border-teal-800/60 bg-white dark:bg-slate-800/80 p-3 shadow-sm"
                  >
                    <CheckCircle2 className="h-4 w-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission Cards */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                  <Compass className="h-5 w-5" />
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                {vision}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                  <Target className="h-5 w-5" />
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                {mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Strategic Philosophy & Innovation Lab */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-900 p-8 md:p-14 shadow-xl">
            <div className="absolute inset-0 opacity-20">
              <Image
                src="/images/executive-strategy.jpg"
                alt="DataSphere Executive Strategy Session"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative z-10 space-y-6 max-w-3xl">
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
                Reliable Engineering for Real-World Demands
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm sm:text-base text-slate-300 leading-relaxed">
                <p>
                  Every engagement at DataSphere begins with a <strong className="text-white">business-first diagnosis</strong>: understanding core organizational workflows, compliance standards, and operational constraints before writing architecture. We avoid one-size-fits-all software templates.
                </p>
                <p>
                  Our team builds production systems applying modern data pipelines, cloud-native DevOps, and robust API frameworks to concrete institutional priorities across East Africa. We design resilient systems built for high transaction volume, data integrity, and long-term maintainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Competitive Advantages */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
              Why Organizations Choose DataSphere
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Measurable outcomes, transparent engineering governance, and dedicated long-term partnerships.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {competitiveAdvantage.map((adv, idx) => (
              <motion.div
                key={adv}
                variants={itemVariants}
                className="card-enterprise flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-2xl font-bold text-teal-700 dark:text-teal-400">0{idx + 1}</span>
                  <h3 className="mt-3 font-display text-base font-bold text-slate-900 dark:text-white">{adv}</h3>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <span className="font-sans text-xs text-slate-500 dark:text-slate-400 font-medium">Guaranteed Execution Standard</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-900 text-white p-8 md:p-12 text-center shadow-xl space-y-6">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Ready to partner with DataSphere Consulting?
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
              Schedule a discovery consultation with our senior solutions architects to explore how we can architect your next software platform or data pipeline.
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
