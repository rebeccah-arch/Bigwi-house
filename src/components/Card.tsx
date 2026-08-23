interface CardProps {
  title: string
  description: string
}

export default function Card({ title, description }: CardProps) {
  return (
    <article className="card">
      <h3 className="mb-2 text-[1.05rem]">{title}</h3>
      <p className="m-0 text-[0.93rem] text-muted">{description}</p>
    </article>
  )
}
