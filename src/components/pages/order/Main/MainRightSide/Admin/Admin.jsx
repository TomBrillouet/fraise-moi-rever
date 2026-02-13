import styled from "styled-components"
import React, { useContext } from "react"
import OrderContext from "../../../../../../context/OrderContext.jsx"
import AdminPanel from "./AdminPanel/AdminPanel.jsx"
import AdminTabs from "./AdminTabs.jsx"

const Admin = React.forwardRef((_, ref) => {
  const { isCollapsed } = useContext(OrderContext)
  return (
    <AdminStyled ref={ref}>
      <AdminTabs />
      {!isCollapsed && <AdminPanel />}
    </AdminStyled>
  )
})
export default Admin
const AdminStyled = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
`
