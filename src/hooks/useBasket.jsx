import { useState } from "react"
import {
  deepClone,
  removeObjectbyId,
  findObjectById,
  findIndexbyId,
} from "../utils/array"
import { fakeBasket } from "../datas/fakeBasket"
import { setLocalStorage } from "../utils/window.jsx"

export const useBasket = () => {
  const [basket, setbasket] = useState(fakeBasket.EMPTY)

  const handleAddtoBasket = (idProductToAdd, username) => {
    const basketCopy = deepClone(basket)
    const productAlreadyInBasket = findObjectById(idProductToAdd, basketCopy)
    if (productAlreadyInBasket) {
      incrementProductAlreadyInBasket(idProductToAdd, basketCopy, username)
      return
    }
    createNewBasketProduct(idProductToAdd, basketCopy, username)
  }

  const incrementProductAlreadyInBasket = (
    idProductToAdd,
    basketCopy,
    username,
  ) => {
    const indexOfBasketProductToIncrement = findIndexbyId(
      idProductToAdd,
      basketCopy,
    )
    basketCopy[indexOfBasketProductToIncrement].quantity++
    setbasket(basketCopy)
    setLocalStorage(username, basketCopy)
  }

  const createNewBasketProduct = (idProductToAdd, basketCopy, username) => {
    //on ajoute juste id et quantité on ne créer pas un objet complet
    const newBasketProduct = { id: idProductToAdd, quantity: 1 }
    const basketUpdated = [newBasketProduct, ...basketCopy]
    setbasket(basketUpdated)
    setLocalStorage(username, basketUpdated)
  }

  const handleRemoveFromBasket = (id) => {
    const basketUpdated = removeObjectbyId(id, basket)
    setbasket(basketUpdated)
  }

  return { basket, handleAddtoBasket, handleRemoveFromBasket }
}
