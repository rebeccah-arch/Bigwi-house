import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ProposalModal from './components/ProposalModal'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Approach from './pages/Approach'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  const [proposalOpen, setProposalOpen] = useState(false)

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <Header onOpenProposal={() => setProposalOpen(true)} />

      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />

      <ProposalModal isOpen={proposalOpen} onClose={() => setProposalOpen(false)} />
    </>
  )
}
