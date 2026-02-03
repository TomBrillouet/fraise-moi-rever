import styled from "styled-components"
import { theme } from "../../../../../theme"

export default function BasketCard({ title, price, quantity, image }) {
  return (
    <BasketCardStyled>
      <img src={image} alt={title} />
      <div className="info">
        <div className="left-info">
          <span className="title">{title}</span>
          <span className="price">{price}</span>
        </div>
        <span className="quantity">X {quantity}</span>
      </div>
    </BasketCardStyled>
  )
}

const BasketCardStyled = styled.div`
  display: flex;
  background-color: ${theme.colors.white};
  padding: 8px 16px;
  border-radius: 5px;
  box-shadow: -4px 4px 15px 0px #00000033;

  img {
    height: 70px;
    width: 85.8px;
    object-fit: contain;
  }

  .info {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
    color: ${theme.colors.primary};
    flex: 1;
    font-size: 15px;
    .left-info {
      display: flex;
      flex-direction: column;
      gap: 5px;
      max-width: 120px;

      .title {
        font-family: ${theme.fonts.family.stylish};
        font-weight: bold;
        font-size: 24px;
        color: ${theme.colors.dark};
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        height: 32px;
      }
    }
  }
`
