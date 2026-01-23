import styled from "styled-components"
import { formatPrice } from "../../../../../utils/maths"
import Card from "../../../../reusable/Card"
import orderContext from "../../../../../context/OrderContext.jsx"
import { useContext } from "react"
import PrimaryButton from "../../../../reusable/PrimaryButton.jsx"

export default function Catalog() {
  const { products, isAdmin } = useContext(orderContext)
  const catalog = products.map(({ imageSource, title, price, id }) => (
    <Card
      image={imageSource}
      title={title}
      leftDescription={formatPrice(price)}
      key={id}
      id={id}
    />
  ))
  const noproduct = isAdmin ? (
    <div className="noproduct">
      Le menu est vide ? <br />
      Cliquez ci-dessous pour le réinitialiser <br />
      <PrimaryButton label={"Générer de nouveaux produits"} />
    </div>
  ) : (
    <div className="noproduct">
      <b>Victime de notre succès ! :d</b> <br /> De nouvelles recettes en cours
      de préparation. <br /> à très vite !
    </div>
  )

  return (
    <CatalogStyled>
      {catalog.length >= 1 ? (
        <div className="catalog">{catalog}</div>
      ) : (
        noproduct
      )}
    </CatalogStyled>
  )
}

const CatalogStyled = styled.div`
  position: relative;
  height: 100%;
  text-align: center;
  .catalog {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: auto;
    padding: 50px 0;
    row-gap: 60px;
    justify-items: center;
  }
  .noproduct {
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
  }
`
