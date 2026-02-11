import styled from "styled-components"
import { theme } from "../../../theme"

export default function Welcome() {
  return (
    <WelcomeStyled>
      <h1 className="amatic-sc-bold">Bienvenue chez nous ! </h1>
      <br />
      <hr />
      <h2 className="amatic-sc-bold">Connectez vous</h2>
    </WelcomeStyled>
  )
}

const WelcomeStyled = styled.div`
  h1 {
    font-size: ${theme.fonts.size.P5};
    color: ${theme.colors.white};
  }
  hr {
    margin-bottom: ${theme.gridUnit * 5}px;
    border: 1.5px solid ${theme.colors.primary};
  }
  h2 {
    margin: 20px 10px 10px;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P4};
  }
`
