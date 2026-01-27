import styled from "styled-components"
import PrimaryButton from "../../../../reusable/PrimaryButton"

export default function EmptyCatalogAdmin({ onReset }) {
  return (
    <EmptyCatalogAdminStyled>
      Le menu est vide ? <br />
      Cliquez ci-dessous pour le réinitialiser <br />
      <PrimaryButton label={"Générer de nouveaux produits"} onClick={onReset} />
    </EmptyCatalogAdminStyled>
  )
}

const EmptyCatalogAdminStyled = styled.div`
  font-family: "Amatic SC", cursive;
  font-size: 36px;
  text-transform: uppercase;
  position: absolute;
  top: 35%;
  left: 35%;
  line-height: 60px;
  button {
    padding: 19px 25px;
    width: unset;
  }
`
