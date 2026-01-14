import styled from "styled-components"
import Profile from "./Profile"

export default function NavbarRightSide() {
  return (
    <NavbarRightSideStyled>
      <Profile />
    </NavbarRightSideStyled>
  )
}
const NavbarRightSideStyled = styled.div`
  padding-right: 50px;
`
