import { useContext, useState } from "react"
import styled from "styled-components"
import { RiDrinksFill } from "react-icons/ri"
import { BsFillCameraFill } from "react-icons/bs"
import { MdOutlineEuro } from "react-icons/md"
import { FiCheck } from "react-icons/fi"
import { theme } from "../../../../../../theme"
import TextInput from "../../../../../reusable/TextInput.jsx"
import PrimaryButton from "../../../../../reusable/PrimaryButton.jsx"
import OrderContext from "../../../../../../context/OrderContext.jsx"

const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
}

export default function AddForm() {
  const { showMessage, handleAdd } = useContext(OrderContext)

  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)

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
      <div className="img-container">
        {newProduct.imageSource ? (
          <img src={newProduct.imageSource} alt={newProduct.title} />
        ) : (
          "Aucune image"
        )}
      </div>
      <div className="inputs">
        <TextInput
          className={"input"}
          name="title"
          value={newProduct.title}
          onChange={handleChange}
          placeholder="Nom du produit (ex: Super Smoothie)"
          Icon={<RiDrinksFill />}
        />
        <TextInput
          className={"input"}
          value={newProduct.imageSource}
          name="imageSource"
          onChange={handleChange}
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          Icon={<BsFillCameraFill />}
        />
        <TextInput
          className={"input"}
          value={newProduct.price > 0 ? newProduct.price : ""}
          name="price"
          onChange={handleChange}
          placeholder="Prix"
          Icon={<MdOutlineEuro />}
        />
      </div>
      <PrimaryButton
        label={"Ajouter un nouveau produit au menu"}
        className={"add-button"}
      />
      {showMessage && (
        <div className="success">
          <span className="round">
            <FiCheck />
          </span>
          Ajouté avec succès !
        </div>
      )}
    </AddFormStyled>
  )
}

const AddFormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;
  div.img-container {
    grid-area: 1 / 1 / 4 / 2;
    border: 1px solid #e4e5e9;
    color: #a7a8ad;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
    .inputs {
      grid-area: 1 / 2 / -2 / -1;
      display: grid;
      .input {
        background: #f5f5f7;
        color: #a7a8ad;
        margin: 0;
        padding: 0;
        input {
          background: #f5f5f7;
          &::placeholder {
            background: #f5f5f7;
            color: #a7a8ad;
          }
        }
      }
    }
    .add-button {
      grid-area: 4 / -2 / -1 / -1;
      background: #60bd4f;
      border-color: #60bd4f;
      width: 50%;
      &:hover {
        background: white;
        color: #60bd4f;
      }
      &:active {
        background: #60bd4f;
        color: white;
      }
    }
    .success {
      color: #60bd4f;
      font-size: 15px;
      .round {
        border: solid #60bd4f 1px;
        border-radius: ${theme.borderRadius.circle};
        svg {
          font-size: 18px;
        }
      }
    }
  }
`
