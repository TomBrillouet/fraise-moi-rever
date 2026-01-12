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
        Icon={<BsPersonCircle className="icon" />}
      />
      <PrimaryButton
        label={"Accéder à mon espace"}
        icon={<IoChevronForward className="icon" />}
      />
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`
  color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  min-width: 400px;
  max-width: 500px;
  margin: 0px auto;
  padding: 2.5rem 2rem;
  text-align: center;
  font-family: "Amatic SC", cursive;
  h1 {
    font-size: ${theme.fonts.P5};
    margin: 0;
  }
  hr {
    width: 100%;
    height: 3px;
    border: none;
    background: #f56a2c;
  }
  h2 {
    font-size: ${theme.fonts.P4};
  }
`
