import styled from "styled-components"
import TextInput from "../../../../../../reusable/TextInput.jsx"
import Button from "../../../../../../reusable/Button.jsx"
import ImagePreview from "./ImagePreview.jsx"
import SubmitMessage from "./SubmitMessage.jsx"
import { getInputTextsConfig } from "./inputTextsConfig.jsx"

export default function Form({ product, onSubmit, onChange, isSubmitted }) {
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
            version={"minimalist"}
          />
        ))}
      </div>
      <div className="submit">
        <Button
          label={"Ajouter un nouveau produit au menu"}
          version={"success"}
        />
        {isSubmitted && <SubmitMessage />}
      </div>
    </FormStyled>
  )
}

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
  .submit {
    grid-area: 4 / -2 / -1 / -1;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;

    button {
      width: 50%;
      height: 100%;
    }
  }
`
