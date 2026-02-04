import styled from "styled-components"
import { theme } from "../../../../../theme"
import Header from "./Header.jsx"
export default function Total({ amountToPay }) {
  return (
    <Header>
      <TotalStyled>
        <span className="total">Total</span>
        <span className="amount">{amountToPay}</span>
      </TotalStyled>
    </Header>
  )
}

const TotalStyled = styled.div`
  color: ${theme.colors.primary};
  justify-content: space-between;
  display: flex;
  align-items: center;
  height: 100%;
  font-size: ${theme.fonts.size.P4};
  font-family: ${theme.fonts.family.stylish};
  font-weight: bold;
`
