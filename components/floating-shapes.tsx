'use client'

import { motion } from 'framer-motion'

export function FloatingShapes() {
  const shapes = [
    { size: 80, x: '10%', y: '20%', delay: 0 },
    { size: 120, x: '85%', y: '15%', delay: 1 },
    { size: 60, x: '70%', y: '70%', delay: 2 },
    { size: 100, x: '20%', y: '80%', delay: 0.5 },
    { size: 50, x: '50%', y: '40%', delay: 1.5 },
    { size: 70, x: '90%', y: '50%', delay: 2.5 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full border border-white/10"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6 + index,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: shape.delay,
          }}
        />
      ))}
      
      {/* Particle dots */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-1 h-1 rounded-full bg-white/20"
          style={{
            left: `${Math.abs(Math.sin(i * 1234) * 100).toFixed(2)}%`,
            top: `${Math.abs(Math.cos(i * 5678) * 100).toFixed(2)}%`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.abs(Math.sin(i * 90) * 2),
            repeat: Infinity,
            ease: 'easeInOut',
            delay: Math.abs(Math.cos(i * 12) * 2),
          }}
        />
      ))}
    </div>
  )
}
