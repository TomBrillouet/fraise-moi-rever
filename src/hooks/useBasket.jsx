import { useState } from "react"
import {
  deepClone,
  removeObjectbyId,
  findObjectById,
  findIndexbyId,
} from "../utils/array"
import { setLocalStorage } from "../utils/window.jsx"

export const useBasket = () => {
  const [basket, setBasket] = useState([])

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
    setBasket(basketCopy)
    setLocalStorage(username, basketCopy)
  }

  const createNewBasketProduct = (idProductToAdd, basketCopy, username) => {
    //on ajoute juste id et quantité on ne créer pas un objet complet
    const newBasketProduct = { id: idProductToAdd, quantity: 1 }
    const basketUpdated = [newBasketProduct, ...basketCopy]
    setBasket(basketUpdated)
    setLocalStorage(username, basketUpdated)
  }

  const handleRemoveFromBasket = (id) => {
    const basketUpdated = removeObjectbyId(id, basket)
    setBasket(basketUpdated)
  }

  return { basket, setBasket, handleAddtoBasket, handleRemoveFromBasket }
}
