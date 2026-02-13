import styled from "styled-components"
import { theme } from "../../../../../../theme"
import { BASKET_MESSAGE } from "../../../../../../enums/product"

export default function EmptyBasket({ isLoading }) {
  return (
    <EmptyBasketStyled>
      {isLoading ? BASKET_MESSAGE.LOADING : BASKET_MESSAGE.EMPTY}
    </EmptyBasketStyled>
  )
}

const EmptyBasketStyled = styled.span`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  font-size: ${theme.fonts.size.P4};
  color: ${theme.colors.greyBlue};
  font-family: ${theme.fonts.family.stylish};
`
