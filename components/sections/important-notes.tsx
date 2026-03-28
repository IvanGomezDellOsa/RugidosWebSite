'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Calendar, Users, Wallet, Check, Clock, Projector, Music, Utensils, Thermometer, PartyPopper, Gift, Droplets, Sparkles } from 'lucide-react'
import { TiltCard } from '@/components/tilt-card'
import { InfiniteMarquee } from '@/components/infinite-marquee'

const importantNotes = [
  {
    icon: Calendar,
    title: 'Cumpleaños hasta 8 años',
    description: 'Especialistas en fiestas para los más chiquitos',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    icon: Users,
    title: 'Capacidad',
    description: '35 chicos y 30 adultos',
    gradient: 'from-accent to-yellow-500',
  },
  {
    icon: Wallet,
    title: 'Precio congelado',
    description: 'Con tu seña se congela el precio del básico',
    gradient: 'from-primary to-purple-600',
  },
]

const services = [
  { icon: Clock, text: 'Uso exclusivo del salón por 2 horas.' },
  { icon: PartyPopper, text: 'Animación y coordinación profesional adaptada a cada edad.' },
  { icon: Gift, text: 'Invitación digital animada personalizada.' },
  { icon: Projector, text: 'Proyecciones en pantalla gigante.' },
  { icon: Sparkles, text: 'Estructura y presentación de la piñata.' },
  { icon: Droplets, text: 'Jugo y agua para todos los niños.' },
  { icon: Utensils, text: 'Vajilla, mantelería y servilletas.' },
  { icon: Gift, text: 'Mesa exclusiva para la torta.' },
  { icon: Thermometer, text: 'Ambiente climatizado (aire acondicionado y calefacción).' },
]

export function ImportantNotes() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    setIsDesktop(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-purple-900"
        style={{ y: backgroundY }}
      />
      
      {/* Floating circles decoration (desktop only) */}
      {isDesktop && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-white/10"
              style={{
                width: `${100 + i * 80}px`,
                height: `${100 + i * 80}px`,
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      )}

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Important Notes Cards - Staggered 3D Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {importantNotes.map((note, index) => (
            <motion.div
              key={note.title}
              initial={{ opacity: 0, y: 80, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.33, 1, 0.68, 1],
              }}
              className="perspective-1000"
            >
              <TiltCard glareEnabled={true}>
                <div className="glass-strong rounded-2xl p-8 relative overflow-hidden group">
                  {/* Background glow */}
                  <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${note.gradient} rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
                  
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${note.gradient} flex items-center justify-center mb-6 shadow-xl`}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <note.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{note.title}</h3>
                  <p className="text-white/70 text-lg">{note.description}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h2 className="inline-block px-6 pt-5 pb-2 md:px-10 md:pt-6 md:pb-3 glass rounded-full text-3xl md:text-5xl lg:text-6xl font-display tracking-tight leading-none text-white mb-6">
              SERVICIOS INCLUIDOS
            </h2>
          </div>

          {/* Services Grid with staggered reveal */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.text}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.08 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-start gap-4 glass rounded-xl p-5 group cursor-default"
              >
                <motion.div
                  className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-accent to-yellow-500 rounded-lg flex items-center justify-center shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Check className="w-5 h-5 text-white" />
                </motion.div>
                <p className="text-white/80 group-hover:text-white transition-colors pt-2">
                  {service.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Marquee decoration */}
      <div className="absolute bottom-0 left-0 right-0 py-6 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none overflow-hidden">
        <InfiniteMarquee speed={4} pauseOnHover={false}>
          <div className="flex items-center text-white/20 text-2xl font-display tracking-widest">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 px-6">
                <span>RUGIDOS FIESTAS</span>
                <span className="text-accent">*</span>
                <span>TANDIL</span>
                <span className="text-accent">*</span>
                <span>+18 AÑOS</span>
                <span className="text-accent">*</span>
                <span>+7500 EVENTOS</span>
                <span className="text-accent">*</span>
              </div>
            ))}
          </div>
        </InfiniteMarquee>
      </div>
    </section>
  )
}
