import { Header, Footer } from '@/components/layout'
import { Hero, Products, TechStack } from '@/components/sections'
import { ContactForm } from '@/components/sections/contact/ContactForm'
import { Chatbot } from '@/components/ui/chatbot'
import { CookieBanner } from '@/components/ui/cookie-banner'
import { Parallax } from '@/components/ui/parallax'
import { Reveal } from '@/components/ui/reveal'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black" role="main" aria-label="Main content">
        <section aria-label="Hero section">
          <Hero />
        </section>
        <section aria-label="Products section" className="section-gradient-1">
          <Reveal width="100%">
            <Products />
          </Reveal>
        </section>
        <section aria-label="Tech stack section" className="section-gradient-2">
          <Parallax>
            <TechStack />
          </Parallax>
        </section>
        <section aria-label="Contact section" className="section-gradient-3">
          <ContactForm />
        </section>
      </main>
      <Footer />
      <Chatbot />
      <CookieBanner />
    </>
  )
}