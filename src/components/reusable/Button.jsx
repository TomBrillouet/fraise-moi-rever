import { theme } from "../../theme"
import styled, { css } from "styled-components"

export default function Button({
  label,
  icon,
  className,
  onClick,
  version = "primary",
}) {
  return (
    <ButtonStyled className={className} onClick={onClick} version={version}>
      <span>{label}</span>
      {icon && <div className="icon">{icon}</div>}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  ${({ version }) => extraStyle[version]}
`

const extraStylePrimary = css`
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
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
  &.is-disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .icon {
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const extraStyleSuccess = css`
  cursor: pointer;
  color: ${theme.colors.white};
  background: ${theme.colors.success};
  border: 1px solid ${theme.colors.success};
  border-radius: ${theme.borderRadius.round};
  height: 100%;
  padding: 0 1.5em;
  font-weight: ${theme.fonts.weights.semiBold};
  &:hover {
    background: ${theme.colors.white};
    color: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
  }
  &:active {
    color: ${theme.colors.white};
    background: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
  }
`

const extraStyle = {
  primary: extraStylePrimary,
  success: extraStyleSuccess,
}
