import { useState } from "react"
import { fakeMenu } from "../datas/fakeMenu"
import { deepClone, removeObjectbyId } from "../utils/array"
import { syncBothCatalogs } from "../api/catalog"

export const useCatalog = () => {
  const [products, setProducts] = useState(fakeMenu.LARGE)

  const handleAdd = (newproduct, username) => {
    const productsCopy = deepClone(products)
    const productsUpdated = [newproduct, ...productsCopy]
    setProducts(productsUpdated)
    syncBothCatalogs(username, productsUpdated)
  }

  const handleDelete = (idOfProductToDelete) => {
    const productsCopy = deepClone(products)
    const productsUpdated = removeObjectbyId(idOfProductToDelete, productsCopy)
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
    const fakeMenuLargeCopy = deepClone(fakeMenu.LARGE)
    setProducts(fakeMenuLargeCopy)
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
