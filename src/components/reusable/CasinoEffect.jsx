import { createRef } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import styled from "styled-components"

export default function CasinoEffect({ count, className }) {
  const nodeRef = createRef()
  return (
    <TransitionGroup component={CasinoEffectStyled}>
      <CSSTransition
        nodeRef={nodeRef}
        classNames={"count-animated"}
        timeout={300}
        key={count}
      >
        <span ref={nodeRef} className={className}>
          {count}
        </span>
      </CSSTransition>
    </TransitionGroup>
  )
}

const CasinoEffectStyled = styled.div`
  position: relative;
  overflow: hidden;
  display: block;

  span {
    display: block;
    backface-visibility: hidden;
  }

  .count-animated-enter {
    transform: translateY(100%);
  }
  .count-animated-enter-active {
    transform: translateY(0%);
    transition: transform 300ms;
  }

  .count-animated-exit {
    transform: translateY(0%);
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .count-animated-exit-active {
    transform: translateY(-100%);
    transition: transform 300ms;
  }
`
