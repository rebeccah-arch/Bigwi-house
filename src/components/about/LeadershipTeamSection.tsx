'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BadgeCheck,
  Linkedin,
  Mail,
  GraduationCap,
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  X,
  ShieldCheck,
  Users
} from '@/components/Icons'
import {
  leadershipTeam,
  LeaderProfile
} from '@/content/bigwiContent'


interface LeadershipTeamSectionProps {
  standalone?: boolean
}

export default function LeadershipTeamSection({ standalone = false }: LeadershipTeamSectionProps) {
  const [selectedLeader, setSelectedLeader] = useState<LeaderProfile | null>(null)

  const columns = [
    {
      offsetClass: 'lg:mt-16',
      members: [leadershipTeam[0], leadershipTeam[4]].filter(Boolean)
    },
    {
      offsetClass: 'lg:mt-0',
      members: [leadershipTeam[1], leadershipTeam[5]].filter(Boolean)
    },
    {
      offsetClass: 'lg:mt-10',
      members: [leadershipTeam[2], leadershipTeam[6]].filter(Boolean)
    },
    {
      offsetClass: 'lg:mt-3',
      members: [leadershipTeam[3], leadershipTeam[7]].filter(Boolean)
    }
  ]

  return (
    <section
      id="team"
      className={`scroll-mt-24 ${standalone ? 'py-16 sm:py-24' : 'py-20 sm:py-28'
        } bg-[#edf2f6] dark:bg-[#070a10] text-slate-900 dark:text-stone-100 transition-colors duration-300 w-full overflow-hidden`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">

        {/* Section Header */}
        <div className="flex flex-col items-center justify-center space-y-3 text-center">
          <div className="max-w-2xl space-y-2">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 dark:text-white tracking-tight">
              Our Leadership &amp; Team
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-stone-300 leading-relaxed font-normal">
              Visible and verifiable practitioners steering institutional technology strategy and deep in-house engineering across Africa.
            </p>
          </div>
        </div>

        {/* Staggered 4-Column Layout (Matching User Reference Image Exactly) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-start">
          {columns.map((col, colIdx) => (
            <div
              key={colIdx}
              className={`flex flex-col gap-6 sm:gap-7 ${col.offsetClass}`}
            >
              {col.members.map((member) => (

                <div
                  key={member.id}
                  onClick={() => setSelectedLeader(member)}
                  className="group relative cursor-pointer rounded-[32px] overflow-hidden bg-[#d8e1ea] dark:bg-[#131a26] aspect-[3/4] shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1.5 border border-slate-200/60 dark:border-stone-800/60"
                >
                  {/* Portrait Image */}
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Soft bottom vignette for pill contrast */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/35 via-black/10 to-transparent pointer-events-none" />

                  {/* Floating Pill Badge at bottom left - EXACT MATCH TO REFERENCE IMAGE */}
                  <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 z-20 pointer-events-auto">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white dark:bg-[#0c121d] shadow-md border border-slate-200/90 dark:border-stone-700/80 p-1 pr-3.5 transition-transform duration-300 group-hover:scale-[1.02]">
                      {/* Name in Dark Pill */}
                      <span className="rounded-full bg-[#0a1128] dark:bg-blue-600 px-3.5 py-1 text-xs font-bold text-white tracking-wide shrink-0 shadow-sm">
                        {member.shortName}
                      </span>
                      {/* Role Label */}
                      <span className="text-xs font-semibold text-slate-800 dark:text-stone-200 whitespace-nowrap">
                        {member.displayRole}
                      </span>
                    </div>
                  </div>

                  {/* Subtle hover overlay hint */}
                  <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 dark:bg-stone-900/90 backdrop-blur-sm rounded-full p-1.5 text-slate-700 dark:text-stone-300 shadow">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Trust & Verifiability Callout */}
        <div className="pt-8 border-t border-slate-300/80 dark:border-stone-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-600 dark:text-stone-400">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0" />
            <span>
              <strong className="text-slate-900 dark:text-white font-semibold">100% In-House Technical Faculty:</strong>{' '}
              All models, lakehouses, and platforms are built directly by our Kigali engineering hub.
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider">
              Click any profile for verifiable bio &amp; credentials
            </span>
          </div>
        </div>

      </div>

      {/* Interactive McKinsey/Insights-Style Full Profile Modal */}
      <AnimatePresence>
        {selectedLeader && (
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
                onClick={() => setSelectedLeader(null)}
                className="absolute top-6 right-6 h-9 w-9 rounded-full bg-slate-100 dark:bg-stone-900 border border-slate-200 dark:border-stone-800 flex items-center justify-center text-slate-600 dark:text-stone-300 hover:bg-slate-200 dark:hover:bg-stone-800 transition-colors"
                aria-label="Close profile"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Header */}
              <div className="space-y-4 pr-10 border-b border-slate-200 dark:border-stone-800 pb-5">
                <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-teal-400 font-bold uppercase tracking-wider">
                  <span>{selectedLeader.division}</span>
                  <span>&bull;</span>
                  <span className="text-slate-500 dark:text-stone-400 font-normal">Kigali Engineering Hub</span>
                  <span>&bull;</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium inline-flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Verified Practice Lead
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-1">
                  <div className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-xl overflow-hidden shrink-0 border border-slate-200 dark:border-stone-800 bg-slate-100 dark:bg-stone-900 shadow-sm">
                    <Image
                      src={selectedLeader.image}
                      alt={selectedLeader.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-slate-950 dark:text-white leading-tight">
                        {selectedLeader.name}
                      </h2>
                      <BadgeCheck className="h-6 w-6 text-blue-600 dark:text-teal-400 shrink-0" />
                    </div>

                    <p className="text-sm sm:text-base text-blue-600 dark:text-teal-400 font-semibold">
                      {selectedLeader.role}
                    </p>

                    <p className="text-xs font-mono text-slate-500 dark:text-stone-400">
                      {selectedLeader.credential}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-stone-400 pt-0.5">
                      <GraduationCap className="h-4 w-4 text-slate-400 dark:text-stone-500 shrink-0" />
                      <span>{selectedLeader.education}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Takeaways Card (Exact McKinsey Style) */}
              <div className="bg-slate-50 dark:bg-stone-900 border border-slate-200 dark:border-stone-800 p-5 sm:p-6 space-y-3">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-teal-400" />
                  <span>Key Practice Domains &amp; Technical Authority</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedLeader.specialties.map((spec) => (
                    <div key={spec} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-stone-300">
                      <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-teal-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-medium">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-4 text-sm text-slate-700 dark:text-stone-300 leading-relaxed font-normal">
                <p>{selectedLeader.bio}</p>
              </div>

              {/* Verified Accreditations */}
              {selectedLeader.certifications && selectedLeader.certifications.length > 0 && (
                <div className="bg-slate-50/50 dark:bg-stone-900/40 border border-slate-200/80 dark:border-stone-800/80 p-5 sm:p-6 space-y-3">
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span>Verified Industry Certifications</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedLeader.certifications.map((c) => (
                      <div key={c} className="flex items-center gap-2 text-xs text-slate-700 dark:text-stone-300">
                        <BadgeCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Modal Footer Actions (Exact McKinsey / Insights Style) */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-slate-200 dark:border-stone-800">
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700 dark:text-stone-300">
                  <a
                    href={selectedLeader.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-teal-400 transition-colors"
                  >
                    <Linkedin className="h-4 w-4 text-blue-600 dark:text-teal-400" />
                    <span>LinkedIn Profile</span>
                  </a>

                  <span className="text-slate-300 dark:text-stone-700">&bull;</span>

                  <a
                    href={`mailto:${selectedLeader.email}`}
                    className="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-teal-400 transition-colors"
                  >
                    <Mail className="h-4 w-4 text-slate-400" />
                    <span>{selectedLeader.email}</span>
                  </a>

                  {selectedLeader.authoredInsightId && (
                    <>
                      <span className="text-slate-300 dark:text-stone-700">&bull;</span>
                      <Link
                        href={`/insights#${selectedLeader.authoredInsightId}`}
                        onClick={() => setSelectedLeader(null)}
                        className="inline-flex items-center gap-1 text-blue-600 dark:text-teal-400 hover:underline"
                      >
                        <span>View Authored Paper</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedLeader(null)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-stone-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    Close
                  </button>

                  <Link
                    href="/contact"
                    onClick={() => setSelectedLeader(null)}
                    className="inline-flex items-center gap-2 rounded-full bg-slate-950 dark:bg-teal-500 text-white dark:text-slate-950 font-bold px-6 py-2.5 text-xs shadow hover:bg-slate-800 dark:hover:bg-teal-400 transition-all duration-300"
                  >
                    <span>Discuss your project</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  )
}