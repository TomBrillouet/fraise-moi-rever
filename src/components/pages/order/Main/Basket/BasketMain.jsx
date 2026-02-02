import styled from "styled-components"
import { theme } from "../../../../../theme"

export default function BasketMain() {
  return <BasketMainStyled>Votre commande est vide.</BasketMainStyled>
}

const BasketMainStyled = styled.div`
  background-color: ${theme.colors.background_white};
  font-size: ${theme.fonts.size.P4};
  color: ${theme.colors.greyBlue};
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${theme.shadows.basket};
`
