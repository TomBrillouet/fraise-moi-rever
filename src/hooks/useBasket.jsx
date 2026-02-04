import { useState } from "react"
import { deepClone, findInArray } from "../utils/array"

export const useBasket = () => {
  const [basket, setbasket] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  const handleAddtoBasket = (newProduct) => {
    const basketCopy = deepClone(basket)
    const existingProduct = findInArray(newProduct.id, basketCopy)

    if (existingProduct) {
      existingProduct.quantity++
    } else {
      basketCopy.unshift({ ...newProduct, quantity: 1 })
    }

    setbasket(basketCopy)

    const newTotal = basketCopy.reduce(
      (acc, o) => acc + o.price * o.quantity,
      0,
    )
    setTotalPrice(newTotal)
  }

  const removeFromCart = (id) => {
    const basketCopy = deepClone(basket)
    const basketUpdated = basketCopy.filter((p) => p.id !== id)
    setbasket(basketUpdated)
    const newTotal = basketUpdated.reduce(
      (acc, o) => acc + o.price * o.quantity,
      0,
    )
    setTotalPrice(newTotal)
  }

  return { basket, handleAddtoBasket, totalPrice, removeFromCart }
}
