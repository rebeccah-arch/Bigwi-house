'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  Calendar,
  Clock,
  BookOpen,
  X,
  Share2
} from '@/components/Icons'

interface ArticleItem {
  id: string
  type: string
  title: string
  date: string
  excerpt: string
  image: string
  fullContent?: {
    subtitle?: string
    author?: string
    takeaways: string[]
    paragraphs: string[]
  }
}

const FEATURED_OUTLOOK: ArticleItem = {
  id: 'tech-trends-outlook-2026',
  type: 'Annual Outlook Report',
  title: 'DataSphere Technology Trends Outlook 2026',
  date: 'September 2026',
  excerpt:
    'Which frontier technologies matter most for companies in 2026? Our annual report highlights the latest technology innovations, developments, and talent trends and their potential impact on business and society.',
  image: '/images/insights/trends_outlook_hero.jpg',
  fullContent: {
    subtitle: 'Navigating frontier technologies, applied AI scaling, and modern lakehouse architectures.',
    author: 'DataSphere & BIGWI HOUSE Applied AI Practice',
    takeaways: [
      'Generative AI is shifting rapidly from isolated chat pilots to deterministic, agentic workflow automation.',
      'Lakehouse medallion architectures (Bronze/Silver/Gold) are becoming the de-facto standard for low-latency analytics.',
      'Continuous MLOps telemetry and drift monitoring reduce production model degradation by over 70%.',
      'Strategic value realization depends on reducing the coordination tax between operational business units and technical data pipelines.'
    ],
    paragraphs: [
      'As organizations accelerate their adoption of artificial intelligence, the competitive frontier is no longer defined by model novelty alone. Instead, market leadership belongs to institutions capable of industrializing data engineering, enforcing rigorous governance contracts, and embedding AI directly into day-to-day decision loops.',
      'Our 2026 Technology Trends Outlook synthesizes empirical data across enterprise deployments, highlighting key inflection points in compute optimization, edge intelligence, and the transition toward automated data contracts.'
    ]
  }
}

const ARTICLES_ROW: ArticleItem[] = [
  {
    id: 'cutting-coordination-tax',
    type: 'Article',
    title: "Cutting the 'coordination tax': How agentic AI can reshape workflows",
    date: 'September 18, 2026',
    excerpt:
      'Organizations must redesign workflows to realize value from AI, but the challenge is where to begin. An opportunity lies between workflow steps, where work passes between teams and systems.',
    image: '/images/insights/ring_segment.jpg',
    fullContent: {
      subtitle: 'Eliminating organizational friction with deterministic multi-agent execution.',
      author: 'Senior Systems Architect',
      takeaways: [
        'Inter-departmental handoffs account for up to 45% of end-to-end process latency.',
        'Deterministic AI agents execute structured data reconciliations in milliseconds.',
        'Human-in-the-loop validation ensures critical edge cases are escalated safely.'
      ],
      paragraphs: [
        'The highest cost in most enterprise operations is not individual task execution—it is the coordination tax paid when work moves between disparate departments, ERPs, and disconnected spreadsheets.',
        'By deploying domain-specific agentic pipelines with rigid schema validation, enterprises automate cross-system reconciliations while preserving auditability and regulatory compliance.'
      ]
    }
  },
  {
    id: 'state-of-ai-2026-roi',
    type: 'Survey',
    title: 'The state of AI in 2026: On the road to ROI',
    date: 'August 25, 2026',
    excerpt:
      'Organizations are deploying agentic coding tools and coming to grips with the costs of AI while still seeking to capture more of the benefits that their workers are deriving from their individual use of AI.',
    image: '/images/insights/light_trails.jpg',
    fullContent: {
      subtitle: 'Empirical benchmarks on enterprise AI spend, adoption velocity, and ROI realization.',
      author: 'Applied AI & Strategy Practice Group',
      takeaways: [
        '72% of organizations report deploying coding assistants and workflow automation tools.',
        'High-performing AI leaders allocate 60% of budget to data pipeline health and governance.',
        'Clear decision unit metrics separate successful production deployments from stalled pilots.'
      ],
      paragraphs: [
        'Our global benchmark review reveals that while pilot experimentation has reached universal adoption, only top-quartile institutions are capturing significant financial ROI.',
        'These leaders invest disproportionately in reliable data ingestion, semantic cataloging, and automated testing rather than chasing speculative generative models.'
      ]
    }
  },
  {
    id: 'new-management-playbook',
    type: 'Article • Practice Briefing',
    title: 'The new management playbook for AI: How to move faster and create more value',
    date: 'August 28, 2026',
    excerpt:
      'There is a new management playbook emerging for how to run companies better in the age of AI.',
    image: '/images/insights/fiber_cables.jpg',
    fullContent: {
      subtitle: 'Aligning leadership incentives with modern data infrastructure.',
      author: 'Senior Solutions Architect & Practice Lead',
      takeaways: [
        'Shift from monolithic annual IT projects to 2-week modular data sprints.',
        'Pair operational business champions directly with senior data practitioners.',
        'Treat internal data assets as versioned products with defined SLAs.'
      ],
      paragraphs: [
        'Running an AI-enabled enterprise demands a fundamental shift in management philosophy. Traditional hierarchical governance often throttles innovation, while ungoverned experimentation produces data fragmentation.',
        'The modern playbook balances rapid prototyping with strict architectural blueprints, ensuring scalable operations from day one.'
      ]
    }
  },
  {
    id: 'decision-dividend',
    type: 'Article',
    title: 'The decision dividend: How AI creates economic value',
    date: 'August 26, 2026',
    excerpt:
      "AI's largest gains rarely come from labor savings alone. They come from faster decisions, better use of existing assets, and opportunities that would otherwise be missed.",
    image: '/images/insights/neural_helix.jpg',
    fullContent: {
      subtitle: 'Quantifying the economic impact of sub-second decision automation.',
      author: 'Principal Risk & Financial Modeler',
      takeaways: [
        'Decision speed increases asset utilization across supply chain and credit portfolios.',
        'Automated telemetry spots demand anomalies weeks before quarterly financial closings.',
        'Continuous predictive modeling unlocks non-linear revenue optimization.'
      ],
      paragraphs: [
        'When evaluating AI initiatives, executive teams often over-index on labor cost reduction. However, the true economic dividend arises from optimizing high-stakes decisions under uncertainty.',
        'From real-time dynamic logistics routing to automated credit risk underwriting, sub-second decision intelligence transforms operational balance sheets.'
      ]
    }
  }
]

const COLLECTION_ITEM: ArticleItem = {
  id: 'new-economics-of-ai',
  type: 'Insights Collection',
  title: 'The new economics of AI',
  date: 'August 2026',
  excerpt: 'A leadership guide to creating, governing, and scaling value with AI.',
  image: '/images/insights/wave_grid.jpg',
  fullContent: {
    subtitle: 'A leadership guide to creating, governing, and scaling value with AI.',
    author: 'DataSphere Strategic Advisory Practice',
    takeaways: [
      'Deconstructing the total cost of ownership (TCO) for enterprise AI stacks.',
      'Balancing open-source fine-tuned models vs proprietary API inference.',
      'Architecting governance frameworks that protect IP while fostering agility.'
    ],
    paragraphs: [
      'This curated collection brings together our practice’s most actionable frameworks for executive leadership, covering financial modeling, risk mitigation, and infrastructure roadmaps required to scale enterprise AI.'
    ]
  }
}

const PUBLICATION_ITEM: ArticleItem = {
  id: 'rewired-second-edition',
  type: 'Book',
  title: 'Rewired, second edition',
  date: '2026 Edition',
  excerpt:
    'This updated edition offers brand-new insights into cutting-edge AI solutions—and what it takes to implement them—as well as the new economics of digital and AI transformations.',
  image: '/images/insights/rewired_book.jpg',
  fullContent: {
    subtitle: 'The Definitive Blueprint for Scaling Enterprise Digital & AI Capabilities.',
    author: 'DataSphere & Global Practice Leaders',
    takeaways: [
      'Six institutional capabilities required for digital and AI transformation.',
      'How to build internal practitioner talent and eliminate legacy technical debt.',
      'Playbooks for cross-functional alignment between C-suite and engineering leads.'
    ],
    paragraphs: [
      'Rewired provides leaders with a battle-tested manual for rewiring their organizations for continuous digital and AI advantage, featuring real-world architectures and case breakdowns.'
    ]
  }
}

export default function InsightsPage() {
  const [activeArticle, setActiveArticle] = useState<ArticleItem | null>(null)
  const [copiedLink, setCopiedLink] = useState(false)

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href)
      setCopiedLink(true)
      setTimeout(() => setCopiedLink(false), 2500)
    }
  }

  return (
    <div className="w-full min-h-screen bg-white dark:bg-stone-950 text-slate-900 dark:text-stone-100 transition-colors duration-300">
      
      {/* 1. Masthead / Page Title Header */}
      <section className="pt-8 sm:pt-12 md:pt-14 pb-10 sm:pb-12 px-4 sm:px-6 lg:px-8 max-w-[1240px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 max-w-4xl mx-auto"
        >
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-slate-950 dark:text-white leading-[1.15]">
            Insights on Artificial Intelligence
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-stone-300 max-w-3xl mx-auto leading-relaxed font-normal">
            From machine learning operations and organizational change to ethical considerations and emerging use cases, this is DataSphere Consulting &amp; BIGWI HOUSE’s latest thinking on how organizations can most effectively and responsibly use AI to create business value.
          </p>
        </motion.div>
      </section>

      {/* Main Container */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-16">
        
        {/* 2. Divider & Featured Insights Label */}
        <div>
          <div className="border-t border-slate-300 dark:border-stone-800 pt-3 pb-6">
            <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-stone-300">
              FEATURED INSIGHTS
            </h2>
          </div>

          {/* 3. Hero Feature Card with Floating White Box (McKinsey Signature Style) */}
          <div className="relative group overflow-hidden bg-slate-100 dark:bg-stone-900 border border-slate-200 dark:border-stone-800 shadow-sm">
            {/* Background 3D Image */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/10] md:aspect-[2.2/1] overflow-hidden">
              <Image
                src={FEATURED_OUTLOOK.image}
                alt={FEATURED_OUTLOOK.title}
                fill
                priority
                className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
            </div>

            {/* Overlapping White Box at Bottom Left */}
            <div className="relative md:absolute md:bottom-0 md:left-12 lg:left-16 z-20 md:max-w-2xl bg-white dark:bg-stone-950 p-6 sm:p-8 md:p-10 shadow-xl border-t md:border-t-0 md:border-r md:border-l border-slate-200 dark:border-stone-800 space-y-3.5">
              <h3 
                onClick={() => setActiveArticle(FEATURED_OUTLOOK)}
                className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-slate-950 dark:text-white leading-tight cursor-pointer hover:text-blue-600 dark:hover:text-teal-400 transition-colors"
              >
                {FEATURED_OUTLOOK.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-stone-300 leading-relaxed font-normal">
                {FEATURED_OUTLOOK.excerpt}
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setActiveArticle(FEATURED_OUTLOOK)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 dark:text-teal-400 hover:underline"
                >
                  <span>Read more</span>
                  <span className="text-base leading-none">&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4. 4-Column Article Grid (Exact McKinsey Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-4">
          {ARTICLES_ROW.map((art) => (
            <article key={art.id} className="group space-y-3.5 flex flex-col justify-between">
              <div className="space-y-3">
                {/* Card Image */}
                <div 
                  onClick={() => setActiveArticle(art)}
                  className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 dark:bg-stone-900 cursor-pointer border border-slate-200 dark:border-stone-800"
                >
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Eyebrow Tag */}
                <div className="text-[11px] font-sans text-slate-500 dark:text-stone-400 font-medium tracking-tight">
                  {art.type}
                </div>

                {/* Article Headline with Blue Angle Bracket */}
                <h3 
                  onClick={() => setActiveArticle(art)}
                  className="font-sans font-bold text-sm sm:text-base text-slate-950 dark:text-white leading-snug cursor-pointer group-hover:text-blue-600 dark:group-hover:text-teal-400 transition-colors"
                >
                  <span>{art.title}</span>
                  <span className="text-blue-600 dark:text-teal-400 font-bold ml-1 text-base leading-none">&rsaquo;</span>
                </h3>

                {/* Excerpt with Italicized Date */}
                <p className="text-xs text-slate-600 dark:text-stone-400 leading-relaxed">
                  <span className="italic text-slate-500 dark:text-stone-400">{art.date}</span> &ndash; {art.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* 5. Insights Collection Spotlight Banner */}
        <div className="pt-6">
          <div 
            onClick={() => setActiveArticle(COLLECTION_ITEM)}
            className="group cursor-pointer grid grid-cols-1 md:grid-cols-12 bg-white dark:bg-stone-950 border border-slate-200 dark:border-stone-800 overflow-hidden shadow-sm hover:border-blue-500/50 dark:hover:border-teal-500/50 transition-colors"
          >
            {/* Left Image (Wave Mesh) */}
            <div className="md:col-span-6 relative aspect-[16/9] md:aspect-auto w-full min-h-[220px] bg-black">
              <Image
                src={COLLECTION_ITEM.image}
                alt={COLLECTION_ITEM.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Right Text Block */}
            <div className="md:col-span-6 p-8 sm:p-10 flex flex-col justify-center space-y-3">
              <div className="text-xs font-sans text-slate-500 dark:text-stone-400 font-medium">
                {COLLECTION_ITEM.type}
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-teal-400 transition-colors">
                <span>{COLLECTION_ITEM.title}</span>
                <span className="text-blue-600 dark:text-teal-400 font-bold ml-1.5">&rsaquo;</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-stone-300 leading-relaxed font-normal">
                {COLLECTION_ITEM.excerpt}
              </p>
            </div>
          </div>
        </div>

        {/* 6. Featured Publication Section (Rewired) */}
        <div>
          <div className="border-t border-slate-300 dark:border-stone-800 pt-3 pb-6">
            <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-stone-300">
              FEATURED PUBLICATION
            </h2>
          </div>

          <div 
            onClick={() => setActiveArticle(PUBLICATION_ITEM)}
            className="group cursor-pointer grid grid-cols-1 md:grid-cols-12 bg-white dark:bg-stone-950 border border-slate-200 dark:border-stone-800 overflow-hidden shadow-sm hover:border-blue-500/50 dark:hover:border-teal-500/50 transition-colors"
          >
            {/* Left Image (Book Mockup) */}
            <div className="md:col-span-6 relative aspect-[4/3] md:aspect-auto w-full min-h-[240px] bg-slate-50 dark:bg-stone-900 flex items-center justify-center p-4">
              <div className="relative w-full h-full min-h-[200px]">
                <Image
                  src={PUBLICATION_ITEM.image}
                  alt={PUBLICATION_ITEM.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>

            {/* Right Text Block */}
            <div className="md:col-span-6 p-8 sm:p-10 flex flex-col justify-center space-y-3">
              <div className="text-xs font-sans text-slate-500 dark:text-stone-400 font-medium">
                {PUBLICATION_ITEM.type}
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-teal-400 transition-colors">
                <span>{PUBLICATION_ITEM.title}</span>
                <span className="text-blue-600 dark:text-teal-400 font-bold ml-1.5">&rsaquo;</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-stone-300 leading-relaxed font-normal">
                {PUBLICATION_ITEM.excerpt}
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* 7. Interactive McKinsey-Style Full Article Reading Modal */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-stone-950 p-6 sm:p-10 shadow-2xl border border-slate-200 dark:border-stone-800 space-y-6"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="absolute top-6 right-6 h-9 w-9 rounded-full bg-slate-100 dark:bg-stone-900 border border-slate-200 dark:border-stone-800 flex items-center justify-center text-slate-600 dark:text-stone-300 hover:bg-slate-200 dark:hover:bg-stone-800 transition-colors"
                aria-label="Close reader"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Header */}
              <div className="space-y-3 pr-10 border-b border-slate-200 dark:border-stone-800 pb-5">
                <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-teal-400 font-bold uppercase">
                  <span>{activeArticle.type}</span>
                  <span>&bull;</span>
                  <span className="text-slate-500 dark:text-stone-400 font-normal">{activeArticle.date}</span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-slate-950 dark:text-white leading-tight">
                  {activeArticle.title}
                </h2>

                {activeArticle.fullContent?.subtitle && (
                  <p className="text-sm sm:text-base text-slate-600 dark:text-stone-300 font-medium leading-relaxed">
                    {activeArticle.fullContent.subtitle}
                  </p>
                )}

                {activeArticle.fullContent?.author && (
                  <div className="text-xs font-mono text-slate-500 dark:text-stone-400">
                    By <strong className="text-slate-900 dark:text-white">{activeArticle.fullContent.author}</strong>
                  </div>
                )}
              </div>

              {/* Takeaways Card */}
              {activeArticle.fullContent?.takeaways && (
                <div className="bg-slate-50 dark:bg-stone-900 border border-slate-200 dark:border-stone-800 p-5 sm:p-6 space-y-3">
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-teal-400" />
                    <span>Key Strategic Takeaways</span>
                  </h3>
                  <ul className="space-y-2">
                    {activeArticle.fullContent.takeaways.map((takeaway, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-stone-300">
                        <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-teal-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Body Paragraphs */}
              {activeArticle.fullContent?.paragraphs && (
                <div className="space-y-4 text-sm text-slate-700 dark:text-stone-300 leading-relaxed font-normal">
                  {activeArticle.fullContent.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              )}

              {/* Modal Footer Actions */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-slate-200 dark:border-stone-800">
                <button
                  type="button"
                  onClick={handleShare}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-stone-300 hover:text-blue-600 dark:hover:text-teal-400 transition-colors"
                >
                  <Share2 className="h-3.5 w-3.5" />
                  <span>{copiedLink ? 'Link Copied!' : 'Share Article'}</span>
                </button>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveArticle(null)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-stone-400 hover:text-slate-900 dark:hover:text-white"
                  >
                    Close
                  </button>

                  <Link
                    href="/contact"
                    onClick={() => setActiveArticle(null)}
                    className="inline-flex items-center gap-2 bg-blue-600 dark:bg-teal-500 text-white dark:text-slate-950 font-bold px-5 py-2.5 text-xs shadow hover:bg-blue-700 dark:hover:bg-teal-400 transition-colors"
                  >
                    <span>Discuss with our practice</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  )
}
