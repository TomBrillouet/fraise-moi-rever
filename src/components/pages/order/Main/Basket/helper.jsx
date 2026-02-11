import { findObjectById } from "../../../../../utils/array"

export const calculateSumToPay = (basket, catalog) => {
  return basket.reduce((total, basketProduct) => {
    const catalogProduct = findObjectById(basketProduct.id, catalog)
    if (isNaN(catalogProduct.price)) return total
    return total + basketProduct.quantity * catalogProduct.price
  }, 0)
}
