import { createContext } from "react"

export default createContext({
  username: "",
  isAdmin: false,
  setIsAdmin: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {},

  currentTabSelected: false,
  setCurrentTabSelected: () => {},

  catalog: [],
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
