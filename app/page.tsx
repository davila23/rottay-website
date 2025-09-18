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
import { ParticleBackground } from '@/components/ui/particles'
import { SmoothReveal } from '@/components/ui/animations'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black relative noise-overlay" role="main" aria-label="Main content">
        <ParticleBackground />
        <DotPattern className="z-0" />
        <AnimatedLines className="z-0" />
        
        <section aria-label="Hero section" className="relative z-10">
          <Hero />
        </section>
        <section aria-label="Products section" className="section-gradient-1 relative z-10">
          <SmoothReveal>
            <Products />
          </SmoothReveal>
        </section>
        <section aria-label="Platform metrics section" className="relative z-10">
          <SmoothReveal delay={0.2}>
            <PlatformMetrics />
          </SmoothReveal>
        </section>
        <section aria-label="Tech stack section" className="section-gradient-2 relative z-10">
          <Parallax>
            <SmoothReveal delay={0.3}>
              <TechStack />
            </SmoothReveal>
          </Parallax>
        </section>
        <section aria-label="Contact section" className="section-gradient-3 relative z-10">
          <SmoothReveal delay={0.4}>
            <ContactForm />
          </SmoothReveal>
        </section>
      </main>
      <Footer />
      <CookieBanner />
      <ToastContainer />
    </>
  )
}