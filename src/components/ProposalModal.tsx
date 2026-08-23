import { FormEvent, useState } from 'react'
import Modal from './Modal'
import FormField from './FormField'

interface ProposalModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ProposalModal({ isOpen, onClose }: ProposalModalProps) {
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
    setTimeout(() => {
      setStatus('idle')
      onClose()
    }, 1400)
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      titleId="proposal-modal-title"
      title="Request a proposal"
      subtitle="Quick version — for the full form, visit the Contact page."
    >
      <form onSubmit={handleSubmit} noValidate>
        <FormField id="mf-email" name="email" type="email" label="Work email" required autoComplete="email" />
        <div className="mb-[18px]">
          <label htmlFor="mf-need" className="mb-1.5 block text-[0.86rem] text-muted">
            What do you need?
          </label>
          <select
            id="mf-need"
            name="need"
            className="w-full rounded-lg border border-line bg-bg px-[13px] py-[11px] text-[0.95rem] text-ink focus:border-teal"
          >
            <option>Enterprise software</option>
            <option>AI / data solution</option>
            <option>Website or web app</option>
            <option>Not sure yet</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Submit request
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
    </Modal>
  )
}
