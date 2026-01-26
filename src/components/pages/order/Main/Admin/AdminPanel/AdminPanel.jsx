import styled from "styled-components"
import { theme } from "../../../../../../theme/index.js"
import OrderContext from "../../../../../../context/OrderContext.jsx"
import { useContext } from "react"
import { getTabsConfig, getTabSelected } from "../getTabsConfig.jsx"

export default function AdminPanel() {
  const { currentTabSelected } = useContext(OrderContext)

  const tabs = getTabsConfig()

  const tabSelected = getTabSelected(tabs, currentTabSelected)
  return (
    <AdminPanelStyled>
      {currentTabSelected === tabSelected.index && tabSelected.Content}
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
  height: 250px;
  background: ${theme.colors.white};
  border: solid 1px ${theme.colors.greyLight};
  box-sizing: border-box;
  box-shadow: ${theme.shadows.subtle};
`
