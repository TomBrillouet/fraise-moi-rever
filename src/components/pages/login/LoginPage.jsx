import styled from "styled-components"
import LoginForm from "./LoginForm"
import Logo from "../../reusable/Logo"

export default function LoginPage() {
  //render
  return (
    <LoginPageStyled>
      <Logo className={"loginLogo"} />
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
    background: url("/images/smoothie-background.jpg"), rgba(0, 0, 0, 0.7);
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
  .loginLogo {
    transform: scale(2.5);
  }
`
