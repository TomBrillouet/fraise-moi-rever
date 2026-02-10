import styled from "styled-components"
import { theme } from "../../../theme"
import NavBar from "./Navbar/NavBar"
import Main from "./Main/Main"
import { useRef, useState } from "react"
import OrderContext from "../../../context/OrderContext"
import { EMPTY_PRODUCT } from "../../../enums/product"
import { useCatalog } from "../../../hooks/useCatalog"
import { useBasket } from "../../../hooks/useBasket"
import { findObjectById } from "../../../utils/array"
import { useParams } from "react-router"
export default function OrderPage() {
  const [isAdmin, setIsAdmin] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [currentTabSelected, setCurrentTabSelected] = useState("add")
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT)
  const titleEditRef = useRef()
  const { products, handleAdd, handleDelete, handleEdit, resetMenu } =
    useCatalog()
  const { basket, handleAddtoBasket, handleRemoveFromBasket } = useBasket()
  const { username } = useParams()

  const handleProductSelected = async (idProductClicked) => {
    if (!isAdmin) return
    await setIsCollapsed(false)
    await setCurrentTabSelected("edit")
    const productClickedOn = findObjectById(idProductClicked, products)
    await setProductSelected(productClickedOn)
    titleEditRef.current.focus()
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
    titleEditRef,
    basket,
    handleAddtoBasket,
    handleRemoveFromBasket,
    handleProductSelected,
    username,
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
  background: #fe636345;
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
