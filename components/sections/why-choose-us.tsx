'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Heart, Sparkles, Users } from 'lucide-react'
import { AnimatedCounter } from '@/components/animated-counter'
import { TiltCard } from '@/components/tilt-card'
import { Parallax } from '@/components/parallax'
import { RevealText } from '@/components/reveal-text'

const features = [
  {
    icon: Award,
    title: 'Experiencia',
    description: 'Más de 18 años siendo referentes del rubro en Tandil.',
    color: 'from-primary to-purple-600',
  },
  {
    icon: Heart,
    title: 'Atención Personalizada',
    description: 'Cada familia recibe un trato esmerado y único.',
    color: 'from-pink-500 to-rose-600',
  },
  {
    icon: Sparkles,
    title: 'Propuestas Innovadoras',
    description: 'Marcamos tendencia con shows y actividades exclusivas.',
    color: 'from-accent to-yellow-500',
  },
  {
    icon: Users,
    title: 'Espacio Premium',
    description: 'Instalaciones impecables para chicos y grandes.',
    color: 'from-cyan-500 to-blue-600',
  },
]

export function WhyChooseUs() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      id="por-que-elegirnos"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <Parallax speed={0.3} className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
      <Parallax speed={0.5} direction="down" className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="inline-block px-6 pt-5 pb-2 md:px-10 md:pt-6 md:pb-3 glass rounded-full text-3xl md:text-5xl lg:text-6xl font-display tracking-tight leading-none text-white mb-8">
            <RevealText delay={0.3}>¿POR QUÉ ELEGIRNOS?</RevealText>
          </h2>
          
          <motion.p
            className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Con <span className="text-accent font-semibold">formación profesional y más de 18 años de trayectoria</span> en fiestas infantiles, 
            somos referentes del rubro en Tandil. Cada familia recibe una atención esmerada 
            y personalizada, en un espacio impecable, cómodo y pensado para que tanto los chicos 
            como los grandes disfruten de principio a fin. Nos enorgullece ofrecer propuestas 
            que realmente sorprenden y <span className="text-accent font-semibold">marcan tendencia</span> en la ciudad.
          </motion.p>
        </motion.div>

        {/* Animated Counters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <TiltCard className="h-full">
              <div className="border-gradient p-10 rounded-2xl h-full">
                <AnimatedCounter
                  value={18}
                  suffix=" años"
                  className="text-6xl md:text-7xl lg:text-8xl pt-3"
                  label="de experiencia"
                  labelClassName="text-white/60 text-xl mt-4"
                />
              </div>
            </TiltCard>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TiltCard className="h-full">
              <div className="border-gradient p-10 rounded-2xl h-full">
                <AnimatedCounter
                  value={7500}
                  prefix="+"
                  className="text-6xl md:text-7xl lg:text-8xl"
                  label="eventos realizados"
                  labelClassName="text-white/60 text-xl mt-4"
                />
              </div>
            </TiltCard>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            >
              <TiltCard className="h-full">
                <div className="glass rounded-2xl p-8 h-full group hover:bg-white/[0.06] transition-colors duration-500">
                  <motion.div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-white/50 group-hover:text-white/70 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
