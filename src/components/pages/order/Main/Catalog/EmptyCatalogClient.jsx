import styled from "styled-components"

export default function EmptyCatalogClient() {
  return (
    <EmptyCatalogClientStyled>
      <b>Victime de notre succès ! :d</b> <br /> De nouvelles recettes en cours
      de préparation. <br /> à très vite !
    </EmptyCatalogClientStyled>
  )
}

const EmptyCatalogClientStyled = styled.div`
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
