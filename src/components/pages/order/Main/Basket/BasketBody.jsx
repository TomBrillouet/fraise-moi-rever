import styled from "styled-components"
import { theme } from "../../../../../theme"
import { useState } from "react"
import { fakeBasket } from "../../../../../datas/fakeBasket"

export default function BasketBody() {
  const [productsAdded] = useState(fakeBasket.SMALL)

  return (
    <BasketBodyStyled>
      {/* <span className="empty-message">Votre commande est vide.</span> */}
      {productsAdded.map(({ title }) => {
        return <div>{title}</div>
      })}
    </BasketBodyStyled>
  )
}

const BasketBodyStyled = styled.div`
  background-color: ${theme.colors.background_white};
  flex: 1;
  box-shadow: ${theme.shadows.basket};
  display: flex;
  flex-direction: column;

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
