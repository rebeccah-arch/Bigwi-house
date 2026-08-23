import { growthPhases } from '../content/bigwiContent'
import { usePageFocus } from '../hooks/usePageFocus'

export default function Approach() {
  const h1Ref = usePageFocus<HTMLHeadingElement>()

  return (
    <section className="pb-20 pt-14">
      <div className="mx-auto max-w-wrap px-6">
        <span className="eyebrow">Approach</span>
        <h1 ref={h1Ref} tabIndex={-1} className="outline-none">
          Our growth strategy, phase by phase.
        </h1>
        <p className="max-w-[60ch] text-muted">
          This is the same roadmap we use internally, published here so partners can see where we're headed.
        </p>

        <ol className="mt-9 grid gap-[18px]">
          {growthPhases.map((phase, i) => (
            <li key={phase.name} className="relative rounded border border-line bg-bgRaised py-5 pl-16 pr-6">
              <span
                aria-hidden="true"
                className="absolute left-5 top-[22px] flex h-7 w-7 items-center justify-center rounded-full bg-gold/15 font-mono text-[0.85rem] font-bold text-gold"
              >
                {i + 1}
              </span>
              <h3 className="mb-1.5 text-base">{phase.name}</h3>
              <ul className="list-disc pl-5 text-[0.93rem] text-muted">
                {phase.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
