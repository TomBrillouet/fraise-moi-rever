import styled from "styled-components"
import { theme } from "../../../theme"

export default function Main() {
  return (
    <MainStyled>
      <div className="grid-products">
        <div className="product"></div>
        <div className="product"></div>
        <div className="product"></div>
        <div className="product"></div>
        <div className="product"></div>
        <div className="product"></div>
        <div className="product"></div>
        <div className="product"></div>
        <div className="product"></div>
        <div className="product"></div>
        <div className="product"></div>
        <div className="product"></div>
        <div className="product"></div>
        <div className="product"></div>
        <div className="product"></div>
      </div>
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
    background: red;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: auto;
    padding: 50px 0;
    row-gap: 60px;
    justify-items: center;
    .product {
      background: blue;
      height: 330px;
      width: 240px;
    }
  }
`
