import styled from "styled-components"

export default function BasketCard({ title, price, quantity, image }) {
  return (
    <BasketCardStyled>
      <img src={image} alt={title} />
      <div>{title}</div>
      <div>{price}</div>
      <div>{quantity}</div>
    </BasketCardStyled>
  )
}

const BasketCardStyled = styled.div`
  display: flex;
  border: 1px solid red;
  background-color: yellow;
  img {
    height: 30px;
    width: 30px;
  }
`
