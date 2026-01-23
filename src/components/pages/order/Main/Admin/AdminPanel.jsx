import styled from "styled-components"
import { theme } from "../../../../../theme"
import OrderContext from "../../../../../context/OrderContext"
import { useContext } from "react"
import { getTabsConfig, getTabSelected } from "./getTabsConfig.jsx"

export default function AdminPanel() {
  const { currentTabSelected } = useContext(OrderContext)

  const tabs = getTabsConfig(currentTabSelected)

  const tabSelected = getTabSelected(tabs, currentTabSelected)
  return (
    <AdminPanelStyled>
      {currentTabSelected === tabSelected.index && tabSelected.content}
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
  height: 250px;
  background: ${theme.colors.white};
  border: solid 1px ${theme.colors.greyLight};
  padding: 17px;
  box-sizing: border-box;
  box-shadow: ${theme.shadows.subtle};
`
