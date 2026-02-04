import styled from "styled-components"
import Footer from "./Footer.jsx"
import Total from "./Total.jsx"
import { formatPrice } from "../../../../../utils/maths.jsx"
import { useContext } from "react"
import OrderContext from "../../../../../context/OrderContext.jsx"
import EmptyBasket from "./BasketBody/EmptyBasket.jsx"
import BasketProducts from "./BasketBody/BasketProducts.jsx"

export default function Basket() {
  const { totalPrice, basket } = useContext(OrderContext)
  const isBasketEmpty = basket.length === 0

  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(totalPrice)} />
      {isBasketEmpty ? <EmptyBasket /> : <BasketProducts basket={basket} />}
      <Footer />
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
`
