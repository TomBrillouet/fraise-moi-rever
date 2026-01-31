import styled from "styled-components"
import { formatPrice } from "../../../../../../utils/maths.jsx"
import { useContext } from "react"
import EmptyCatalogAdmin from "./EmptyCatalogAdmin.jsx"
import EmptyCatalogClient from "./EmptyCatalogClient.jsx"
import OrderContext from "../../../../../../context/OrderContext.jsx"
import Card from "../../../../../reusable/Card.jsx"
import { theme } from "../../../../../../theme/index.js"
import { checkIfProductIsClicked } from "./helper.jsx"

const DEFAULT_IMAGE = "/images/coming-soon.png"

export default function Catalog() {
  const {
    products,
    isAdmin,
    handleDelete,
    resetMenu,
    setProductSelected,
    selectTab,
    productSelected,
    titleEditRef,
  } = useContext(OrderContext)

  const handleClick = async (idProductClicked) => {
    if (!isAdmin) return
    selectTab("edit")
    const productClickedOn = products.find(
      (product) => product.id === idProductClicked,
    )
    await setProductSelected(productClickedOn)
    titleEditRef.current.focus()
  }

  //render
  if (products.length === 0) {
    if (isAdmin) return <EmptyCatalogAdmin onReset={resetMenu} />
    return <EmptyCatalogClient />
  }

  const handleCardDelete = (e, id) => {
    e.stopPropagation(id)
    handleDelete(id)
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: scroll;
`
