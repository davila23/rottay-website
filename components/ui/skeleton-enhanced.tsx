"use client"

import { motion } from 'framer-motion'

interface SkeletonProps {
  className?: string
  variant?: 'text' | 'circular' | 'rectangular' | 'card'
}

export function Skeleton({ className = '', variant = 'text' }: SkeletonProps) {
  const baseClasses = 'animate-pulse bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-[length:200%_100%]'
  
  const variantClasses = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
    card: 'rounded-xl'
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{
        animation: 'shimmer 2s infinite linear',
      }}
    />
  )
}

export function ProductSkeleton() {
  return (
    <div className="bg-gray-950 border border-gray-800 rounded-lg p-8">
      <Skeleton className="w-20 h-6 mb-6" />
      <Skeleton variant="rectangular" className="w-16 h-16 mb-6" />
      <Skeleton className="w-3/4 h-8 mb-3" />
      <Skeleton className="w-full h-4 mb-2" />
      <Skeleton className="w-full h-4 mb-2" />
      <Skeleton className="w-2/3 h-4 mb-6" />
      <Skeleton className="w-32 h-10" />
    </div>
  )
}

export function HeroSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto px-4">
        <Skeleton className="w-32 h-8 mx-auto mb-6" />
        <Skeleton className="w-full h-16 mb-4" />
        <Skeleton className="w-3/4 h-12 mx-auto mb-6" />
        <Skeleton className="w-full h-6 mb-2" />
        <Skeleton className="w-5/6 h-6 mx-auto mb-8" />
        <div className="flex gap-4 justify-center">
          <Skeleton className="w-32 h-12" />
          <Skeleton className="w-32 h-12" />
        </div>
      </div>
    </div>
  )
}