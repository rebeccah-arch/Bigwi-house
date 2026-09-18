'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface WhyChooseItem {
  number: string
  title: string
  description: string
}

const WHY_CHOOSE_US: WhyChooseItem[] = [
  {
    number: '01',
    title: 'Commercial outcomes first',
    description:
      'We start with your strategic priorities: profitability, cost pressures, market position. We combine AI with your proprietary data and existing systems, getting more value from your technology investments and moving fast to commercial value.'
  },
  {
    number: '02',
    title: 'Senior practitioner-led delivery at scale',
    description:
      'Our senior data architects and machine learning engineers deploy production-grade pipelines, processing millions of operational events, telemetry records, and transactions across critical enterprise workflows.'
  },
  {
    number: '03',
    title: 'Proven approaches across industries',
    description:
      "We've solved problems across retail, financial services, healthcare, telecommunications, government, and beyond. This breadth means we bring approaches already tested at scale, adapted to your specific challenges."
  }
]

export default function WhoWeAreSection() {
  return (
    <section id="why-clients-choose-us" className="relative z-10 w-full bg-[#080a11] text-white py-16 sm:py-24 lg:py-28 px-6 sm:px-10 lg:px-16 border-b border-slate-900/80 overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-teal-500/5 blur-[120px]" />

      <div className="max-w-[1240px] mx-auto space-y-12 sm:space-y-16">
        
        {/* Main Section Heading (Exact Quantium Style) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[46px] text-white tracking-tight leading-tight">
            Why clients choose us
          </h2>
        </motion.div>

        {/* 3 Quantium Numbered Items */}
        <div className="space-y-10 sm:space-y-12">
          {WHY_CHOOSE_US.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-start gap-5 sm:gap-7"
            >
              {/* Encircled Thin White Outline Number (Exact Quantium Icon) */}
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full border border-white/70 font-mono text-xs sm:text-sm font-normal text-white mt-1">
                {item.number}
              </div>

              {/* Title & Body Description */}
              <div className="space-y-2 max-w-4xl">
                <h3 className="font-sans font-bold text-lg sm:text-xl text-white tracking-normal">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-[15px] text-[#A6ADB9] font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
