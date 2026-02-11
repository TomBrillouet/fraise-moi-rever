import { useContext, useState } from "react"
import OrderContext from "../../../../../../../context/OrderContext"
import EditInfoMessage from "./EditInfoMessage.jsx"
import Form from "./Form.jsx"
import SavingMessage from "./SavingMessage.jsx"
import { useSuccessMessage } from "../../../../../../../hooks/useSuccessMessage.jsx"

export default function EditForm() {
  //state
  const {
    username,
    productSelected,
    setProductSelected,
    handleEdit,
    titleEditRef,
  } = useContext(OrderContext)

  const [valueOnFocus, setValueOnFocus] = useState()
  const { isSubmitted: isSaved, displaySuccessMessage } = useSuccessMessage()

  //comportements
  const handleChange = (e) => {
    const { name, value } = e.target
    const productBeingUpdated = {
      ...productSelected,
      [name]: value,
    }
    setProductSelected(productBeingUpdated)
    handleEdit(productBeingUpdated, username)
  }

  const handleOnFocus = (e) => {
    const valueOnFocus = e.target.value
    setValueOnFocus(valueOnFocus)
  }

  const handleOnBlur = (e) => {
    const valueOnBlur = e.target.value
    if (valueOnFocus !== valueOnBlur) {
      displaySuccessMessage()
    }
  }

  //affichage
  return (
    <Form
      product={productSelected}
      onChange={handleChange}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      ref={titleEditRef}
    >
      {isSaved ? <SavingMessage /> : <EditInfoMessage />}{" "}
    </Form>
  )
}
