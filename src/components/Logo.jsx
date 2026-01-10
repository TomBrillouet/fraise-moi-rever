import styled from "styled-components"
import { theme } from "../theme"

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
  justify-content: center;
  font-size: 110px;
  p {
    color: ${theme.colors.primary_burger};
    margin: 0;
  }
  img {
    width: 200px;
    height: 150px;
  }
`
