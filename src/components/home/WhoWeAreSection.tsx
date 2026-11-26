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
    title: 'One lifecycle, from collection to decisions',
    description:
      'Explore support across data collection, analysis, model development and evaluation, deployment, monitoring, and advisory. The right scope depends on your data, users, and goals.'
  },
  {
    number: '02',
    title: 'DataSphere and BIGWI HOUSE',
    description:
      'DataSphere Consulting Ltd is the consultancy; BIGWI HOUSE is its dedicated delivery unit for building data and AI solutions.'
  },
  {
    number: '03',
    title: 'Evidence before outcomes',
    description:
      'We distinguish proposed benefits from measured results. Any public project outcome should be tied to a defined measure and approved supporting evidence.'
  }
]

export default function WhoWeAreSection() {
  return (
    <section id="why-clients-choose-us" className="relative z-10 w-full bg-[#080a11] text-white py-16 sm:py-24 lg:py-28 px-6 sm:px-10 lg:px-16 overflow-hidden">
      
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
