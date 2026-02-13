import styled from "styled-components"
import { formatPrice } from "../../../../../../utils/maths.jsx"
import React, { useContext } from "react"
import EmptyCatalogAdmin from "./EmptyCatalogAdmin.jsx"
import EmptyCatalogClient from "./EmptyCatalogClient.jsx"
import OrderContext from "../../../../../../context/OrderContext.jsx"
import Card from "../../../../../reusable/Card.jsx"
import { theme } from "../../../../../../theme/index.js"
import { checkIfProductIsClicked } from "./helper.jsx"
import {
  DEFAULT_IMAGE,
  EMPTY_PRODUCT,
} from "../../../../../../enums/product.jsx"
import { isEmpty } from "../../../../../../utils/array.js"
import Loader from "./Loader.jsx"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { CardAnimations } from "../../../../../../theme/animation.js"

export default function Catalog() {
  const {
    username,
    catalog,
    isAdmin,
    handleDelete,
    resetMenu,
    setProductSelected,
    productSelected,
    titleEditRef,
    currentTabSelected,
    handleAddtoBasket,
    handleRemoveFromBasket,
    handleProductSelected,
  } = useContext(OrderContext)

  const handleClick = (idProductClicked) => {
    handleProductSelected(idProductClicked)
  }

  const handleCardDelete = (e, id) => {
    e.stopPropagation()
    handleDelete(id, username)
    handleRemoveFromBasket(id, username)
    id === productSelected.id &&
      currentTabSelected === "edit" &&
      setProductSelected(EMPTY_PRODUCT)
    currentTabSelected === "edit" &&
      titleEditRef.current &&
      titleEditRef.current.focus()
  }

  const handleAddButton = (e, idProductToAdd) => {
    e.stopPropagation()
    handleAddtoBasket(idProductToAdd, username)
  }

  if (catalog === undefined) return <Loader />

  //render
  if (isEmpty(catalog)) {
    if (isAdmin)
      return <EmptyCatalogAdmin onReset={() => resetMenu(username)} />
    return <EmptyCatalogClient />
  }

  return (
    <TransitionGroup component={CatalogStyled}>
      {catalog.map(({ imageSource, title, price, id }) => {
        const nodeRef = React.createRef()
        return (
          <CSSTransition
            appear
            key={id}
            nodeRef={nodeRef}
            classNames="animate-card"
            timeout={300}
          >
            <Card
              image={imageSource ? imageSource : DEFAULT_IMAGE}
              title={title}
              leftDescription={formatPrice(price)}
              key={id}
              ref={nodeRef}
              id={id}
              hasDeleteButton={isAdmin}
              onDelete={(e) => handleCardDelete(e, id)}
              onAdd={(e) => handleAddButton(e, id)}
              onClick={() => handleClick(id)}
              isHoverable={isAdmin}
              isSelected={checkIfProductIsClicked(id, productSelected.id)}
            />
          </CSSTransition>
        )
      })}
    </TransitionGroup>
  )
}

const CatalogStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: scroll;
  ${CardAnimations}
`
