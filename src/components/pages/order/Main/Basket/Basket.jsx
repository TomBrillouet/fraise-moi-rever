import styled from "styled-components"
import { theme } from "../../../../../theme"
import BasketBar from "./BasketBar"
import BasketMain from "./BasketMain.jsx"
import Footer from "./Footer.jsx"
import Total from "./Total.jsx"

export default function Basket() {
  return (
    <BasketStyled>
      <BasketBar className="header">
        <Total />
      </BasketBar>

      <BasketMain />
      <BasketBar className="footer">
        <Footer />
      </BasketBar>
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${theme.fonts.family.stylish};
`
