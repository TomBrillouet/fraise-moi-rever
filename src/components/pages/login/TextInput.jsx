import styled from "styled-components"
import { theme } from "../../../theme"
export default function TextInput({ value, onChange, Icon, ...extraProps }) {
  return (
    <TextInputStyled>
      {Icon && Icon}
      <input type="text" value={value} onChange={onChange} {...extraProps} />
    </TextInputStyled>
  )
}

const TextInputStyled = styled.div`
  margin-bottom: 18px;
  padding: 18px 24px;
  border-radius: ${theme.borderRadius.round};
  border: none;
  background-color: ${theme.colors.white};
  text-align: left;
  display: flex;
  .icon {
    color: ${theme.colors.greyDark};
    margin-right: 8px;
  }
  input {
    border: none;
    &::placeholder {
      color: #d3d3d3;
    }
  }
`
