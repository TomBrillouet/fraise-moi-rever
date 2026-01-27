import styled from "styled-components"
import PrimaryButton from "./PrimaryButton.jsx"
import { theme } from "../../theme/index.js"
import { useContext } from "react"
import ordercontext from "../../context/OrderContext.jsx"
import { TiDelete } from "react-icons/ti"

export default function Card({ title, image, leftDescription, id }) {
  const { isAdmin, handleDelete } = useContext(ordercontext)

  const handleClick = () => {
    handleDelete(id)
  }

  return (
    <CardStyled className="Card">
      {isAdmin && (
        <button
          className="delete"
          onClick={handleClick}
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
          <PrimaryButton label={"Ajouter"} />
        </div>
      </div>
    </CardStyled>
  )
}
const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-around;
  height: 280px;
  width: 200px;
  padding: 20px;
  border-radius: ${theme.borderRadius.extraRound};
  box-shadow: ${theme.shadows.medium};
  background-color: ${theme.colors.white};

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
  button {
    padding: 12px 26px;
    width: unset;
  }
`
