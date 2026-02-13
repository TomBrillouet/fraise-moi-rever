import styled, { css } from "styled-components"
import { theme } from "../../../../../theme"
import { MdDeleteForever } from "react-icons/md"
import { formatPrice } from "../../../../../utils/maths"
import { DEFAULT_IMAGE } from "../../../../../enums/product.jsx"
import React from "react"
import CasinoEffect from "../../../../reusable/CasinoEffect.jsx"

const BasketCard = React.forwardRef(
  (
    {
      title,
      price,
      quantity,
      imageSource,
      onDelete,
      isClickable,
      onClick,
      isSelected,
      className,
    },
    ref,
  ) => {
    return (
      <BasketCardStyled
        ref={ref}
        $isClickable={isClickable}
        onClick={onClick}
        $isSelected={isSelected}
        className={className}
      >
        <img src={imageSource ? imageSource : DEFAULT_IMAGE} alt={title} />
        <div className="info">
          <div className="left-info">
            <span className="title">{title}</span>
            <span className="price">{formatPrice(price)}</span>
          </div>
          <CasinoEffect count={`X ${quantity}`} className={"quantity"} />
          <button onClick={onDelete}>
            <MdDeleteForever />
          </button>
        </div>
      </BasketCardStyled>
    )
  },
)

export default BasketCard

const BasketCardStyled = styled.div`
  display: flex;
  background-color: ${theme.colors.white};
  padding: 8px 16px;
  border-radius: 5px;
  box-shadow: ${theme.shadows.cardBasket};
  position: relative;

  &:hover {
    .info {
      .quantity {
        display: none;
      }
      button {
        display: block;
        &:hover {
          svg {
            color: ${theme.colors.primary};
          }
        }
        &:active {
          svg {
            color: ${theme.colors.white};
          }
        }
        svg {
          color: ${theme.colors.white};
          height: 24px;
          width: 24px;
        }
      }
    }
  }

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
    user-select: none;

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

  ${({ $isClickable }) => $isClickable && AdminStyle}
  ${({ $isSelected }) => $isSelected && SelectedStyle}
`

const AdminStyle = css`
  &:hover {
    cursor: pointer;
  }
`

const SelectedStyle = css`
  background-color: ${theme.colors.primary};
  .price,
  .quantity {
    color: ${theme.colors.white};
  }
`
