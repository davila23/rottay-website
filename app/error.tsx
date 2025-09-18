'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertCircle, ArrowLeft } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <AlertCircle className="w-24 h-24 text-red-500 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Something went wrong
          </h1>
          <p className="text-gray-400">
            An unexpected error occurred. Please try again.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-white text-black rounded hover:bg-gray-200 transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-white border border-gray-700 rounded hover:border-gray-500 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go home
          </Link>
        </div>
      </div>
    </div>
  )
}