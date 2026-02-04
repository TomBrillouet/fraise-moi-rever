import styled from "styled-components"
import BasketCard from "./BasketCard"
import { formatPrice } from "../../../../../../utils/maths"
import { DEFAULT_IMAGE } from "../../MainRightSide/Catalog/Catalog"
import OrderContext from "../../../../../../context/OrderContext"
import { useContext } from "react"

export default function BasketProducts() {
  const { productsAdded, removeFromCart } = useContext(OrderContext)
  const handleDeleteFromCart = (id) => {
    removeFromCart(id)
  }
  return (
    <BasketProductsStyled>
      {productsAdded.map(({ title, imageSource, price, quantity, id }) => (
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
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
