import { findObjectById } from "../../../../../utils/array"

export const calculateSumToPay = (basket, products) => {
  return basket.reduce((total, basketProduct) => {
    const catalogProduct = findObjectById(basketProduct.id, products)

    return total + basketProduct.quantity * catalogProduct.price
  }, 0)
}
