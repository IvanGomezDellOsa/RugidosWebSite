'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import {
  motion,
  useInView,
  useMotionValue,
  useMotionTemplate,
  useMotionValueEvent,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion'
import { Star, ImageIcon, MoveHorizontal, Mouse, MousePointer2, Calendar, Users, Clapperboard, GraduationCap } from 'lucide-react'
import { useHasHover } from '@/hooks/use-has-hover'

const galleryPhotos: { id: number; src: string | null; alt: string }[] = [
  {
    id: 1,
    src: '/images/academia/alfombra-roja.webp',
    alt: 'Nena caminando la alfombra roja con tiara y anteojos de sol en la Academia de Estrellas de Rugidos',
  },
  {
    id: 2,
    src: '/images/academia/accesorios-fashion.webp',
    alt: 'Mesa con anteojos de sol de colores y accesorios fashion para la Academia de Estrellas',
  },
  {
    id: 3,
    src: '/images/academia/baile-fluor.webp',
    alt: 'Chicos bailando con anteojos flúor en la fiesta de Rugidos',
  },
  {
    id: 4,
    src: '/images/academia/mesa-decorada.webp',
    alt: 'Mesa decorada con la ambientación de Rugidos Fiestas',
  },
]

function PulsingHint({
  left,
  top,
}: {
  left: ReturnType<typeof useMotionTemplate>
  top: ReturnType<typeof useMotionTemplate>
}) {
  return (
    <motion.div
      className="pointer-events-none absolute flex items-center justify-center"
      style={{ left, top, transform: 'translate(-50%, -50%)' }}
    >
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="absolute w-6 h-6 rounded-full border border-white/50"
          animate={{ scale: [1, 3.4], opacity: [0.6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut', delay: i * 0.7 }}
        />
      ))}
      <Mouse className="w-5 h-5 text-white/90 drop-shadow-[0_0_4px_rgba(0,0,0,0.7)]" />
    </motion.div>
  )
}

type Sparkle = {
  id: number
  x: number
  y: number
  dx: number
  dy: number
  rotate: number
  size: number
  color: string
}

const SPARKLE_COLORS = ['#FFA500', '#facc15', '#ec4899', '#a855f7']

function RevealPortrait() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [sparkles, setSparkles] = useState<Sparkle[]>([])
  const sparkleId = useRef(0)
  const lastSparkleAt = useRef(0)
  const isInView = useInView(containerRef, { margin: '-100px' })

  const mx = useMotionValue(50)
  const my = useMotionValue(38)
  const radius = useMotionValue(0)

  const smoothX = useSpring(mx, { stiffness: 250, damping: 30, mass: 0.5 })
  const smoothY = useSpring(my, { stiffness: 250, damping: 30, mass: 0.5 })
  const smoothRadius = useSpring(radius, { stiffness: 180, damping: 26 })

  const maskImage = useMotionTemplate`radial-gradient(circle ${smoothRadius}px at ${smoothX}% ${smoothY}%, transparent 0%, transparent 55%, black 100%)`
  const hintLeft = useMotionTemplate`${smoothX}%`
  const hintTop = useMotionTemplate`${smoothY}%`

  useEffect(() => {
    if (isHovering || !isInView) return
    let frameId: number
    const start = performance.now()
    const loop = (now: number) => {
      const t = (now - start) / 1000
      // Destello idle chico que además se pasea por el pecho: el movimiento de
      // posición (no solo el de tamaño) es lo que capta la mirada de quien no
      // suele leer los textos de ayuda. No se gatea con prefers-reduced-motion:
      // en Windows esa preferencia viene activada por la config del sistema en
      // muchas máquinas y este hint localizado es el corazón de la sección.
      radius.set(22 + Math.sin(t * 2.4) * 14)
      // Órbita elíptica (misma frecuencia en ambos ejes) en vez de dos senos
      // independientes: un recorrido circular se percibe como "algo vivo"
      // mucho más claramente que una deriva sutil por ejes separados.
      mx.set(50 + Math.cos(t * 0.6) * 9)
      my.set(38 + Math.sin(t * 0.6) * 7)
      frameId = requestAnimationFrame(loop)
    }
    frameId = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(frameId)
  }, [isHovering, isInView, radius, mx, my])

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    setIsHovering(true)
    const { left, top, width, height } = containerRef.current.getBoundingClientRect()
    const px = e.clientX - left
    const py = e.clientY - top
    mx.set((px / width) * 100)
    my.set((py / height) * 100)
    radius.set(110)

    // Estrellitas que brotan del cursor (throttleadas para no saturar).
    // Es una animación 1:1 con el movimiento real del mouse del usuario, no
    // ambiental, así que no se apaga con prefers-reduced-motion.
    const now = performance.now()
    if (now - lastSparkleAt.current > 55) {
      lastSparkleAt.current = now
      const sparkle: Sparkle = {
        id: sparkleId.current++,
        x: px,
        y: py,
        dx: (Math.random() - 0.5) * 50,
        dy: -(18 + Math.random() * 30),
        rotate: Math.random() * 360,
        size: 12 + Math.random() * 12,
        color: SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)],
      }
      setSparkles((prev) => [...prev.slice(-18), sparkle])
    }
  }

  const handlePointerLeave = () => {
    setIsHovering(false)
    mx.set(50)
    my.set(38)
    // Baja el radio al valor idle de inmediato: si el evento de salida llega
    // tarde o el loop demora en retomar, nunca queda la ventana grande abierta.
    radius.set(12)
  }

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative aspect-[4/5] w-full max-w-md lg:max-w-lg mx-auto rounded-3xl overflow-hidden glass glow-purple"
    >
      {/* Capa base: se ve completa, es la que describe el concepto para lectores de pantalla */}
      <Image
        src="/images/academia/nena-superstar.webp"
        alt="Nena transformada en superstar en la Academia de Estrellas de Rugidos, con boina violeta, boa fucsia, anteojos brillantes y remera de lentejuelas"
        fill
        sizes="(max-width: 1024px) 448px, 512px"
        className="object-cover"
      />

      {/* Capa "normal": arriba, enmascarada por el círculo que sigue al mouse. Decorativa: el alt real ya está en la capa base. */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        <Image
          src="/images/academia/nena-normal.webp"
          alt=""
          fill
          sizes="(max-width: 1024px) 448px, 512px"
          className="object-cover"
        />
      </motion.div>

      {/* Estrellitas que salen al pasar el mouse */}
      {sparkles.map((s) => (
        <motion.span
          key={s.id}
          className="pointer-events-none absolute z-10"
          style={{ left: s.x, top: s.y, color: s.color }}
          initial={{ opacity: 1, scale: 0, x: 0, y: 0, rotate: s.rotate }}
          animate={{ opacity: 0, scale: 1, x: s.dx, y: s.dy, rotate: s.rotate + 120 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          onAnimationComplete={() => setSparkles((prev) => prev.filter((p) => p.id !== s.id))}
        >
          <svg
            viewBox="0 0 24 24"
            width={s.size}
            height={s.size}
            fill="currentColor"
            aria-hidden="true"
            style={{ filter: 'drop-shadow(0 0 3px rgba(0,0,0,0.6))' }}
          >
            <path d="M12 0l2.9 9.1L24 12l-9.1 2.9L12 24l-2.9-9.1L0 12l9.1-2.9z" />
          </svg>
        </motion.span>
      ))}

      {!isHovering && (
        <PulsingHint left={hintLeft} top={hintTop} />
      )}
    </div>
  )
}

function CompareSlider() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)
  const [ariaPercent, setAriaPercent] = useState(50)
  const x = useMotionValue(0)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (!containerRef.current) return
    const el = containerRef.current
    let prevWidth = el.clientWidth
    setWidth(prevWidth)
    x.set(prevWidth / 2)
    const observer = new ResizeObserver(() => {
      const w = el.clientWidth
      // Reescala la posición del divisor para que conserve su porcentaje
      // cuando cambia el ancho (rotación del dispositivo, resize).
      if (prevWidth > 0 && w !== prevWidth) {
        x.set((x.get() / prevWidth) * w)
      }
      prevWidth = w
      setWidth(w)
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [x])

  const percent = useTransform(x, [0, width || 1], [0, 100])
  const clipPath = useMotionTemplate`inset(0 0 0 ${percent}%)`
  useMotionValueEvent(percent, 'change', (v) => setAriaPercent(Math.round(v)))

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const step = width * 0.05
    if (e.key === 'ArrowLeft') {
      x.set(Math.max(0, x.get() - step))
      e.preventDefault()
    } else if (e.key === 'ArrowRight') {
      x.set(Math.min(width, x.get() + step))
      e.preventDefault()
    } else if (e.key === 'Home') {
      x.set(0)
      e.preventDefault()
    } else if (e.key === 'End') {
      x.set(width)
      e.preventDefault()
    }
  }

  return (
    <div
      ref={containerRef}
      style={{ touchAction: 'pan-y' }}
      className="relative aspect-[4/5] w-full max-w-sm mx-auto rounded-3xl overflow-hidden glass glow-purple select-none"
    >
      {/* Capa base: look "antes", visible completa a la izquierda del divisor */}
      <Image
        src="/images/academia/nena-normal.webp"
        alt="Comparación del antes y después de una nena en la Academia de Estrellas de Rugidos: de look casual a superstar con boina, boa y brillos"
        fill
        sizes="(max-width: 384px) 90vw, 384px"
        className="object-cover"
      />

      {/* Capa "superstar": arriba, recortada por el divisor. Decorativa: el alt real ya está en la capa base. */}
      <motion.div aria-hidden="true" className="absolute inset-0" style={{ clipPath }}>
        <Image
          src="/images/academia/nena-superstar.webp"
          alt=""
          fill
          sizes="(max-width: 384px) 90vw, 384px"
          className="object-cover"
        />
      </motion.div>

      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: width }}
        dragElastic={prefersReducedMotion ? 0 : 0.12}
        dragTransition={
          prefersReducedMotion
            ? { bounceStiffness: 1000, bounceDamping: 100 }
            : { bounceStiffness: 420, bounceDamping: 18 }
        }
        dragMomentum={false}
        style={{ x }}
        role="slider"
        tabIndex={0}
        aria-label="Comparar look antes y después en la Academia de Estrellas"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={ariaPercent}
        onKeyDown={handleKeyDown}
        className="group absolute top-0 bottom-0 -ml-5 w-10 cursor-grab active:cursor-grabbing focus-visible:outline-none"
        whileTap={{ scale: 1.1 }}
      >
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-white/70" />
        <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full glass-strong border border-white/30 shadow-lg group-focus-visible:ring-2 group-focus-visible:ring-accent">
          <MoveHorizontal className="w-4 h-4 text-white" />
        </div>
      </motion.div>

      <span className="pointer-events-none absolute bottom-3 left-3 text-[10px] uppercase tracking-widest text-white/80 glass px-2 py-1 rounded-full">
        Antes
      </span>
      <span className="pointer-events-none absolute bottom-3 right-3 text-[10px] uppercase tracking-widest text-white/80 glass px-2 py-1 rounded-full">
        Superstar
      </span>
    </div>
  )
}

export function AcademiaEstrellas() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const canHover = useHasHover()

  return (
    <section
      id="academia-estrellas"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="inline-block px-6 py-4 md:px-10 md:py-5 glass rounded-full text-3xl md:text-5xl lg:text-6xl font-display tracking-tight leading-none text-white mb-6">
            ACADEMIA DE ESTRELLAS
          </h2>

          <motion.p
            className="text-lg text-white/60 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Más que un cumpleaños, la experiencia de ser verdaderas estrellas por un día
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center mb-20">
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {canHover ? <RevealPortrait /> : <CompareSlider />}

            {canHover && (
              <p className="mt-4 flex items-center justify-center gap-2 text-sm text-white/50">
                <MousePointer2 className="w-4 h-4 text-accent" />
                Pasá el mouse por encima de la foto
              </p>
            )}
          </motion.div>

          <motion.div
            className="lg:col-span-2 text-center lg:text-left"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-bold text-accent uppercase tracking-wider mb-4">
              <Star className="w-4 h-4" />
              Experiencia exclusiva
            </span>
            <h3 className="text-3xl md:text-4xl font-display text-white mb-6">
              El show que la convierte en una verdadera estrella
            </h3>
            <p className="text-white/70 text-[15px] md:text-base leading-relaxed mb-6">
              Durante el festejo, todas las invitadas son protagonistas: ensayan una coreografía,
              aprenden poses de estrella, desfilan por la alfombra roja, firman en el sector de
              autógrafos y participan de una producción de fotos antes de disfrutar de la disco.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
              <span className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-white/80">
                <Calendar className="w-4 h-4 text-accent" />
                Nenas de 6 a 9 años
              </span>
              <span className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-white/80">
                <Users className="w-4 h-4 text-accent" />
                Hasta 20 nenas y 8 adultos
              </span>
            </div>

            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Un grupo reducido para que todas puedan participar y brillar en un ambiente cómodo,
              exclusivo y relajado.
            </p>

            <div className="space-y-3 mb-6 text-left max-w-md mx-auto lg:mx-0">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-accent to-yellow-500 flex items-center justify-center mt-0.5">
                  <Clapperboard className="w-4 h-4 text-white" />
                </div>
                <p className="text-white/70 text-[15px]">
                  Como gran cierre, estrenan su coreografía y después la reviven en pantalla
                  gigante con el video editado del show
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-accent to-yellow-500 flex items-center justify-center mt-0.5">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
                <p className="text-white/70 text-[15px]">
                  La cumpleañera recibe su Diploma de Graduación de la Academia de Estrellas
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h4 className="text-center text-white/50 text-sm uppercase tracking-widest mb-6">
            Momentos de la Academia
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.08 }}
                className="relative aspect-square rounded-xl overflow-hidden glass"
              >
                {photo.src ? (
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    loading="lazy"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-white/30">
                    <ImageIcon className="w-8 h-8" />
                    <span className="text-xs uppercase tracking-wider">Próximamente</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
