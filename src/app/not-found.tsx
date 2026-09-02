import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Sparkles } from '@/components/Icons'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center">
      <div className="rounded-3xl border border-lineLight bg-gradient-to-b from-bgRaised/90 to-card/90 p-8 sm:p-12 max-w-lg backdrop-blur-xl shadow-glass space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 font-mono text-xs text-gold">
          <Sparkles className="h-3 w-3" />
          <span>Error 404 &bull; Page Not Found</span>
        </div>

        <h1 className="text-4xl font-display font-bold text-ink">
          Page Not Located
        </h1>

        <p className="text-sm text-muted leading-relaxed">
          The requested route does not exist or has been relocated within the BIGWI HOUSE platform directory.
        </p>

        <div className="pt-2">
          <Link href="/" className="btn btn-primary text-sm">
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
