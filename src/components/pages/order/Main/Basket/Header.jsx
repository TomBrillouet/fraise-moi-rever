import styled from "styled-components"
import { theme } from "../../../../../theme"

export default function BasketBar({ className, children }) {
  return <BasketBarStyled className={className}>{children}</BasketBarStyled>
}

const BasketBarStyled = styled.div`
  background-color: ${theme.colors.background_dark};
  height: 70px;
  padding: 0 16px;
`
