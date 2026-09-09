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
  Cpu,
  Users,
  Award
} from '@/components/Icons'
import {
  orgStructure,
  vision,
  mission,
  companyValues,
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
      {/* 1. Header Banner with Background Image */}
      <section className="relative min-h-[440px] lg:min-h-[500px] flex items-center overflow-hidden border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-team.jpg"
            alt="DataSphere and BIGWI HOUSE Data & AI Team in Kigali"
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
              <span>About DataSphere &bull; BIGWI HOUSE</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Data &amp; AI consulting grounded in practical outcomes.
            </h1>

            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              <strong className="text-slate-900 dark:text-white font-semibold">DataSphere Consulting Ltd</strong> is an advisory and technology firm based in Kigali, Rwanda. Through our dedicated unit, <strong className="text-slate-900 dark:text-white font-semibold">BIGWI HOUSE</strong>, we deliver end-to-end data pipelines, predictive models, business intelligence dashboards, and custom software systems for international organizations, governments, and commercial enterprises.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link href="/contact" className="btn btn-primary text-xs sm:text-sm py-2.5 px-5">
                <span>Discuss a project</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/work" className="btn btn-ghost text-xs sm:text-sm py-2.5 px-5">
                <span>View case studies</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Company & Organizational Structure */}
      <section id="company" className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-teal-700 dark:text-teal-400">
              01 &bull; Organization
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white mt-1">
              Structure &amp; Operational Hubs
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              A clear division combining strategic institutional advisory with specialized in-house data and applied AI delivery.
            </p>
          </div>

          <div className="space-y-6">
            {/* Parent Firm: DataSphere Consulting Ltd */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-6 md:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm dark:bg-teal-500 dark:text-slate-950">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white">{orgStructure.parent.label}</h3>
                    <p className="font-sans text-xs text-teal-700 dark:text-teal-400 font-semibold">{orgStructure.parent.tagline}</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1 rounded-full font-medium">
                  Parent Firm &bull; Advisory &amp; Governance
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

            {/* Hub: BIGWI HOUSE */}
            <div className="rounded-2xl border border-teal-200 dark:border-teal-800/80 bg-teal-50/40 dark:bg-teal-950/30 p-6 md:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-teal-200/60 dark:border-teal-800/60 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-700 dark:bg-teal-600 text-white shadow-sm">
                    <Cpu className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white">{orgStructure.child.label}</h3>
                    <p className="font-sans text-xs text-teal-800 dark:text-teal-300 font-semibold">{orgStructure.child.tagline}</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800 bg-white dark:bg-slate-800 px-3 py-1 rounded-full font-medium">
                  Specialized Delivery Unit &bull; Data &amp; AI
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

      {/* 3. People & Execution Philosophy */}
      <section id="people" className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-teal-700 dark:text-teal-400">
                02 &bull; People &amp; Expertise
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
                Multidisciplinary Consultants &amp; Specialists
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Our team brings together data engineers, machine learning specialists, systems architects, and business analysts. We work collaboratively with your internal teams, transferring knowledge and ensuring you have complete visibility throughout the delivery process.
              </p>
              <div className="space-y-2.5 pt-2">
                <div className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                  <span>Senior solution architects lead all client technical discovery and system design</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                  <span>Direct communication with the technical team delivering your data pipelines and models</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                  <span>Commitment to clean documentation, code reviews, and structured handover sessions</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative min-h-[320px] rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md">
              <Image
                src="/images/executive-strategy.jpg"
                alt="DataSphere and BIGWI HOUSE consultants collaborating"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Mission, Vision & Values */}
      <section id="values" className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                  <Compass className="h-4.5 w-4.5" />
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                {vision}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                  <Target className="h-4.5 w-4.5" />
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                {mission}
              </p>
            </div>
          </div>

          {/* Company Core Values */}
          <div className="pt-6">
            <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4">
              Core Principles We Operate By
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {companyValues.map((val, idx) => (
                <div key={val.title} className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs font-bold text-teal-600 dark:text-teal-400">0{idx + 1}</span>
                    <h4 className="font-display text-sm font-bold text-slate-900 dark:text-white mt-1 mb-2">{val.title}</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{val.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Credibility & Standards */}
      <section id="credibility" className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-900 text-white p-8 md:p-12 shadow-xl space-y-6">
            <div className="max-w-2xl space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-teal-400 font-semibold">
                Credibility &amp; Data Governance
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                Standards Built for Institutional Partners
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Whether deploying data pipelines for international financial institutions or public health programs, we adhere to strict non-disclosure agreements, data sovereignty protocols, and transparent delivery milestones.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/contact" className="btn btn-teal text-xs sm:text-sm py-2.5 px-6">
                <span>Start a conversation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/services" className="rounded-full border border-slate-700 px-5 py-2.5 text-xs sm:text-sm text-slate-300 hover:text-white hover:border-slate-500 transition-colors">
                Explore capabilities
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
