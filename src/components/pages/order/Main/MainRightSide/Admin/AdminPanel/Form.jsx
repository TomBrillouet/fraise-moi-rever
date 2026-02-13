import styled from "styled-components"
import TextInput from "../../../../../../reusable/TextInput.jsx"
import ImagePreview from "./ImagePreview.jsx"
import { getInputTextsConfig } from "./inputTextsConfig.jsx"
import React, { Fragment, useRef } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"

const Form = React.forwardRef(
  ({ product, onSubmit, onChange, children, onFocus, onBlur }, ref) => {
    const inputTexts = getInputTextsConfig(product)
    const nodeRef = useRef()
    return (
      <FormStyled action="submit" onSubmit={onSubmit}>
        <TransitionGroup component={Fragment}>
          <CSSTransition
            appear
            nodeRef={nodeRef}
            classNames="animate-image"
            timeout={500}
          >
            <ImagePreview
              ref={nodeRef}
              imageSource={product.imageSource}
              title={product.title}
            />
          </CSSTransition>
        </TransitionGroup>
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

  .animate-image-enter,
  .animate-image-appear {
    opacity: 0;
  }

  .animate-image-enter-active,
  .animate-image-appear-active {
    opacity: 1;
    transition: 0.5s;
  }

  .animate-image-exit {
    transform: translateX(0);
    opacity: 1;
  }

  .animate-image-exit-active {
    opacity: 0;
    transition: 0.5s;
  }

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
