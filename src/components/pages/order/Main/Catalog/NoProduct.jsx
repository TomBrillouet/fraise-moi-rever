import { useContext } from "react"
import OrderContext from "../../../../../context/OrderContext"
import styled from "styled-components"
import PrimaryButton from "../../../../reusable/PrimaryButton"

export default function NoProduct() {
  const { isAdmin, handleNewCatalog } = useContext(OrderContext)

  const handleClick = () => {
    handleNewCatalog()
  }
  const noproduct = isAdmin ? (
    <NoProductStyled>
      Le menu est vide ? <br />
      Cliquez ci-dessous pour le réinitialiser <br />
      <PrimaryButton
        label={"Générer de nouveaux produits"}
        onClick={handleClick}
      />
    </NoProductStyled>
  ) : (
    <NoProductStyled>
      <b>Victime de notre succès ! :d</b> <br /> De nouvelles recettes en cours
      de préparation. <br /> à très vite !
    </NoProductStyled>
  )
  return noproduct
}

const NoProductStyled = styled.div`
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
