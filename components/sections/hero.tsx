'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { MagneticButton } from '@/components/magnetic-button'


export function Hero() {
  const containerRef = useRef(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    setIsDesktop(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8
    }
  }, [isDesktop])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        {/* Mobile fallback gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-purple-900" />

        {isDesktop && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
        )}
        
        {/* Adaptive overlay opacity */}
        <div className="absolute inset-0 bg-black/50 md:bg-black/80" />
      </div>



      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Content */}
      <motion.div
        style={isDesktop ? { y, opacity, scale } : undefined}
        className="relative z-10 container mx-auto px-4 text-center"
      >
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            {/* Glow rings (desktop only) */}
            {isDesktop && (
              <>
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-primary to-pink-500 blur-2xl opacity-50"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.3, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <motion.div
                  className="absolute -inset-4 rounded-full"
                  style={{
                    background: 'conic-gradient(from 0deg, #ff6b35, #facc15, #ec4899, #a855f7, #ff6b35)',
                    filter: 'blur(20px)',
                    opacity: 0.4,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </>
            )}
            <img
              src="/logo_rugidos.webp"
              alt="Rugidos Fiestas"
              fetchPriority="high"
              className="relative h-36 w-36 md:h-40 md:w-40 xl:h-44 xl:w-44 object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Title */}
        {isDesktop ? (
          <>
            <div className="overflow-hidden mb-4">
              <motion.h1
                className="font-display text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl tracking-tight text-white"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
              >
                RUGIDOS FIESTAS
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.p
                className="text-2xl md:text-2xl xl:text-3xl text-white/60 tracking-[0.3em] uppercase"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.33, 1, 0.68, 1] }}
              >
                Tandil
              </motion.p>
            </div>
            <motion.p
              className="text-xl md:text-xl xl:text-2xl 2xl:text-3xl text-white/90 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              ¡Hacemos de tu evento una{' '}
              <span className="text-gradient font-semibold">verdadera fiesta</span>!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <MagneticButton strength={0.4}>
                <a
                  href="https://wa.me/5492494306222?text=%C2%A1Hola!%20Quiero%20consultar%20sobre%20Rugidos%20Fiestas."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[#25D366] text-white text-lg font-semibold rounded-full overflow-hidden transition-transform hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span className="relative z-10">Consultar por WhatsApp</span>
                </a>
              </MagneticButton>
            </motion.div>
          </>
        ) : (
          <>
            <h1 className="font-display text-6xl tracking-tight text-white mb-4">
              RUGIDOS FIESTAS
            </h1>
            <p className="text-2xl text-white/60 tracking-[0.3em] uppercase mb-8">
              Tandil
            </p>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              ¡Hacemos de tu evento una{' '}
              <span className="text-gradient font-semibold">verdadera fiesta</span>!
            </p>
            <div>
              <a
                href="https://wa.me/5492494306222?text=%C2%A1Hola!%20Quiero%20consultar%20sobre%20Rugidos%20Fiestas."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[#25D366] text-white text-lg font-semibold rounded-full overflow-hidden transition-transform hover:scale-105"
              >
                <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="relative z-10">Consultar por WhatsApp</span>
              </a>
            </div>
          </>
        )}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.a
          href="#por-que-elegirnos"
          className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-xs tracking-widest uppercase">Descubrí más</span>
          <ChevronDown className="w-6 h-6" />
        </motion.a>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[2]" />
    </section>
  )
}
