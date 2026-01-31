import { useContext } from "react"
import OrderContext from "../../../../../../../context/OrderContext"
import styled from "styled-components"
import ImagePreview from "./ImagePreview.jsx"
import TextInput from "../../../../../../reusable/TextInput.jsx"
import { getInputTextsConfig } from "./inputTextsConfig.jsx"
import { theme } from "../../../../../../../theme/index.js"

export default function EditForm() {
  //state
  const { productSelected, setProductSelected, handleEdit, titleEditRef } =
    useContext(OrderContext)

  const inputTexts = getInputTextsConfig(productSelected)

  //comportements
  const handleChange = (e) => {
    const { name, value } = e.target
    const productBeingUpdated = {
      ...productSelected,
      [name]: value,
    }
    setProductSelected(productBeingUpdated)
    handleEdit(productBeingUpdated)
  }

  //affichage
  return (
    <EditFormStyled action="submit">
      <ImagePreview
        imageSource={productSelected.imageSource}
        title={productSelected.title}
      />
      <div className="inputs">
        {inputTexts.map((input) => (
          <TextInput
            {...input}
            key={input.id}
            onChange={handleChange}
            version={"minimalist"}
            ref={input.name === "title" ? titleEditRef : null}
          />
        ))}
      </div>
      <div className="submit">
        <span className="sentence">
          Cliquer sur un produit du menu pour le modifier{" "}
          <span className="live-update">en temps réel</span>
        </span>
      </div>
    </EditFormStyled>
  )
}
const EditFormStyled = styled.form`
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

    .sentence {
      color: ${theme.colors.primary};
      font-size: ${theme.fonts.size.P0};
      .live-update {
        text-decoration: underline;
      }
    }
  }
`
