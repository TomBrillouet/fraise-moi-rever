import { FaReact } from "react-icons/fa"
import { theme } from "../../../../../theme"
import styled from "styled-components"

export default function Footer() {
  return (
    <FooterStyled>
      <span>
        Codé avec <FaReact /> par Tom Brillouet
      </span>
    </FooterStyled>
  )
}

const FooterStyled = styled.div`
  color: ${theme.colors.white};
  font-size: ${theme.fonts.size.P2};
  flex: 1;
  text-align: center;

  svg {
    color: #61dbfb;
  }
`
