import { useContext, useRef } from "react"
import styled from "styled-components"
import OrderContext from "../../../../../context/OrderContext"
import { theme } from "../../../../../theme"
import Admin from "./Admin/Admin"
import Catalog from "./Catalog/Catalog"
import { CSSTransition } from "react-transition-group"
import { adminAnimation } from "../../../../../theme/animation"

export default function MainRightSide() {
  const { isAdmin } = useContext(OrderContext)
  const nodeRef = useRef()

  return (
    <MainRightSideStyled>
      <Catalog />

      <CSSTransition
        in={isAdmin}
        nodeRef={nodeRef}
        classNames="animate-admin"
        timeout={500}
        mountOnEnter
        unmountOnExit
      >
        <Admin ref={nodeRef} />
      </CSSTransition>
    </MainRightSideStyled>
  )
}

const MainRightSideStyled = styled.div`
  position: relative;
  overflow-y: hidden;
  display: grid;
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

  ${adminAnimation}
`
