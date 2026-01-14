import { Link, useNavigate, useParams } from "react-router"
import styled from "styled-components"
export default function OrderPage() {
  const { username } = useParams()
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/")
  }

  return (
    <OrderPageStyled>
      <div>
        <nav>
          <div className="logo">Logo</div>
          <div>
            <p>Hey, {username}</p>
            <button onClick={handleClick}>Se déconnecter</button>
          </div>
        </nav>
        <div className="container"></div>
      </div>
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`
  background: orange;
  height: 100%;
  width: 100%;
  padding: 34px 0;
  > div {
    width: 1400px;
    background: red;
    justify-self: center;
    border-radius: 15px;
  }

  nav {
    display: flex;
    justify-content: space-between;
    background: blue;
    border-radius: 15px 15px 0 0;
  }

  div.container {
    background: green;
    height: 80vh;
    border-radius: 0 0 15px 15px;
  }
`
