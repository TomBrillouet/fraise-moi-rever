import { useState } from "react"
import { useNavigate } from "react-router"
import styled from "styled-components"
import { theme } from "../../../theme"
import { BsPersonCircle } from "react-icons/bs"
import { IoChevronForward } from "react-icons/io5"

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
      <div>
        <BsPersonCircle className="icon" />
        <input
          type="text"
          placeholder="Entrez votre prénom"
          value={inputValue}
          onChange={handleChange}
          required
        />
      </div>
      <button>
        <span>Accéder à mon espace</span>
        <IoChevronForward className="icon" />
      </button>
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
  div {
    margin-bottom: 18px;
    padding: 18px 24px;
    border-radius: ${theme.borderRadius.round};
    border: none;
    background-color: ${theme.colors.white};
    text-align: left;
    display: flex;
    .icon {
      color: ${theme.colors.greyDark};
    }
    input {
      border: none;
      margin-left: 12.8px;
      &::placeholder {
        color: #d3d3d3;
      }
    }
  }
  button {
    background-color: ${theme.colors.primary_burger};
    color: ${theme.colors.white};
    font-weight: 700;
    line-height: 1;
    text-decoration: none;
    white-space: nowrap;
    position: relative;
    align-items: center;
    justify-content: center;
    display: inline-flex;
    width: 100%;
    font-size: ${theme.fonts.P0};
    padding: 18px 24px;
    border-radius: ${theme.borderRadius.round};
    border: 1px solid ${theme.colors.primary_burger};
    &:hover {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary_burger};
      transition: all 200ms ease-out;
      border: 1px solid ${theme.colors.primary_burger};
      cursor: pointer;
    }
    &:active {
      background-color: ${theme.colors.primary_burger};
      color: ${theme.colors.white};
      border: 1px solid ${theme.colors.primary_burger};
    }
  }
`
