import { useContext, useRef } from "react"
import styled from "styled-components"
import OrderContext from "../../../../../context/OrderContext"
import { theme } from "../../../../../theme"
import Admin from "./Admin/Admin"
import Catalog from "./Catalog/Catalog"
import { CSSTransition } from "react-transition-group"

export default function MainRightSide() {
  const { isAdmin } = useContext(OrderContext)
  const nodeRef = useRef()

  return (
    <MainRightSideStyled>
      <Catalog />
      <CSSTransition
        appear
        in={isAdmin}
        nodeRef={nodeRef}
        classNames="animate-admin"
        timeout={500}
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

  .animate-admin-enter,
  .animate-admin-appear {
    transform: translateY(100px);
    opacity: 0;
  }

  .animate-admin-enter-active,
  .animate-admin-appear-active {
    transform: translateY(0);
    opacity: 1;
    transition: 0.5s;
  }

  .animate-admin-exit {
    transform: translateY(0);
    opacity: 1;
  }

  .animate-admin-exit-active {
    transform: translateY(100px);
    opacity: 0;
    transition: 0.5s;
  }

  .animate-admin-exit-done {
    transform: translateY(100px);
    opacity: 0;
  }
`
