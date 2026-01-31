import { useContext, useState } from "react"
import OrderContext from "../../../../../../../context/OrderContext.jsx"
import { EMPTY_PRODUCT } from "../../../../../../../enums/product.jsx"
import Form from "./Form.jsx"
import SubmitMessage from "./SubmitMessage.jsx"
import Button from "../../../../../../reusable/Button.jsx"

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

  //render
  return (
    <Form
      product={newProduct}
      onSubmit={handleSubmit}
      onChange={handleChange}
      isSubmitted={isSubmitted}
      children={
        <>
          <Button
            label={"Ajouter un nouveau produit au menu"}
            version={"success"}
          />
          {isSubmitted && <SubmitMessage />}
        </>
      }
    />
  )
}
