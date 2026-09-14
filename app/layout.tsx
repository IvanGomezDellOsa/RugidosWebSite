import type { Metadata, Viewport } from 'next'
import { Poppins, Bebas_Neue } from 'next/font/google'
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { MailPopover } from '@/components/mail-popover'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins"
});

const bebasNeue = Bebas_Neue({ 
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas"
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rugidosfiestas.com.ar'),
  title: 'Rugidos Fiestas Tandil',
  description: 'Salón de fiestas infantiles en Tandil para cumpleaños de hasta 9 años. Animación, pelotero, disco, fútbol, personajes en vivo, espejo mágico y mucho más. ¡Hacemos de tu evento una verdadera fiesta!',
  keywords: ['fiestas infantiles', 'cumpleaños', 'Tandil', 'salón de fiestas', 'animación infantil', 'pelotero', 'Rugidos Fiestas'],
  authors: [{ name: 'Rugidos Fiestas' }],
  openGraph: {
    title: 'Rugidos Fiestas Tandil',
    description: 'Salón de fiestas infantiles en Tandil. ¡Hacemos de tu evento una verdadera fiesta!',
    type: 'website',
    locale: 'es_AR',
    images: [{ url: '/logo_rugidos.webp', width: 512, height: 512, alt: 'Rugidos Fiestas' }],
  },
}

export const viewport: Viewport = {
  themeColor: '#60047a',
  width: 'device-width',
  initialScale: 1,
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Rugidos Fiestas',
  image: 'https://www.rugidosfiestas.com.ar/logo_rugidos.webp',
  url: 'https://www.rugidosfiestas.com.ar',
  telephone: '+5492494306222',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Dr. Osvaldo Zarini 1538 (Rotonda del lago)',
    addressLocality: 'Tandil',
    addressCountry: 'AR',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '203',
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className={`${poppins.variable} ${bebasNeue.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <MailPopover />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
 