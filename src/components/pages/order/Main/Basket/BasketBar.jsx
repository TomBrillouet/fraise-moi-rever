import styled from "styled-components"
import { theme } from "../../../../../theme"

export default function BasketBar({ content, className }) {
  return <BasketBarStyled className={className}>{content}</BasketBarStyled>
}

const BasketBarStyled = styled.div`
  background-color: ${theme.colors.background_dark};

  &.header {
    color: ${theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    font-size: ${theme.fonts.size.P4};
  }

  &.footer {
    color: ${theme.colors.white};
    text-align: center;
    font-size: ${theme.fonts.size.P2};
    align-content: center;

    svg {
      color: #61dbfb;
    }
  }
`
