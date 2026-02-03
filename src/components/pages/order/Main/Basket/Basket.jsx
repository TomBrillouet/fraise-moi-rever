import styled from "styled-components"
import BasketBody from "./BasketBody/BasketBody.jsx"
import Footer from "./Footer.jsx"
import Total from "./Total.jsx"
import { formatPrice } from "../../../../../utils/maths.jsx"
import { useContext } from "react"
import OrderContext from "../../../../../context/OrderContext.jsx"

export default function Basket() {
  const { totalPrice } = useContext(OrderContext)
  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(totalPrice)} />
      <BasketBody />
      <Footer />
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
`
