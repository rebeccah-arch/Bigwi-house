import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-line py-10">
      <div className="mx-auto flex max-w-wrap flex-wrap items-center justify-between gap-5 px-6">
        <small className="text-[0.82rem] text-muted">
          © 2026 DataSphere Consulting Ltd. — BIGWI HOUSE, Digital Innovation &amp; Product Development Division.
        </small>
        <ul className="flex gap-[18px] text-[0.85rem]">
          <li>
            <Link to="/about" className="text-muted no-underline hover:text-teal">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="text-muted no-underline hover:text-teal">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-muted no-underline hover:text-teal">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
