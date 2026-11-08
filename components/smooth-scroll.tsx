'use client'

import { ReactNode } from 'react'
import { ReactLenis } from 'lenis/react'
import { useIsDesktop } from '@/hooks/use-is-desktop'

interface SmoothScrollProps {
  children: ReactNode
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const isDesktop = useIsDesktop()

  // Lenis se monta como hermano (sin envolver a children): con `root` no
  // necesita wrapper. Si envolviera a children, el paso mobile→desktop tras
  // la hidratación cambiaría el tipo del padre y React remontaría toda la
  // página (animaciones repetidas y clics perdidos al cargar).
  return (
    <>
      {isDesktop && (
        <ReactLenis
          root
          options={{
            lerp: 0.1,
            duration: 1.5,
            smoothWheel: true,
            // Lenis maneja los clics en links #ancla; sin esto, un clic
            // durante la inercia de la ruedita era pisado por Lenis.
            anchors: true,
          }}
        />
      )}
      {children}
    </>
  )
}
