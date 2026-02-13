import styled from "styled-components"
import Footer from "./Footer.jsx"
import Total from "./Total.jsx"
import { theme } from "../../../../../theme/index.js"
import BasketBody from "./BasketBody/BasketBody.jsx"

export default function Basket() {
  return (
    <BasketStyled>
      <Total />
      <BasketBody />
      <Footer />
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  box-shadow: ${theme.shadows.basket};
`
