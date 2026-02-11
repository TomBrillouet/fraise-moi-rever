import styled from "styled-components"
import TextInput from "../../../../../../reusable/TextInput.jsx"
import ImagePreview from "./ImagePreview.jsx"
import { getInputTextsConfig } from "./inputTextsConfig.jsx"
import React from "react"

const Form = React.forwardRef(
  ({ product, onSubmit, onChange, children, onFocus, onBlur }, ref) => {
    //state
    //comportements

    const inputTexts = getInputTextsConfig(product)

    //render
    return (
      <FormStyled action="submit" onSubmit={onSubmit}>
        <ImagePreview imageSource={product.imageSource} title={product.title} />
        <div className="inputs">
          {inputTexts.map((input) => (
            <TextInput
              {...input}
              key={input.id}
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              version={"minimalist"}
              ref={ref && input.name === "title" ? ref : null}
            />
          ))}
        </div>
        <div className="form-footer">{children}</div>
      </FormStyled>
    )
  },
)
export default Form

const FormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;
  grid-row-gap: 8px;
  grid-column-gap: 20px;

  .inputs {
    grid-area: 1 / 2 / -2 / -1;
    display: grid;
    grid-row-gap: 8px;
  }
  .form-footer {
    grid-area: 4 / -2 / -1 / -1;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;
  }
`
