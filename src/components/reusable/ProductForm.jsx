import { useContext, useState } from "react"
import styled from "styled-components"
import TextInput from "./TextInput"
import PrimaryButton from "./PrimaryButton"
import orderContext from "../../context/OrderContext.jsx"
import { toast } from "react-toastify"

export default function ProductForm() {
  const initialFormValue = {
    name: "",
    link: "",
    price: "",
  }

  const [formValue, setFormValue] = useState(initialFormValue)
  const { products, setProducts } = useContext(orderContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newproduct = {
      title: formValue.name,
      imageSource: formValue.link ? formValue.link : "/images/coming-soon.png",
      price: formValue.price ? formValue.price : 0,
      quantity: 0,
      isAvailable: true,
      isAdvertised: false,
    }

    const productsCopy = [...products]
    productsCopy.push(newproduct)
    setProducts(productsCopy)
    toast.info("Ajouté avec succès !", {
      theme: "dark",
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
    setFormValue(initialFormValue)
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    const formValueCopy = {
      ...formValue,
    }

    formValueCopy[name] = value

    setFormValue(formValueCopy)
  }

  return (
    <ProductFormStyled>
      <div className="img-container">
        {formValue.link ? <img src={formValue.link} /> : "Aucune image"}
      </div>
      <form action="submit" onSubmit={handleSubmit}>
        <div>
          <TextInput
            className={"input"}
            name="name"
            value={formValue.name}
            onChange={handleChange}
            placeholder="Nom du produit (ex: Super Smoothie)"
          />
          <TextInput
            className={"input"}
            value={formValue.link}
            name="link"
            onChange={handleChange}
            placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          />
          <TextInput
            className={"input"}
            value={formValue.price}
            name="price"
            onChange={handleChange}
            placeholder="Prix"
          />
        </div>
        <PrimaryButton
          label={"Ajouter un nouveau produit au menu"}
          className={"add-button"}
        />
      </form>
    </ProductFormStyled>
  )
}

const ProductFormStyled = styled.div`
  display: flex;
  gap: 20px;
  padding: 30px 70px;
  div.img-container {
    width: 20%;
    height: 120px;
    border: 1px solid #e4e5e9;
    color: #a7a8ad;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  form {
    width: 50%;
    div {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 8px;
    }
    .input {
      margin: 0;
      background: #f5f5f7;
      padding: 8px 16px 8px 24px;
      input {
        background: #f5f5f7;
        color: #a7a8ad;
        &::placeholder {
          background: #f5f5f7;
          color: #a7a8ad;
        }
      }
    }
    .add-button {
      background: #60bd4f;
      border-color: #60bd4f;
      width: 45%;
      padding: 10px 30px;
      &:hover {
        background: white;
        color: #60bd4f;
      }
      &:active {
        background: #60bd4f;
        color: white;
      }
    }
  }
`
