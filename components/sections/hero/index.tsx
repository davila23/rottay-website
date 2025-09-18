"use client"

import dynamic from 'next/dynamic'
import { HeroBackground } from './HeroBackground'
import { HeroEnhanced } from './HeroEnhanced'

const Hero3D = dynamic(
  () => import('@/components/3d/hero-3d').then(mod => mod.Hero3D),
  { ssr: false }
)

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden pt-16">
      <Hero3D />
      <HeroBackground />
      <HeroEnhanced />
    </section>
  )
}