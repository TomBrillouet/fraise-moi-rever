import styled, { css } from "styled-components"
import { theme } from "../../theme"
export default function TextInput({
  value,
  onChange,
  Icon,
  className,
  version = "normal",
  ...extraProps
}) {
  return (
    <TextInputStyled className={className} version={version}>
      <div className="icon">{Icon && Icon}</div>
      <input type="text" value={value} onChange={onChange} {...extraProps} />
    </TextInputStyled>
  )
}

const TextInputStyled = styled.div`
  border-radius: ${theme.borderRadius.round};
  align-items: center;
  display: flex;
  .icon {
    display: flex;
    font-size: ${theme.fonts.size.P0};
    margin: 0 8px 0 10px;
  }
  input {
    width: 100%;
    font-size: ${theme.fonts.size.P0};
    border: none;
    &::placeholder {
      color: ${theme.colors.greyMedium};
    }
    &:focus-visible {
      outline-style: none;
    }
  }
  ${(props) => {
    if (props.version === "normal") return extraStyleNormal
    if (props.version === "minimalist") return extraStyleMinimalist
  }}
`
const extraStyleNormal = css`
  background-color: ${theme.colors.white};
  padding: 18px 28px;
  color: ${theme.colors.greySemiDark};

  input {
    color: ${theme.colors.dark};

    &::placeholder {
      background: ${theme.colors.white};
    }
  }
`

const extraStyleMinimalist = css`
  background-color: ${theme.colors.background_white};
  padding: 8px 16px;
  color: ${theme.colors.greyBlue};

  input {
    background: ${theme.colors.background_white};
    color: ${theme.colors.dark};

    &:focus {
      outline: 0;
    }
  }
`
