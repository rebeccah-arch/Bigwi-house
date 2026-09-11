import React from 'react'
import {
  HeroSection,
  WhoWeAreSection,
  WhatWeSolveSection,
  WhoWeServeSection,
  HowWeDeliverSection,
  ServicesSection,
  CtaSection,
} from '@/components/home'

export default function HomePage() {
  return (
    <div className="w-full bg-white dark:bg-stone-950 transition-colors duration-300 overflow-x-hidden">
      {/* 1. Hero Section (Full-bleed with curved bottom) */}
      <HeroSection />

      {/* Main Content Frame */}
      <div className="relative mx-auto max-w-[1400px] bg-white dark:bg-stone-950 transition-colors duration-300">
        {/* 2. Who We Are */}
        <WhoWeAreSection />

        {/* 3. What We Solve (7 Core Pillars) */}
        <WhatWeSolveSection />

        {/* 4. Who We Serve (Target Sectors) */}
        <WhoWeServeSection />
      </div>

      {/* 5. The Delivery Engine (3-Step Milestone Storytelling) */}
      <HowWeDeliverSection />

      {/* Main Content Frame (Continued) */}
      <div className="relative mx-auto max-w-[1400px] bg-white dark:bg-stone-950 transition-colors duration-300">
        {/* 6. Services Directory (Interactive filter & pagination) */}
        <ServicesSection />

        {/* 7. Primary Call to Action */}
        <CtaSection />
      </div>
    </div>
  )
}
