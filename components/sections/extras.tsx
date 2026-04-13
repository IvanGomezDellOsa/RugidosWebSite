'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Bot, Users, CakeSlice, Paintbrush, Popcorn, PartyPopper, UtensilsCrossed, Sparkles, GlassWater, Sticker, Camera, ImageIcon, ChevronDown, ChevronUp } from 'lucide-react'
import { TiltCard } from '@/components/tilt-card'
import { MagneticButton } from '@/components/magnetic-button'

const extras = [
  {
    id: 'rugibot',
    icon: Bot,
    title: 'Rugibot',
    subtitle: 'Show de robot LED',
    description: '"Rugibot" es nuestro exclusivo robot de luces LED, llamativo y completamente único. Acompaña el momento del baile con coreografías y juegos que mantienen a los niños y grandes en movimiento de principio a fin.',
    featured: true,
    images: 1,
  },
  {
    id: 'fiesta-fluor',
    icon: PartyPopper,
    title: 'Fiesta Flúor',
    subtitle: '¡La primera y original de Tandil!',
    description: 'Incluye mantelería, vasos y decoración flúor. Durante el momento del baile, maquillamos a todos los niños con tonos neón y les prestamos gorras flúor.',
    featured: true,
    images: 1,
  },
  {
    id: 'espejo-magico',
    icon: Camera,
    title: 'Espejo Mágico',
    subtitle: 'Cabina fotográfica interactiva',
    description: 'Nuestra exclusiva cabina fotográfica con forma de espejo de gran tamaño cuenta con pantalla táctil para fotos en la alfombra roja usando una gran variedad de divertidos sombreros, carteles y accesorios. Al terminar, podés firmar la tira en pantalla, agregarle emoticones o escribir un mensaje del color que elijas. Después del evento te enviamos las fotos en formato digital como un hermoso recuerdo. ¡Tanto niños como adultos de todas las edades pueden disfrutarlo!',
    featured: true,
    images: 1,
  },
  {
    id: 'personajes',
    icon: Users,
    title: 'Show Personajes en Vivo',
    subtitle: 'Mickey, Sapo Pepe, Marshall y Tigger',
    description: 'Personajes propios de Rugidos: Mickey, Sapo Pepe, Marshall de Paw Patrol y Tigger. Bailan, juegan y se sacan fotos con todos los invitados durante la fiesta.',
    images: 1,
  },
  {
    id: 'candy-bar',
    icon: CakeSlice,
    title: 'Mesas de Candy Bar',
    subtitle: 'Poné un plus a tu decoración',
    description: 'Mesas, bandejas y accesorios para armar tu Candy Bar. Incluye cartel estilo Hollywood con el nombre y la edad del cumpleañero.',
    images: 1,
  },
  {
    id: 'maquillaje',
    icon: Paintbrush,
    title: 'Maquillaje Artístico',
    subtitle: 'Pinturas no tóxicas',
    description: 'Maquillaje artístico infantil con una gran variedad de diseños, usando pinturas faciales no tóxicas y fácilmente lavables.',
    images: 1,
  },
  {
    id: 'pochoclos',
    icon: Popcorn,
    title: 'Pochoclos para la salida',
    subtitle: 'Souvenir delicioso',
    description: 'Bolsitas de pochoclos como souvenir para los invitados al cierre de la fiesta. Un detalle simple, rico y que siempre gusta.',
    images: 1,
  },
  {
    id: 'show-pancho',
    icon: UtensilsCrossed,
    title: 'Show del Pancho',
    subtitle: 'El cumpleañero es protagonista',
    description: 'El cumpleañero se disfraza de cocinero y es el protagonista del show: él mismo sirve los panchos en nuestra panchería. Incluye todos los aderezos.',
    images: 1,
  },
  {
    id: 'rincon-fashion',
    icon: Sparkles,
    title: 'Rincón Fashion',
    subtitle: 'Glitter bar y más',
    description: 'En nuestro Rincón Fashion encontrás glitter bar, maquillaje y strass para el rostro. Una propuesta para producirse y brillar durante la fiesta.',
    images: 1,
  },
  {
    id: 'barra-jugos',
    icon: GlassWater,
    title: 'Barra de Jugos',
    subtitle: 'Estilo caribeño',
    description: 'Jugos libres de distintos sabores servidos en nuestra barra caribeña, en vasos con sorbetes.',
    images: 1,
  },
  {
    id: 'rugitattoo',
    icon: Sticker,
    title: 'RugiTattoo Point',
    subtitle: 'Tattoos temporales',
    description: '',
    images: 2,
    options: [
      {
        name: 'RugiTattoo Glitter',
        description: 'Tattoos temporales con glitter en varias temáticas. Se aplican durante la fiesta y duran aproximadamente 2 días. Diseños para nenas y nenes.',
      },
      {
        name: 'RugiTattoo Exclusivo (Premium)',
        description: 'Tattoos personalizados con la carita del cumpleañero (caricatura o foto estilizada) o según la temática del festejo: Stitch, Spiderman, Dino, y más. Diseño exclusivo creado especialmente para el evento, aplicado durante la fiesta. Importante: requiere envío de foto con anticipación.',
      },
    ],
  },
]

export function Extras() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [expandedCard, setExpandedCard] = useState<string | null>('rugitattoo')
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    setIsDesktop(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const featuredExtras = extras.filter(e => e.featured)
  const regularExtras = extras.filter(e => !e.featured)

  return (
    <section
      id="extras"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Animated orbs (desktop only) */}
      {isDesktop && (
        <>
          <motion.div
            className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-accent/10 blur-3xl"
            animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-primary/10 blur-3xl"
            animate={{ scale: [1, 1.3, 1], x: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
        </>
      )}

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="inline-block px-6 py-4 md:px-10 md:py-5 glass rounded-full text-3xl md:text-5xl lg:text-6xl font-display tracking-tight leading-none text-white mb-6">
            SERVICIOS ADICIONALES
          </h2>
          
          <motion.p
            className="text-lg text-white/60 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Sumá experiencias únicas a tu fiesta con nuestras propuestas exclusivas
          </motion.p>
        </motion.div>

        {/* Featured Extras - Large Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {featuredExtras.map((extra, index) => (
            <motion.div
              key={extra.id}
              initial={{ opacity: 0, y: 50, rotateY: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
              className="perspective-1000"
            >
              <TiltCard className="h-full">
                <div className="relative h-full bg-gradient-to-br from-primary via-primary/90 to-purple-900 rounded-2xl p-8 overflow-hidden group">
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                      backgroundSize: '20px 20px',
                    }} />
                  </div>
                  
                  {/* Glow on hover */}
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-accent via-yellow-500 to-accent rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"
                  />

                  {/* Icon */}
                  <motion.div
                    className="relative w-20 h-20 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <extra.icon className="w-10 h-10 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative">
                    <span className="text-sm font-bold text-accent uppercase tracking-wider">
                      {extra.subtitle}
                    </span>
                    <h3 className="text-3xl font-display text-white mt-2 mb-4">{extra.title}</h3>
                    <p className="text-white/70 text-[15px] leading-relaxed">{extra.description}</p>
                  </div>

                  <div className="relative mt-6 aspect-square rounded-xl overflow-hidden glass">
                    <img 
                      src={`/images/extras/${extra.id}.webp`} 
                      alt={extra.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Regular Extras Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {regularExtras.map((extra, index) => (
            <motion.div
              key={extra.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.08 }}
            >
              <TiltCard className="h-full">
                <div 
                  className={`glass rounded-xl p-6 h-full group hover:bg-white/[0.06] transition-all duration-300 cursor-pointer ${
                    extra.id === 'rugitattoo' ? 'md:col-span-2' : ''
                  }`}
                  onClick={() => setExpandedCard(expandedCard === extra.id ? null : extra.id)}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div
                      className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-yellow-500 flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <extra.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                        {extra.subtitle}
                      </span>
                      <h3 className="text-xl font-semibold text-white mt-1">{extra.title}</h3>
                    </div>
                    {extra.options && (
                      <button className="text-white/50 hover:text-white transition-colors">
                        {expandedCard === extra.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </button>
                    )}
                  </div>

                  {/* Description or Options */}
                  {extra.options ? (
                    <AnimatePresence>
                      {expandedCard === extra.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          {extra.options.map((option, i) => (
                            <div key={option.name} className="mb-4 last:mb-0 p-4 rounded-lg bg-white/5">
                              <h4 className="font-semibold text-white mb-2">
                                {i === 0 ? 'OPCIÓN 1' : 'OPCIÓN 2'} — {option.name}
                              </h4>
                              <p className="text-white/60 text-[15px]">{option.description}</p>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  ) : (
                    <p className="text-white/50 text-[15px] group-hover:text-white/70 transition-colors">
                      {extra.description}
                    </p>
                  )}

                  {/* Image placeholder(s) */}
                  <div className={`mt-4 grid gap-2 ${extra.images === 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                    {Array.from({ length: extra.images }).map((_, i) => (
                      <div key={i} className="aspect-square rounded-lg overflow-hidden bg-white/5">
                        <img 
                          src={extra.images === 1 ? `/images/extras/${extra.id}.webp` : `/images/extras/${extra.id}-${i+1}.webp`} 
                          alt={`${extra.title} ${i+1}`}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-white/50 mb-6">Consultá por los extras disponibles</p>
          
          <MagneticButton strength={0.3}>
            <a
              href="https://wa.me/5492494306222?text=%C2%A1Hola!%20Quiero%20consultar%20sobre%20los%20extras%20de%20Rugidos%20Fiestas."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#25D366] text-white font-semibold rounded-full transition-transform hover:scale-105 shadow-lg shadow-[#25D366]/30"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Consultá por tu fecha
            </a>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}
