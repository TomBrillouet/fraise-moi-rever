import styled from "styled-components"
import { theme } from "../../../../../theme"

export default function BasketMain() {
  return <BasketMainStyled>Votre commande est vide.</BasketMainStyled>
}

const BasketMainStyled = styled.div`
  background-color: ${theme.colors.background_white};
  box-shadow: 0px 0px 20px 0px #00000033 inset;
  font-size: ${theme.fonts.size.P4};
  color: ${theme.colors.greyBlue};
  display: flex;
  justify-content: center;
  align-items: center;
`
