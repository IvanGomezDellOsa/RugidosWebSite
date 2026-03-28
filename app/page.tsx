'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Hero } from '@/components/sections/hero'
import { WhyChooseUs } from '@/components/sections/why-choose-us'
import { ImportantNotes } from '@/components/sections/important-notes'
import { OurSpace } from '@/components/sections/our-space'
import { StatementDivider } from '@/components/sections/statement-divider'
import { Extras } from '@/components/sections/extras'
import { Reviews } from '@/components/sections/reviews'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/sections/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Navbar } from '@/components/navbar'
import { SmoothScroll } from '@/components/smooth-scroll'
import { PageTransition } from '@/components/page-transition'

export default function Home() {
  return (
    <>
      <SmoothScroll>
        <PageTransition>
          <main className="min-h-screen overflow-x-hidden bg-gradient-mesh noise-overlay">
            <Navbar />
            <Hero />
            <WhyChooseUs />
            <ImportantNotes />
            <OurSpace />
            <StatementDivider />
            <Extras />
            <Reviews />
            <Contact />
            <Footer />
            <WhatsAppButton />
          </main>
        </PageTransition>
      </SmoothScroll>
    </>
  )
}
