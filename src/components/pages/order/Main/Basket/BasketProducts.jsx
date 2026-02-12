import styled from "styled-components"
import BasketCard from "./BasketCard"
import React, { useContext } from "react"
import OrderContext from "../../../../../context/OrderContext"
import { findObjectById } from "../../../../../utils/array"
import { checkIfProductIsClicked } from "../MainRightSide/Catalog/helper"
import { DEFAULT_IMAGE } from "../../../../../enums/product"
import { TransitionGroup, CSSTransition } from "react-transition-group"

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
    <TransitionGroup component={BasketProductsStyled}>
      {basket.map((basketProduct) => {
        const catalogProduct = findObjectById(basketProduct.id, catalog)
        const nodeRef = React.createRef()

        return (
          <CSSTransition
            appear={true}
            key={basketProduct.id}
            nodeRef={nodeRef}
            classNames="animate"
            timeout={500}
          >
            <BasketCard
              ref={nodeRef}
              {...catalogProduct}
              imageSource={catalogProduct.imageSource || DEFAULT_IMAGE}
              quantity={basketProduct.quantity}
              onDelete={(e) => handleOnDelete(e, basketProduct.id)}
              isClickable={isAdmin}
              onClick={() => handleClick(basketProduct.id)}
              isSelected={checkIfProductIsClicked(
                basketProduct.id,
                productSelected.id,
              )}
            />
          </CSSTransition>
        )
      })}
    </TransitionGroup>
  )
}

const BasketProductsStyled = styled.div`
  flex: 1;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-color: transparent transparent;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0 20px 16px;
  &:hover {
    scrollbar-color: initial;
  }
  .animate-enter,
  .animate-appear {
    transform: translateX(100px);
    opacity: 0;
  }

  .animate-enter-active,
  .animate-appear-active {
    transform: translateX(0);
    opacity: 1;
    transition: 0.5s;
  }

  .animate-exit {
    transform: translateX(0);
    opacity: 1;
  }

  .animate-exit-active {
    transform: translateX(-100px);
    opacity: 0;
    transition: 0.5s;
  }
`
