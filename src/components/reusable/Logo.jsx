import styled from "styled-components"
import { theme } from "../../theme"

export default function Logo({ className, onClick }) {
  return (
    <LogoStyled onClick={onClick} className={className}>
      <img src="/images/logo.png" alt="Logo Fraise moi rêver " />
      <p>Fraise moi rêver</p>
    </LogoStyled>
  )
}

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  p {
    color: ${theme.colors.primary};
    display: inline;
    text-align: center;
    font-size: ${theme.fonts.size.P4};
    line-height: 1em;
    font-weight: ${theme.fonts.weights.bold};
    letter-spacing: 1.5px;
    font-family: "Amatic SC", cursive;
  }
  img {
    width: 80px;
    height: 60px;
    object-fit: contain;
    object-position: left;
  }
`
