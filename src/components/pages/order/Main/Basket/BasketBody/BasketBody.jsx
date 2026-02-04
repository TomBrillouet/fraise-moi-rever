import styled from "styled-components"
import { theme } from "../../../../../../theme"
import HintMessage from "./HintMessage"
import BasketProducts from "./BasketProducts"
import OrderContext from "../../../../../../context/OrderContext"
import { useContext } from "react"

export default function BasketBody() {
  const { productsAdded } = useContext(OrderContext)

  return (
    <BasketBodyStyled>
      {productsAdded.length < 1 ? <HintMessage /> : <BasketProducts />}
    </BasketBodyStyled>
  )
}

const BasketBodyStyled = styled.div`
  background-color: ${theme.colors.background_white};
  flex: 1;
  box-shadow: ${theme.shadows.basket};
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 16px;
  overflow-y: auto;
  scrollbar-color: transparent transparent;
  &:hover {
    scrollbar-color: initial;
  }
`
