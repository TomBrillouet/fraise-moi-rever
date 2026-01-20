import styled from "styled-components"

export default function AdminPanel() {
  return (
    <AdminPanelStyled>
      <div className="header">
        <button>..</button>
        <button>Ajouter un produit</button>
        <button>Modifier un produit</button>
      </div>
      <div className="body">Ajouter un produit</div>
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
  position: sticky;
  bottom: 0;
  .header {
    height: 44px;
    padding: 0 71px;
    button {
      height: 100%;
      padding: 14px 22px;
    }
  }
  .body {
    height: 250px;
    background: #ffffff;
    border: solid 1px #e4e5e9;
  }
`
