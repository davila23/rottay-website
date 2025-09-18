"use client"

import Link from 'next/link'
import { ArrowLeft, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Animation */}
        <div className="mb-8">
          <h1 className="text-[150px] md:text-[200px] font-bold text-white leading-none">
            4<span className="text-gray-700">0</span>4
          </h1>
          <div className="h-1 w-32 bg-white mx-auto mt-4"></div>
        </div>
        
        {/* Message */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>
        
        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-black rounded hover:bg-gray-200 transition-colors"
          >
            <Home className="mr-2 h-4 w-4" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-white border border-gray-700 rounded hover:border-gray-500 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </button>
        </div>
        
        {/* Quick Links */}
        <div className="mt-16">
          <p className="text-gray-500 text-sm mb-4">Or check out:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
              Our Products
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
              Contact Us
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}