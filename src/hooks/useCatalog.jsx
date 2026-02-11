import { useState } from "react"
import { fakeMenu } from "../datas/fakeMenu"
import { deepClone, removeObjectbyId } from "../utils/array"
import { syncBothCatalogs } from "../api/catalog"

export const useCatalog = () => {
  const [catalog, setCatalog] = useState()

  const handleAdd = (newproduct, username) => {
    const catalogCopy = deepClone(catalog)
    const catalogUpdated = [newproduct, ...catalogCopy]
    setCatalog(catalogUpdated)
    syncBothCatalogs(username, catalogUpdated)
  }

  const handleDelete = (idOfProductToDelete, username) => {
    const catalogCopy = deepClone(catalog)
    const catalogUpdated = removeObjectbyId(idOfProductToDelete, catalogCopy)
    setCatalog(catalogUpdated)
    syncBothCatalogs(username, catalogUpdated)
  }

  const handleEdit = (productBeingEdited) => {
    const catalogCopy = deepClone(catalog)
    const catalogUpdated = catalogCopy.map((product) =>
      product.id === productBeingEdited.id ? productBeingEdited : product,
    )
    setCatalog(catalogUpdated)
  }

  const resetMenu = (username) => {
    setCatalog(fakeMenu.LARGE)
    syncBothCatalogs(username, fakeMenu.LARGE)
  }

  return {
    catalog,
    setCatalog,
    handleAdd,
    handleDelete,
    handleEdit,
    resetMenu,
  }
}
