import styled from "styled-components"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import Tab from "../../../../reusable/Tab"
import { useContext } from "react"
import OrderContext from "../../../../../context/OrderContext"
import { getTabsConfig } from "./getTabsConfig"

export default function AdminTabs() {
  const {
    isCollapsed,
    setIsCollapsed,
    setCurrentTabSelected,
    currentTabSelected,
  } = useContext(OrderContext)

  const selectTab = (tabSelected) => {
    setIsCollapsed(false)
    setCurrentTabSelected(tabSelected)
  }

  const tabs = getTabsConfig(currentTabSelected)

  return (
    <AdminTabsStyled>
      <Tab
        icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? "is-active" : ""}
      />
      {tabs.map((tab) => (
        <Tab
          key={tab.label}
          label={tab.label}
          icon={tab.Icon}
          onClick={() => selectTab(tab.index)}
          className={currentTabSelected === tab.index ? "is-active" : ""}
        />
      ))}
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
