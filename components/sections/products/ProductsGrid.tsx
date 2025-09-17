"use client"

import { ProductCard } from './ProductCard'
import { productsData } from './productsData'

export function ProductsGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
      {productsData.map((product, index) => (
        <ProductCard
          key={product.name}
          {...product}
          index={index}
        />
      ))}
    </div>
  )
}