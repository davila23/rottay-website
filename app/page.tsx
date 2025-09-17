import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/sections/hero'
import { TrustedBy } from '@/components/sections/trusted-by'
import { Products } from '@/components/sections/products'
import { Features } from '@/components/sections/features'
import { Metrics } from '@/components/sections/metrics'
import { Solutions } from '@/components/sections/solutions'
import { CTA } from '@/components/sections/cta'
import { CommandPalette } from '@/components/ui/command-palette'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black">
        <Hero />
        <TrustedBy />
        <Products />
        <Solutions />
        <Features />
        <Metrics />
        <CTA />
      </main>
      <Footer />
      <CommandPalette />
    </>
  )
}