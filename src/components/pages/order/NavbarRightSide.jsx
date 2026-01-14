import styled from "styled-components"
import { theme } from "../../../theme"
import { Link, useParams } from "react-router"
import { BsPersonCircle } from "react-icons/bs"

export default function NavbarRightSide() {
  const { username } = useParams()

  return (
    <NavbarRightSideStyled>
      <div>
        <p>
          Hey, <span>{username}</span>
        </p>
        <Link to="/">Se déconnecter</Link>
      </div>
      <BsPersonCircle />
    </NavbarRightSideStyled>
  )
}
const NavbarRightSideStyled = styled.div`
  font-family: "Open Sans", sans-serif;
  font-weight: ${theme.fonts.weights.regular};
  font-size: 16px;
  color: ${theme.colors.greyBlue};
  margin-right: 50px;
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
    color: ${theme.colors.greyBlue};
  }
  svg {
    height: ${theme.fonts.size.P4};
    width: ${theme.fonts.size.P4};
  }
`
