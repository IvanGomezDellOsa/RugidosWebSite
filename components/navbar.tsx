'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { MagneticButton } from './magnetic-button'

const navItems = [
  { label: '¿Por qué elegirnos?', href: '#por-que-elegirnos' },
  { label: 'Nuestro espacio', href: '#nuestro-espacio' },
  { label: 'Servicios Adicionales', href: '#extras' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Contacto', href: '#contacto' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-3 glass-strong' 
            : 'py-6 bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="relative z-10 flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <img 
              src="/logo_rugidos.webp"
              alt="Rugidos Fiestas"
              className="h-12 w-12 object-contain hidden md:block"
            />
            <span className="font-display text-2xl tracking-wider text-white hidden sm:block">
              RUGIDOS FIESTAS
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item, index) => (
              <MagneticButton key={item.href} strength={0.2}>
                <motion.a
                  href={item.href}
                  className="relative px-4 py-2 text-sm text-white/70 hover:text-white transition-colors group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-accent to-primary group-hover:w-3/4 transition-all duration-300" />
                </motion.a>
              </MagneticButton>
            ))}
            
            <MagneticButton strength={0.3}>
              <motion.a
                href="https://wa.me/5492494306222"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 px-6 py-2.5 bg-gradient-to-r from-accent to-primary text-white text-sm font-medium rounded-full relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Reservar</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            </MagneticButton>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden relative z-10 p-2 text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            <motion.nav
              className="absolute right-0 top-0 bottom-0 w-80 max-w-full bg-card/95 backdrop-blur-xl p-8 pt-24 flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-4 text-xl text-white/80 hover:text-white border-b border-white/10 transition-colors"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {item.label}
                </motion.a>
              ))}
              
              <motion.a
                href="https://wa.me/5492494306222"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 py-4 px-6 bg-gradient-to-r from-accent to-primary text-white text-center font-medium rounded-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Reservar ahora
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
