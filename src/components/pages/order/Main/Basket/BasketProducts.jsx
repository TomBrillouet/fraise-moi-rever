import styled from "styled-components"
import BasketCard from "./BasketCard"
import { useContext } from "react"
import OrderContext from "../../../../../context/OrderContext"
import { findObjectById } from "../../../../../utils/array"
import { checkIfProductIsClicked } from "../MainRightSide/Catalog/helper"
import { DEFAULT_IMAGE } from "../../../../../enums/product"

export default function BasketProducts() {
  const {
    username,
    isAdmin,
    handleRemoveFromBasket,
    basket,
    productSelected,
    catalog,
    handleProductSelected,
  } = useContext(OrderContext)

  const handleOnDelete = (e, id) => {
    e.stopPropagation()
    handleRemoveFromBasket(id, username)
  }

  const handleClick = (idProductClicked) => {
    handleProductSelected(idProductClicked)
  }

  return (
    <BasketProductsStyled>
      {basket.map((basketProduct) => {
        const catalogProduct = findObjectById(basketProduct.id, catalog)
        return (
          <BasketCard
            key={basketProduct.id}
            {...catalogProduct}
            imageSource={
              catalogProduct.imageSource
                ? catalogProduct.imageSource
                : DEFAULT_IMAGE
            }
            quantity={basketProduct.quantity}
            onDelete={(e) => handleOnDelete(e, basketProduct.id)}
            isClickable={isAdmin}
            onClick={() => handleClick(basketProduct.id)}
            isSelected={checkIfProductIsClicked(
              basketProduct.id,
              productSelected.id,
            )}
          />
        )
      })}
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
