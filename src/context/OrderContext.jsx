import { createContext } from "react"

export default createContext({
  isAdmin: false,
  setIsAdmin: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {},

  currentTabSelected: false,
  setCurrentTabSelected: () => {},

  products: [],
  handleAdd: () => {},
  handleDelete: () => {},
  resetMenu: () => {},

  newProduct: [],
  setNewProduct: () => {},

  productSelected: {},
  setProductSelected: () => {},

  handleEdit: () => {},

  selectTab: () => {},

  titleEditRef: {},

  basket: [],
  handleAddtoBasket: () => {},
  handleRemoveFromBasket: () => {},
  handleProductSelected: () => {},
})
