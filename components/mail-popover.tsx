'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import { Mail, Copy, Check, X } from 'lucide-react'
import { useIsDesktop } from '@/hooks/use-is-desktop'

interface PopoverState {
  email: string
  href: string
  trigger: HTMLElement | null
}

export function MailPopover() {
  const [state, setState] = useState<PopoverState | null>(null)
  const [copied, setCopied] = useState(false)
  const copyBtnRef = useRef<HTMLButtonElement>(null)
  const stateRef = useRef<PopoverState | null>(null)
  const isDesktop = useIsDesktop()
  stateRef.current = state

  const cerrar = useCallback(() => {
    stateRef.current?.trigger?.focus()
    setState(null)
    setCopied(false)
  }, [])

  // En mobile dejamos que el link mailto: se comporte de forma nativa
  // (abre la app de correo directamente) en vez de mostrar el popover.
  useEffect(() => {
    if (!isDesktop) return

    const handleClick = (e: MouseEvent) => {
      const a = (e.target as Element).closest?.('a[href^="mailto:"]') as HTMLAnchorElement | null
      if (!a) return
      e.preventDefault()
      const href = a.getAttribute('href') ?? ''
      const email = href.replace(/^mailto:/, '').split('?')[0]
      setState({ email, href, trigger: a })
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [isDesktop])

  useEffect(() => {
    if (!state) return
    copyBtnRef.current?.focus()
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') cerrar()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [state, cerrar])

  if (!state) return null

  const handleCopy = () => {
    navigator.clipboard.writeText(state.email).then(
      () => {
        setCopied(true)
        setTimeout(cerrar, 900)
      },
      () => {
        setCopied(false)
      }
    )
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-5 bg-black/70 backdrop-blur-sm"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) cerrar()
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        role="dialog"
        aria-modal="true"
        aria-label="Contacto por email"
        className="relative w-full max-w-[400px] bg-[#0d0d0d] border border-white/10 rounded-2xl px-6 pt-6 pb-5 shadow-2xl"
      >
        <button
          type="button"
          aria-label="Cerrar"
          onClick={cerrar}
          className="absolute top-3 right-3 text-white/40 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center mb-4">
          <Mail className="w-5 h-5 text-accent" />
        </div>

        <div className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-1.5">
          Contacto
        </div>
        <div className="text-white font-semibold text-base break-all select-all mb-5">
          {state.email}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            ref={copyBtnRef}
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 bg-accent text-black rounded-lg px-4 py-2 text-sm font-semibold cursor-pointer hover:bg-accent/90 transition-colors"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copiado' : 'Copiar email'}
          </button>
          <a
            href={state.href}
            className="text-white/50 text-sm underline underline-offset-2 hover:text-white transition-colors"
          >
            Abrir en tu app de correo
          </a>
        </div>
      </motion.div>
    </div>,
    document.body
  )
}
