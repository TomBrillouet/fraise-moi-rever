import styled from "styled-components"
import { theme } from "../../../../../theme"

export default function BasketHeader() {
  return (
    <BasketHeaderStyled>
      <div className="total">Total</div>
      <div className="sum">0,00€</div>
    </BasketHeaderStyled>
  )
}

const BasketHeaderStyled = styled.div`
  background-color: ${theme.colors.background_dark};
  color: ${theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  font-size: ${theme.fonts.size.P4};
`
