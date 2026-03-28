import type { Metadata, Viewport } from 'next'
import { Poppins, Bebas_Neue } from 'next/font/google'
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
});

const bebasNeue = Bebas_Neue({ 
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas"
});

export const metadata: Metadata = {
  title: 'Rugidos Fiestas Tandil',
  description: 'Salón de fiestas infantiles en Tandil para cumpleaños de hasta 8 años. Animación, pelotero, disco, fútbol, personajes en vivo, espejo mágico y mucho más. ¡Hacemos de tu evento una verdadera fiesta!',
  keywords: ['fiestas infantiles', 'cumpleaños', 'Tandil', 'salón de fiestas', 'animación infantil', 'pelotero', 'Rugidos Fiestas'],
  authors: [{ name: 'Rugidos Fiestas' }],
  openGraph: {
    title: 'Rugidos Fiestas Tandil',
    description: 'Salón de fiestas infantiles en Tandil. ¡Hacemos de tu evento una verdadera fiesta!',
    type: 'website',
    locale: 'es_AR',
  },
}

export const viewport: Viewport = {
  themeColor: '#60047a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
      </head>
      <body className={`${poppins.variable} ${bebasNeue.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
