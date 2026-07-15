'use client'

import { useSyncExternalStore } from 'react'

const QUERY = '(hover: hover) and (pointer: fine)'

function subscribe(callback: () => void) {
  if (typeof window === 'undefined') return () => {}
  const mq = window.matchMedia(QUERY)
  mq.addEventListener('change', callback)
  return () => mq.removeEventListener('change', callback)
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches
}

function getServerSnapshot() {
  return false
}

/**
 * Devuelve `true` cuando el dispositivo tiene un puntero fino con hover real
 * (mouse/trackpad), a diferencia de `useIsDesktop` que solo mide el viewport
 * y por lo tanto confunde tablets táctiles con desktop.
 */
export function useHasHover() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
