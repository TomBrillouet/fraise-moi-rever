import { useState } from "react"
import { useNavigate } from "react-router"
import styled from "styled-components"
import { theme } from "../../../theme"

export default function LoginForm() {
  //state
  const [inputValue, setInputValue] = useState("")
  const navigate = useNavigate()
  //comportements
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`order/${inputValue}`)
    setInputValue("")
  }

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous ! </h1>
      <br />
      <hr />
      <h2>Connectez vous</h2>
      <input
        type="text"
        placeholder="Entrez votre prénom"
        value={inputValue}
        onChange={handleChange}
        required
      />
      <button>Accéder à votre espace</button>
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  color: ${theme.colors.white};
  hr {
    color: ${theme.colors.primary_burger};
  }
  button {
    background-color: ${theme.colors.primary_burger};
    color: ${theme.colors.white};
  }
`
