'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, ShieldCheck } from '@/components/Icons'

interface LeadershipTeamSectionProps {
  standalone?: boolean
}

export default function LeadershipTeamSection({ standalone = false }: LeadershipTeamSectionProps) {
  return (
    <section
      id="team"
      className={`${standalone ? 'py-16 sm:py-24' : 'py-20 sm:py-28'} bg-[#edf2f6] dark:bg-[#070a10] text-slate-900 dark:text-stone-100 transition-colors duration-300 w-full`}
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-slate-200 dark:border-stone-800 bg-white dark:bg-stone-900/50 p-8 sm:p-12">
          <div className="flex items-start gap-4">
            <ShieldCheck className="h-6 w-6 text-blue-600 dark:text-teal-400 shrink-0 mt-1" />
            <div className="space-y-4">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950 dark:text-white tracking-tight">
                Leadership and delivery team
              </h2>
              <p className="max-w-3xl text-sm sm:text-base text-slate-600 dark:text-stone-300 leading-relaxed">
                Team profiles are being reviewed for publication. Names, roles, biographies, and credentials will appear here when the details and permission to publish have been confirmed.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-teal-400 hover:underline"
              >
                <span>Contact DataSphere</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
