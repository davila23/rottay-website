"use client"

import { HeroBackground } from './HeroBackground'
import { HeroContent } from './HeroContent'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden pt-16">
      <HeroBackground />
      <HeroContent />
    </section>
  )
}