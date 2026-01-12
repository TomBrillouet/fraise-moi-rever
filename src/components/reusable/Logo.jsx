import styled from "styled-components"
import { theme } from "../../theme"

export default function Logo() {
  //state
  //comportenements
  //render

  return (
    <LogoStyled className="amatic-sc-bold">
      <p>Crazee</p>
      <img
        src="/src/assets/images/F03 logo-orange.png"
        alt="Logo Crazee Burger"
      />
      <p>Burger</p>
    </LogoStyled>
  )
}

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  transform: scale(2);
  p {
    color: ${theme.colors.primary_burger};
    display: inline;
    text-align: center;
    font-size: 36px;
    line-height: 1em;
    font-weight: 700;
    letter-spacing: 1.5px;
    font-family: "Amatic SC", cursive;
  }
  img {
    width: 80px;
    height: 60px;
    margin: 0 5px;
    object-fit: contain;
    object-position: center;
  }
`
