'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote, ExternalLink, Play, Pause } from 'lucide-react'
import { InfiniteMarquee } from '@/components/infinite-marquee'
import { TiltCard } from '@/components/tilt-card'

// Sample reviews - El cliente puede agregar más
const sampleReviews = [
  {
    id: 1,
    name: 'Laura Tuyaret',
    photo: 'https://ui-avatars.com/api/?name=Laura+Tuyaret&background=0D8ABC&color=fff',
    url: 'https://share.google/vjk4hSErdDtEjDv8b',
    rating: 5,
    text: 'Celebramos el cumpleaños de 8 de mi hijo. La atención fue muy cálida, estuvieron en cada detalle y atentas a todo lo que sucedía. Además del castillo inflable y la canchita, el cumple contó con unos momentos destacados que lo hicieron sentir protagonista en su día y nos sorprendieron a todos los presentes. ¡Lo súper recomendamos!',
    date: 'Reseña de Google Maps',
  },
  {
    id: 2,
    name: 'Celeste Ortiz',
    photo: 'https://ui-avatars.com/api/?name=Celeste+Ortiz&background=BE185D&color=fff',
    url: 'https://share.google/vjk4hSErdDtEjDv8b',
    rating: 5,
    text: 'Es el mejor pelotero de Tandil! El espacio es muy lindo pero la atención y la dedicación para hacer sentir especial al cumpleañero es lo mejor. Recomendable al 100%',
    date: 'Reseña de Google Maps',
  },
  {
    id: 3,
    name: 'Luz Quiñones',
    photo: 'https://ui-avatars.com/api/?name=Luz+Quiñones&background=047857&color=fff',
    url: 'https://share.google/vjk4hSErdDtEjDv8b',
    rating: 5,
    text: 'Buenisima la atención y muy bien las opciones que ofrecen para completar la experiencia como la fiesta fluo y los adicionales gracias por todo estuvo hermoso',
    date: 'Reseña de Google Maps',
  },
  {
    id: 4,
    name: 'maria falcon',
    photo: 'https://ui-avatars.com/api/?name=maria+falcon&background=1D4ED8&color=fff',
    url: 'https://share.google/vjk4hSErdDtEjDv8b',
    rating: 5,
    text: 'Gracias infinitas beni paso un cumple hermoso\nTodo muy bien organizado las chicas muy atentas a todos\nRecomiendo rugidos para que sus hijos tengan el mejor de los cumples\nGracias rugidos volveremos a seguir festejando 💞💝🎉',
    date: 'Reseña de Google Maps',
  },
  {
    id: 5,
    name: 'faby Aguilera',
    photo: 'https://ui-avatars.com/api/?name=faby+Aguilera&background=A21CAF&color=fff',
    url: 'https://share.google/vjk4hSErdDtEjDv8b',
    rating: 5,
    text: 'Hermoso!!! Como disfruto Jerónimo!!! Se volvió muy feliz!!!! Muchas gracias por toda la atención, por la calidad del personal, las sorpresas del lugar!!! Muy muy agradecidos!!! Mi hijo no para de recordar momentos!!!\nRecomendamos!!! Y volveremos!!!!',
    date: 'Reseña de Google Maps',
  },
  {
    id: 6,
    name: 'Erica Martinez Noya',
    photo: 'https://ui-avatars.com/api/?name=Erica+Martinez+Noya&background=B45309&color=fff',
    url: 'https://share.google/vjk4hSErdDtEjDv8b',
    rating: 5,
    text: 'Segundo año consecutivo festejando en RUGIDOS. La atención es excelente. Las chicas están atentas a los niños y siempre muy muy buena onda!!!! Lo super recomiendo!!!',
    date: 'Reseña de Google Maps',
  },
  {
    id: 7,
    name: 'Perla D ́Alessandro',
    photo: 'https://ui-avatars.com/api/?name=Perla+D+Alessandro&background=0D8ABC&color=fff',
    url: 'https://share.google/vjk4hSErdDtEjDv8b',
    rating: 5,
    text: 'El mejor salón para eventos infantiles de Tandil, por lejos. Un 10 la atención, un 10 los juegos, un 10 los extras que se pueden agregar. Mí hijo se fue feliz, y nosotros encantados con la experiencia. Lo recomiendo con los ojos cerrados... Gracias por hacer del cumple de mí hijo, un momento tan especial ❤️',
    date: 'Reseña de Google Maps',
  },
  {
    id: 8,
    name: 'Gabriela Botto',
    photo: 'https://ui-avatars.com/api/?name=Gabriela+Botto&background=BE185D&color=fff',
    url: 'https://share.google/vjk4hSErdDtEjDv8b',
    rating: 5,
    text: 'Excelente atención y predisposición. Elegimos Rugidos por cuarta vez!, lo recomendamos!',
    date: 'Reseña de Google Maps',
  },
  {
    id: 9,
    name: 'Noelia Funes',
    photo: 'https://ui-avatars.com/api/?name=Noelia+Funes&background=047857&color=fff',
    url: 'https://share.google/vjk4hSErdDtEjDv8b',
    rating: 5,
    text: 'Excelente! Mí hijo lo eligió para festejar su cumple xq le encantó cuando fue al cumple de un amiguito!!! Nos atendieron muy bien y cuidaron y jugaron con los niños/así. Lo súper recomendamos',
    date: 'Reseña de Google Maps',
  },
  {
    id: 10,
    name: 'Daniela Palencia',
    photo: 'https://ui-avatars.com/api/?name=Daniela+Palencia&background=1D4ED8&color=fff',
    url: 'https://share.google/vjk4hSErdDtEjDv8b',
    rating: 5,
    text: 'Es el primer salon que nos toca con una excelente y calida atención! Super recomendable Valentina festejo sus 4 años y la paso super bien y feliz! Gracias!',
    date: 'Reseña de Google Maps',
  },
  {
    id: 11,
    name: 'Rocio Verde',
    photo: 'https://ui-avatars.com/api/?name=Rocio+Verde&background=A21CAF&color=fff',
    url: 'https://share.google/vjk4hSErdDtEjDv8b',
    rating: 5,
    text: 'Hermosísima experiencia! Las chicas son súper amables y cuidadosas con los niños. Están muy atentas a los juegos. En todo momento están atentas también, al servicio de las mesas. Nunca faltó comida o bebida en las mesas. Son muy amables!',
    date: 'Reseña de Google Maps',
  },
  {
    id: 12,
    name: 'Maria Eugenia Campos',
    photo: 'https://ui-avatars.com/api/?name=Maria+Eugenia+Campos&background=B45309&color=fff',
    url: 'https://share.google/vjk4hSErdDtEjDv8b',
    rating: 5,
    text: 'Gracias por permitirnos vivir un cumple inolvidable, todo excelente. El lugar, la calefacción, la atención, la organización, son geniales estamos súper agradecidos y contentos.',
    date: 'Reseña de Google Maps',
  },
]

export function Reviews() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [isPaused, setIsPaused] = useState(false)

  return (
    <section
      id="resenas"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      {/* Subtle animated background */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="inline-block px-6 pt-5 pb-2 md:px-10 md:pt-6 md:pb-3 glass rounded-full text-3xl md:text-5xl lg:text-6xl font-display tracking-tight leading-none text-white mb-6">
            RESEÑAS
          </h2>
          
          <motion.p
            className="text-lg text-white/60 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Nuestros clientes lo confirman:{' '}
            <strong className="font-semibold text-white">
              ¡Hacemos de tu evento una verdadera fiesta!
            </strong>
          </motion.p>
        </motion.div>

        {/* Google Rating Summary */}
        <motion.div
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="glass rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.div
                  key={star}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ type: 'spring', delay: 0.5 + star * 0.1 }}
                >
                  <Star className="w-10 h-10 fill-accent text-accent" />
                </motion.div>
              ))}
            </div>
            <p className="text-4xl font-display text-white mb-2">4.9 de 5</p>
            <a 
              href="https://www.google.com/maps/place/RUGIDOS+FIESTAS/@-37.3521349,-59.1300923,17z/data=!4m8!3m7!1s0x95911ffb97883791:0xe7150ee59058435b!8m2!3d-37.3521392!4d-59.1275174!9m1!1b1!16s%2Fg%2F11bwq8kv5y"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors flex items-center justify-center gap-2 group"
            >
              <svg className="w-5 h-5 transition-colors group-hover:text-accent" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="underline decoration-white/30 underline-offset-4 group-hover:decoration-accent transition-colors">
                Basado en +192 opiniones en Google
              </span>
            </a>
          </div>
        </motion.div>

        {/* Hover Pause Info & Manual Button */}
        <motion.div
          className="flex flex-col items-center justify-center mb-10 gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <p className="text-white/40 text-sm italic hidden md:block">
            Apoyá el cursor sobre una reseña para pausar la cinta
          </p>
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="flex items-center gap-2 px-6 py-2.5 glass rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
          >
            {isPaused ? (
              <>
                <Play className="w-5 h-5 fill-current" />
                <span className="font-medium">Reanudar movimiento</span>
              </>
            ) : (
              <>
                <Pause className="w-5 h-5 fill-current" />
                <span className="font-medium">Pausar para leer</span>
              </>
            )}
          </button>
        </motion.div>

        {/* Reviews Marquee - First Row */}
        <div className="mb-6">
          <InfiniteMarquee speed={3} pauseOnHover={true} isPaused={isPaused}>
            <div className="flex gap-6 px-3">
              {sampleReviews.slice(0, 6).map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </InfiniteMarquee>
        </div>

        {/* Reviews Marquee - Second Row (reverse) */}
        <div className="mb-12">
          <InfiniteMarquee speed={2.5} pauseOnHover={true} direction="right" isPaused={isPaused}>
            <div className="flex gap-6 px-3">
              {sampleReviews.slice(6, 12).map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </InfiniteMarquee>
        </div>

        {/* View more on Google */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="https://www.google.com/maps/place/RUGIDOS+FIESTAS/@-37.3521349,-59.1300923,17z/data=!4m8!3m7!1s0x95911ffb97883791:0xe7150ee59058435b!8m2!3d-37.3521392!4d-59.1275174!9m1!1b1!16s%2Fg%2F11bwq8kv5y"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full text-white hover:bg-white/10 transition-colors group"
          >
            <span>Ver todas las reseñas en Google</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function ReviewCard({ review }: { review: typeof sampleReviews[0] }) {
  return (
    <TiltCard className="w-[400px] flex-shrink-0">
      <div className="block h-full group">
        <div className="glass rounded-2xl p-6 h-full flex flex-col group-hover:bg-white/[0.08] transition-colors relative overflow-hidden">
          {/* Header con foto */}
          <div className="flex items-center gap-4 mb-4">
            <img src={review.photo} alt={review.name} className="w-12 h-12 rounded-full object-cover border border-white/10" />
            <div className="flex-1">
              <p className="font-semibold text-white leading-tight">{review.name}</p>
              <p className="text-xs text-white/50">{review.date}</p>
            </div>
            <div className="flex-shrink-0 text-white/10 group-hover:text-white/30 transition-colors">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>
          </div>
          
          <div className="flex items-center gap-1 mb-3">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-accent text-accent" />
            ))}
          </div>
          <p className="text-white/80 leading-relaxed text-sm flex-1 whitespace-pre-line">{review.text}</p>
        </div>
      </div>
    </TiltCard>
  )
}

