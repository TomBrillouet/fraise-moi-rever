import styled from "styled-components"
import { theme } from "../../../../../theme"
import BasketHeader from "./BasketHeader"
import BasketMain from "./BasketMain.jsx"
import BasketFooter from "./BasketFooter.jsx"

export default function Basket() {
  return (
    <BasketStyled>
      <BasketHeader />
      <BasketMain />
      <BasketFooter />
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  display: grid;
  grid-template-rows: 1fr 10fr 1fr;
  font-family: ${theme.fonts.family.stylish};
`
