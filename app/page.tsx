"use client"

import { Header, Footer } from '@/components/layout'
import { Hero, Products, TechStack } from '@/components/sections'
import { ContactForm } from '@/components/sections/contact/ContactForm'
import { PlatformMetrics } from '@/components/sections/platform-metrics'
import { CookieBanner } from '@/components/ui/cookie-banner'
import { Parallax } from '@/components/ui/parallax'
import { Reveal } from '@/components/ui/reveal'
import { DotPattern, AnimatedLines } from '@/components/ui/BackgroundPattern'
import { ToastContainer } from '@/components/ui/Toast'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black relative" role="main" aria-label="Main content">
        <DotPattern className="z-0" />
        <AnimatedLines className="z-0" />
        
        <section aria-label="Hero section" className="relative z-10">
          <Hero />
        </section>
        <section aria-label="Products section" className="section-gradient-1 relative z-10">
          <Reveal width="100%">
            <Products />
          </Reveal>
        </section>
        <section aria-label="Platform metrics section" className="relative z-10">
          <PlatformMetrics />
        </section>
        <section aria-label="Tech stack section" className="section-gradient-2 relative z-10">
          <Parallax>
            <TechStack />
          </Parallax>
        </section>
        <section aria-label="Contact section" className="section-gradient-3 relative z-10">
          <ContactForm />
        </section>
      </main>
      <Footer />
      <CookieBanner />
      <ToastContainer />
    </>
  )
}