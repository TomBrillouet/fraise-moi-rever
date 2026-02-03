import { useState } from "react"
import { deepClone } from "../utils/array"

export const useBasket = () => {
  const [productsAdded, setProductsAdded] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  const handleAddtoBasket = (newProduct) => {
    const productsAddedCopy = deepClone(productsAdded)
    const existingProduct = productsAddedCopy.find(
      (product) => product.id === newProduct.id,
    )

    if (existingProduct) {
      existingProduct.quantity++
    } else {
      productsAddedCopy.unshift({ ...newProduct, quantity: 1 })
    }

    setProductsAdded(productsAddedCopy)

    const newTotal = productsAddedCopy.reduce(
      (acc, o) => acc + o.price * o.quantity,
      0,
    )
    setTotalPrice(newTotal)
  }

  const removeFromCart = (id) => {
    const productsAddedCopy = deepClone(productsAdded)
    const productsAddedUpdated = productsAddedCopy.filter((p) => p.id !== id)
    setProductsAdded(productsAddedUpdated)
    const newTotal = productsAddedUpdated.reduce(
      (acc, o) => acc + o.price * o.quantity,
      0,
    )
    setTotalPrice(newTotal)
  }

  return { productsAdded, handleAddtoBasket, totalPrice, removeFromCart }
}
