import styled from "styled-components"
import AdminTabs from "./AdminTabs"
import AdminPanel from "./AdminPanel"

export default function Admin() {
  return (
    <AdminStyled>
      <AdminTabs />
      <AdminPanel />
    </AdminStyled>
  )
}

const AdminStyled = styled.div`
  position: sticky;
  display: block;
  bottom: 0;
`
