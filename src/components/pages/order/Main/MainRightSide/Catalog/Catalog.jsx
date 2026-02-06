import styled from "styled-components"
import { formatPrice } from "../../../../../../utils/maths.jsx"
import { useContext } from "react"
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
import { findObjectById, isEmpty } from "../../../../../../utils/array.js"

export default function Catalog() {
  const {
    products,
    isAdmin,
    handleDelete,
    resetMenu,
    setProductSelected,
    productSelected,
    titleEditRef,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    handleAddtoBasket,
    handleRemoveFromBasket,
    basket,
  } = useContext(OrderContext)

  const handleClick = async (idProductClicked) => {
    if (!isAdmin) return
    await setIsCollapsed(false)
    await setCurrentTabSelected("edit")
    const productClickedOn =
      findObjectById(idProductClicked, basket) ||
      findObjectById(idProductClicked, products)
    await setProductSelected(productClickedOn)
    titleEditRef.current.focus()
  }

  const handleCardDelete = (e, id) => {
    e.stopPropagation()
    handleDelete(id)
    handleRemoveFromBasket(id)
    id === productSelected.id &&
      currentTabSelected === "edit" &&
      setProductSelected(EMPTY_PRODUCT)
    currentTabSelected === "edit" && titleEditRef.current.focus()
  }

  const handleAddButton = (e, idProductToAdd) => {
    e.stopPropagation()
    handleAddtoBasket(idProductToAdd)
  }

  //render
  if (isEmpty(products)) {
    if (isAdmin) return <EmptyCatalogAdmin onReset={resetMenu} />
    return <EmptyCatalogClient />
  }

  return (
    <CatalogStyled>
      {products.map(({ imageSource, title, price, id }) => (
        <Card
          image={imageSource ? imageSource : DEFAULT_IMAGE}
          title={title}
          leftDescription={formatPrice(price)}
          key={id}
          id={id}
          hasDeleteButton={isAdmin}
          onDelete={(e) => handleCardDelete(e, id)}
          onAdd={(e) => handleAddButton(e, id)}
          onClick={() => handleClick(id)}
          isHoverable={isAdmin}
          isSelected={checkIfProductIsClicked(id, productSelected.id)}
        />
      ))}
    </CatalogStyled>
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
`
