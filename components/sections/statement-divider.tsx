'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function StatementDivider() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 relative overflow-hidden flex items-center justify-center border-y border-white/5"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-accent/10 to-background" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Animated glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-32 bg-accent/20 blur-[80px] rounded-full pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      <motion.div 
        className="container mx-auto px-4 relative z-10 text-center"
        initial={{ opacity: 0, y: 60, filter: 'blur(12px)', rotateX: 45, scale: 0.9 }}
        animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)', rotateX: 0, scale: 1 } : {}}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ perspective: 1000 }}
      >
        <p className="text-xl md:text-2xl lg:text-3xl font-medium tracking-[0.2em] text-white/95 drop-shadow-2xl uppercase">
          ¡Vos también te merecés festejar en Rugidos!
        </p>
      </motion.div>
    </section>
  )
}
