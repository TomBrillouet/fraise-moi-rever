import { MdModeEditOutline } from "react-icons/md"
import { AiOutlinePlus } from "react-icons/ai"
import AddForm from "./AdminPanel/AddForm"
import EditForm from "./AdminPanel/EditForm"
import HintMessage from "./AdminPanel/HintMessage"
export const getTabsConfig = (hasAlreadyBeenClicked) => [
  {
    index: "add",
    label: "Ajouter un produit",
    Content: <AddForm />,
    Icon: <AiOutlinePlus />,
  },
  {
    index: "edit",
    label: "Modifier un produit",
    Content: hasAlreadyBeenClicked ? <EditForm /> : <HintMessage />,
    Icon: <MdModeEditOutline />,
  },
]

export const getTabSelected = (tabs, currentTabSelected) =>
  tabs.find((tab) => tab.index === currentTabSelected)
