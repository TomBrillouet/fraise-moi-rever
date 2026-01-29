import { useContext, useState } from "react"
import styled from "styled-components"
import TextInput from "../../../../../../reusable/TextInput.jsx"
import Button from "../../../../../../reusable/Button.jsx"
import OrderContext from "../../../../../../../context/OrderContext.jsx"
import ImagePreview from "./ImagePreview.jsx"
import SubmitMessage from "./SubmitMessage.jsx"
import { getInputTextsConfig } from "./inputTextsConfig.jsx"

export const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
}

export default function AddForm() {
  //state
  const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext)
  const [isSubmitted, setIsSubmitted] = useState(false)

  //comportements
  const handleSubmit = (e) => {
    e.preventDefault()
    const id = crypto.randomUUID()
    const newProductToAdd = { ...newProduct, id }
    handleAdd(newProductToAdd)
    setNewProduct(EMPTY_PRODUCT)
    displaySucessMessage()
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setNewProduct({ ...newProduct, [name]: value })
  }

  const displaySucessMessage = () => {
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
    }, 2000)
  }

  const inputTexts = getInputTextsConfig(newProduct)

  //render
  return (
    <AddFormStyled action="submit" onSubmit={handleSubmit}>
      <ImagePreview
        imageSource={newProduct.imageSource}
        title={newProduct.title}
      />
      <div className="inputs">
        {inputTexts.map((input) => (
          <TextInput
            {...input}
            key={input.id}
            onChange={handleChange}
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
    </AddFormStyled>
  )
}

const AddFormStyled = styled.form`
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
    }
  }
`
