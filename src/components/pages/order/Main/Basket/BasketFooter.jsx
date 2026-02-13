import { FaReact } from "react-icons/fa"
import { theme } from "../../../../../theme/index.js"
import styled from "styled-components"
import BasketHeader from "./BasketHeader/BasketHeader.jsx"
export default function BasketFooter() {
  return (
    <BasketHeader>
      <FooterStyled>
        <span>
          Codé avec <FaReact /> par Tom Brillouet
        </span>
      </FooterStyled>
    </BasketHeader>
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
    font-weight: bold;

    svg {
      color: ${theme.colors.blueReact};
    }
  }
`
