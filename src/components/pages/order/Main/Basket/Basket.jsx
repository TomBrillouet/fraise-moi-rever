import styled from "styled-components"
import BasketFooter from "./BasketFooter.jsx"
import Total from "./BasketHeader/Total.jsx"
import { theme } from "../../../../../theme/index.js"
import BasketBody from "./BasketBody/BasketBody.jsx"

export default function Basket() {
  return (
    <BasketStyled>
      <Total />
      <BasketBody />
      <BasketFooter />
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  box-shadow: ${theme.shadows.basket};
`
