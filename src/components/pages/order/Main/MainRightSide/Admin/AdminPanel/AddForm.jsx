import { useContext } from "react"
import OrderContext from "../../../../../../../context/OrderContext.jsx"
import { EMPTY_PRODUCT } from "../../../../../../../enums/product.jsx"
import Form from "./Form.jsx"
import SubmitButton from "./SubmitButton.jsx"
import { useSucessMessage } from "../../../../../../../hooks/useSuccessMessage.jsx"

export default function AddForm() {
  //state
  const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext)
  const { isSubmitted, displaySucessMessage } = useSucessMessage()

  //comportements
  const handleSubmit = (e) => {
    e.preventDefault()
    const newProductToAdd = { ...newProduct, id: crypto.randomUUID() }
    handleAdd(newProductToAdd)
    setNewProduct(EMPTY_PRODUCT)
    displaySucessMessage()
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setNewProduct({ ...newProduct, [name]: value })
  }

  //render
  return (
    <Form product={newProduct} onSubmit={handleSubmit} onChange={handleChange}>
      <SubmitButton isSubmitted={isSubmitted} />
    </Form>
  )
}
