import Card from '../components/Card'
import { services, targetClients } from '../content/bigwiContent'
import { usePageFocus } from '../hooks/usePageFocus'

export default function Services() {
  const h1Ref = usePageFocus<HTMLHeadingElement>()

  return (
    <>
      <section className="pt-14">
        <div className="mx-auto max-w-wrap px-6">
          <span className="eyebrow">Services</span>
          <h1 ref={h1Ref} tabIndex={-1} className="outline-none">
            Ten service lines, one delivery team.
          </h1>
          <p className="max-w-[60ch] text-muted">
            From strategy to shipped product, teams work across these disciplines within a single engagement.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-wrap px-6">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {services.map((s) => (
              <Card key={s.title} title={s.title} description={s.description} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-wrap px-6">
          <div className="section-head">
            <span className="eyebrow">Who we serve</span>
            <h2 className="text-[clamp(1.6rem,2.6vw,2.1rem)]">Target clients</h2>
          </div>
          <ul className="flex flex-wrap gap-2 text-[0.95rem]">
            {targetClients.map((c) => (
              <li key={c} className="rounded-full border border-line bg-white/5 px-3 py-1.5">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
