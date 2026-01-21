import styled from "styled-components"
import { theme } from "../../../../../theme"
import OrderContext from "../../../../../context/OrderContext"
import { useContext } from "react"

export default function AdminPanel() {
  const { isAddSelected, isEditSelected } = useContext(OrderContext)
  return (
    <AdminPanelStyled>
      {isAddSelected && "Ajouter un produit"}
      {isEditSelected && "Modifier un produit"}
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
