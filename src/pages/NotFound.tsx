import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="px-6 py-24 text-center">
      <span className="eyebrow">404</span>
      <h1>That page doesn't exist.</h1>
      <p className="mx-auto max-w-[46ch] text-muted">
        The page you're looking for may have moved. Head back to the homepage to keep browsing.
      </p>
      <Link to="/" className="btn btn-primary mt-4 inline-flex">
        Back to home
      </Link>
    </section>
  )
}
