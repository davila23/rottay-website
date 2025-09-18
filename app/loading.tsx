import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header Skeleton */}
      <div className="h-16 border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <Skeleton className="h-8 w-32" />
          <div className="flex gap-4">
            <Skeleton className="h-8 w-20" />
            <Skeleton className="h-8 w-20" />
            <Skeleton className="h-8 w-20" />
          </div>
        </div>
      </div>
      
      {/* Hero Skeleton */}
      <div className="min-h-[600px] flex items-center justify-center px-4">
        <div className="max-w-4xl w-full space-y-4">
          <Skeleton className="h-16 w-3/4 mx-auto" />
          <Skeleton className="h-16 w-2/3 mx-auto" />
          <Skeleton className="h-6 w-1/2 mx-auto" />
          <div className="flex gap-4 justify-center mt-8">
            <Skeleton className="h-12 w-32" />
            <Skeleton className="h-12 w-32" />
          </div>
        </div>
      </div>
      
      {/* Content Skeleton */}
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <Skeleton className="h-64" />
          <Skeleton className="h-64" />
        </div>
      </div>
    </div>
  )
}