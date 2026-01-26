import { createContext } from "react"

export default createContext({
  isAdmin: false,
  setIsAdmin: () => {},
  isCollapsed: false,
  setIsCollapsed: () => {},
  isAddSelected: false,
  setisAddSelected: () => {},
  isEditSelected: false,
  setisEditSelected: () => {},
  currentTabSelected: false,
  setCurrentTabSelected: () => {},
  products: [],
  setProducts: () => {},
  handleAdd: () => {},
  formValue: {},
  setFormValue: () => {},
  showMessage: false,
  setShowMessage: () => {},
})
