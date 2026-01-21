import styled from "styled-components"
import { theme } from "../../../../../theme"

export default function AdminPanel() {
  return <AdminPanelStyled>AdminPanel</AdminPanelStyled>
}

const AdminPanelStyled = styled.div`
  height: 250px;
  background: ${theme.colors.white};
  border: solid 1px ${theme.colors.greyLight};
  padding: 17px;
  box-sizing: border-box;
  box-shadow: ${theme.shadows.subtle};
`
