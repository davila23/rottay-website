"use client"

import { ProductCard } from './ProductCard'
import { productsData } from './productsData'

export function ProductsGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
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