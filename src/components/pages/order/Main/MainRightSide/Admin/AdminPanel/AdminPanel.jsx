import styled from "styled-components"
import { theme } from "../../../../../../../theme/index.js"
import OrderContext from "../../../../../../../context/OrderContext.jsx"
import { useContext } from "react"
import { getTabsConfig, getTabSelected } from "../getTabsConfig.jsx"
import { EMPTY_PRODUCT } from "../../../../../../../enums/product.jsx"

export default function AdminPanel() {
  const { currentTabSelected, productSelected } = useContext(OrderContext)

  const hasAlreadyBeenClicked = productSelected !== EMPTY_PRODUCT

  const tabs = getTabsConfig(hasAlreadyBeenClicked)

  const tabSelected = getTabSelected(tabs, currentTabSelected)
  return (
    <AdminPanelStyled>
      {currentTabSelected === tabSelected.index && tabSelected.Content}
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
  height: 240px;
  padding: 30px 5%;
  background: ${theme.colors.white};
  border: solid 1px ${theme.colors.greyLight};
  box-sizing: border-box;
  box-shadow: ${theme.shadows.subtle};
`
