import styled from "styled-components"
import { theme } from "../../../../../theme"
import BasketBar from "./BasketBar"
import BasketMain from "./BasketMain.jsx"
import { FaReact } from "react-icons/fa"

export default function Basket() {
  return (
    <BasketStyled>
      <BasketBar className="header">
        <>
          <div className="total">Total</div>
          <div className="sum">0,00€</div>
        </>
      </BasketBar>

      <BasketMain />
      <BasketBar className="footer">
        <>
          Codé avec <FaReact /> par Tom Brillouet
        </>
      </BasketBar>
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${theme.fonts.family.stylish};
`
