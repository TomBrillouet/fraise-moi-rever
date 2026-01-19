import styled from "styled-components"
import { theme } from "../../../theme"
import NavBar from "./Navbar/NavBar"
import Main from "./Main/Main"
import { useParams } from "react-router"
import UsernameContext from "../../../context/UsernameContext"
export default function OrderPage() {
  const { username } = useParams()

  const usernameContextValue = { username }

  return (
    <OrderPageStyled>
      <div className="container">
        <UsernameContext.Provider value={usernameContextValue}>
          <NavBar />
        </UsernameContext.Provider>
        <Main />
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
