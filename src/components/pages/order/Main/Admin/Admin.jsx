import styled from "styled-components"
import AdminTabs from "./AdminTabs"
import AdminPanel from "./AdminPanel"
import { useState } from "react"

export default function Admin() {
  const [isCollapsed, setIsCollapsed] = useState(true)

  return (
    <AdminStyled>
      <AdminTabs isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      {!isCollapsed && <AdminPanel />}
    </AdminStyled>
  )
}

const AdminStyled = styled.div`
  position: sticky;
  bottom: 0;
`
