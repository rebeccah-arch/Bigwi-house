import { competitiveAdvantage, mission, orgStructure, vision } from '../content/bigwiContent'
import { usePageFocus } from '../hooks/usePageFocus'

export default function About() {
  const h1Ref = usePageFocus<HTMLHeadingElement>()

  return (
    <>
      <section className="pt-14">
        <div className="mx-auto max-w-wrap px-6">
          <span className="eyebrow">About</span>
          <h1 ref={h1Ref} tabIndex={-1} className="outline-none">
            Where business strategy and engineering meet.
          </h1>

          <div className="mt-7 grid grid-cols-1 items-start gap-10 md:grid-cols-2">
            <div>
              <p>
                BIGWI HOUSE is the Digital Innovation and Product Development Division of DataSphere Consulting
                Ltd., established to bridge the gap between business strategy, technology, and digital
                transformation. It converts business ideas into scalable digital products, intelligent systems, and
                market-ready technology solutions.
              </p>
              <p>
                Every engagement starts with a business-first approach: understanding objectives and operational
                challenges before recommending a solution — not the other way around. The division also functions
                as an innovation laboratory, applying AI, machine learning, data analytics, cloud computing, IoT,
                and GIS to practical problems across African markets.
              </p>
            </div>
            <div className="rounded border border-line bg-bgRaised p-7">
              <h3 className="mb-3.5 text-base">Vision &amp; Mission</h3>
              <p>
                <strong className="text-gold">Vision:</strong> {vision}
              </p>
              <p className="mb-0">
                <strong className="text-teal">Mission:</strong> {mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-wrap px-6">
          <div className="section-head">
            <span className="eyebrow">Structure</span>
            <h2 className="text-[clamp(1.6rem,2.6vw,2.1rem)]">Where BIGWI HOUSE sits inside DataSphere Consulting</h2>
          </div>

          <div className="grid gap-4">
            <div className="rounded border border-gold p-5 md:p-6">
              <h3 className="mb-3 font-mono text-[0.95rem] uppercase tracking-wide text-gold">
                {orgStructure.parent.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {orgStructure.parent.items.map((item) => (
                  <li key={item} className="rounded-full border border-line bg-white/5 px-3 py-1.5 text-[0.85rem]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div aria-hidden="true" className="text-center font-mono text-muted">
              ↓
            </div>

            <div className="rounded border border-teal bg-bgRaised2 p-5 md:p-6">
              <h3 className="mb-3 font-mono text-[0.95rem] uppercase tracking-wide text-teal">
                {orgStructure.child.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {orgStructure.child.items.map((item) => (
                  <li key={item} className="rounded-full border border-line bg-white/5 px-3 py-1.5 text-[0.85rem]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-wrap px-6">
          <div className="section-head">
            <span className="eyebrow">Competitive advantage</span>
            <h2 className="text-[clamp(1.6rem,2.6vw,2.1rem)]">What sets the division apart</h2>
          </div>
          <ul className="grid grid-cols-1 gap-2.5 md:grid-cols-2">
            {competitiveAdvantage.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[0.95rem] text-muted">
                <span aria-hidden="true" className="mt-2 h-2 w-2 flex-none rounded-full bg-teal" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
