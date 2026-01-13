import { theme } from "../../theme"
import styled from "styled-components"

export default function PrimaryButton({ label, icon }) {
  return (
    <PrimaryButtonStyled>
      <span>{label}</span>
      {icon && icon}
    </PrimaryButtonStyled>
  )
}

const PrimaryButtonStyled = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-weight: ${theme.fonts.weights.bold};
  line-height: 1;
  text-decoration: none;
  white-space: nowrap;
  position: relative;
  align-items: center;
  justify-content: center;
  display: inline-flex;
  width: 100%;
  font-size: ${theme.fonts.P0};
  padding: 18px 24px;
  border-radius: ${theme.borderRadius.round};
  border: 1px solid ${theme.colors.primary};
  &:hover {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    transition: all 200ms ease-out;
    border: 1px solid ${theme.colors.primary};
    cursor: pointer;
  }
  &:active {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
