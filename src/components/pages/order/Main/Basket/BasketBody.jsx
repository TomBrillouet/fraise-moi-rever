import styled from "styled-components"
import { theme } from "../../../../../theme"
import { useState } from "react"
import { fakeBasket } from "../../../../../datas/fakeBasket"
import BasketCard from "./BasketCard"
import { DEFAULT_IMAGE } from "../MainRightSide/Catalog/Catalog"

export default function BasketBody() {
  const [productsAdded] = useState(fakeBasket.SMALL)

  return (
    <BasketBodyStyled>
      {/* <span className="empty-message">Votre commande est vide.</span> */}
      {productsAdded.map(({ title, imageSource, price, quantity }) => (
        <BasketCard
          image={imageSource ? imageSource : DEFAULT_IMAGE}
          title={title}
          price={price}
          quantity={quantity}
        />
      ))}
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
