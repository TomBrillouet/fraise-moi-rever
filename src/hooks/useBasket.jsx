import { useState } from "react"
import { deepClone } from "../utils/array"

export const useBasket = () => {
  const [productsAdded, setProductsAdded] = useState([])

  const handleAddtoBasket = (newProduct) => {
    const productsAddedCopy = deepClone(productsAdded)
    const existingProduct = productsAddedCopy.find(
      (product) => product.id === newProduct.id,
    )

    if (existingProduct) {
      existingProduct.quantity++
      setProductsAdded(productsAddedCopy)
    } else {
      newProduct.quantity = 1
      const productsAddedUpdated = [newProduct, ...productsAddedCopy]
      setProductsAdded(productsAddedUpdated)
    }
  }
  return { productsAdded, handleAddtoBasket }
}
