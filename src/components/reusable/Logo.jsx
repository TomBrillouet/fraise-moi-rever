import styled from "styled-components"
import { theme } from "../../theme"

export default function Logo({ className }) {
  const handleClick = () => {
    window.location.reload()
  }

  return (
    <LogoStyled onClick={handleClick} className={className}>
      <p>Crazee</p>
      <img src="/images/F03 logo-orange.png" alt="Logo Crazee Burger" />
      <p>Burger</p>
    </LogoStyled>
  )
}

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
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
    margin: 0 5px;
    object-fit: contain;
    object-position: center;
  }
`
