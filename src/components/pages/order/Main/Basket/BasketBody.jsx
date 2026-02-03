import styled from "styled-components"
import { theme } from "../../../../../theme"

export default function BasketBody() {
  return (
    <BasketBodyStyled>
      <span className="empty-message">Votre commande est vide.</span>
    </BasketBodyStyled>
  )
}

const BasketBodyStyled = styled.div`
  background-color: ${theme.colors.background_white};
  flex: 1;
  box-shadow: ${theme.shadows.basket};
  display: flex;

  .empty-message {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
    font-family: ${theme.fonts.family.stylish};
  }
`
