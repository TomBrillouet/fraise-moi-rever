import { FaReact } from "react-icons/fa"
import styled from "styled-components"
import { theme } from "../../../../../theme"

export default function BasketFooter() {
  return (
    <BasketFooterStyled>
      Codé avec <FaReact /> par Tom Brillouet
    </BasketFooterStyled>
  )
}

const BasketFooterStyled = styled.div`
  background-color: ${theme.colors.background_dark};
  color: ${theme.colors.white};
  text-align: center;
  font-size: ${theme.fonts.size.P2};
  align-content: center;

  svg {
    color: #61dbfb;
  }
`
