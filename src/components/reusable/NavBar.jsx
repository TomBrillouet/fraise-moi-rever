import { useNavigate, useParams } from "react-router"
import { BsPersonCircle } from "react-icons/bs"
import Logo from "./Logo"
import styled from "styled-components"
import { theme } from "../../theme"

export default function NavBar() {
  const { username } = useParams()
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/")
  }
  return (
    <NavBarStyled>
      <Logo />
      <div className="user-info">
        <div>
          <p>
            Hey, <span>{username}</span>
          </p>
          <a onClick={handleClick}>Se déconnecter</a>
        </div>
        <BsPersonCircle />
      </div>
    </NavBarStyled>
  )
}
const NavBarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.extraRound}
    ${theme.borderRadius.extraRound} 0 0;
  padding: 0 70px 0 ${theme.spacing.md};
  a {
    text-decoration: none;
  }
  .user-info {
    font-family: "Open Sans", sans-serif;
    font-weight: ${theme.fonts.weights.regular};
    font-size: 16px;
    color: ${theme.colors.greyBlue};
    display: flex;
    gap: 10px;
    p {
      margin: 0;
    }
    span {
      font-weight: ${theme.fonts.weights.bold};
      color: ${theme.colors.primary};
    }
    a {
      cursor: pointer;
      font-size: ${theme.fonts.size.XXS};
    }
    svg {
      height: ${theme.fonts.size.P4};
      width: ${theme.fonts.size.P4};
    }
  }
`
