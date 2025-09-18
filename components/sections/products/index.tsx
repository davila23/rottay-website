"use client"

import { ProductsHeader } from './ProductsHeader'
import { ProductsGrid } from './ProductsGrid'

export function Products() {
  return (
    <section className="w-full py-32 bg-black">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <ProductsHeader />
        <div className="max-w-7xl mx-auto">
          <ProductsGrid />
        </div>
      </div>
    </section>
  )
}