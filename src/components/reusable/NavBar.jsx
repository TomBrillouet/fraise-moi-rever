import Logo from "./Logo"
import styled from "styled-components"
import { theme } from "../../theme"
import NavbarRightSide from "../pages/order/NavbarRightSide"
import { refreshPage } from "../../utils/window"

export default function NavBar() {
  return (
    <NavBarStyled>
      <Logo onClick={() => refreshPage()} className={"logo-order"} />
      <NavbarRightSide />
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
  padding: 0 ${theme.spacing.md} 0 ${theme.spacing.md};
  .logo-order {
    cursor: pointer;
  }
`
