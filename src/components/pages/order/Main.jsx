import styled from "styled-components"
import { theme } from "../../../theme"
import PrimaryButton from "../../reusable/PrimaryButton.jsx"
import { useState } from "react"
import { fakeMenu2 } from "../../../datas/fakeMenu.js"

export default function Main() {
  //state
  const [datas, setDatas] = useState(fakeMenu2)
  const mapped = datas.map((product) => (
    <div key={product.id} className="product">
      <img src={product.imageSource} alt={product.title} />
      <div className="info">
        <div className="title">{product.title}</div>
        <div className="addcart">
          <div className="price">{product.price}</div>
          <PrimaryButton label={"Ajouter"} />
        </div>
      </div>
    </div>
  ))

  //comportements

  //render
  return (
    <MainStyled>
      <div className="grid-products">{mapped}</div>
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
    .product {
      display: flex;
      border: solid black 1px;
      flex-direction: column;
      justify-content: space-around;
      height: 330px;
      width: 240px;
      padding: 50px 20px 10px 20px;
      border-radius: 15px;
      img {
        height: 200px;
        object-fit: contain;
      }
      .title {
        height: 20px;
      }
      .price {
        height: 20px;
      }
      .addcart {
        display: flex;
        justify-content: space-between;
      }
      button {
        padding: 12px 26px;
        width: unset;
      }
    }
  }
`
