"use client"

import { TechHeader } from './TechHeader'
import { TechStackNew } from './TechStackNew'

export function TechStack() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 rounded-full filter blur-[128px]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TechHeader />
        <TechStackNew />
        
        {/* Footer note */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-sm">
            Deployed across 3 continents • 5 availability zones • 99.99% SLA
          </p>
        </div>
      </div>
    </section>
  )
}