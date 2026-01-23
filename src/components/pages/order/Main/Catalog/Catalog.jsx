import styled from "styled-components"
import { formatPrice } from "../../../../../utils/maths"
import Card from "../../../../reusable/Card"
import orderContext from "../../../../../context/OrderContext.jsx"
import { useContext } from "react"

export default function Catalog() {
  const { products } = useContext(orderContext)
  const catalog = products.map(({ imageSource, title, price, id }) => (
    <Card
      image={imageSource}
      title={title}
      leftDescription={formatPrice(price)}
      key={id}
    />
  ))

  return (
    <CatalogStyled>
      <div className="catalog">{catalog}</div>
    </CatalogStyled>
  )
}

const CatalogStyled = styled.div`
  position: relative;
  .catalog {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: auto;
    padding: 50px 0;
    row-gap: 60px;
    justify-items: center;
  }
`
