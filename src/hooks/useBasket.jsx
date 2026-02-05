import { useState } from "react"
import { deepClone, findInArray, findIndex } from "../utils/array"
import { fakeBasket } from "../datas/fakeBasket"

export const useBasket = () => {
  const [basket, setbasket] = useState(fakeBasket.EMPTY)

  const handleAddtoBasket = (productToAdd) => {
    const basketCopy = deepClone(basket)
    const isProductAlreadyInBasket = findInArray(productToAdd.id, basketCopy)

    if (!isProductAlreadyInBasket) {
      createNewProductInBasket(productToAdd, basketCopy, setbasket)
      return
    }

    incrementProductAlreadyInBasket(productToAdd, basketCopy)
  }

  const incrementProductAlreadyInBasket = (productToAdd, basketCopy) => {
    const indexOfBasketProductToIncrement = findIndex(
      productToAdd.id,
      basketCopy,
    )

    basketCopy[indexOfBasketProductToIncrement].quantity++
    setbasket(basketCopy)
  }
  const createNewProductInBasket = (productToAdd, basketCopy, setbasket) => {
    const newBasketProduct = { ...productToAdd, quantity: 1 }
    const basketUpdated = [newBasketProduct, ...basketCopy]
    setbasket(basketUpdated)
  }

  const handleRemoveFromBasket = (id) => {
    const basketCopy = deepClone(basket)
    const basketUpdated = basketCopy.filter((p) => p.id !== id)
    setbasket(basketUpdated)
  }

  return { basket, handleAddtoBasket, handleRemoveFromBasket }
}
