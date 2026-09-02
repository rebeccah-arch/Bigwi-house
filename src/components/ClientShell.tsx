'use client'

import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import ProposalModal from './ProposalModal'

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const [proposalOpen, setProposalOpen] = useState(false)

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Header onOpenProposal={() => setProposalOpen(true)} />

      <main id="main-content" tabIndex={-1} className="outline-none min-h-[calc(100vh-200px)]">
        {React.cloneElement(children as React.ReactElement, {
          onOpenProposal: () => setProposalOpen(true),
        })}
      </main>

      <Footer />

      <ProposalModal isOpen={proposalOpen} onClose={() => setProposalOpen(false)} />
    </>
  )
}
