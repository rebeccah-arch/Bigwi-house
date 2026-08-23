import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

interface BaseProps {
  label: string
  id: string
  hint?: string
}

type InputProps = BaseProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> & { as?: 'input' }

type TextareaProps = BaseProps &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'id'> & { as: 'textarea' }

type Props = InputProps | TextareaProps

const fieldClass =
  'w-full rounded-lg border border-line bg-bg px-[13px] py-[11px] text-[0.95rem] text-ink focus:border-teal'

/**
 * Labeled form control. Pass `as="textarea"` to render a textarea instead
 * of an input; all other props are forwarded to the underlying element.
 */
export default function FormField({ label, id, hint, as, ...rest }: Props) {
  return (
    <div className="mb-[18px]">
      <label htmlFor={id} className="mb-1.5 block text-[0.86rem] text-muted">
        {label}
      </label>
      {as === 'textarea' ? (
        <textarea
          id={id}
          className={`min-h-[110px] resize-y ${fieldClass}`}
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input id={id} className={fieldClass} {...(rest as InputHTMLAttributes<HTMLInputElement>)} />
      )}
      {hint && <span className="mt-1 block text-[0.78rem] text-muted">{hint}</span>}
    </div>
  )
}
