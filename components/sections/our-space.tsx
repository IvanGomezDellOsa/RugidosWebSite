'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { 
  Rocket,
  Smile,
  Music,
  Trophy,
  Store,
  Baby,
  Tv,
  Gamepad2,
  ChefHat,
  Target,
  Shield,
  Sofa,
  Bath,
  Zap,
  HeartPulse,
  FileCheck,
  ImageIcon,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react'
import { TiltCard } from '@/components/tilt-card'
import { Parallax } from '@/components/parallax'

const spaceFeatures = [
  {
    icon: Rocket,
    title: 'Laberinto con pelotero en 2 niveles',
    description: 'Tirolesa, puente colgante, trepadora, punching, plaza blanda y más.',
  },
  {
    icon: Smile,
    title: 'Inflable con tobogán',
    description: 'Diversión asegurada para los más aventureros.',
  },
  {
    icon: Music,
    title: 'Disco',
    description: 'Luces audiorrítmicas, esferas espejadas, luz negra y burbujas.',
  },
  {
    icon: Trophy,
    title: 'Rugiestadio',
    description: 'Cancha de fútbol de 90 m² de césped sintético y aro de básquet.',
  },
  {
    icon: Store,
    title: 'Rincones de juego simbólico',
    description: 'Mercadito, casita, autos, estación de servicio, escuela.',
  },
  {
    icon: Baby,
    title: 'Plaza blanda',
    description: 'Pelotero para los más chiquitos, motos, subibaja, tobogán.',
  },
  {
    icon: Tv,
    title: 'Proyector y pantalla gigante',
    description: 'Para proyecciones de videos, bailes, karaoke y coreografías.',
  },
  {
    icon: Gamepad2,
    title: 'Metegol',
    description: 'Clásico que nunca falla para todas las edades.',
  },
  {
    icon: ChefHat,
    title: 'Cocina amplia y equipada',
    description: 'Habilitada bajo normas bromatológicas. Horno convencional, microondas, horno eléctrico, pavas eléctricas y heladera. Nuestro personal propio se encarga de servir todo lo que traés.',
  },
  {
    icon: Target,
    title: 'Tejo de aire',
    description: 'Entretenimiento para chicos y grandes.',
  },
  {
    icon: Shield,
    title: 'Fábrica de Superhéroes',
    description: 'Disfraces para cumpleaños hasta 5 años.',
  },
  {
    icon: Sofa,
    title: 'Amplio espacio para adultos',
    description: 'Sector de mesas y living integrado al salón.',
  },
  {
    icon: Bath,
    title: '4 baños diferenciados',
    description: 'Con cambiador de bebés para mayor comodidad.',
  },
  {
    icon: Zap,
    title: 'Generador eléctrico propio',
    description: 'Si hay corte de luz, tu fiesta no se detiene.',
  },
  {
    icon: HeartPulse,
    title: 'Servicio de emergencias médicas',
    description: 'USICOM incluido para tu tranquilidad.',
  },
  {
    icon: FileCheck,
    title: 'Habilitación municipal',
    description: 'Todo en regla: habilitación, matafuegos y medidas de seguridad.',
  },
]

const galleryImages = Array.from({ length: 16 }).map((_, i) => ({
  id: i + 1,
  src: `/images/our-space/${i + 1}.webp`,
  alt: `Nuestro Espacio - Imagen ${i + 1}`
}))

export function OurSpace() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [currentSlide, setCurrentSlide] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    setIsDesktop(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(galleryImages.length / 3))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(galleryImages.length / 3)) % Math.ceil(galleryImages.length / 3))
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <section
      id="nuestro-espacio"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <Parallax speed={0.2} className="absolute top-40 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
      <Parallax speed={0.4} direction="down" className="absolute bottom-40 left-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="inline-block px-6 pt-5 pb-2 md:px-10 md:pt-6 md:pb-3 glass rounded-full text-3xl md:text-5xl lg:text-6xl font-display tracking-tight leading-none text-white mb-6">
            NUESTRO ESPACIO
          </h2>
          
          <motion.p
            className="text-lg text-white/60 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Descubrí todo lo que tenemos para hacer de tu fiesta una experiencia inolvidable
          </motion.p>
        </motion.div>

        {/* Galería de Imágenes */}
        <motion.div
          className="mb-20 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative overflow-hidden rounded-3xl">
            <motion.div
              className="flex gap-4"
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ duration: 0 }}
            >
              {/* Carousel slides - 3 images per slide on desktop */}
              {Array.from({ length: Math.ceil(galleryImages.length / 3) }).map((_, slideIndex) => (
                <div key={slideIndex} className="flex-shrink-0 w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                  {galleryImages.slice(slideIndex * 3, slideIndex * 3 + 3).map((image, imgIndex) => {
                    const actualIndex = slideIndex * 3 + imgIndex
                    return isDesktop ? (
                      <motion.div
                        key={image.id}
                        className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group"
                        whileHover={{ scale: 1.02 }}
                        onClick={() => openLightbox(actualIndex)}
                      >
                        <img 
                          src={image.src} 
                          alt={image.alt}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-white font-semibold text-lg">Ver imagen</span>
                        </div>
                      </motion.div>
                    ) : (
                      <div
                        key={image.id}
                        className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                        onClick={() => openLightbox(actualIndex)}
                      >
                        <img 
                          src={image.src} 
                          alt={image.alt}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )
                  })}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Carousel Controls */}
          {galleryImages.length > 3 && (
            <>
              <motion.button
                onClick={prevSlide}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/50 backdrop-blur-md border border-white/50 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-colors shadow-[0_8px_32px_rgba(0,0,0,0.5)] z-10"
                animate={isInView ? { scale: [1, 1.05, 1], boxShadow: ["0px 0px 0px rgba(255,255,255,0)", "0px 0px 20px rgba(255,255,255,0.2)", "0px 0px 0px rgba(255,255,255,0)"] } : {}}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
              </motion.button>
              <motion.button
                onClick={nextSlide}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/50 backdrop-blur-md border border-white/50 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-colors shadow-[0_8px_32px_rgba(0,0,0,0.5)] z-10"
                animate={isInView ? { scale: [1, 1.05, 1], boxShadow: ["0px 0px 0px rgba(255,255,255,0)", "0px 0px 20px rgba(255,255,255,0.2)", "0px 0px 0px rgba(255,255,255,0)"] } : {}}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
              </motion.button>

              {/* Dots indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {Array.from({ length: Math.ceil(galleryImages.length / 3) }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentSlide ? 'w-8 bg-accent' : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </motion.div>

        {/* Grilla de Características y Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {spaceFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
              className={index === 8 ? 'md:col-span-2' : ''}
            >
              <TiltCard className="h-full">
                <div className="glass rounded-xl p-6 h-full group hover:bg-white/[0.06] transition-colors duration-300">
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-white mb-1 group-hover:text-accent transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-white/50 group-hover:text-white/70 transition-colors">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={() => setLightboxOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>

            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
              }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-5xl w-full aspect-video rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={galleryImages[lightboxIndex]?.src} 
                alt={galleryImages[lightboxIndex]?.alt}
                loading="lazy"
                className="w-full h-full object-contain bg-black/50"
              />
            </motion.div>

            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                setLightboxIndex((prev) => (prev + 1) % galleryImages.length)
              }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Thumbnails */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-full px-4 scrollbar-hide">
              {galleryImages.map((image, i) => (
                <button
                  key={image.id}
                  onClick={(e) => {
                    e.stopPropagation()
                    setLightboxIndex(i)
                  }}
                  className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                    i === lightboxIndex ? 'border-accent scale-110' : 'border-transparent opacity-50 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={image.src} 
                    alt={`Miniatura ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
