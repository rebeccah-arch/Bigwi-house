'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from '@/components/Icons'
import { vision, mission } from '@/content/bigwiContent'

interface MissionVisionSectionProps {
  className?: string
}

export default function MissionVisionSection({ className = '' }: MissionVisionSectionProps) {
  return (
    <section
      id="mission-vision"
      className={`relative py-20 sm:py-28 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-stone-800/80 overflow-hidden ${className}`}
    >
      {/* Background Ambient Brand Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#028090]/5 dark:bg-[#00A896]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-1/3 w-[450px] h-[300px] bg-[#0A2540]/5 dark:bg-[#0284C7]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 space-y-12 sm:space-y-16">

        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 dark:text-white tracking-tight">
            Our Mission &amp; Vision
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-stone-300 leading-relaxed font-normal">
            Propelling African enterprises and institutions into global competitive capability through production-grade data foundations and decision intelligence.
          </p>
        </div>

        {/* Main Interactive Rocket Infographic Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">

          {/* LEFT COLUMN: MISSION (NO BADGES) */}
          <div className="lg:col-span-4 order-2 lg:order-1 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-stone-800 bg-white/80 dark:bg-stone-900/60 backdrop-blur-md shadow-lg shadow-teal-500/5 hover:border-[#00A896]/50 transition-all duration-300"
            >
              {/* Desktop Technical Connector Line to Rocket Upper Porthole */}
              <div className="hidden lg:flex items-center absolute -right-10 top-12 z-20 pointer-events-none">
                <div className="w-10 h-[2px] bg-gradient-to-r from-[#028090] to-[#00A896]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#00A896] ring-4 ring-[#00A896]/30 -ml-1 animate-pulse" />
              </div>

              <div className="space-y-4">
                {/* Clean Prominent Title (No Badges) */}
                <h3 className="font-sans font-black text-2xl sm:text-3xl text-slate-950 dark:text-white tracking-wider flex items-center gap-3">
                  <span>MISSION</span>
                  <span className="h-0.5 w-12 bg-gradient-to-r from-[#00A896] to-transparent rounded-full" />
                </h3>

                <p className="text-sm sm:text-base text-slate-700 dark:text-stone-200 leading-relaxed font-normal">
                  {mission}
                </p>

                <div className="pt-2 border-t border-slate-100 dark:border-stone-800/80 space-y-2.5 text-xs text-slate-600 dark:text-stone-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#00A896] shrink-0 mt-0.5" />
                    <span>Eliminate pipeline fragility and manual reporting debt</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#00A896] shrink-0 mt-0.5" />
                    <span>Deploy explainable ML algorithms with deterministic accuracy</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#00A896] shrink-0 mt-0.5" />
                    <span>Transfer in-house capability with 100% IP ownership</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CENTER COLUMN: FULLY ANIMATED ROCKET IN DATASPHERE BRAND COLORS */}
          <div className="lg:col-span-4 order-1 lg:order-2 flex flex-col items-center justify-center py-4 relative">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px] flex items-center justify-center"
            >
              {/* Soft Floating Clouds in Background */}
              <motion.div
                animate={{ x: [-4, 4, -4] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -left-8 w-24 h-12 bg-[#00A896]/10 dark:bg-[#00A896]/15 rounded-full blur-md pointer-events-none"
              />
              <motion.div
                animate={{ x: [4, -4, 4] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-24 -right-8 w-28 h-14 bg-[#028090]/10 dark:bg-[#0284C7]/15 rounded-full blur-md pointer-events-none"
              />
              <motion.div
                animate={{ x: [-3, 3, -3] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-16 -left-10 w-32 h-16 bg-[#0A2540]/10 dark:bg-[#00A896]/15 rounded-full blur-md pointer-events-none"
              />

              {/* High-Precision SVG Rocket Styled in DataSphere Brand Palette */}
              <svg
                viewBox="0 0 320 570"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto drop-shadow-2xl filter"
              >
                <defs>
                  {/* DataSphere Primary Rocket Body: Enterprise Navy to Deep Cyan */}
                  <linearGradient id="dsRocketBody" x1="60" y1="20" x2="260" y2="480" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#00A896" />
                    <stop offset="25%" stopColor="#028090" />
                    <stop offset="60%" stopColor="#0A2540" />
                    <stop offset="100%" stopColor="#001833" />
                  </linearGradient>

                  {/* Left Specular Glare in Electric Cyan */}
                  <linearGradient id="dsSpecularLeft" x1="80" y1="20" x2="160" y2="480" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.45" />
                    <stop offset="30%" stopColor="#00A896" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#0A2540" stopOpacity="0.05" />
                  </linearGradient>

                  {/* Right Deep Navy Shadow */}
                  <linearGradient id="dsShadowRight" x1="160" y1="20" x2="260" y2="480" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#001229" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#000914" stopOpacity="0.65" />
                  </linearGradient>

                  {/* Fin Gradient: Teal to DataSphere Navy */}
                  <linearGradient id="dsFinGrad" x1="40" y1="360" x2="280" y2="480" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#00A896" />
                    <stop offset="60%" stopColor="#028090" />
                    <stop offset="100%" stopColor="#0A2540" />
                  </linearGradient>

                  {/* Thruster Flame: Electric Cyan/Teal Plasma */}
                  <linearGradient id="dsPlasmaFlame" x1="160" y1="465" x2="160" y2="560" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="20%" stopColor="#38BDF8" />
                    <stop offset="55%" stopColor="#00A896" />
                    <stop offset="85%" stopColor="#0A2540" />
                    <stop offset="100%" stopColor="#0A2540" stopOpacity="0" />
                  </linearGradient>

                  {/* Soft Glow */}
                  <filter id="dsGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3.5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Left Stabilizer Fin */}
                <path
                  d="M100 370 C70 400 45 445 40 480 C70 480 95 460 110 440 Z"
                  fill="url(#dsFinGrad)"
                  stroke="#00A896"
                  strokeWidth="2"
                />

                {/* Right Stabilizer Fin */}
                <path
                  d="M220 370 C250 400 275 445 280 480 C250 480 225 460 210 440 Z"
                  fill="url(#dsFinGrad)"
                  stroke="#00A896"
                  strokeWidth="2"
                />

                {/* Main Fuselage Shell */}
                <path
                  d="M160 15 C130 50 85 140 85 340 C85 410 95 460 105 470 L215 470 C225 460 235 410 235 340 C235 140 190 50 160 15 Z"
                  fill="url(#dsRocketBody)"
                  stroke="#38BDF8"
                  strokeWidth="2"
                />

                {/* Left Specular Glare */}
                <path
                  d="M160 18 C135 50 95 140 95 340 C95 390 100 440 105 465 L160 465 Z"
                  fill="url(#dsSpecularLeft)"
                />

                {/* Right Deep Navy Shadow */}
                <path
                  d="M160 18 C185 50 225 140 225 340 C225 390 220 440 215 465 L160 465 Z"
                  fill="url(#dsShadowRight)"
                />

                {/* Base Thruster Nozzle */}
                <path
                  d="M115 470 L110 496 L210 496 L205 470 Z"
                  fill="#001833"
                  stroke="#028090"
                  strokeWidth="2"
                />
                <line x1="130" y1="472" x2="128" y2="494" stroke="#00A896" strokeWidth="1.5" />
                <line x1="145" y1="472" x2="144" y2="494" stroke="#00A896" strokeWidth="1.5" />
                <line x1="160" y1="472" x2="160" y2="494" stroke="#00A896" strokeWidth="1.5" />
                <line x1="175" y1="472" x2="176" y2="494" stroke="#00A896" strokeWidth="1.5" />
                <line x1="190" y1="472" x2="192" y2="494" stroke="#00A896" strokeWidth="1.5" />

                {/* Central Rudder Fin */}
                <rect x="154" y="420" width="12" height="95" rx="6" fill="#00A896" stroke="#FFFFFF" strokeWidth="1.5" />

                {/* Animated Propulsion Plasma Flame */}
                <motion.g
                  animate={{
                    scaleY: [1, 1.15, 0.95, 1.12, 1],
                    opacity: [0.85, 1, 0.9, 1, 0.85]
                  }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  style={{ transformOrigin: '160px 496px' }}
                >
                  <path
                    d="M140 496 Q160 560 160 565 Q160 560 180 496 Z"
                    fill="url(#dsPlasmaFlame)"
                  />
                  <circle cx="160" cy="516" r="4.5" fill="#FFFFFF" filter="url(#dsGlow)" />
                  <circle cx="160" cy="534" r="3" fill="#38BDF8" />
                </motion.g>

                {/* Central Axis Precision Guideline */}
                <line x1="160" y1="36" x2="160" y2="415" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="3 3" />
                <circle cx="160" cy="40" r="3.5" fill="#FFFFFF" />
                <circle cx="160" cy="40" r="7" stroke="#38BDF8" strokeWidth="1" strokeOpacity="0.7" />

                {/* ======================================================== */}
                {/* PORTHOLE 1 (UPPER - MISSION) - WITH ANIMATED ROTATING GEAR */}
                {/* ======================================================== */}
                <g>
                  {/* Outer Concentric Porthole Rings */}
                  <circle cx="160" cy="165" r="48" fill="#001833" stroke="#00A896" strokeWidth="3" />
                  <circle cx="160" cy="165" r="42" fill="#0A2540" stroke="#028090" strokeWidth="2" />
                  <circle cx="160" cy="165" r="32" fill="#028090" />
                  <circle cx="160" cy="165" r="26" fill="#001229" />

                  {/* Animated Rotating Gear Element */}
                  <motion.g
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear'
                    }}
                    style={{ transformOrigin: '160px 165px' }}
                  >
                    <circle cx="160" cy="165" r="14" stroke="#FFFFFF" strokeWidth="3" fill="none" />
                    <circle cx="160" cy="165" r="5" fill="#38BDF8" />
                    {/* Gear Teeth */}
                    <rect x="157" y="147" width="6" height="5" rx="1.5" fill="#FFFFFF" />
                    <rect x="157" y="178" width="6" height="5" rx="1.5" fill="#FFFFFF" />
                    <rect x="142" y="162" width="5" height="6" rx="1.5" fill="#FFFFFF" />
                    <rect x="173" y="162" width="5" height="6" rx="1.5" fill="#FFFFFF" />
                    <rect x="147" y="152" width="5" height="5" rx="1.5" fill="#FFFFFF" transform="rotate(45 149.5 154.5)" />
                    <rect x="169" y="174" width="5" height="5" rx="1.5" fill="#FFFFFF" transform="rotate(45 171.5 176.5)" />
                    <rect x="147" y="174" width="5" height="5" rx="1.5" fill="#FFFFFF" transform="rotate(-45 149.5 176.5)" />
                    <rect x="169" y="152" width="5" height="5" rx="1.5" fill="#FFFFFF" transform="rotate(-45 171.5 154.5)" />
                  </motion.g>

                  {/* Leader line pointing LEFT to Mission */}
                  <line x1="112" y1="165" x2="25" y2="165" stroke="#00A896" strokeWidth="2.5" />
                  <circle cx="24" cy="165" r="4.5" fill="#00A896" filter="url(#dsGlow)" />
                </g>

                {/* Connecting Wire between Portholes */}
                <line x1="160" y1="213" x2="160" y2="282" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 3" />
                <circle cx="160" cy="248" r="3" fill="#FFFFFF" />

                {/* ======================================================== */}
                {/* PORTHOLE 2 (LOWER - VISION) - WITH ANIMATED RADAR/EYE PULSE */}
                {/* ======================================================== */}
                <g>
                  {/* Outer Concentric Porthole Rings */}
                  <circle cx="160" cy="330" r="48" fill="#001833" stroke="#0284C7" strokeWidth="3" />
                  <circle cx="160" cy="330" r="42" fill="#0A2540" stroke="#028090" strokeWidth="2" />
                  <circle cx="160" cy="330" r="32" fill="#028090" />
                  <circle cx="160" cy="330" r="26" fill="#001229" />

                  {/* Animated Iris / Radar Pulse */}
                  <motion.g
                    animate={{
                      scale: [1, 1.08, 1],
                      opacity: [0.85, 1, 0.85]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                    style={{ transformOrigin: '160px 330px' }}
                  >
                    {/* Eye Contour */}
                    <path
                      d="M142 330 C148 320 172 320 178 330 C172 340 148 340 142 330 Z"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="2.5"
                    />
                    <circle cx="160" cy="330" r="7" fill="#38BDF8" />
                    <circle cx="160" cy="330" r="3" fill="#001229" />
                    {/* Compass Radar Ticks */}
                    <line x1="160" y1="316" x2="160" y2="319" stroke="#FFFFFF" strokeWidth="2" />
                    <line x1="160" y1="341" x2="160" y2="344" stroke="#FFFFFF" strokeWidth="2" />
                    <line x1="146" y1="330" x2="149" y2="330" stroke="#FFFFFF" strokeWidth="2" />
                    <line x1="171" y1="330" x2="174" y2="330" stroke="#FFFFFF" strokeWidth="2" />
                  </motion.g>

                  {/* Leader line pointing RIGHT to Vision */}
                  <line x1="208" y1="330" x2="295" y2="330" stroke="#0284C7" strokeWidth="2.5" />
                  <circle cx="296" cy="330" r="4.5" fill="#0284C7" filter="url(#dsGlow)" />
                </g>

              </svg>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: VISION (NO BADGES) */}
          <div className="lg:col-span-4 order-3 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-stone-800 bg-white/80 dark:bg-stone-900/60 backdrop-blur-md shadow-lg shadow-blue-500/5 hover:border-[#0284C7]/50 transition-all duration-300"
            >
              {/* Desktop Technical Connector Line from Rocket Lower Porthole */}
              <div className="hidden lg:flex items-center absolute -left-10 top-12 z-20 pointer-events-none">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0284C7] ring-4 ring-[#0284C7]/30 -mr-1 animate-pulse" />
                <div className="w-10 h-[2px] bg-gradient-to-r from-[#0284C7] to-[#0A2540]" />
              </div>

              <div className="space-y-4">
                {/* Clean Prominent Title (No Badges) */}
                <h3 className="font-sans font-black text-2xl sm:text-3xl text-slate-950 dark:text-white tracking-wider flex items-center gap-3">
                  <span>VISION</span>
                  <span className="h-0.5 w-12 bg-gradient-to-r from-[#0284C7] to-transparent rounded-full" />
                </h3>

                <p className="text-sm sm:text-base text-slate-700 dark:text-stone-200 leading-relaxed font-normal">
                  {vision}
                </p>

                <div className="pt-2 border-t border-slate-100 dark:border-stone-800/80 space-y-2.5 text-xs text-slate-600 dark:text-stone-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#0284C7] shrink-0 mt-0.5" />
                    <span>Premier international data advisory originating from Kigali</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#0284C7] shrink-0 mt-0.5" />
                    <span>National data sovereignty and institutional compliance</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#0284C7] shrink-0 mt-0.5" />
                    <span>Resilient Lakehouse architectures that scale without vendor lock-in</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  )
}
