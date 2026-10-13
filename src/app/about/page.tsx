'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Building2,
  ArrowRight,
  CheckCircle2,
  Compass,
  Target,
  ShieldCheck,
  Cpu,
  Layers,
  BarChart3,
  Server
} from '@/components/Icons'
import {
  orgStructure,
  vision,
  mission,
  companyValues
} from '@/content/bigwiContent'

export default function AboutPage() {
  return (
    <div className="w-full bg-white dark:bg-[#080a11] text-slate-900 dark:text-stone-100 transition-colors duration-300">

      {/* 1. Full-Height Curved Split Dark Hero (Matching HeroSection.tsx) */}
      <section className="relative z-10 w-full min-h-[680px] lg:min-h-[780px] bg-[#080a11] text-white overflow-hidden flex items-center">

        {/* Right Column: Full-Height Curved Split Image (Matching HeroSection) */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[48%] xl:w-[52%] h-full z-0 pointer-events-none">
          <div className="relative w-full h-full overflow-hidden lg:rounded-l-[100px] xl:rounded-l-[160px]">
            <Image
              src="/images/hero-team.jpg"
              alt="DataSphere Technical Group in Kigali"
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
              className="font-sans font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-[52px] xl:text-[56px] tracking-tight leading-[1.08] text-white"
            >
              Enterprise data consulting grounded in measurable business outcomes
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg md:text-xl text-[#A6ADB9] leading-relaxed font-normal max-w-2xl"
            >
              <strong className="text-white font-semibold">DataSphere Consulting Ltd</strong> is an independent data advisory and technology firm operating from Kigali. Through our dedicated delivery unit, <strong className="text-white font-semibold">BIGWI HOUSE</strong>, we architect high-throughput lakehouses, predictive modeling engines, executive decision portals, and mission-critical enterprise systems.
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
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-stone-700 bg-stone-900/60 backdrop-blur-sm px-7 py-3.5 text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10"
              >
                <span>View 4 core practices</span>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Organizational Structure (Parent Advisory & Dedicated Delivery Hub) */}
      <section className="py-20 sm:py-28 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-stone-800/80">
        <div className="space-y-12">

          <div className="max-w-2xl space-y-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Corporate Structure
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950 dark:text-white leading-tight">
              Institutional governance with specialized engineering execution
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-stone-300 font-normal leading-relaxed pt-1">
              A structured operating model separating strategic board-level advisory from deep, technical in-house data system delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Parent Firm: DataSphere Consulting Ltd */}
            <div className="p-8 sm:p-10 border border-slate-200 dark:border-stone-800 bg-slate-50/50 dark:bg-stone-900/40 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 bg-slate-950 dark:bg-stone-800 text-white flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-white dark:text-blue-400" />
                  </div>
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-stone-400 border border-slate-300 dark:border-stone-700 px-2.5 py-1">
                    Parent Advisory Firm
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-2xl font-bold text-slate-950 dark:text-white">
                    {orgStructure.parent.label}
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                    {orgStructure.parent.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-stone-300 leading-relaxed">
                  Focuses on institutional technology strategy, national data sovereignty compliance, enterprise architecture roadmaps, and stakeholder governance.
                </p>

                <div className="pt-2 space-y-2.5">
                  {orgStructure.parent.items.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-xs text-slate-800 dark:text-stone-200">
                      <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Delivery Unit: BIGWI HOUSE */}
            <div className="p-8 sm:p-10 border border-slate-200 dark:border-stone-800 bg-white dark:bg-stone-900/60 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 bg-blue-600 text-white flex items-center justify-center">
                    <Server className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/80 px-2.5 py-1">
                    Specialized Delivery Unit
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-2xl font-bold text-slate-950 dark:text-white">
                    {orgStructure.child.label}
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                    {orgStructure.child.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-stone-300 leading-relaxed">
                  Dedicated hands-on engineering division building high-speed ingestion pipelines, Lakehouse storage layers, predictive ML models, and custom software systems.
                </p>

                <div className="pt-2 space-y-2.5">
                  {orgStructure.child.items.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-xs text-slate-800 dark:text-stone-200">
                      <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. People & Execution Philosophy */}
      <section className="py-20 sm:py-28 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-stone-800/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Our People &amp; Approach
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950 dark:text-white leading-tight">
              Multidisciplinary consultants collaborating directly with your team
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-stone-300 leading-relaxed font-normal">
              Our delivery teams comprise senior data architects, systems engineers, analytics specialists, and business analysts. We do not operate as an opaque offshore black box; we embed directly alongside your technical and operational staff, transferring skills and leaving your internal teams self-sufficient.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-stone-300">
                <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                <span>Senior solution architects lead discovery, schema definition, and system design</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-stone-300">
                <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                <span>Direct daily communication with the engineers building your pipelines and analytical tools</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-stone-300">
                <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                <span>Rigorous documentation, reproducible code repositories, and structured knowledge handover</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[16/11] w-full overflow-hidden border border-slate-200 dark:border-stone-800 shadow-lg">
            <Image
              src="/images/executive-strategy.jpg"
              alt="DataSphere Consultants Strategic Planning"
              fill
              className="object-cover object-center"
            />
          </div>

        </div>
      </section>
      {/* 6. Clean Institutional Consultation CTA */}
      <section className="bg-[#080a11] text-white py-20 sm:py-24 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-blue-400 font-semibold">
            Institutional Partnership
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Ready to structure your enterprise data foundations?
          </h2>

          <p className="text-stone-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Schedule a strategic discovery session with our senior solution architects to assess your infrastructure and roadmap realistic implementation milestones.
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


      {/* 4. Quantium-Style 4 Core Operating Principles */}
      <section className="py-20 sm:py-28 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-stone-800/80">
        <div className="space-y-12">

          <div className="max-w-2xl space-y-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Core Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950 dark:text-white leading-tight">
              Why clients partner with DataSphere
            </h2>
          </div>

          {/* 4-Column Grid with Quantium-Style Encircled Numbers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((val, idx) => (
              <div
                key={val.title}
                className="space-y-4 pt-6 border-t border-slate-200 dark:border-stone-800"
              >
                {/* Thin Encircled Outline Number */}
                <div className="w-10 h-10 rounded-full border border-slate-400 dark:border-stone-600 flex items-center justify-center font-sans text-xs font-normal text-slate-700 dark:text-stone-300">
                  0{idx + 1}
                </div>

                <h3 className="font-sans font-bold text-base text-slate-950 dark:text-white leading-snug">
                  {val.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-stone-400 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Mission & Vision */}
      <section className="py-20 sm:py-24 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-stone-800/80">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="p-8 sm:p-10 border border-slate-200 dark:border-stone-800 bg-slate-50/50 dark:bg-stone-900/30 space-y-4">
            <div className="flex items-center gap-3">
              <Compass className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <h3 className="font-serif text-xl font-bold text-slate-950 dark:text-white">Our Vision</h3>
            </div>
            <p className="text-sm text-slate-700 dark:text-stone-300 leading-relaxed font-normal">
              {vision}
            </p>
          </div>

          <div className="p-8 sm:p-10 border border-slate-200 dark:border-stone-800 bg-slate-50/50 dark:bg-stone-900/30 space-y-4">
            <div className="flex items-center gap-3">
              <Target className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <h3 className="font-serif text-xl font-bold text-slate-950 dark:text-white">Our Mission</h3>
            </div>
            <p className="text-sm text-slate-700 dark:text-stone-300 leading-relaxed font-normal">
              {mission}
            </p>
          </div>

        </div>
      </section>

    </div>
  )
}
