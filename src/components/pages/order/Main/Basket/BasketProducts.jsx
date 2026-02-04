import styled from "styled-components"
import BasketCard from "./BasketCard"
import OrderContext from "../../../../../context/OrderContext"
import { useContext } from "react"

export default function BasketProducts({ basket }) {
  const { removeFromCart } = useContext(OrderContext)
  const handleDeleteFromCart = (id) => {
    removeFromCart(id)
  }
  return (
    <BasketProductsStyled>
      {basket.map((basketProduct) => (
        <BasketCard
          key={basketProduct.id}
          {...basketProduct}
          onClick={() => handleDeleteFromCart(basketProduct.id)}
          isHoverable={true}
        />
      ))}
    </BasketProductsStyled>
  )
}

const BasketProductsStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  gap: 20px;
  padding: 20px 0 20px 16px;
  scrollbar-color: transparent transparent;
  &:hover {
    scrollbar-color: initial;
  }
`
