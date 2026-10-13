'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  Server,
  ShieldCheck,
  Cpu,
  BarChart3
} from '@/components/Icons'
import { growthPhases, deliveryProcess } from '@/content/bigwiContent'

export default function ApproachPage() {
  return (
    <div className="w-full bg-white dark:bg-[#080a11] text-slate-900 dark:text-stone-100 transition-colors duration-300">

      {/* 1. Full-Height Curved Split Dark Hero (Matching HeroSection.tsx) */}
      <section className="relative z-10 w-full min-h-[640px] lg:min-h-[740px] bg-[#080a11] text-white overflow-hidden flex items-center">

        {/* Right Column: Full-Height Curved Split Image (Matching HeroSection) */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[48%] xl:w-[52%] h-full z-0 pointer-events-none">
          <div className="relative w-full h-full overflow-hidden lg:rounded-l-[100px] xl:rounded-l-[160px]">
            <Image
              src="/images/executive-strategy.jpg"
              alt="DataSphere Architecture Delivery Session"
              fill
              priority
              className="object-cover object-center scale-105"
            />
            {/* Subtle gradient overlay on left, top and bottom for seamless blend with header and dark background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#080a11] via-[#080a11]/40 to-transparent lg:hidden" />
            <div className="hidden lg:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#080a11]/80 to-transparent" />
            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#080a11] via-[#080a11]/60 to-transparent z-10" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#080a11] to-transparent" />

          </div>
        </div>

        {/* Main Container Content */}
        <div className="relative z-10 w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-20 sm:pb-28">
          <div className="max-w-full lg:max-w-[54%] xl:max-w-[50%] space-y-6 sm:space-y-8">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-[54px] xl:text-[58px] tracking-tight leading-[1.08] text-white"
            >
              A disciplined, transparent delivery framework
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg md:text-xl text-[#A6ADB9] leading-relaxed font-normal max-w-2xl"
            >
              We publish our delivery process so enterprise partners, governments, and commercial clients know exactly what to expect from initial discovery to live production monitoring and continuous SLA support.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs sm:text-sm font-bold text-slate-950 shadow-xl transition-all duration-300 hover:bg-stone-200"
              >
                <span>Discuss your project</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/work"
                className="inline-flex items-center justify-center rounded-full border border-stone-700 bg-stone-900/60 backdrop-blur-sm px-7 py-3.5 text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10"
              >
                <span>Explore case studies</span>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. 3-Phase Implementation Methodology */}
      <section className="py-20 sm:py-28 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-stone-800/80">
        <div className="space-y-12">

          <div className="max-w-2xl space-y-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Phase Progression
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950 dark:text-white leading-tight">
              Phased Implementation Methodology
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-stone-300 font-normal leading-relaxed pt-1">
              How we de-risk deployments and validate performance before enterprise production rollout.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {growthPhases.map((phase, idx) => (
              <div
                key={phase.name}
                className="p-8 border border-slate-200 dark:border-stone-800 bg-slate-50/50 dark:bg-stone-900/40 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-full border border-slate-400 dark:border-stone-600 flex items-center justify-center font-sans text-xs font-normal text-slate-700 dark:text-stone-300">
                      0{idx + 1}
                    </div>
                    <span className="font-mono text-xs text-slate-600 dark:text-stone-300 bg-white dark:bg-stone-800 border border-slate-200 dark:border-stone-700 px-2.5 py-1 font-medium">
                      {phase.step}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-bold text-slate-950 dark:text-white">
                      {phase.name}
                    </h3>
                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-1">
                      {phase.subtitle}
                    </p>
                  </div>

                  <ul className="space-y-2.5 pt-3 border-t border-slate-200 dark:border-stone-800">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-stone-300">
                        <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-stone-800">
                  <span className="font-mono text-xs text-slate-500 dark:text-stone-400 block">
                    Core Outcome: {idx === 0 ? 'Diagnostic & Feasibility Blueprint' : idx === 1 ? 'Validated Architecture & Prototype' : 'Monitored Production SLA'}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. 6-Stage Engineering Lifecycle */}
      <section className="py-20 sm:py-28 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-stone-800/80">
        <div className="space-y-12">

          <div className="max-w-2xl space-y-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Execution Lifecycle
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950 dark:text-white leading-tight">
              Structured sprint lifecycle from diagnosis to SLA
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-stone-300 font-normal leading-relaxed pt-1">
              Every client initiative follows our 6-stage engineering process with strict review gates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliveryProcess.map((step) => (
              <div
                key={step.number}
                className="p-8 border border-slate-200 dark:border-stone-800 bg-white dark:bg-stone-900/60 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-blue-600 dark:text-blue-400">
                      STAGE {step.number}
                    </span>
                    <span className="font-mono text-[11px] font-bold text-slate-500 dark:text-stone-400 border border-slate-200 dark:border-stone-800 px-2.5 py-0.5">
                      {step.tagline}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-slate-950 dark:text-white">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-stone-300 leading-relaxed font-normal">
                    {step.description}
                  </p>

                  <div className="pt-3 border-t border-slate-100 dark:border-stone-800 space-y-1.5">
                    <span className="font-mono text-[11px] font-bold text-slate-900 dark:text-white block uppercase tracking-wider">
                      Key Outputs:
                    </span>
                    {step.outputs.map((out) => (
                      <div key={out} className="flex items-center gap-2 text-xs text-slate-700 dark:text-stone-300">
                        <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                        <span>{out}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Technology Stack & Open Standards */}
      <section className="py-20 sm:py-28 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-stone-800/80">
        <div className="space-y-12">

          <div className="max-w-2xl space-y-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Toolchains &amp; Architecture
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950 dark:text-white leading-tight">
              Production-hardened technology standards
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-stone-300 font-normal leading-relaxed pt-1">
              We build with open, portable frameworks to eliminate vendor lock-in and guarantee long-term maintainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="p-6 border border-slate-200 dark:border-stone-800 bg-slate-50/50 dark:bg-stone-900/40 space-y-3">
              <Server className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h3 className="font-serif text-base font-bold text-slate-950 dark:text-white">Data Lakehouses</h3>
              <p className="text-xs text-slate-600 dark:text-stone-400 leading-relaxed">
                ClickHouse, PostgreSQL, Delta Lake, Apache Airflow, and dbt for high-throughput pipeline ingestion.
              </p>
            </div>

            <div className="p-6 border border-slate-200 dark:border-stone-800 bg-slate-50/50 dark:bg-stone-900/40 space-y-3">
              <Cpu className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h3 className="font-serif text-base font-bold text-slate-950 dark:text-white">Applied Machine Learning</h3>
              <p className="text-xs text-slate-600 dark:text-stone-400 leading-relaxed">
                PyTorch, Scikit-Learn, MLflow, FastAPI, and containerized Docker runtime inference endpoints.
              </p>
            </div>

            <div className="p-6 border border-slate-200 dark:border-stone-800 bg-slate-50/50 dark:bg-stone-900/40 space-y-3">
              <BarChart3 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h3 className="font-serif text-base font-bold text-slate-950 dark:text-white">Decision Intelligence</h3>
              <p className="text-xs text-slate-600 dark:text-stone-400 leading-relaxed">
                Apache Superset, Power BI, Metabase, and custom Next.js/React executive portals with PostGIS mapping.
              </p>
            </div>

            <div className="p-6 border border-slate-200 dark:border-stone-800 bg-slate-50/50 dark:bg-stone-900/40 space-y-3">
              <ShieldCheck className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h3 className="font-serif text-base font-bold text-slate-950 dark:text-white">Cloud &amp; Security</h3>
              <p className="text-xs text-slate-600 dark:text-stone-400 leading-relaxed">
                AWS, Google Cloud, Terraform Infrastructure-as-Code, automated backups, and encrypted column-level RBAC.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Consultation CTA */}
      <section className="bg-[#080a11] text-white py-20 sm:py-24 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-blue-400 font-semibold">
            Engage Our Team
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Ready to structure your data roadmap?
          </h2>

          <p className="text-stone-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Connect with our technical team to discuss your current data challenges, timelines, and deliverable milestones.
          </p>

          <div className="pt-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white hover:bg-stone-200 text-slate-950 font-bold px-8 py-3.5 text-xs sm:text-sm tracking-wide shadow-md transition-all duration-300"
            >
              <span>Start a conversation</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}