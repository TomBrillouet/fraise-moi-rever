import styled from "styled-components"
import { theme } from "../../../theme"
import NavBar from "./Navbar/NavBar"
import Main from "./Main/Main"
import { useParams } from "react-router"
import { useState } from "react"
import InfoContext from "../../../context/InfoContext"
export default function OrderPage() {
  const { username } = useParams()
  const [isAdmin, setIsAdmin] = useState(false)
  const infoContextValue = { username, isAdmin, setIsAdmin }

  return (
    <OrderPageStyled>
      <div className="container">
        <InfoContext.Provider value={infoContextValue}>
          <NavBar />
          <Main />
        </InfoContext.Provider>
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
