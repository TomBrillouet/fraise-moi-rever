import styled from "styled-components"
import { theme } from "../../theme"

export default function Tab({ label, icon, className }) {
  return (
    <TabStyled className={className}>
      <div className="icon">{icon}</div>
      {label}
    </TabStyled>
  )
}

const TabStyled = styled.button`
  position: relative;
  left: 5%;
  top: 1px;

  padding: 0 22px;
  height: 43px;

  display: flex;
  align-items: center;
  gap: 1em;

  font-size: ${theme.fonts.size.P0};
  color: ${theme.colors.greySemiDark};

  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.subtle};

  border-color: ${theme.colors.greyLight};
  border-style: solid;
  border-width: 1px 1px 2px 1px;
  border-radius: ${theme.borderRadius.round};
  border-bottom-left-radius: 0;
  border-bottom-left-radius: 0;

  cursor: pointer;
  &.active {
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border: ${theme.colors.background_dark} 1px solid;
  }
  &:hover {
    text-decoration: underline;
    border-bottom: 2px solid ${theme.colors.white};
  }
  .icon {
    display: flex;
    svg {
      font-size: ${theme.fonts.size.P0};
    }
  }
`
