"use client"

import { ProductsHeader } from './ProductsHeader'
import { ProductsGrid } from './ProductsGrid'

export function Products() {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductsHeader />
        <ProductsGrid />
      </div>
    </section>
  )
}