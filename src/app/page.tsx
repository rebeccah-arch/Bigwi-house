'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Layers,
  Smartphone,
  Cpu,
  BarChart3,
  Workflow,
  Cloud,
  Palette,
  Rocket,
  ShieldCheck,
  Building2,
  Landmark,
  HeartPulse,
  Globe2,
  Sprout,
  Truck,
  Briefcase,
  TrendingUp,
  ChevronRight,
  Send,
  Loader2,
  AlertCircle,
  MapPin,
  Clock,
  Lock,
} from '@/components/Icons'

import {
  services,
} from '@/content/bigwiContent'

import ProcessTimeline from '@/components/ProcessTimeline'
import TechRadar from '@/components/TechRadar'
import DataAnalyticsDemo from '@/components/DataAnalyticsDemo'

const SERVICE_ICONS: Record<string, React.ElementType> = {
  Layers,
  Smartphone,
  Cpu,
  BarChart3,
  Workflow,
  Cloud,
  Palette,
  Megaphone: Palette,
  Rocket,
  ShieldCheck,
}

// Case Gallery Items matching the TikTok video grid style
const CASE_GALLERY = [
  {
    id: '001',
    code: '001 • KIGALI',
    title: 'Core Banking & Credit Analytics Engine',
    sector: 'Financial Services',
    image: '/images/hero-team.jpg',
    metric: '12x Faster Underwriting',
  },
  {
    id: '002',
    code: '002 • REGIONAL',
    title: 'Mobile Commerce & Payment Switches',
    sector: 'FinTech & Consumer',
    image: '/images/mobile-banking.jpg',
    metric: '99.99% Transaction Sync',
  },
  {
    id: '003',
    code: '003 • EAST AFRICA',
    title: 'Real-Time Logistics & Freight Telematics',
    sector: 'Supply Chain',
    image: '/images/logistics-terminal.jpg',
    metric: '+28% Fleet Efficiency',
  },
  {
    id: '004',
    code: '004 • NATIONAL',
    title: 'Field Data & Community Monitoring Platform',
    sector: 'NGOs & Development',
    image: '/images/data-engineer.jpg',
    metric: '45,000+ Verified Surveys',
  },
  {
    id: '005',
    code: '005 • ENTERPRISE',
    title: 'Executive Digital Transformation Advisory',
    sector: 'Corporate Governance',
    image: '/images/executive-strategy.jpg',
    metric: '100% On-Time Delivery',
  },
  {
    id: '006',
    code: '006 • HUB',
    title: 'Cloud Infrastructure & API Gateway',
    sector: 'Cloud & DevOps',
    image: '/images/kigali-skyline.jpg',
    metric: '<12ms API Latency',
  },
]

const LOCATION_HUBS = [
  {
    id: 'kigali-hub',
    tab: 'Engineering HQ',
    title: 'Engineering Hub in Kigali Heights',
    description: 'Our primary software engineering center, data science laboratory, and executive solutions advisory team in Kigali, Rwanda.',
    image: '/images/hero-team.jpg',
    latLng: '-1.9441° S, 30.0619° E',
    activeTeam: '24 Senior Engineers & Data Scientists',
  },
  {
    id: 'strategy-center',
    tab: 'Strategy Lab',
    title: 'Executive Strategy & Architecture Center',
    description: 'Dedicated board-level digital modernization consulting and enterprise system blueprint design.',
    image: '/images/executive-strategy.jpg',
    latLng: '-1.9536° S, 30.0605° E',
    activeTeam: 'Advisory & Enterprise Architecture Team',
  },
  {
    id: 'regional-network',
    tab: 'Cloud Network',
    title: 'Distributed Cloud & Data Network',
    description: 'Multi-region cloud infrastructure serving high-concurrency enterprise workloads across East Africa.',
    image: '/images/kigali-skyline.jpg',
    latLng: 'East African Cross-Border Cluster',
    activeTeam: '24/7 SLA Operations & SRE Support',
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [activeHubIndex, setActiveHubIndex] = useState<number>(0)
  const [scrollProgress, setScrollProgress] = useState<number>(0)
  const [contactStatus, setContactStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    organization: '',
    sector: 'Private enterprise',
    service: 'Enterprise Software Development',
    message: '',
  })

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      if (totalScroll > 0) {
        setScrollProgress(Math.min(window.scrollY / 400, 1))
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const filteredServices = selectedCategory === 'All'
    ? services
    : services.filter((s) => s.category === selectedCategory)

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setContactStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactForm),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setContactStatus('success')
        setContactForm({
          name: '',
          email: '',
          organization: '',
          sector: 'Private enterprise',
          service: 'Enterprise Software Development',
          message: '',
        })
      } else {
        setContactStatus('error')
      }
    } catch {
      setContactStatus('error')
    }
  }

  return (
    <div className="space-y-24 md:space-y-36 pb-16">
      {/* 1. HERO SECTION WITH EXPANDING SCROLL DYNAMICS & FRAMER MOTION */}
      <section className="relative min-h-[640px] lg:min-h-[740px] flex items-center justify-center overflow-hidden border-b border-slate-200">
        {/* Full Cover Background Image with Scroll Scale */}
        <div
          className="absolute inset-0 z-0 transition-transform duration-700 ease-out"
          style={{
            transform: `scale(${1 + scrollProgress * 0.08})`,
          }}
        >
          <Image
            src="/images/hero-team.jpg"
            alt="DataSphere Senior Software Engineers & Data Consultants collaborating in Kigali"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Refined gradient overlays for maximum contrast and legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 sm:via-white/90 to-white/30 lg:via-white/90 lg:to-white/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-wide w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="lg:col-span-7 space-y-6 max-w-2xl"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                Enterprise Software &amp;{' '}
                <span className="text-teal-700">
                  Data Engineering.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal bg-white/60 backdrop-blur-xs p-1 rounded-lg">
                We partner with leading enterprises, financial institutions, and public organizations across East Africa to architect mission-critical software, modern data pipelines, and intelligent executive dashboards.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link href="/contact" className="btn btn-primary text-sm sm:text-base py-3.5 px-7 shadow-md">
                  <span>Start an Engagement</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link href="/services" className="btn btn-ghost text-sm sm:text-base py-3.5 px-7 shadow-sm">
                  <span>Explore Solutions</span>
                  <ChevronRight className="h-4 w-4 text-slate-500" />
                </Link>
              </div>

              {/* Trust Metric Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-3 gap-4 border-t border-slate-300/80 pt-6 mt-6 bg-white/85 backdrop-blur-md p-4 rounded-2xl border shadow-sm"
              >
                <div>
                  <div className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">10+</div>
                  <p className="font-sans text-xs text-slate-600 mt-0.5 font-semibold">Core Capabilities</p>
                </div>
                <div>
                  <div className="font-display text-2xl sm:text-3xl font-extrabold text-teal-700">99.9%</div>
                  <p className="font-sans text-xs text-slate-600 mt-0.5 font-semibold">Uptime SLA</p>
                </div>
                <div>
                  <div className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">100%</div>
                  <p className="font-sans text-xs text-slate-600 mt-0.5 font-semibold">Custom Codebase</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Feature Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="lg:col-span-5 flex flex-col justify-end items-start lg:items-end space-y-3"
            >
              <div className="rounded-2xl border border-white/60 bg-white/95 p-5 shadow-xl backdrop-blur-md max-w-sm space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-xs font-bold text-slate-900">Kigali Engineering Hub</span>
                  </div>
                  <span className="font-mono text-[10px] text-teal-800 bg-teal-50 px-2 py-0.5 rounded font-bold">ACTIVE</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Full-stack engineering &amp; enterprise data science team delivering across East Africa &amp; international markets.
                </p>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-700">
                  <span>ISO 27001 Standards</span>
                  <span className="text-teal-700">Zero-Downtime Deployments</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. EDITORIAL NARRATIVE & METRIC TICKERS (TikTok Video Style 0:06-0:09) */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8 space-y-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
          >
            {/* Left Editorial Text */}
            <motion.div variants={itemVariants} className="lg:col-span-6 space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 leading-tight">
                Your enterprise is scaling. Don&apos;t just collect data — <span className="text-teal-700">find what&apos;s next.</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                We help you move forward with clarity, confidence, and top-tier African engineering talent by your side.
              </p>
            </motion.div>

            {/* Right Metric Highlights Tickers */}
            <motion.div variants={itemVariants} className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  12<span className="text-teal-600">+</span>
                </div>
                <div className="mt-2 font-mono text-xs font-bold text-slate-900 uppercase">Enterprise Deployments</div>
                <p className="mt-1 text-[11px] text-slate-500">Live production systems across East Africa</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-teal-700 tracking-tight">
                  560<span className="text-teal-500">M+</span>
                </div>
                <div className="mt-2 font-mono text-xs font-bold text-slate-900 uppercase">Records Processed</div>
                <p className="mt-1 text-[11px] text-slate-500">High-throughput streaming ETL pipelines</p>
              </div>

              <div className="col-span-2 sm:col-span-1 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  99.9<span className="text-teal-600">%</span>
                </div>
                <div className="mt-2 font-mono text-xs font-bold text-slate-900 uppercase">System Uptime SLA</div>
                <p className="mt-1 text-[11px] text-slate-500">Zero-downtime containerized clusters</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Large Visual Feature Banner with Subtitle (TikTok Style) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden border border-slate-200 shadow-md"
          >
            <Image
              src="/images/executive-strategy.jpg"
              alt="DataSphere Executive Strategy and System Architecture"
              fill
              className="object-cover object-center hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-teal-300 font-bold">Kigali Strategy &amp; Innovation Labs</span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
                  Where strategic business acumen meets resilient systems engineering.
                </h3>
              </div>
              <Link href="/approach" className="btn btn-teal text-xs py-2.5 px-5 flex-shrink-0">
                <span>Our Methodology</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. "OUR CASES" VISUAL GALLERY (TikTok Style Grid) */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto space-y-2"
          >
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
              OUR CASES
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              High-concurrency systems engineered for leading African enterprises.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {CASE_GALLERY.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <Link
                  href="/work"
                  className="group relative block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-teal-500/50 transition-all duration-300"
                >
                  {/* Image Container */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />

                    {/* Code Badge */}
                    <div className="absolute top-3 left-3 z-10 rounded-md bg-white/95 px-2.5 py-1 font-mono text-[10px] font-bold text-slate-900 backdrop-blur-sm shadow-sm">
                      {item.code}
                    </div>

                    {/* Sector Tag */}
                    <div className="absolute top-3 right-3 z-10 rounded-md bg-slate-900/80 px-2.5 py-1 font-sans text-[10px] font-semibold text-white backdrop-blur-sm">
                      {item.sector}
                    </div>

                    {/* Impact Metric Floating on Image */}
                    <div className="absolute bottom-3 left-3 right-3 z-10 text-white">
                      <p className="font-sans text-xs text-teal-300 font-semibold">{item.metric}</p>
                    </div>
                  </div>

                  {/* Card Title & Link */}
                  <div className="p-4 flex items-center justify-between">
                    <h3 className="font-display text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-teal-600 group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. BOLD EDITORIAL STATEMENT & IMPACT BANNER (TikTok Video Style 0:14) */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-teal-800 text-white p-8 sm:p-14 shadow-2xl"
          >
            {/* Subtle background image */}
            <div className="absolute inset-0 opacity-15">
              <Image
                src="/images/kigali-skyline.jpg"
                alt="Kigali Skyline"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative z-10 space-y-4 max-w-3xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white leading-tight uppercase">
                WE ARCHITECT INTELLIGENCE THAT POWERS SUSTAINED GROWTH.
              </h2>
              <p className="text-sm sm:text-base text-teal-100 max-w-2xl leading-relaxed">
                Combining rigorous software engineering, localized market intelligence, and unyielding focus on customer ROI.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. VISIONARY LEADERSHIP & ENTERPRISE STABILITY (TikTok Video Style 0:15) */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
                VISIONARY ARCHITECTURE, GOVERNANCE AND STABILITY.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Ranked among the premier bespoke engineering consultancies with strict zero-tolerance for data leaks, unauthorized access, or fragile legacy dependencies.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="font-display text-3xl font-extrabold text-slate-900">0 Cases</div>
                  <p className="font-sans text-xs text-slate-600 mt-1 font-medium">Of unmanaged security breaches or critical SLA disruptions</p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="font-display text-3xl font-extrabold text-teal-700">100%</div>
                  <p className="font-sans text-xs text-slate-600 mt-1 font-medium">Verified automated test coverage across core pipeline modules</p>
                </div>
              </div>
            </motion.div>

            {/* Right Card: Guaranteed Compliance Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-lg space-y-6"
            >
              <div className="relative h-44 w-full rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src="/images/data-engineer.jpg"
                  alt="Senior Data Architect"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-2">
                <span className="inline-block font-mono text-[10px] font-bold uppercase tracking-widest text-teal-800 bg-teal-50 px-2.5 py-1 rounded">
                  GUARANTEED QUALITY
                </span>
                <h4 className="font-display text-lg font-bold text-slate-900">
                  Senior Architect Peer-Reviewed Delivery
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  All systems undergo dual code review, threat modeling, and load validation before deployment to your production environment.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>ISO 27001 Ready</span>
                <span>GDPR &amp; Rwanda DPPA Compliant</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE LOCATION & DEPLOYMENT HUB SHOWCASE (TikTok Video Style 0:19-0:23) */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
                Kigali Hub &amp; Operations
              </h2>
            </div>

            {/* Hub Tabs */}
            <div className="flex rounded-xl border border-slate-200 bg-slate-50 p-1">
              {LOCATION_HUBS.map((hub, idx) => (
                <button
                  key={hub.id}
                  onClick={() => setActiveHubIndex(idx)}
                  className={`rounded-lg px-3.5 py-1.5 text-xs font-sans font-medium transition-all ${
                    activeHubIndex === idx
                      ? 'bg-slate-900 text-white font-semibold shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {hub.tab}
                </button>
              ))}
            </div>
          </div>

          {/* Active Hub Spotlight Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeHubIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-7 p-8 md:p-12 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
                      {LOCATION_HUBS[activeHubIndex].title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      {LOCATION_HUBS[activeHubIndex].description}
                    </p>

                    <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                        <span className="text-slate-500 font-medium block">Coordinates</span>
                        <span className="font-mono font-bold text-slate-900">{LOCATION_HUBS[activeHubIndex].latLng}</span>
                      </div>
                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                        <span className="text-slate-500 font-medium block">Active Unit</span>
                        <span className="font-bold text-teal-800">{LOCATION_HUBS[activeHubIndex].activeTeam}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link href="/about" className="btn btn-primary text-xs sm:text-sm py-2.5 px-5">
                      <span>Learn More About DataSphere</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* Photo Showcase */}
                <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full overflow-hidden bg-slate-100">
                  <Image
                    src={LOCATION_HUBS[activeHubIndex].image}
                    alt={LOCATION_HUBS[activeHubIndex].title}
                    fill
                    className="object-cover object-center transition-all duration-500"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 7. DATA & ANALYTICS VISUAL SHOWCASE */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900">
              Enterprise Data &amp; BI Architecture
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Transforming raw, disparate organizational records into real-time executive decision systems and predictive intelligence pipelines.
            </p>
          </div>

          <DataAnalyticsDemo />
        </div>
      </section>

      {/* 8. CORE SERVICES & DIGITAL SOLUTIONS */}
      <section id="services" className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900">
                Disciplined engineering and data solutions.
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
                From data pipelines and cloud infrastructure to web and mobile apps, our multidisciplinary team delivers end-to-end reliability.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1 rounded-xl border border-slate-200 bg-slate-50 p-1">
              {['All', 'Engineering', 'Intelligence', 'Strategy', 'Design'].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-sans font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-slate-900 text-white font-semibold shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredServices.map((service) => {
              const Icon = SERVICE_ICONS[service.icon] || Layers
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="card-enterprise flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700 border border-teal-200 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-[11px] text-slate-600 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-full font-medium">
                        {service.category}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <p className="font-mono text-[11px] text-slate-500 font-semibold mb-2">Key Deliverables:</p>
                      <ul className="space-y-1.5">
                        {service.deliverables.slice(0, 3).map((del) => (
                          <li key={del} className="flex items-center gap-2 text-xs text-slate-700">
                            <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="font-mono text-[10px] text-slate-400">Enterprise Ready</span>
                    <Link
                      href={`/services#${service.id}`}
                      className="font-sans text-xs text-teal-700 hover:text-teal-900 flex items-center gap-1 font-semibold group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Explore</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* 9. 6-STAGE ENGINEERING METHODOLOGY */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900">
              The 6-Stage Engineering Lifecycle
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Structured sprints, transparent milestone reviews, and automated verification ensure predictable delivery from day one.
            </p>
          </div>

          <ProcessTimeline />
        </div>
      </section>

      {/* 10. TECHNOLOGY STACK */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900">
              Production-Grade Architecture
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              We engineer with robust modern languages, reliable data engines, cloud native infrastructure, and enterprise security frameworks.
            </p>
          </div>

          <TechRadar />
        </div>
      </section>

      {/* 11. HIGH CONVERSION CTA SECTION */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 p-8 sm:p-12 md:p-16 text-center text-white shadow-xl">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/kigali-skyline.jpg"
                alt="Kigali Innovation Hub Skyline"
                fill
                className="object-cover object-center opacity-25"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/85 to-slate-900/95" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white leading-tight">
                Ready to transform your enterprise data &amp; systems?
              </h2>
              <p className="text-base sm:text-lg text-slate-300">
                Let&apos;s turn your business objectives into scalable, high-performance software. Start a confidential discovery conversation with our senior team today.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Link href="/contact" className="btn btn-teal text-base py-3.5 px-8 font-bold shadow-lg">
                  <span>Start a Discovery Call</span>
                </Link>
                <Link href="/work" className="btn border border-slate-700 bg-slate-800/90 backdrop-blur-md text-white hover:bg-slate-700 text-base py-3.5 px-8">
                  <span>View Case Studies</span>
                </Link>
              </div>

              <div className="pt-6 font-mono text-xs text-slate-400 flex flex-wrap items-center justify-center gap-6">
                <span>• Strict Confidentiality / NDA</span>
                <span>• Response within 24 Hours</span>
                <span>• Regional &amp; Global Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. QUICK INQUIRY CONTACT FORM */}
      <section id="contact" className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900">
                Tell us about your project.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Share a few parameters regarding your organization, sector, and project scope. A senior solutions architect from DataSphere Consulting will follow up to schedule a technical consultation.
              </p>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-3.5 text-xs text-slate-600 shadow-sm">
                <div>
                  <strong className="block font-mono text-[11px] text-slate-900 uppercase font-bold">Company</strong>
                  DataSphere Consulting Ltd.
                </div>
                <div>
                  <strong className="block font-mono text-[11px] text-slate-900 uppercase font-bold">Location</strong>
                  Kigali, Rwanda • East African Delivery Hub
                </div>
                <div>
                  <strong className="block font-mono text-[11px] text-slate-900 uppercase font-bold">Confidentiality</strong>
                  All project parameters, data models, and business logic are covered under strict confidentiality.
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="hp-name" className="mb-1.5 block text-xs font-semibold text-slate-700">
                      Full Name *
                    </label>
                    <input
                      id="hp-name"
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="e.g. Jean Claude"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="hp-email" className="mb-1.5 block text-xs font-semibold text-slate-700">
                      Business Email *
                    </label>
                    <input
                      id="hp-email"
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="alex@enterprise.rw"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="hp-org" className="mb-1.5 block text-xs font-semibold text-slate-700">
                      Organization
                    </label>
                    <input
                      id="hp-org"
                      type="text"
                      value={contactForm.organization}
                      onChange={(e) => setContactForm({ ...contactForm, organization: e.target.value })}
                      placeholder="Company or Institution"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="hp-service" className="mb-1.5 block text-xs font-semibold text-slate-700">
                      Solution Line *
                    </label>
                    <select
                      id="hp-service"
                      value={contactForm.service}
                      onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 focus:border-teal-500 focus:bg-white focus:outline-none transition-colors"
                    >
                      {services.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="hp-msg" className="mb-1.5 block text-xs font-semibold text-slate-700">
                    Project Overview &amp; Requirements *
                  </label>
                  <textarea
                    id="hp-msg"
                    rows={4}
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Describe your current system challenges, target users, deliverables, and timeline..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                {contactStatus === 'success' && (
                  <div className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-3.5 text-xs text-emerald-800">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-emerald-600" />
                    <div>
                      <p className="font-semibold">Message Received Successfully</p>
                      <p className="text-slate-600">A solutions architect from DataSphere Consulting will review and respond promptly.</p>
                    </div>
                  </div>
                )}

                {contactStatus === 'error' && (
                  <div className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 p-3.5 text-xs text-red-800">
                    <AlertCircle className="h-5 w-5 flex-shrink-0 text-red-600" />
                    <div>
                      <p className="font-semibold">Submission Error</p>
                      <p>Please ensure all required fields are filled with valid values.</p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={contactStatus === 'loading'}
                  className="btn btn-primary w-full py-3 justify-center text-sm font-semibold"
                >
                  {contactStatus === 'loading' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Sending Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Send Project Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
