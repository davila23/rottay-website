"use client"

import { FooterBrand } from './FooterBrand'
import { FooterLinks } from './FooterLinks'
import { FooterBottom } from './FooterBottom'

export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-900" role="contentinfo" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <FooterBrand />
          <FooterLinks />
        </div>
        
        {/* Footer bottom */}
        <FooterBottom />
      </div>
    </footer>
  )
}