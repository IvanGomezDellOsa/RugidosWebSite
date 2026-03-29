# RugidosWebSite — Sitio Web Comercial

Rediseño completo de la plataforma web para **Rugidos Fiestas Tandil**. Sucesor directo de la ([Ver versión anterior](https://github.com/IvanGomezDellOsa/RugidosWebSite-2023-Legacy)), construido desde cero con un stack moderno orientado a performance y experiencia visual.

🌐 **Deploy en producción:** [rugidosfiestas.com.ar](https://rugidosfiestas.com.ar)

---

## 🛠 Stack Tecnológico

| Capa | Tecnología |
|------|------------|
| **Framework** | Next.js (App Router) |
| **Lenguaje** | TypeScript |
| **Estilos** | Tailwind CSS |
| **Animaciones** | Framer Motion |
| **Smooth Scroll** | Lenis |
| **Componentes UI** | shadcn/ui + Radix UI primitives |
| **Iconos** | Lucide React |
| **Analytics** | Vercel Analytics |
| **Deploy** | Vercel |

---

## 🎯 Secciones y Funcionalidades

**Hero**
- Video de fondo con overlay gradient y orbes animados
- Logo con efecto glow cónico animado
- CTA principal de WhatsApp con shine effect
- Scroll indicator animado

**¿Por qué elegirnos?**
- Contadores animados con easing easeOutExpo (18 años, +7500 eventos)
- Cards con efecto tilt 3D interactivo + glare dinámico
- Párrafo largo con reveal por palabras al hacer scroll

**Servicios incluidos y notas importantes**
- Cards destacadas con gradiente animado y fondo parallax
- Grid de servicios con animaciones escalonadas
- Marquee infinito decorativo en el footer de sección

**Nuestro espacio**
- Galería con carrusel de 16 imágenes (3 por slide en desktop)
- Lightbox completo con navegación por teclado y miniaturas
- Grid tipo bento de 16 características del salón

**Servicios adicionales (Extras)**
- 3 cards destacadas de gran tamaño (Rugibot, Fiesta Flúor, Espejo Mágico)
- Grid de 8 extras regulares con acordeón animado
- RugiTattoo Point con opciones colapsables

**Reseñas**
- Resumen de Google Reviews (4.9/5, +192 opiniones)
- Doble marquee infinito bidireccional con pausa on-hover
- Botón de pausa/reanudación manual
- 12 reseñas reales hardcodeadas (sin widget externo)

**Contacto**
- Card de WhatsApp con efecto magnético
- Mini feed de Instagram (6 posts/reels locales)
- Mapa de Google Maps embebido
- Links a Instagram y Facebook

**Navbar y UX global**
- Navbar con glassmorphism al hacer scroll
- Menú mobile con animación slide desde la derecha
- Smooth scroll con Lenis
- Page transition con Framer Motion
- Botón flotante de WhatsApp con aparición por scroll

---

## 🧩 Componentes Custom

- `TiltCard` — tilt 3D con glare dinámico según posición del cursor
- `MagneticButton` — efecto magnético sobre el cursor con spring physics
- `AnimatedCounter` — contador con easing easeOutCubic disparado por IntersectionObserver
- `RevealText` — reveal de palabras individuales al entrar en viewport
- `InfiniteMarquee` — marquee infinito configurable con dirección, velocidad y pausa
- `FloatingShapes` — partículas y formas decorativas con animación continua
- `Parallax` — wrapper de parallax con useScroll de Framer Motion; **desactivado en mobile** para preservar rendimiento
- `SmoothScroll` — wrapper global de Lenis; activo solo en desktop
- `Hero` — renderizado condicional que elimina animaciones de entrada en mobile para minimizar el LCP
- `Instagram Feed` — sistema de fallback que sirve WebP estáticos optimizados en mobile en lugar de video, reduciendo la carga inicial

---

## ⚡ Performance & Optimización de Assets

### Adaptive Rendering (Mobile-First)
Todos los efectos pesados (hooks de Framer Motion, parallax, glassmorphism, tilt 3D) se desactivan condicionalmente en mobile via `matchMedia`, manteniendo 60fps reales durante el scroll.

### LCP Optimization
- **Logo**: Convertido de PNG (127KB) a WebP (7KB) — reducción del 94%
- `fetchpriority="high"` en el asset crítico del Hero
- Animaciones de entrada eliminadas en mobile, bajando el tiempo de renderizado perceptible de ~2.6s a casi inmediato

### GPU Bottleneck Mitigation
`backdrop-filter` desactivado en mobile vía media query global, evitando drops de framerate en iOS/Android de gama media.

### Pipeline de Assets
- **Imágenes**: Procesadas en batch con Node.js + Sharp: de ~16MB a menos de 1.5MB (~90% de reducción)
- **Videos**: Procesados con FFmpeg: compresión, recorte y conversión a `.webp`
- **Widgets**: Feed de Instagram y reseñas de Google reemplazados por contenido local para eliminar dependencias externas y CLS

---

## 🎥 Demo

---

## 📝 Notas de Desarrollo

**Metodología:** Desarrollo asistido por LLMs para acelerar la maquetación en Next.js, generación de componentes, escritura de animaciones y pulido de sintaxis TypeScript. Las decisiones de producto que realmente definen el resultado — arquitectura de componentes, estrategia de rendimiento mobile-first, sustitución de widgets pesados por feeds locales para eliminar CLS, selección de librerías de animación, diseño de la experiencia visual general — fueron orquestadas y definidas por mí a lo largo de todo el ciclo de desarrollo.

---

## 👤 Autor

**Iván Gómez Dell'Osa**

- Email: [ivangomezdellosa@gmail.com](mailto:ivangomezdellosa@gmail.com)
- LinkedIn: [linkedin.com/in/ivangomezdellosa](https://www.linkedin.com/in/ivangomezdellosa/)
- GitHub: [IvanGomezDellOsa](https://github.com/IvanGomezDellOsa)