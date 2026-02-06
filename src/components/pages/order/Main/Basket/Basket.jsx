import styled from "styled-components"
import Footer from "./Footer.jsx"
import Total from "./Total.jsx"
import { formatPrice } from "../../../../../utils/maths.jsx"
import { useContext } from "react"
import OrderContext from "../../../../../context/OrderContext.jsx"
import EmptyBasket from "./EmptyBasket.jsx"
import BasketProducts from "./BasketProducts.jsx"
import { theme } from "../../../../../theme/index.js"
import { isEmpty } from "../../../../../utils/array.js"

export default function Basket() {
  const { basket, isAdmin, handleRemoveFromBasket } = useContext(OrderContext)
  const isBasketEmpty = isEmpty(basket)

  const sumToPay = basket.reduce((total, basketProduct) => {
    return total + basketProduct.quantity * basketProduct.price
  }, 0)

  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(sumToPay)} />
      {isBasketEmpty ? (
        <EmptyBasket />
      ) : (
        <BasketProducts
          basket={basket}
          handleRemoveFromBasket={handleRemoveFromBasket}
          isAdmin={isAdmin}
        />
      )}
      <Footer />
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  box-shadow: ${theme.shadows.basket};
`
