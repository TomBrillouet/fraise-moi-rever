import styled from "styled-components"
import { theme } from "../../../../../theme"
import BasketBar from "./BasketBar"
import BasketMain from "./BasketMain.jsx"
import { FaReact } from "react-icons/fa"

export default function Basket() {
  return (
    <BasketStyled>
      <BasketBar
        className="header"
        content={
          <>
            <div className="total">Total</div>
            <div className="sum">0,00€</div>
          </>
        }
      />
      <BasketMain />
      <BasketBar
        className="footer"
        content={
          <>
            Codé avec <FaReact /> par Tom Brillouet
          </>
        }
      />
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  display: grid;
  grid-template-rows: 1fr 10fr 1fr;
  font-family: ${theme.fonts.family.stylish};
`
