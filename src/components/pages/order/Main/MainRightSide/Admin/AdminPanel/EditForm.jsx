import { useContext } from "react"
import OrderContext from "../../../../../../../context/OrderContext"
import EditInfoMessage from "./EditInfoMessage.jsx"
import Form from "./Form.jsx"

export default function EditForm() {
  //state
  const { productSelected, setProductSelected, handleEdit, titleEditRef } =
    useContext(OrderContext)

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
    <Form product={productSelected} onChange={handleChange} ref={titleEditRef}>
      <EditInfoMessage />
    </Form>
  )
}
