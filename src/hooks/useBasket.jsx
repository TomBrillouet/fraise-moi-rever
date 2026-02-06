import { useState } from "react"
import {
  deepClone,
  removeObjectbyId,
  findObjectById,
  findIndexbyId,
} from "../utils/array"
import { fakeBasket } from "../datas/fakeBasket"

export const useBasket = () => {
  const [basket, setbasket] = useState(fakeBasket.EMPTY)

  const handleAddtoBasket = (idProductToAdd) => {
    const basketCopy = deepClone(basket)
    const productAlreadyInBasket = findObjectById(idProductToAdd, basketCopy)
    if (productAlreadyInBasket) {
      incrementProductAlreadyInBasket(idProductToAdd, basketCopy)
      return
    }
    createNewBasketProduct(idProductToAdd, basketCopy, setbasket)
  }

  const incrementProductAlreadyInBasket = (idProductToAdd, basketCopy) => {
    const indexOfBasketProductToIncrement = findIndexbyId(
      idProductToAdd,
      basketCopy,
    )
    basketCopy[indexOfBasketProductToIncrement].quantity++
    setbasket(basketCopy)
  }

  const createNewBasketProduct = (idProductToAdd, basketCopy, setbasket) => {
    //on ajoute juste id et quantité on ne créer pas un objet complet
    const newBasketProduct = { id: idProductToAdd, quantity: 1 }
    const basketUpdated = [newBasketProduct, ...basketCopy]
    setbasket(basketUpdated)
  }

  const handleRemoveFromBasket = (id) => {
    const basketCopy = deepClone(basket)
    const basketUpdated = removeObjectbyId(id, basketCopy)
    setbasket(basketUpdated)
  }

  const handleEditBasket = (productBeingEdited) => {
    const basketCopy = deepClone(basket)
    const basketUpdated = basketCopy.map((product) =>
      product.id === productBeingEdited.id ? productBeingEdited : product,
    )
    setbasket(basketUpdated)
  }

  return { basket, handleAddtoBasket, handleRemoveFromBasket, handleEditBasket }
}
