import styled from "styled-components"

export default function ProductForm() {
  return (
    <ProductFormStyled>
      <div>
        <img
          src="http://localhost:5173/images/vecteezy_free-isolated-on-transparent-background-refreshing-smoothie_59371624.png"
          alt=""
        />
      </div>
      <form action="submit">
        <input
          type="text"
          name="name"
          placeholder="Nom du produit (ex: Super Smoothie)"
        />
        <input
          type="text"
          name="link"
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
        />
        <input type="text" name="price" placeholder="Prix" />
        <button>Ajouter un nouveau produit au menu</button>
      </form>
    </ProductFormStyled>
  )
}

const ProductFormStyled = styled.div`
  display: flex;
  div {
    border: solid 1px red;
    width: 100px;
    height: 100px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  form {
    border: 1px blue solid;
    display: flex;
    flex-direction: column;
  }
`
