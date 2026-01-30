import styled from "styled-components"
import { theme } from "../../../theme"
import NavBar from "./Navbar/NavBar"
import Main from "./Main/Main"
import { useState } from "react"
import OrderContext from "../../../context/OrderContext"
import { fakeMenu } from "../../../datas/fakeMenu"
import { EMPTY_PRODUCT } from "../../../enums/product"
import { deepClone } from "../../../utils/array"
export default function OrderPage() {
  const [isAdmin, setIsAdmin] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [currentTabSelected, setCurrentTabSelected] = useState("add")
  const [products, setProducts] = useState(fakeMenu.LARGE)
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT)

  const selectTab = (tabSelected) => {
    setIsCollapsed(false)
    setCurrentTabSelected(tabSelected)
  }

  const handleAdd = (newproduct) => {
    const productsCopy = deepClone(products)
    const productsUpdated = [newproduct, ...productsCopy]
    setProducts(productsUpdated)
  }

  const handleDelete = (idOfProductToDelete) => {
    const productsCopy = deepClone(products)
    const productsUpdated = productsCopy.filter(
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

  const OrderContextValue = {
    isAdmin,
    setIsAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    products,
    handleAdd,
    handleDelete,
    resetMenu,
    newProduct,
    setNewProduct,
    productSelected,
    setProductSelected,
    handleEdit,
    selectTab,
  }

  return (
    <OrderPageStyled>
      <div className="container">
        <OrderContext.Provider value={OrderContextValue}>
          <NavBar />
          <Main />
        </OrderContext.Provider>
      </div>
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`
  background: red;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    width: 1400px;
    height: 95vh;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`
