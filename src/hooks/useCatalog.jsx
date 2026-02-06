import { useState } from "react"
import { fakeMenu } from "../datas/fakeMenu"
import { deepClone } from "../utils/array"

export const useCatalog = () => {
  const [products, setProducts] = useState(fakeMenu.LARGE)

  const handleAdd = (newproduct) => {
    const productsCopy = deepClone(products)
    const productsUpdated = [newproduct, ...productsCopy]
    setProducts(productsUpdated)
  }

  const handleDelete = (idOfProductToDelete) => {
    const productsCopy = deepClone(products)
    const productsUpdated = productsCopy.removeObjectbyId(
      (product) => product.id !== idOfProductToDelete,
    )
    setProducts(productsUpdated)
  }

  const handleEdit = (productBeingEdited) => {
    const productsCopy = deepClone(products)
    const productsUpdated = productsCopy.map((product) =>
      product.id === productBeingEdited.id ? productBeingEdited : product,
    )
    setProducts(productsUpdated)
  }

  const resetMenu = () => {
    setProducts(fakeMenu.LARGE)
  }

  return {
    products,
    setProducts,
    handleAdd,
    handleDelete,
    handleEdit,
    resetMenu,
  }
}
