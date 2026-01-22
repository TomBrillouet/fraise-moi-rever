import styled from "styled-components"
import PrimaryButton from "./PrimaryButton.jsx"
import { theme } from "../../theme/index.js"

export default function Card({ title, image, leftDescription }) {
  return (
    <CardStyled className="Card">
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
  justify-content: space-around;
  height: 280px;
  width: 200px;
  padding: 50px 20px 10px 20px;
  border-radius: ${theme.borderRadius.extraRound};
  box-shadow: ${theme.shadows.medium};
  background-color: ${theme.colors.white};

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
