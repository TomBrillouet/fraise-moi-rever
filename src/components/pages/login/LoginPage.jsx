import styled from "styled-components"
import Logo from "../../Logo"
import LoginForm from "./LoginForm"

export default function LoginPage() {
  //render
  return (
    <LoginPageStyled>
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
  &::before {
    content: "";
    background: url("/src/assets/images/F03 burger-background.jpg"),
      rgba(0, 0, 0, 0.7);
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`
