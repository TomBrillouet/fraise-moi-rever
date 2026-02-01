import styled from "styled-components"

export default function Basket() {
  return (
    <BasketStyled>
      <div className="header">header</div>
      <div className="main">main</div>
      <div className="footer">footer</div>
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  display: grid;
  grid-template-rows: 1fr 10fr 1fr;

  .header {
    background-color: red;
  }

  .main {
    background-color: green;
  }

  .footer {
    background-color: blue;
  }
`
