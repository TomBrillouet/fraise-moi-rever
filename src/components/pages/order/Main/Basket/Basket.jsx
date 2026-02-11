import styled from "styled-components"
import Footer from "./Footer.jsx"
import Total from "./Total.jsx"
import { useContext } from "react"
import OrderContext from "../../../../../context/OrderContext.jsx"
import EmptyBasket from "./EmptyBasket.jsx"
import BasketProducts from "./BasketProducts.jsx"
import { theme } from "../../../../../theme/index.js"
import { isEmpty } from "../../../../../utils/array.js"

export default function Basket() {
  const { basket, catalog } = useContext(OrderContext)

  return (
    <BasketStyled>
      <Total />
      {isEmpty(basket) ? (
        <EmptyBasket isLoading={catalog === undefined} />
      ) : (
        <BasketProducts />
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
