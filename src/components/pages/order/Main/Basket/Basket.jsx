import styled from "styled-components"
import BasketBody from "./BasketBody.jsx"
import Footer from "./Footer.jsx"
import Total from "./Total.jsx"
import { formatPrice } from "../../../../../utils/maths.jsx"

export default function Basket() {
  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(0)} />
      <BasketBody />
      <Footer />
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
`
