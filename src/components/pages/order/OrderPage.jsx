import styled from "styled-components"
import NavBar from "../../reusable/NavBar"
export default function OrderPage() {
  return (
    <OrderPageStyled>
      <div>
        <NavBar />
        <div className="container"></div>
      </div>
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`
  background: orange;
  height: 100%;
  width: 100%;
  padding: 19px 0;
  > div {
    width: 1400px;
    justify-self: center;
    border-radius: 15px;
  }

  div.container {
    background: #f5f5f7;
    height: 80vh;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    border-radius: 0 0 15px 15px;
  }
`
