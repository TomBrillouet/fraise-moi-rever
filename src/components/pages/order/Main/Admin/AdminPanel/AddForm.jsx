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

export default function AddForm() {
  const initialFormValue = {
    name: "",
    link: "",
    price: "",
  }

  const [formValue, setFormValue] = useState(initialFormValue)
  const [showMessage, setShowMessage] = useState(false)
  const { products, setProducts } = useContext(OrderContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newproduct = {
      id: Date.now(),
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
    setFormValue(initialFormValue)
    setShowMessage(true)

    setTimeout(() => {
      setShowMessage(false)
    }, 2000)
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
    <AddFormStyled>
      <div className="img-container">
        {formValue.link ? <img src={formValue.link} /> : "Aucune image"}
      </div>
      <form action="submit" onSubmit={handleSubmit}>
        <div className="inputs">
          <TextInput
            className={"input"}
            name="name"
            value={formValue.name}
            onChange={handleChange}
            placeholder="Nom du produit (ex: Super Smoothie)"
            Icon={<RiDrinksFill />}
          />
          <TextInput
            className={"input"}
            value={formValue.link}
            name="link"
            onChange={handleChange}
            placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
            Icon={<BsFillCameraFill />}
          />
          <TextInput
            className={"input"}
            value={formValue.price}
            name="price"
            onChange={handleChange}
            placeholder="Prix"
            Icon={<MdOutlineEuro />}
          />
        </div>
        <div className="submission">
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
        </div>
      </form>
    </AddFormStyled>
  )
}

const AddFormStyled = styled.div`
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
    .inputs {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 8px;
    }
    .input {
      margin: 0;
      background: #f5f5f7;
      padding: 8px 16px 8px 24px;
      flex-direction: row;
      gap: 13px;
      color: #a7a8ad;
      input {
        background: #f5f5f7;
        &::placeholder {
          background: #f5f5f7;
          color: #a7a8ad;
        }
      }
    }
    .submission {
      display: flex;
      gap: 5px;
      flex-direction: row;
      align-items: center;
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
      .success {
        color: #60bd4f;
        font-size: 15px;
        align-items: center;
        gap: 5px;
        display: flex;
        .round {
          border: solid #60bd4f 1px;
          height: 18px;
          width: 18px;
          border-radius: ${theme.borderRadius.circle};
          svg {
            font-size: 18px;
          }
        }
      }
    }
  }
`
