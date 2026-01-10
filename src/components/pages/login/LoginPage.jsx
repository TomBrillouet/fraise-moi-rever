import styled from "styled-components"
import Logo from "../../Logo"
import LoginForm from "./LoginForm"

export default function LoginPage() {
  //render
  return (
    <LoginPageStyled>
      <div className="background"></div>
      <Logo />
      <LoginForm />
    </LoginPageStyled>
  )
}

const LoginPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
  div.background {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("/src/assets/images/F03 burger-background.jpg");

    background-size: cover;
    background-position: center;
  }
`
