import { useState } from "react"
import { deepClone } from "../utils/array"

export const useBasket = () => {
  const [productsAdded, setProductsAdded] = useState([])

  const handleAddtoBasket = (newProduct) => {
    const productsAddedCopy = deepClone(productsAdded)
    const productAddedUpdated = [newProduct, ...productsAddedCopy]
    setProductsAdded(productAddedUpdated)
  }

  return { productsAdded, handleAddtoBasket }
}
