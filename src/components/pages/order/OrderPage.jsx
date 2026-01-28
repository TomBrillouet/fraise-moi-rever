import styled from "styled-components"
import { theme } from "../../../theme"
import NavBar from "./Navbar/NavBar"
import Main from "./Main/Main"
import { useState } from "react"
import OrderContext from "../../../context/OrderContext"
import { fakeMenu } from "../../../datas/fakeMenu"
import { EMPTY_PRODUCT } from "./Main/MainRightSide/Admin/AdminPanel/AddForm"
export default function OrderPage() {
  const [isAdmin, setIsAdmin] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [currentTabSelected, setCurrentTabSelected] = useState("add")
  const [products, setProducts] = useState(fakeMenu.LARGE)
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleAdd = (newproduct) => {
    const productsCopy = [...products]
    const productsUpdated = [newproduct, ...productsCopy]
    setProducts(productsUpdated)
    displaySucessMessage()
  }

  const displaySucessMessage = () => {
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
    }, 2000)
  }
  const handleDelete = (idOfProductToDelete) => {
    const productsCopy = [...products]
    const productsUpdated = productsCopy.filter(
      (product) => product.id !== idOfProductToDelete,
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
    isSubmitted,
    newProduct,
    setNewProduct,
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
