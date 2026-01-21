import styled from "styled-components"
import { theme } from "../../theme"

export default function Tab({ label, icon, className }) {
  return (
    <TabStyled className={className}>
      {icon}
      {label}
    </TabStyled>
  )
}

const TabStyled = styled.button`
  height: 100%;
  display: flex;
  padding: 14px 22px;
  color: ${theme.colors.greySemiDark};
  background-color: ${theme.colors.white};
  border: ${theme.colors.greyLight} solid 1px;
  border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0 0;
  gap: 1em;
  cursor: pointer;
  &.active {
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border: ${theme.colors.background_dark} 1px solid;
  }
  &:hover {
    text-decoration: underline;
  }
  svg {
    font-size: ${theme.fonts.size.P0};
  }
`
