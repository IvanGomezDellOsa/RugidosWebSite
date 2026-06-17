'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useIsDesktop } from '@/hooks/use-is-desktop'

interface ParallaxProps {
  children?: React.ReactNode
  speed?: number
  direction?: 'up' | 'down'
  className?: string
}

export function Parallax({
  children,
  speed = 0.5,
  direction = 'up',
  className = '',
}: ParallaxProps) {
  const ref = useRef(null)
  const isDesktop = useIsDesktop()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const multiplier = direction === 'up' ? -1 : 1
  const y = useTransform(scrollYProgress, [0, 1], [0, 200 * speed * multiplier])

  if (!isDesktop) {
    return <div ref={ref} className={cn(className)}>{children}</div>
  }

  return (
    <motion.div ref={ref} style={{ y }} className={cn(className)}>
      {children}
    </motion.div>
  )
}
