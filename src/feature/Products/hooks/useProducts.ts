import React, { useEffect, useState } from 'react'
import { ProductInterface } from '../domain/models'
import { fetchProductByCategory, fetchProducts } from '../service/ProductsApi'

export const useProducts = (category:string) => {
  const [products, setProducts] = useState<ProductInterface[]>([])

  useEffect(() => {
  
          if (category === 'all') {
              fetchProducts().then((data: ProductInterface[]) => setProducts(data)).catch((err: any) => console.error(err))
          }
          else {
              fetchProductByCategory(category).then((data: ProductInterface[]) => {
                  setProducts(data)
              })
          }
      }, [category])

  function handleLoadMoreProducts(products: ProductInterface[]) {
    setProducts((prev: ProductInterface[]) => [...prev, ...products])
  }

  return { products, handleLoadMoreProducts }
}
