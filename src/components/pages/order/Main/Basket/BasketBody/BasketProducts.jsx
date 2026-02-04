import styled from "styled-components"
import BasketCard from "./BasketCard"
import { formatPrice } from "../../../../../../utils/maths"
import { DEFAULT_IMAGE } from "../../MainRightSide/Catalog/Catalog"
import OrderContext from "../../../../../../context/OrderContext"
import { useContext } from "react"
import { theme } from "../../../../../../theme"

export default function BasketProducts() {
  const { basket, removeFromCart } = useContext(OrderContext)
  const handleDeleteFromCart = (id) => {
    removeFromCart(id)
  }
  return (
    <BasketProductsStyled>
      {basket.map(({ title, imageSource, price, quantity, id }) => (
        <BasketCard
          key={id}
          image={imageSource ? imageSource : DEFAULT_IMAGE}
          title={title}
          price={formatPrice(price)}
          quantity={quantity}
          isHoverable={true}
          onClick={() => handleDeleteFromCart(id)}
        />
      ))}
    </BasketProductsStyled>
  )
}

const BasketProductsStyled = styled.div`
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
