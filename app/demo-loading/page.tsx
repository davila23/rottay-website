"use client"

import { useState } from 'react'
import { AILoading } from '@/components/ui/ai-loading'
import { Header, Footer } from '@/components/layout'

export default function DemoLoadingPage() {
  const [showLoading, setShowLoading] = useState(false)

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              AI Loading Animation Demo
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience our modern AI-powered loading animation designed for mobile and desktop
            </p>
          </div>

          <div className="flex flex-col items-center gap-8">
            <button
              onClick={() => {
                setShowLoading(true)
                setTimeout(() => setShowLoading(false), 10000) // Show for 10 seconds
              }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105"
            >
              Show AI Loading Animation
            </button>

            <div className="text-center text-gray-500">
              <p className="mb-2">The loading animation will automatically close after 10 seconds</p>
              <p className="text-sm">Best viewed on mobile for the mobile-specific version</p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-8 mt-12 w-full max-w-4xl">
              <div className="bg-gray-950 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Mobile Version</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• Neural network visualization</li>
                  <li>• Orbiting particle system</li>
                  <li>• Dynamic connection lines</li>
                  <li>• Pulse ring effects</li>
                  <li>• Progress indicators</li>
                  <li>• Animated status text</li>
                </ul>
              </div>

              <div className="bg-gray-950 border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Desktop Version</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• DNA helix animation</li>
                  <li>• 3D grid background</li>
                  <li>• Quantum progress bars</li>
                  <li>• System status indicators</li>
                  <li>• Gradient text effects</li>
                  <li>• Advanced particle physics</li>
                </ul>
              </div>
            </div>

            {/* Technical Details */}
            <div className="bg-gray-950 border border-gray-800 rounded-xl p-8 w-full max-w-4xl mt-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Technical Implementation</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-white font-medium mb-2">Animation Engine</h4>
                  <p className="text-gray-500 text-sm">Framer Motion for smooth 60fps animations</p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Responsive Design</h4>
                  <p className="text-gray-500 text-sm">Separate optimized versions for mobile/desktop</p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Performance</h4>
                  <p className="text-gray-500 text-sm">GPU-accelerated transforms, minimal repaints</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showLoading && <AILoading />}
      
      <Footer />
    </div>
  )
}