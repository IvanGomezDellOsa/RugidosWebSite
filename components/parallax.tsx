'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

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
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    setIsDesktop(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  
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
