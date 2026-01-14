import styled from "styled-components"
import { theme } from "../../theme"
export default function TextInput({ value, onChange, Icon, ...extraProps }) {
  return (
    <TextInputStyled>
      {Icon && Icon}
      <input type="text" value={value} onChange={onChange} {...extraProps} />
    </TextInputStyled>
  )
}

const TextInputStyled = styled.div`
  margin: 18px 0;
  padding: 18px 24px;
  border-radius: ${theme.borderRadius.round};
  background-color: ${theme.colors.white};
  align-items: center;
  display: flex;
  .icon {
    font-size: ${theme.fonts.size.P0};
    margin-right: 8px;
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
