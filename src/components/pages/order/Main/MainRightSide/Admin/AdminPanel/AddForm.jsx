import { useContext } from "react"
import styled from "styled-components"
import { RiDrinksFill } from "react-icons/ri"
import { BsFillCameraFill } from "react-icons/bs"
import { MdOutlineEuro } from "react-icons/md"
import { FiCheck } from "react-icons/fi"
import { theme } from "../../../../../../../theme/index.js"
import TextInput from "../../../../../../reusable/TextInput.jsx"
import Button from "../../../../../../reusable/Button.jsx"
import OrderContext from "../../../../../../../context/OrderContext.jsx"
import ImagePreview from "./ImagePreview.jsx"

export const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
}

export default function AddForm() {
  const { isSubmitted, handleAdd, newProduct, setNewProduct } =
    useContext(OrderContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = crypto.randomUUID()
    const newProductToAdd = { ...newProduct, id }
    handleAdd(newProductToAdd)
    setNewProduct(EMPTY_PRODUCT)
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setNewProduct({ ...newProduct, [name]: value })
  }

  return (
    <AddFormStyled action="submit" onSubmit={handleSubmit}>
      <ImagePreview
        imageSource={newProduct.imageSource}
        title={newProduct.title}
      />
      <div className="inputs">
        <TextInput
          name="title"
          value={newProduct.title}
          onChange={handleChange}
          placeholder="Nom du produit (ex: Super Smoothie)"
          Icon={<RiDrinksFill />}
          version={"minimalist"}
        />
        <TextInput
          value={newProduct.imageSource}
          name="imageSource"
          onChange={handleChange}
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          Icon={<BsFillCameraFill />}
          version={"minimalist"}
        />
        <TextInput
          value={newProduct.price > 0 ? newProduct.price : ""}
          name="price"
          onChange={handleChange}
          placeholder="Prix"
          Icon={<MdOutlineEuro />}
          version={"minimalist"}
        />
      </div>
      <div className="submit">
        <Button
          label={"Ajouter un nouveau produit au menu"}
          version={"success"}
        />
        {isSubmitted && (
          <div className="success">
            <FiCheck className="icon" />
            <span className="message">Ajouté avec succès !</span>
          </div>
        )}
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
  .success {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;

    .icon {
      color: ${theme.colors.success};
      margin-left: 10px;
      width: 1em;
      height: 1em;
      border: 1px solid ${theme.colors.success};
      border-radius: 50%;
      vertical-align: middle;
    }

    .message {
      margin-left: 5px;
      color: ${theme.colors.success};
      font-size: ${theme.fonts.size.P0};
    }
  }
`
