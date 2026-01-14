import styled from "styled-components"
import NavBar from "../../reusable/NavBar"
import Container from "./Container"
import { theme } from "../../../theme"
export default function OrderPage() {
  return (
    <OrderPageStyled>
      <div>
        <NavBar />
        <Container />
      </div>
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`
  background: orange;
  height: 100%;
  width: 100%;
  padding: 19px 0;
  > div:first-child {
    width: 1400px;
    justify-self: center;
    border-radius: ${theme.borderRadius.extraRound};
  }
`
