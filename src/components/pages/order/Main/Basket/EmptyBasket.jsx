import styled from "styled-components"
import { theme } from "../../../../../theme"

export default function EmptyBasket() {
  return <EmptyBasketStyled>Votre commande est vide.</EmptyBasketStyled>
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
