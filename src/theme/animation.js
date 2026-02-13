import { css, keyframes } from "styled-components"
import { theme } from "."

export const fadeInFromRight = keyframes`
0%{
    position: absolute;
    z-index: -1;
    opacity: 0;
    transform: translateX(100%);
}
100%{
    opacity:1;
    transform: translateX(0);
}
`

export const adminAnimation = css`
  .animate-admin-enter {
    transform: translateY(100px);
    opacity: 0.1;
  }

  .animate-admin-enter-active {
    transform: translateY(0);
    opacity: 1;
    transition: ${theme.animations.speed.medium} ease-out;
  }

  .animate-admin-exit {
    transform: translateY(0);
    opacity: 1;
  }

  .animate-admin-exit-active {
    transform: translateY(100px);
    opacity: 0;
    transition: ${theme.animations.speed.medium};
  }
`

export const basketCardAnimations = css`
  .animate-basket-enter,
  .animate-basket-appear {
    transform: translateX(100px);
    opacity: 0;
  }

  .animate-basket-enter-active,
  .animate-basket-appear-active {
    transform: translateX(0);
    opacity: 1;
    transition: ${theme.animations.speed.quick};
  }

  .animate-basket-exit {
    transform: translateX(0);
    opacity: 1;
  }

  .animate-basket-exit-active {
    transform: translateX(-100px);
    opacity: 0;
    transition: ${theme.animations.speed.quick};
  }
`
export const CardAnimations = css`
  .animate-card-enter,
  .animate-card-appear {
    transform: translateX(-100px);
    opacity: 0;
  }

  .animate-card-enter-active,
  .animate-card-appear-active {
    transform: translateX(0);
    opacity: 1;
    transition: ${theme.animations.speed.quick};
  }

  .animate-card-exit {
    transform: translateX(0);
    opacity: 1;
  }

  .animate-card-exit-active {
    opacity: 0;
    transition: ${theme.animations.speed.quick};
  }
`
