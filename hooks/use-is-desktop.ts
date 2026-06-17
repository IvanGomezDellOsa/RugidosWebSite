'use client'

import { useSyncExternalStore } from 'react'

const QUERY = '(min-width: 768px)'

function subscribe(callback: () => void) {
  if (typeof window === 'undefined') return () => {}
  const mq = window.matchMedia(QUERY)
  mq.addEventListener('change', callback)
  return () => mq.removeEventListener('change', callback)
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches
}

// Server siempre asume mobile-first; en el cliente, useSyncExternalStore
// resuelve el valor real de forma síncrona durante el commit de hidratación,
// evitando el "flash" mobile→desktop que producía useState + useEffect.
function getServerSnapshot() {
  return false
}

/**
 * Devuelve `true` cuando el viewport es >= 768px.
 * Reemplaza la lógica duplicada de matchMedia que había en cada sección.
 */
export function useIsDesktop() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
