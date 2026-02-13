import styled from "styled-components"
import { theme } from "../../../../../../theme"

export default function BasketHeader({ className, children }) {
  return (
    <BasketHeaderStyled className={className}>{children}</BasketHeaderStyled>
  )
}

const BasketHeaderStyled = styled.div`
  background-color: ${theme.colors.background_dark};
  height: 70px;
  padding: 0 16px;
`
