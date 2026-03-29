'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { MapPin, Phone, Instagram, Facebook, ImageIcon, ExternalLink } from 'lucide-react'
import { TiltCard } from '@/components/tilt-card'
import { MagneticButton } from '@/components/magnetic-button'
import { RevealText } from '@/components/reveal-text'

export function Contact() {
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
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Animated gradient background */}
      {isDesktop ? (
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-purple-900"
          style={{ y: backgroundY }}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-purple-900" />
      )}
      
      {/* Animated circles (desktop only) */}
      {isDesktop && (
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 right-20 w-64 h-64 rounded-full border border-white/10"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-48 h-48 rounded-full border border-white/10"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full border border-white/5 -translate-x-1/2 -translate-y-1/2"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      )}

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
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
            <RevealText delay={0.3}>CONTACTO</RevealText>
          </h2>
          
          <motion.p
            className="text-lg text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Escribinos por WhatsApp o visitanos en nuestro salón
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* WhatsApp Card - Main CTA */}
            <MagneticButton strength={0.2} className="w-full">
              <a
                href="https://wa.me/5492494306222?text=%C2%A1Hola!%20Quiero%20consultar%20sobre%20Rugidos%20Fiestas."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 glass-strong rounded-2xl p-6 transition-all hover:bg-white/20 w-full"
              >
                <motion.div
                  className="w-16 h-16 bg-[#25D366] rounded-2xl flex items-center justify-center shadow-lg shadow-[#25D366]/30"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </motion.div>
                <div className="flex-1">
                  <p className="text-white/50 text-sm">WhatsApp</p>
                  <p className="text-white text-2xl font-semibold group-hover:text-accent transition-colors">
                    +54 9 249 430-6222
                  </p>
                </div>
                <ExternalLink className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
              </a>
            </MagneticButton>

            {/* Address Card */}
            <TiltCard>
              <div className="glass-strong rounded-2xl p-6">
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">Dirección</p>
                    <p className="text-white text-xl font-semibold">Dr. Osvaldo Zarini 1538</p>
                    <p className="text-white/70">(Rotonda del lago), Tandil</p>
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-4">
              <MagneticButton strength={0.3} className="w-full">
                <a
                  href="https://www.instagram.com/rugidosfiestas.tandil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] rounded-xl p-4 hover:opacity-90 transition-all w-full group"
                >
                  <Instagram className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  <span className="text-white font-medium">Instagram</span>
                </a>
              </MagneticButton>
              
              <MagneticButton strength={0.3} className="w-full">
                <a
                  href="https://www.facebook.com/rugidosfiestas.tandil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-[#1877F2] rounded-xl p-4 hover:opacity-90 transition-all w-full group"
                >
                  <Facebook className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  <span className="text-white font-medium">Facebook</span>
                </a>
              </MagneticButton>
            </div>

            {/* Integración de Feed de Instagram */}
            <div className="glass-strong rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Instagram className="w-5 h-5" />
                Seguinos en Instagram
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 1, type: 'video', src: '/images/instagram/1_instagram_opt.mp4', link: 'https://www.instagram.com/rugidosfiestas.tandil/reel/DVbAYU5kfQN/' },
                  { id: 2, type: 'image', src: '/images/instagram/2_instagram.webp', link: 'https://www.instagram.com/rugidosfiestas.tandil/p/DK4ZxtrM-3x/' },
                  { id: 3, type: 'image', src: '/images/instagram/3_instagram.webp', link: 'https://www.instagram.com/rugidosfiestas.tandil/reel/DTMIUHyEajp/' },
                  { id: 4, type: 'image', src: '/images/instagram/4_instagram.webp', link: 'https://www.instagram.com/rugidosfiestas.tandil/reel/DGx8CPZpLkQ/' },
                  { id: 5, type: 'image', src: '/images/instagram/5_instagram.webp', link: 'https://www.instagram.com/rugidosfiestas.tandil/reel/DHi27ulRWSV/' },
                  { id: 6, type: 'image', src: '/images/instagram/6_instagram.webp', link: 'https://www.instagram.com/rugidosfiestas.tandil/reel/C4GByzsMf3B/' },
                ].map((item) => (
                  <motion.a
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative aspect-square rounded-lg overflow-hidden bg-white/10 group block"
                    whileHover={{ scale: 1.05, zIndex: 10 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    {item.type === 'video' && isDesktop ? (
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      >
                        <source src={item.src} type="video/mp4" />
                      </video>
                    ) : (
                      <img 
                        src={item.type === 'video' ? '/images/instagram/1_instagram_mobile.webp' : item.src} 
                        alt="Instagram Post" 
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <Instagram className="w-8 h-8 text-white drop-shadow-md" />
                    </div>
                  </motion.a>
                ))}
              </div>
              <a
                href="https://www.instagram.com/rugidosfiestas.tandil/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 mt-6 py-3 w-full bg-white/5 hover:bg-white/10 text-white rounded-xl transition-colors font-medium"
              >
                Ver más en @rugidosfiestas.tandil
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <TiltCard className="h-full">
              <div className="glass-strong rounded-2xl p-4 h-full min-h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1885.840690270508!2d-59.13009226601645!3d-37.35213485116404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95911ffb97883791%3A0xe7150ee59058435b!2sRUGIDOS%20FIESTAS!5e0!3m2!1ses-419!2sar!4v1692346324963!5m2!1ses-419!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '1rem', minHeight: '450px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Rugidos Fiestas"
                />
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
