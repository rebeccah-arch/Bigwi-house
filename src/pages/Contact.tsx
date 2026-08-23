import { FormEvent, useState } from 'react'
import FormField from '../components/FormField'
import { usePageFocus } from '../hooks/usePageFocus'

export default function Contact() {
  const h1Ref = usePageFocus<HTMLHeadingElement>()
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.checkValidity()) {
      setStatus('error')
      return
    }
    // TODO: replace with a real API call (see README "Wiring the forms")
    setStatus('success')
    form.reset()
  }

  return (
    <section className="pb-20 pt-14">
      <div className="mx-auto max-w-wrap px-6">
        <span className="eyebrow">Contact</span>
        <h1 ref={h1Ref} tabIndex={-1} className="outline-none">
          Tell us what you're building.
        </h1>

        <div className="mt-6 grid grid-cols-1 items-start gap-10 md:grid-cols-2">
          <div>
            <p className="max-w-[48ch] text-muted">
              Share a few details about your organization and the challenge you're facing. A member of the BIGWI
              HOUSE team will follow up to schedule a discovery call.
            </p>
            <div className="mt-6 grid gap-3.5">
              <div>
                <strong className="block text-[0.85rem] font-normal text-muted">Division</strong>
                Digital Innovation &amp; Product Development, DataSphere Consulting Ltd.
              </div>
              <div>
                <strong className="block text-[0.85rem] font-normal text-muted">Prepared</strong>
                Corporate &amp; Capability Profile, August 2026
              </div>
              <div>
                <strong className="block text-[0.85rem] font-normal text-muted">Confidentiality</strong>
                All engagement details are treated as confidential.
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate className="rounded border border-line bg-bgRaised p-7">
            <FormField id="cf-name" name="name" label="Full name" required autoComplete="name" />
            <FormField id="cf-org" name="organization" label="Organization" autoComplete="organization" />
            <FormField
              id="cf-email"
              name="email"
              type="email"
              label="Email address"
              required
              autoComplete="email"
              hint="We'll only use this to reply to your request."
            />

            <fieldset className="mb-[18px] rounded-lg border border-line px-4 py-3.5">
              <legend className="px-1.5 text-[0.86rem] text-muted">Sector</legend>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center gap-1.5 text-[0.9rem]">
                  <input type="radio" name="sector" value="public" defaultChecked /> Public sector / NGO
                </label>
                <label className="flex items-center gap-1.5 text-[0.9rem]">
                  <input type="radio" name="sector" value="private" /> Private enterprise
                </label>
                <label className="flex items-center gap-1.5 text-[0.9rem]">
                  <input type="radio" name="sector" value="startup" /> Startup
                </label>
              </div>
            </fieldset>

            <FormField id="cf-message" name="message" as="textarea" label="Project details" required />

            <button type="submit" className="btn btn-primary w-full">
              Send message
            </button>

            <div role="status" aria-live="polite" className="mt-3.5 text-[0.9rem]">
              {status === 'success' && (
                <p className="rounded-lg border border-teal/40 bg-teal/10 px-3.5 py-2.5 text-teal">
                  Thanks — your message has been queued. This is a prototype, so nothing was actually sent.
                </p>
              )}
              {status === 'error' && (
                <p className="rounded-lg border border-red-400/40 bg-red-400/10 px-3.5 py-2.5 text-red-300">
                  Please fill in the required fields.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
