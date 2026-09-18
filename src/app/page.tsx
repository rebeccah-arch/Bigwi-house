import React from 'react'
import {
  HeroSection,
  WhoWeAreSection,
  WhatWeSolveSection,
  WhoWeServeSection,
  InsightsPreviewSection,
  CtaSection,
} from '@/components/home'

export default function HomePage() {
  return (
    <div className="w-full bg-white dark:bg-stone-950 transition-colors duration-300 overflow-x-hidden">

      {/* 1. Quantium Split Hero Section */}
      <HeroSection />

      {/* 2. Quantium Value Pillars: "Why organisations choose us" */}
      <WhoWeAreSection />

      {/* 3. Quantium "How We Work" & "The 4 Core Pillars" */}
      <WhatWeSolveSection />
      {/* 5. Quantium Multi-Sector Expertise Showcase */}
      <WhoWeServeSection />

      {/* 6. Thought Leadership & Latest Research (Connected to QuantumBlack/Quantium Insights) */}
      <InsightsPreviewSection />

      {/* 7. Bottom Call to Action */}
      <CtaSection />
    </div>
  )
}
