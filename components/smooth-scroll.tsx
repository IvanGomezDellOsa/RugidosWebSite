'use client'

import { ReactNode } from 'react'
import { ReactLenis } from 'lenis/react'
import { useIsDesktop } from '@/hooks/use-is-desktop'

interface SmoothScrollProps {
  children: ReactNode
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const isDesktop = useIsDesktop()

  if (!isDesktop) return <>{children}</>

  return (
    <ReactLenis 
      root 
      options={{
        lerp: 0.1,
        duration: 1.5,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  )
}
