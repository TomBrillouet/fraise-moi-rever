import styled from "styled-components"
import { MdModeEditOutline } from "react-icons/md"
import { AiOutlinePlus } from "react-icons/ai"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import Tab from "../../../../reusable/Tab"
import { useContext } from "react"
import OrderContext from "../../../../../context/OrderContext"

export default function AdminTabs() {
  const {
    isAddSelected,
    isCollapsed,
    isEditSelected,
    setIsCollapsed,
    setisAddSelected,
    setisEditSelected,
  } = useContext(OrderContext)

  const selectAddTab = () => {
    setIsCollapsed(false)
    setisEditSelected(false)
    setisAddSelected(true)
  }

  const selectEditTab = () => {
    setIsCollapsed(false)
    setisEditSelected(true)
    setisAddSelected(false)
  }

  return (
    <AdminTabsStyled>
      <Tab
        icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? "is-active" : ""}
      />
      <Tab
        icon={<AiOutlinePlus />}
        label={"Ajouter un produit"}
        onClick={selectAddTab}
        className={isAddSelected ? "is-active" : ""}
      />
      <Tab
        icon={<MdModeEditOutline />}
        label={"Modifier un produit"}
        onClick={selectEditTab}
        className={isEditSelected ? "is-active" : ""}
      />
    </AdminTabsStyled>
  )
}

const AdminTabsStyled = styled.div`
  display: flex;
  padding: 0 20px;

  button {
    margin-left: 1px;
  }
`
