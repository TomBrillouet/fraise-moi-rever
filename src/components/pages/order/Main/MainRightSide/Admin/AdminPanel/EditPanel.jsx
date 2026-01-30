import { useContext } from "react"
import OrderContext from "../../../../../../../context/OrderContext"
import EditForm from "./EditForm"
import HintMessage from "./HintMessage.jsx"
import { EMPTY_PRODUCT } from "../../../../../../../enums/product"

export default function EditPanel() {
  const { productSelected } = useContext(OrderContext)
  console.log(productSelected)
  return productSelected === EMPTY_PRODUCT ? <HintMessage /> : <EditForm />
}
