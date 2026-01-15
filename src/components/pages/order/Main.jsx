import styled from "styled-components"
import { theme } from "../../../theme"
import { useState } from "react"
import { fakeMenu2 } from "../../../datas/fakeMenu.js"
import Product from "./Product.jsx"

export default function Main() {
  //state
  const [datas] = useState(fakeMenu2)
  const products = datas.map((product) => <Product product={product} />)

  //render
  return (
    <MainStyled>
      <div className="grid-products">{products}</div>
    </MainStyled>
  )
}

const MainStyled = styled.div`
  background: #f5f5f7;
  flex: 1;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: auto;
  border-radius: 0 0 ${theme.borderRadius.extraRound}
    ${theme.borderRadius.extraRound};

  .grid-products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: auto;
    padding: 50px 0;
    row-gap: 60px;
    justify-items: center;
  }
`
