'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Target, Cpu, ShieldCheck } from '@/components/Icons'

const HOW_WE_WORK_STEPS = [
  {
    icon: Target,
    title: 'Built for business impact',
    description:
      'We align data architectures and predictive models directly with strategic priorities, defining measurable operational KPIs and payback milestones before writing code.'
  },
  {
    icon: Cpu,
    title: 'Systems embedded in your operations',
    description:
      'Our senior data engineers and machine learning scientists embed real-time decisioning and automated data pipelines directly into your operational software and field apps.'
  },
  {
    icon: ShieldCheck,
    title: 'Capability built to last',
    description:
      'We upskill your internal teams and establish comprehensive data governance, continuous drift telemetry, and documentation to ensure long-term independence.'
  }
]

const WHAT_WE_DELIVER_ITEMS = [
  {
    title: 'Customer intelligence',
    description:
      'Segmentation, personalised experiences, and AI-powered customer platforms that build loyalty and deepen relationships.'
  },
  {
    title: 'Smarter operations',
    description:
      'Systems that forecast demand, manage inventory, automate processes, and allocate resources better.'
  },
  {
    title: 'GenAI in production',
    description:
      'Custom applications that connect AI to your proprietary data, delivering commercial value within weeks. We choose the right tools for your organisation and develop capability across your teams.'
  },
  {
    title: 'Risk management',
    description:
      'Models that detect fraud, assess lending risk, ensure compliance, and spot emerging threats. Make faster decisions with more confidence while protecting critical assets.'
  }
]

export default function WhatWeSolveSection() {
  return (
    <div className="w-full transition-colors duration-300">

      {/* 1. Quantium 'How We Work' 3-Column Strip */}
      <section className="bg-[#f8f9fb] dark:bg-stone-950 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-stone-900">
        <div className="max-w-[1240px] mx-auto space-y-12">
          <div className="max-w-3xl space-y-2">
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[46px] text-slate-950 dark:text-white tracking-tight leading-tight">
              How We Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {HOW_WE_WORK_STEPS.map((step, idx) => {
              const Icon = step.icon

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative border border-slate-200 dark:border-stone-800 bg-white dark:bg-stone-900/50 p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-md transition-all duration-300"
                >
                  <div className="space-y-4">
                    {/* Top Icon Badge & Index */}
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 dark:bg-stone-800 text-slate-900 dark:text-blue-400 border border-slate-200 dark:border-stone-700 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-600 dark:group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400 dark:text-stone-500">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-sans font-bold text-lg sm:text-xl text-slate-950 dark:text-white tracking-normal group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-sm sm:text-[15px] text-slate-600 dark:text-[#A6ADB9] font-normal leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 2. Quantium 'What We Deliver' (Exact Layout from Screenshot) */}
      <section id="what-we-deliver" className="bg-[#eae7e1] dark:bg-[#0c0f17] text-slate-950 dark:text-stone-100 border-b border-stone-300 dark:border-stone-900 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px] items-stretch">

          {/* Left Column: Full-Height Team Photo from Screenshot */}
          <div className="lg:col-span-6 relative min-h-[380px] sm:min-h-[480px] lg:min-h-full w-full bg-stone-300 dark:bg-stone-900 overflow-hidden">
            <Image
              src="/images/team-atrium.jpg"
              alt="DataSphere team collaborating in modern office atrium"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          {/* Right Column: 'What we deliver' Content (Exact Quantium Copy & Typography) */}
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 xl:p-20 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8 max-w-xl"
            >
              <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-[46px] text-slate-950 dark:text-white tracking-tight leading-tight">
                What we deliver
              </h2>

              <div className="space-y-7">
                {WHAT_WE_DELIVER_ITEMS.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="space-y-1.5"
                  >
                    <h3 className="font-sans font-bold text-base sm:text-lg text-slate-950 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-stone-300 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}