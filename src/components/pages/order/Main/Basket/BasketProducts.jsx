import styled from "styled-components"
import BasketCard from "./BasketCard"
import { useContext } from "react"
import OrderContext from "../../../../../context/OrderContext"
import { findObjectById } from "../../../../../utils/array"
import { checkIfProductIsClicked } from "../MainRightSide/Catalog/helper"
import { DEFAULT_IMAGE } from "../../../../../enums/product"

export default function BasketProducts() {
  const {
    setIsCollapsed,
    setCurrentTabSelected,
    setProductSelected,
    titleEditRef,
    isAdmin,
    handleRemoveFromBasket,
    basket,
    productSelected,
    products,
  } = useContext(OrderContext)

  const handleOnDelete = (id) => {
    handleRemoveFromBasket(id)
  }

  const handleClick = async (idProductClicked) => {
    if (!isAdmin) return
    await setIsCollapsed(false)
    await setCurrentTabSelected("edit")
    const productClickedOn = findObjectById(idProductClicked, basket)
    await setProductSelected(productClickedOn)
    titleEditRef.current.focus()
  }

  return (
    <BasketProductsStyled>
      {basket.map((basketProduct) => {
        const catalogProduct = findObjectById(basketProduct.id, products)
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
            onDelete={() => handleOnDelete(basketProduct.id)}
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
