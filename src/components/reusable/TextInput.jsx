import styled from "styled-components"
import { theme } from "../../theme"
export default function TextInput({
  value,
  onChange,
  Icon,
  className,
  ...extraProps
}) {
  return (
    <TextInputStyled className={className}>
      <div className="icon">{Icon && Icon}</div>
      <input type="text" value={value} onChange={onChange} {...extraProps} />
    </TextInputStyled>
  )
}

const TextInputStyled = styled.div`
  padding: 18px 24px;
  border-radius: ${theme.borderRadius.round};
  background-color: ${theme.colors.white};
  align-items: center;
  display: flex;
  .icon {
    display: flex;
    justify-content: center;
    font-size: ${theme.fonts.size.P0};
    margin: 0 8px 0 10px;
    color: ${theme.colors.greySemiDark};
  }
  input {
    width: 100%;
    font-size: ${theme.fonts.size.P0};
    color: ${theme.colors.dark};
    border: none;
    &::placeholder {
      background: ${theme.colors.white};
      color: ${theme.colors.greyMedium};
    }
    &:focus-visible {
      outline-style: none;
    }
  }
`
