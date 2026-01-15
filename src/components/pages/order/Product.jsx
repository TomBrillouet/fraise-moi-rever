import styled from "styled-components"
import { formatPrice } from "../../../utils/maths"
import PrimaryButton from "../../reusable/PrimaryButton.jsx"
import { theme } from "../../../theme/index.js"

export default function Product({ product }) {
  return (
    <ProductStyled key={product.id} className="product">
      <img src={product.imageSource} alt={product.title} />
      <div className="info">
        <div className="title">{product.title}</div>
        <div className="addcart">
          <div className="price">{formatPrice(product.price)}</div>
          <PrimaryButton label={"Ajouter"} />
        </div>
      </div>
    </ProductStyled>
  )
}
const ProductStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 280px;
  width: 200px;
  padding: 50px 20px 10px 20px;
  border-radius: 15px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);

  img {
    object-fit: contain;
    height: 145px;
    width: 200px;
  }
  .title {
    font-family: "Amatic SC", cursive;
    font-size: 36px;
    font-weight: 700;
  }
  .price {
    color: ${theme.colors.primary};
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 5px 5px 5px;
    width: 190px;
    height: 105px;
    justify-content: space-around;
  }
  .addcart {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  button {
    padding: 12px 26px;
    width: unset;
  }
`
