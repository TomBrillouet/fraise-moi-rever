import styled from "styled-components"
import { formatPrice } from "../../../../../utils/maths"
import Card from "../../../../reusable/Card"
import orderContext from "../../../../../context/OrderContext.jsx"
import { useContext } from "react"
import NoProduct from "./NoProduct.jsx"

const DEFAULT_IMAGE = "/images/coming-soon.png"

export default function Catalog() {
  const { products } = useContext(orderContext)

  const catalog = products.map(({ imageSource, title, price, id }) => (
    <Card
      image={imageSource ? imageSource : DEFAULT_IMAGE}
      title={title}
      leftDescription={formatPrice(price)}
      key={id}
      id={id}
    />
  ))

  return (
    <CatalogStyled>
      {catalog.length >= 1 ? (
        <div className="catalog">{catalog}</div>
      ) : (
        <NoProduct />
      )}
    </CatalogStyled>
  )
}

const CatalogStyled = styled.div`
  position: relative;
  height: 100%;
  text-align: center;
  .catalog {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: auto;
    padding: 50px 0;
    row-gap: 60px;
    justify-items: center;
  }
`
