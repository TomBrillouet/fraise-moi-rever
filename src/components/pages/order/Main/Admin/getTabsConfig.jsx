import { MdModeEditOutline } from "react-icons/md"
import { AiOutlinePlus } from "react-icons/ai"
import ProductForm from "../../../../reusable/ProductForm"
export const getTabsConfig = () => [
  {
    index: "add",
    label: "Ajouter un produit",
    content: <ProductForm />,
    icon: <AiOutlinePlus />,
  },
  {
    index: "edit",
    label: "Modifier un produit",
    content: "",
    icon: <MdModeEditOutline />,
  },
]

export const getTabSelected = (tabs, currentTabSelected) =>
  tabs.find((tab) => tab.index === currentTabSelected)
