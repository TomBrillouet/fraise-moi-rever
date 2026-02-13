import styled, { css } from "styled-components"
import Button from "./Button.jsx"
import { theme } from "../../theme/index.js"
import { TiDelete } from "react-icons/ti"
import React from "react"

const Card = React.forwardRef(
  (
    {
      title,
      image,
      leftDescription,
      hasDeleteButton,
      onDelete,
      onAdd,
      onClick,
      isHoverable,
      isSelected,
    },
    ref,
  ) => {
    return (
      <CardStyled
        ref={ref}
        onClick={onClick}
        $isHoverable={isHoverable}
        $isSelected={isSelected}
      >
        <div className="card">
          {hasDeleteButton && (
            <button
              className="delete"
              onClick={onDelete}
              aria-label="delete-button"
            >
              <TiDelete className="icon" />
            </button>
          )}
          <img src={image} alt={title} />
          <div className="info">
            <span className="title">{title}</span>
            <div className="addcart">
              <span className="left-description">{leftDescription}</span>
              <Button
                className="add-button"
                label={"Ajouter"}
                onClick={onAdd}
              />
            </div>
          </div>
        </div>
      </CardStyled>
    )
  },
)
export default Card
const CardStyled = styled.div`
  ${({ $isHoverable }) => $isHoverable && hoverableStyle}
  border-radius: ${theme.borderRadius.extraRound};
  height: 330px;

  .card {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: space-around;
    height: 330px;
    width: 240px;
    padding: 20px;
    border-radius: ${theme.borderRadius.extraRound};
    box-shadow: ${theme.shadows.medium};
    background-color: ${theme.colors.white};
    user-select: none;

    .delete {
      align-self: flex-end;
      height: 30px;
      position: absolute;
      top: 15px;
      right: 15px;
      z-index: 2;
      padding: 0;
      background: none;
      width: 30px;
      color: ${theme.colors.primary};
      border: none;
      cursor: pointer;

      .icon {
        height: 100%;
        width: 100%;
      }

      &:hover {
        color: ${theme.colors.background_dark};
      }

      &:active {
        color: ${theme.colors.primary};
      }
    }

    img {
      object-fit: contain;
      height: 145px;
      width: 200px;
    }
    .title {
      font-family: "Amatic SC", cursive;
      font-size: ${theme.fonts.size.P4};
      font-weight: ${theme.fonts.weights.bold};
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .left-description {
      color: ${theme.colors.primary};
    }
    .info {
      display: flex;
      flex-direction: column;
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
    .add-button {
      padding: 12px 26px;
      width: unset;
    }
    ${({ $isHoverable, $isSelected }) =>
      $isHoverable && $isSelected && selectedStyle}
  }
`

const hoverableStyle = css`
  &:hover {
    box-shadow: ${theme.shadows.primaryHighlight};
    transition: ease-out 0.4s;
    cursor: pointer;
    transform: scale(1.05);
  }
`

const selectedStyle = css`
  background: ${theme.colors.primary};
  .add-button {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.white};
    transition: all 200ms ease-out;
    &:hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.white};
      transition: all 200ms ease-out;
    }
    &:active {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    }
    &.is-disabled {
      opacity: 50%;
      cursor: not-allowed;
      z-index: 2;
    }
    &.with-focus {
      border: 1px solid ${theme.colors.white};
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    }
    &:hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.white};
    }
    &:active {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    }
  }

  .delete {
    color: ${theme.colors.white};

    &:active {
      color: ${theme.colors.white};
    }
  }

  .left-description {
    color: ${theme.colors.white};
  }
`
