'use client'

import { motion } from 'framer-motion'
import { Instagram, Facebook, MapPin, Phone } from 'lucide-react'
import { MagneticButton } from '@/components/magnetic-button'

const footerLinks = [
  { label: '¿Por qué elegirnos?', href: '#por-que-elegirnos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nuestro Espacio', href: '#nuestro-espacio' },
  { label: 'Servicios Adicionales', href: '#extras' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Contacto', href: '#contacto' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/logo_rugidos.webp"
                alt="Rugidos Fiestas"
                className="h-16 w-16 object-contain"
              />
              <div>
                <h3 className="text-2xl font-display tracking-wide text-white">RUGIDOS FIESTAS</h3>
                <p className="text-white/50">Tandil</p>
              </div>
            </motion.div>
            
            <motion.p
              className="text-white/60 max-w-md mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Con más de 18 años de experiencia, somos el salón de fiestas infantiles 
              referente en Tandil. ¡Hacemos de tu evento una verdadera fiesta!
            </motion.p>
            
            {/* Social Links */}
            <motion.div
              className="flex gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <MagneticButton strength={0.3}>
                <a
                  href="https://www.instagram.com/rugidosfiestas.tandil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-[#E1306C] transition-colors group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                </a>
              </MagneticButton>
              
              <MagneticButton strength={0.3}>
                <a
                  href="https://www.facebook.com/rugidosfiestas.tandil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-[#1877F2] transition-colors group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                </a>
              </MagneticButton>
              
              <MagneticButton strength={0.3}>
                <a
                  href="https://wa.me/5492494306222"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-[#25D366] transition-colors group"
                  aria-label="WhatsApp"
                >
                  <svg className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Enlaces</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-white/50 hover:text-white transition-colors inline-block relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-white/60">
                  Dr. Osvaldo Zarini 1538<br />
                  (Rotonda del lago), Tandil
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#25D366] flex-shrink-0" />
                <a 
                  href="tel:+5492494306222" 
                  className="text-white/60 hover:text-white transition-colors"
                >
                  +54 9 249 430-6222
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/40 text-sm">
              Tandil, Provincia de Buenos Aires
            </p>
            <p className="text-white/60 text-sm font-medium tracking-wide">
              ¿Buscás una web como esta? <a href="mailto:ivangomezdellosa@gmail.com" className="text-accent hover:text-white transition-all duration-300 border-b border-accent/30 hover:border-white cursor-pointer relative z-30">Contactame: ivangomezdellosa@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
