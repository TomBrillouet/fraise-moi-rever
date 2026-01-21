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

  const selectTab = (tabSelected) => {
    setIsCollapsed(false)

    if (tabSelected === "add") {
      setisEditSelected(false)
      setisAddSelected(true)
    }

    if (tabSelected === "edit") {
      setisEditSelected(true)
      setisAddSelected(false)
    }
  }

  const tabsConfig = [
    {
      label: "",
      icon: isCollapsed ? <FiChevronUp /> : <FiChevronDown />,
      onClick: () => setIsCollapsed(!isCollapsed),
      className: isCollapsed ? "is-active" : "",
    },
    {
      label: "Ajouter un produit",
      icon: <AiOutlinePlus />,
      onClick: () => selectTab("add"),
      className: isAddSelected ? "is-active" : "",
    },
    {
      label: "Modifier un produit",
      icon: <MdModeEditOutline />,
      onClick: () => selectTab("edit"),
      className: isEditSelected ? "is-active" : "",
    },
  ]

  return (
    <AdminTabsStyled>
      {tabsConfig.map((tab) => {
        return (
          <Tab
            label={tab.label}
            icon={tab.icon}
            onClick={tab.onClick}
            className={tab.className}
          />
        )
      })}
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
