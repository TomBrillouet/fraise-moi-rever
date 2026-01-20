import { useState } from "react"
import styled from "styled-components"
import { fakeMenu } from "../../../../../datas/fakeMenu"
import { formatPrice } from "../../../../../utils/maths"
import Card from "../../../../reusable/Card"
import AdminPanel from "../../AdminPanel"

export default function Catalog() {
  const [products, setProducts] = useState(fakeMenu)
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
      <AdminPanel />
    </CatalogStyled>
  )
}

const CatalogStyled = styled.div`
  position: relative;
  .catalog {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: auto;
    padding: 50px 0;
    row-gap: 60px;
    justify-items: center;
  }
`
