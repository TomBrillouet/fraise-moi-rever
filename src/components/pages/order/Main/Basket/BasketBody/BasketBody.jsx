import { useContext } from "react"
import { isEmpty } from "../../../../../../utils/array"
import OrderContext from "../../../../../../context/OrderContext"
import EmptyBasket from "./EmptyBasket.jsx"
import BasketProducts from "./BasketProducts.jsx"

export default function BasketBody() {
  const { basket, catalog } = useContext(OrderContext)
  return (
    <>
      {isEmpty(basket) ? (
        <EmptyBasket isLoading={catalog === undefined} />
      ) : (
        <BasketProducts />
      )}
    </>
  )
}
