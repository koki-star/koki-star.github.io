import { useEffect, useRef, useState } from 'react'
import { copyText } from '../lib/email'
import { CheckIcon, CopyIcon } from './icons'

interface CopyEmailButtonProps {
  email: string
  /** Called with the message for the screen reader status line. */
  onStatus: (message: string) => void
}

/** A quiet icon button. After a copy it shows a check mark for 2 seconds. */
export function CopyEmailButton({ email, onStatus }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  async function handleClick() {
    const ok = await copyText(email)
    setCopied(ok)
    onStatus(ok ? 'Email copied to clipboard.' : 'Could not copy. Please select the email and copy it.')
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => {
      setCopied(false)
      onStatus('')
    }, 2000)
  }

  return (
    <button
      className={copied ? 'copy-btn is-copied' : 'copy-btn'}
      type="button"
      aria-label="Copy email address"
      title={copied ? 'Copied' : 'Copy email address'}
      onClick={handleClick}
    >
      <CopyIcon />
      <CheckIcon />
    </button>
  )
}
