import styled from "styled-components"
import BasketCard from "./BasketCard"
import { useContext } from "react"
import OrderContext from "../../../../../context/OrderContext"
import { findObjectById } from "../../../../../utils/array"
import { checkIfProductIsClicked } from "../MainRightSide/Catalog/helper"

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
      {basket.map((basketProduct) => (
        <BasketCard
          key={basketProduct.id}
          {...basketProduct}
          onDelete={() => handleOnDelete(basketProduct.id)}
          isAdmin={isAdmin}
          onClick={() => handleClick(basketProduct.id)}
          isSelected={checkIfProductIsClicked(
            basketProduct.id,
            productSelected.id,
          )}
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
