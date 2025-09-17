"use client"

import dynamic from 'next/dynamic'

const FloatingShapes = dynamic(
  () => import('@/components/3d/floating-shapes').then(mod => ({ default: mod.FloatingShapes })),
  {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-black" />
  }
)

export function HeroBackground() {
  return (
    <div className="absolute inset-0">
      {/* 3D Background with subtle floating shapes */}
      <div className="absolute inset-0 w-full h-full opacity-20">
        <FloatingShapes />
      </div>
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 z-[1]" />
    </div>
  )
}