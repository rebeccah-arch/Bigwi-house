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
    <div className="w-full bg-white dark:bg-stone-950 transition-colors duration-300 overflow-x-hidden">
      {/* 1. Header Banner (Full-Bleed Hero with Curved Bottom) */}
      <section className="relative z-10 w-full min-h-[460px] sm:min-h-[520px] overflow-hidden rounded-b-[40px] sm:rounded-b-[60px] lg:rounded-b-[80px] shadow-2xl border-b border-slate-200/20 dark:border-stone-800/40 bg-stone-950 flex flex-col justify-end pt-36 sm:pt-44 pb-16 sm:pb-24">
        {/* Full-Bleed Atmospheric Background Image */}
        <div className="absolute inset-0 h-full w-full overflow-hidden bg-stone-950">
          <Image
            src="/images/hero-team.jpg"
            alt="DataSphere and BIGWI HOUSE Data & AI Team in Kigali"
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
              <Building2 className="h-3.5 w-3.5" />
              <span>About DataSphere &bull; BIGWI HOUSE</span>
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight">
              Data &amp; AI Consulting Grounded in Practical Outcomes.
            </h1>

            <p className="text-base sm:text-lg text-stone-300 leading-relaxed font-normal max-w-2xl">
              <strong className="text-white font-semibold">DataSphere Consulting Ltd</strong> is an advisory and technology firm based in Kigali, Rwanda. Through our dedicated unit, <strong className="text-white font-semibold">BIGWI HOUSE</strong>, we deliver end-to-end data pipelines, predictive models, business intelligence dashboards, and custom software systems.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-full bg-teal-500 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-teal-500/20 transition-all duration-300 hover:scale-105 hover:bg-teal-400"
              >
                <span>Discuss a project</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/work"
                className="rounded-full border border-stone-600/60 bg-stone-900/70 px-7 py-3.5 text-sm font-semibold text-stone-200 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-stone-400 hover:bg-stone-800/80"
              >
                <span>View case studies</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Frame */}
      <div className="relative mx-auto max-w-[1400px] bg-white dark:bg-stone-950 transition-colors duration-300">
        {/* 2. Company & Organizational Structure */}
        <section id="company" className="relative p-6 sm:p-10 lg:p-14 border-b border-slate-200 dark:border-stone-900">
          <div className="space-y-8">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-teal-700 dark:text-teal-400">
                01 &bull; Organization
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white mt-1">
                Structure &amp; Operational Hubs
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-stone-400">
                A clear division combining strategic institutional advisory with specialized in-house data and applied AI delivery.
              </p>
            </div>

            <div className="space-y-6">
              {/* Parent Firm: DataSphere Consulting Ltd */}
              <div className="rounded-3xl border border-slate-200 dark:border-stone-800/80 bg-white dark:bg-stone-900/60 p-6 md:p-8 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-stone-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm dark:bg-teal-500 dark:text-slate-950">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white">{orgStructure.parent.label}</h3>
                      <p className="font-sans text-xs text-teal-700 dark:text-teal-400 font-semibold">{orgStructure.parent.tagline}</p>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-slate-600 dark:text-stone-300 bg-slate-50 dark:bg-stone-800 border border-slate-200 dark:border-stone-700 px-3 py-1 rounded-full font-medium">
                    Parent Firm &bull; Advisory &amp; Governance
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {orgStructure.parent.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 rounded-xl border border-slate-200 dark:border-stone-800 bg-slate-50/50 dark:bg-stone-800/80 p-3 shadow-sm"
                    >
                      <CheckCircle2 className="h-4 w-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-800 dark:text-stone-200 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hub: BIGWI HOUSE */}
              <div className="rounded-3xl border border-teal-200 dark:border-teal-800/60 bg-teal-50/40 dark:bg-teal-950/20 p-6 md:p-8 shadow-sm">
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
                  <span className="font-mono text-xs text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800 bg-white dark:bg-stone-800 px-3 py-1 rounded-full font-medium">
                    Specialized Delivery Unit &bull; Data &amp; AI
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {orgStructure.child.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 rounded-xl border border-teal-100 dark:border-teal-800/60 bg-white dark:bg-stone-800/80 p-3 shadow-sm"
                    >
                      <CheckCircle2 className="h-4 w-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-800 dark:text-stone-200 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. People & Execution Philosophy */}
        <section id="people" className="relative p-6 sm:p-10 lg:p-14 border-b border-slate-200 dark:border-stone-900">
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-teal-700 dark:text-teal-400">
                  02 &bull; People &amp; Expertise
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
                  Multidisciplinary Consultants &amp; Specialists
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-stone-300 leading-relaxed font-normal">
                  Our team brings together data engineers, machine learning specialists, systems architects, and business analysts. We work collaboratively with your internal teams, transferring knowledge and ensuring you have complete visibility throughout the delivery process.
                </p>
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-start gap-2 text-xs text-slate-700 dark:text-stone-300">
                    <CheckCircle2 className="h-4 w-4 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                    <span>Senior solution architects lead all client technical discovery and system design</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700 dark:text-stone-300">
                    <CheckCircle2 className="h-4 w-4 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                    <span>Direct communication with the technical team delivering your data pipelines and models</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700 dark:text-stone-300">
                    <CheckCircle2 className="h-4 w-4 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                    <span>Commitment to clean documentation, code reviews, and structured handover sessions</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 relative min-h-[320px] rounded-3xl overflow-hidden border border-slate-200 dark:border-stone-800 shadow-md">
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
        <section id="values" className="relative p-6 sm:p-10 lg:p-14">
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-3xl border border-slate-200 dark:border-stone-800/80 bg-white dark:bg-stone-900/60 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                    <Compass className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-stone-300 leading-relaxed font-normal">
                  {vision}
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 dark:border-stone-800/80 bg-white dark:bg-stone-900/60 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                    <Target className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-stone-300 leading-relaxed font-normal">
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
                  <div key={val.title} className="p-5 rounded-2xl border border-slate-200 dark:border-stone-800 bg-white dark:bg-stone-900/60 flex flex-col justify-between">
                    <div>
                      <span className="font-mono text-xs font-bold text-teal-600 dark:text-teal-400">0{idx + 1}</span>
                      <h4 className="font-display text-sm font-bold text-slate-900 dark:text-white mt-1 mb-2">{val.title}</h4>
                      <p className="text-xs text-slate-600 dark:text-stone-400 leading-relaxed">{val.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 5. Full-Bleed Curved Canopy CTA */}
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
              Credibility &amp; Governance
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Standards Built for Institutional Partners
            </h2>
            <p className="text-stone-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              Whether deploying data pipelines for international financial institutions or public health programs, we adhere to strict data sovereignty protocols and transparent delivery milestones.
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-full bg-teal-500 px-8 py-3.5 text-sm sm:text-base font-bold text-slate-950 shadow-lg shadow-teal-500/20 transition-all duration-300 hover:scale-105 hover:bg-teal-400"
              >
                <span>Start a conversation</span>
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
