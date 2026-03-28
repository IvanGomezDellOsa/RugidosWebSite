# RugidosWebSite — Sitio Web Comercial para Salón de Fiestas Infantiles

Rediseño completo de la plataforma web para **Rugidos Fiestas Tandil**, salón de fiestas infantiles ubicado en Tandil, Buenos Aires. Sucesor directo de la ([Ver versión anterior](https://github.com/IvanGomezDellOsa/RugidosWebSite-2023-Legacy)), construido desde cero con un stack moderno orientado a performance y experiencia visual.

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
- `Parallax` — wrapper de parallax con useScroll de Framer Motion
- `SmoothScroll` — wrapper global de Lenis

---

## 🖼 Optimización de Assets

Todas las imágenes y videos del sitio fueron procesadas con **FFmpeg** para reducir peso sin pérdida visual significativa: conversión a `.webp` para imágenes, compresión y recorte para los clips del Hero y el feed de Instagram simulado.

La integración de feeds externos (Instagram, Google Reviews) fue reemplazada por contenido local y hardcodeado para eliminar dependencias de terceros, mejorar los tiempos de carga y evitar el CLS generado por widgets asíncronos.

---

## 🎥 Demo



---

## 📝 Notas de Desarrollo

**Metodología:** Desarrollo asistido por LLMs para acelerar la maquetación en Next.js, generación de componentes, escritura de animaciones y pulido de sintaxis TypeScript. Las decisiones de producto que realmente definen el resultado — arquitectura de componentes, sustitución de widgets pesados por feeds locales para eliminar CLS, selección de librerías de animación, diseño de la experiencia visual general — fueron orquestadas y definidas por mí a lo largo de todo el ciclo de desarrollo.

---

## 👤 Autor

**Iván Gómez Dell'Osa**

- Email: [ivangomezdellosa@gmail.com](mailto:ivangomezdellosa@gmail.com)
- LinkedIn: [linkedin.com/in/ivangomezdellosa](https://www.linkedin.com/in/ivangomezdellosa/)
- GitHub: [IvanGomezDellOsa](https://github.com/IvanGomezDellOsa)