import { useState } from "react"
import styled from "styled-components"
import { fakeMenu2 } from "../../../../../datas/fakeMenu"
import Product from "../../Product"

export default function Catalog() {
  const [datas] = useState(fakeMenu2)
  const products = datas.map((product) => <Product product={product} />)

  return <CatalogStyled className="catalog">{products}</CatalogStyled>
}

const CatalogStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  padding: 50px 0;
  row-gap: 60px;
  justify-items: center;
`
