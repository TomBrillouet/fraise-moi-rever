import styled from "styled-components"
import { theme } from "../../../theme"
import NavBar from "./Navbar/NavBar"
import Main from "./Main/Main"
import { useState } from "react"
import OrderContext from "../../../context/OrderContext"
import { fakeMenu } from "../../../datas/fakeMenu"
export default function OrderPage() {
  const [isAdmin, setIsAdmin] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isAddSelected, setisAddSelected] = useState(true)
  const [isEditSelected, setisEditSelected] = useState(false)
  const [currentTabSelected, setCurrentTabSelected] = useState("add")
  const [products, setProducts] = useState(fakeMenu.LARGE)

  const [showMessage, setShowMessage] = useState(false)

  const initialFormValue = {
    name: "",
    link: "",
    price: "",
  }
  const [formValue, setFormValue] = useState(initialFormValue)

  const handleAdd = (newproduct) => {
    const productsCopy = [...products]
    const productsUpdated = [newproduct, ...productsCopy]
    setProducts(productsUpdated)
    setFormValue(initialFormValue)
    setShowMessage(true)

    setTimeout(() => {
      setShowMessage(false)
    }, 2000)
  }

  const handleDelete = (id) => {
    const productsCopy = [...products]
    const productFiltered = productsCopy.filter((product) => product.id != id)
    setProducts(productFiltered)
  }

  const handleNewCatalog = (second) => {
    setProducts(fakeMenu.LARGE)
  }

  const OrderContextValue = {
    isAdmin,
    setIsAdmin,
    isCollapsed,
    setIsCollapsed,
    isAddSelected,
    setisAddSelected,
    isEditSelected,
    setisEditSelected,
    currentTabSelected,
    setCurrentTabSelected,
    products,
    handleAdd,
    handleDelete,
    handleNewCatalog,
    formValue,
    setFormValue,
    initialFormValue,
    showMessage,
    setShowMessage,
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
