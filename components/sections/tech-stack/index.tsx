"use client"

import { TechHeader } from './TechHeader'
import { TechStackSimple } from './TechStackSimple'

export function TechStack() {
  return (
    <section className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TechHeader />
        <TechStackSimple />
        
        {/* Footer note */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-sm">
            Miami Beach, FL • Always exploring new technologies
          </p>
        </div>
      </div>
    </section>
  )
}