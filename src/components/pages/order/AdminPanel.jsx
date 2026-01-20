import styled from "styled-components"

export default function AdminPanel() {
  return (
    <AdminPanelStyled>
      <div className="header">Onglets</div>
      <div className="body">Ajouter un produit</div>
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
  position: sticky;
  bottom: 0;
  .header {
    background: blue;
    height: 44px;
  }
  .body {
    height: 250px;
    background: yellow;
  }
`
