import { FaReact } from "react-icons/fa"
import { theme } from "../../../../../theme"
import styled from "styled-components"
import Header from "./Header.jsx"
export default function Footer() {
  return (
    <Header>
      <FooterStyled>
        <span>
          Codé avec <FaReact /> par Tom Brillouet
        </span>
      </FooterStyled>
    </Header>
  )
}

const FooterStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: ${theme.fonts.size.P2};
    color: ${theme.colors.white};
    font-family: ${theme.fonts.family.stylish};

    svg {
      color: ${theme.colors.blueReact};
    }
  }
`
