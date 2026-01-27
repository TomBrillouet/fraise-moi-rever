import { useState } from "react"
import { useNavigate } from "react-router"
import styled from "styled-components"
import { theme } from "../../../theme"
import { IoChevronForward } from "react-icons/io5"
import { BsPersonCircle } from "react-icons/bs"
import TextInput from "../../reusable/TextInput"
import PrimaryButton from "../../reusable/PrimaryButton"

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
      <h1 className="amatic-sc-bold">Bienvenue chez nous ! </h1>
      <br />
      <hr />
      <h2 className="amatic-sc-bold">Connectez vous</h2>
      <TextInput
        value={inputValue}
        onChange={handleChange}
        placeholder="Entrez votre prénom"
        required
        Icon={<BsPersonCircle />}
        className={"input-login"}
      />
      <PrimaryButton
        label={"Accéder à mon espace"}
        icon={<IoChevronForward />}
      />
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`
  min-width: 400px;
  max-width: 500px;
  margin: 0px auto;
  padding: 40px ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.round};
  text-align: center;
  font-family: "Amatic SC", cursive;
  h1 {
    font-size: ${theme.fonts.size.P5};
    color: ${theme.colors.white};
  }
  hr {
    margin-bottom: ${theme.gridUnit * 5}px;
    border: 1.5px solid ${theme.colors.primary};
  }
  h2 {
    margin: 20px 10px 10px;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P4};
  }

  .input-login {
    margin: 18px 0;
  }
`
