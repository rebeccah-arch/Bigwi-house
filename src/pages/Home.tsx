import { Link } from 'react-router-dom'
import Card from '../components/Card'
import { problems, services } from '../content/bigwiContent'
import { usePageFocus } from '../hooks/usePageFocus'

export default function Home() {
  const h1Ref = usePageFocus<HTMLHeadingElement>()
  const highlighted = services.slice(0, 3)

  return (
    <>
      <section className="pb-10 pt-16">
        <div className="mx-auto grid max-w-wrap grid-cols-1 items-center gap-12 px-6 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <span className="eyebrow">Digital Innovation &amp; Product Development Division</span>
            <h1 ref={h1Ref} tabIndex={-1} className="max-w-[15ch] text-[clamp(2.1rem,4vw,3.2rem)] outline-none">
              We turn business strategy into working software.
            </h1>
            <p className="max-w-[46ch] text-[1.1rem] text-muted">
              BIGWI HOUSE is the engineering and product arm of DataSphere Consulting Ltd. — built to bridge
              business strategy, data, and technology for organizations across East Africa.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact" className="btn btn-primary">
                Start a project <span aria-hidden="true">→</span>
              </Link>
              <Link to="/services" className="btn btn-ghost">
                See our services
              </Link>
            </div>

            <div className="mt-11 flex flex-wrap gap-7 border-t border-line pt-6">
              <div className="min-w-[140px]">
                <b className="block font-display text-2xl text-gold">10+</b>
                <span className="text-[0.82rem] text-muted">Core service lines</span>
              </div>
              <div className="min-w-[140px]">
                <b className="block font-display text-2xl text-gold">3</b>
                <span className="text-[0.82rem] text-muted">Growth phases mapped</span>
              </div>
              <div className="min-w-[140px]">
                <b className="block font-display text-2xl text-gold">9</b>
                <span className="text-[0.82rem] text-muted">Target client sectors</span>
              </div>
            </div>
          </div>

          <div
            role="img"
            aria-label="Diagram showing strategy connecting to engineering, data, and product delivery"
            className="aspect-square overflow-hidden rounded-lg border border-line bg-gradient-to-b from-bgRaised to-bgRaised2"
          >
            <svg viewBox="0 0 320 320" aria-hidden="true" className="h-full w-full">
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M20 0H0V20" fill="none" stroke="#2A3F5C" strokeWidth="0.6" />
                </pattern>
              </defs>
              <rect width="320" height="320" fill="url(#grid)" />
              <circle cx="60" cy="60" r="7" fill="#E8A33D" />
              <text x="75" y="65" fill="#8FA0BC" fontSize="11" fontFamily="monospace">Strategy</text>
              <circle cx="260" cy="90" r="7" fill="#2DD4BF" />
              <text x="190" y="80" fill="#8FA0BC" fontSize="11" fontFamily="monospace">AI / Data</text>
              <circle cx="80" cy="230" r="7" fill="#2DD4BF" />
              <text x="95" y="235" fill="#8FA0BC" fontSize="11" fontFamily="monospace">Engineering</text>
              <circle cx="250" cy="250" r="7" fill="#E8A33D" />
              <text x="185" y="270" fill="#8FA0BC" fontSize="11" fontFamily="monospace">Products</text>
              <path
                d="M60 60 L260 90 L80 230 L250 250 L60 60"
                fill="none"
                stroke="#3A5578"
                strokeWidth="1.2"
                strokeDasharray="4 4"
              />
            </svg>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-wrap px-6">
          <div className="section-head">
            <span className="eyebrow">Core Services</span>
            <h2 className="text-[clamp(1.6rem,2.6vw,2.1rem)]">Business-first consulting, backed by in-house engineering</h2>
            <p className="text-muted">A sample of the disciplines that sit inside BIGWI HOUSE — full list on the Services page.</p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {highlighted.map((s) => (
              <Card key={s.title} title={s.title} description={s.description} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-wrap px-6">
          <div className="section-head">
            <span className="eyebrow">Why organizations work with us</span>
            <h2 className="text-[clamp(1.6rem,2.6vw,2.1rem)]">Common problems we're built to fix</h2>
          </div>
          <ul className="grid grid-cols-1 gap-2.5 md:grid-cols-2">
            {problems.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-[0.95rem] text-muted">
                <span aria-hidden="true" className="mt-2 h-2 w-2 flex-none rounded-full bg-teal" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
