import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/approach', label: 'Approach' },
  { to: '/contact', label: 'Contact' },
]

interface HeaderProps {
  onOpenProposal: () => void
}

export default function Header({ onOpenProposal }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-[100] border-b border-line bg-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-wrap items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2.5 no-underline" onClick={() => setMenuOpen(false)}>
          <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="h-[34px] w-[34px] flex-none">
            <rect x="1" y="1" width="38" height="38" rx="9" stroke="#E8A33D" strokeWidth="1.6" />
            <path d="M11 26L18 13L25 22L29 15" stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="29" cy="15" r="2.3" fill="#2DD4BF" />
          </svg>
          <span className="flex flex-col leading-[1.1]">
            <strong className="font-display text-[1.05rem] tracking-wide">BIGWI HOUSE</strong>
            <span className="font-mono text-[0.68rem] tracking-wide text-muted">DataSphere Consulting Ltd.</span>
          </span>
        </Link>

        <button
          type="button"
          className="inline-flex items-center rounded-lg border border-line px-2.5 py-2 text-ink md:hidden"
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span aria-hidden="true">☰</span>
          <span className="sr-only">Toggle menu</span>
        </button>

        <nav
          id="primary-nav"
          aria-label="Primary"
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } absolute left-4 right-4 top-[64px] flex-col gap-1 rounded-lg border border-line bg-bgRaised p-2.5 md:static md:flex md:flex-row md:border-0 md:bg-transparent md:p-0`}
        >
          <ul className="flex flex-col gap-1 md:flex-row">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-full px-3.5 py-2 text-[0.92rem] no-underline transition ${
                      isActive ? 'bg-gold font-semibold text-bg' : 'text-muted hover:bg-bgRaised hover:text-ink'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button type="button" className="btn btn-primary" onClick={onOpenProposal}>
          <span className="hidden sm:inline">Request a Proposal</span>
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </header>
  )
}
