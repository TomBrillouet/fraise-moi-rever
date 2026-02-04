import styled, { css } from "styled-components"
import { theme } from "../../../../../theme"
import { MdDeleteForever } from "react-icons/md"
import { formatPrice } from "../../../../../utils/maths"
import { DEFAULT_IMAGE } from "../../../../../enums/product.jsx"

export default function BasketCard({
  title,
  price,
  quantity,
  imageSource,
  onClick,
  isAdmin,
}) {
  return (
    <BasketCardStyled $isAdmin={isAdmin}>
      <img src={imageSource ? imageSource : DEFAULT_IMAGE} alt={title} />
      <div className="info">
        <div className="left-info">
          <span className="title">{title}</span>
          <span className="price">{formatPrice(price)}</span>
        </div>
        <span className="quantity">X {quantity}</span>
        <button onClick={onClick}>
          <MdDeleteForever />
        </button>
      </div>
    </BasketCardStyled>
  )
}

const BasketCardStyled = styled.div`
  ${({ $isAdmin }) => $isAdmin && hoverableStyle}
  display: flex;
  background-color: ${theme.colors.white};
  padding: 8px 16px;
  border-radius: 5px;
  box-shadow: ${theme.shadows.cardBasket};
  position: relative;

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
      max-width: 119px;

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
    button {
      display: none;
      background-color: ${theme.colors.dark};
      height: 100%;
      width: 61px;
      right: 0;
      position: absolute;
      border-radius: 0 5px 5px 0;
      cursor: pointer;
    }
  }
`

const hoverableStyle = css`
  &:hover {
    .info {
      .quantity {
        display: none;
      }
      button {
        display: block;
        svg {
          color: ${theme.colors.white};
          height: 24px;
          width: 24px;
        }
      }
    }
  }
`
