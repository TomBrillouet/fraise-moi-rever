import { Link } from "react-router"
import { BsPersonCircle } from "react-icons/bs"
import { theme } from "../../../../theme"
import styled from "styled-components"

export default function Profile({ username }) {
  return (
    <ProfileStyled>
      <div>
        <p>
          Hey, <span>{username}</span>
        </p>
        <Link to="/">Se déconnecter</Link>
      </div>
      <BsPersonCircle />
    </ProfileStyled>
  )
}
const ProfileStyled = styled.div`
  display: flex;
  gap: 10px;
  font-weight: ${theme.fonts.weights.regular};
  font-size: 16px;
  color: ${theme.colors.greyBlue};
  p {
    margin: 0;
  }
  span {
    font-weight: ${theme.fonts.weights.bold};
    color: ${theme.colors.primary};
  }
  a {
    cursor: pointer;
    text-decoration: none;
    font-size: ${theme.fonts.size.XXS};
    color: ${theme.colors.greyBlue};
    &:hover {
      text-decoration: underline;
      color: ${theme.colors.greyDark};
    }
  }
  svg {
    height: ${theme.fonts.size.P4};
    width: ${theme.fonts.size.P4};
  }
`
