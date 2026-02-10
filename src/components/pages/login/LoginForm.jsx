import { useState } from "react"
import { useNavigate } from "react-router"
import styled from "styled-components"
import { theme } from "../../../theme"
import { IoChevronForward } from "react-icons/io5"
import { BsPersonCircle } from "react-icons/bs"
import TextInput from "../../reusable/TextInput"
import Button from "../../reusable/Button"
import { authenticateUser } from "../../../api/user"
import Welcome from "./Welcome"

export default function LoginForm() {
  //state
  const [username, setUsername] = useState("")
  const navigate = useNavigate()
  //comportements
  const handleSubmit = async (e) => {
    e.preventDefault()
    authenticateUser(username)
    setUsername("")
    navigate(`order/${username}`)
  }

  const handleChange = (e) => {
    setUsername(e.target.value)
  }
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <Welcome />
      <TextInput
        value={username}
        onChange={handleChange}
        placeholder={"Entrez votre prénom"}
        required
        Icon={<BsPersonCircle />}
        version={"normal"}
      />
      <Button label={"Accéder à mon espace"} icon={<IoChevronForward />} />
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
`
