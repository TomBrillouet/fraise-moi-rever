import styled from "styled-components"
import { useContext } from "react"
import OrderContext from "../../../../../context/OrderContext"
import AdminPanel from "./AdminPanel/AdminPanel"
import AdminTabs from "./AdminTabs.jsx"

export default function Admin() {
  const { isCollapsed } = useContext(OrderContext)
  return (
    <AdminStyled>
      <AdminTabs />
      {!isCollapsed && <AdminPanel />}
    </AdminStyled>
  )
}

const AdminStyled = styled.div`
  position: sticky;
  bottom: 0;
`
