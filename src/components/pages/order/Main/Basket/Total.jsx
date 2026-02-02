import styled from "styled-components"
import { theme } from "../../../../../theme"

export default function Total() {
  return (
    <TotalStyled>
      <span className="total">Total</span>
      <span className="sum">0,00€</span>
    </TotalStyled>
  )
}

const TotalStyled = styled.div`
  color: ${theme.colors.primary};
  justify-content: space-between;
  padding: 0 16px;
  display: flex;
  font-size: ${theme.fonts.size.P4};
  flex: 1;
`
