import { useContext } from "react"
import styled from "styled-components"
import OrderContext from "../../../../../context/OrderContext"
import { theme } from "../../../../../theme"
import Admin from "./Admin/Admin"
import Catalog from "./Catalog/Catalog"

export default function MainRightSide() {
  const { isAdmin } = useContext(OrderContext)

  return (
    <MainRightSideStyled>
      <Catalog />
      {isAdmin && <Admin />}
    </MainRightSideStyled>
  )
}

const MainRightSideStyled = styled.div`
  position: relative;
  overflow-y: hidden;
  display: grid;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
`
