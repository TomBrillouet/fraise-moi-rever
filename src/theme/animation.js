import { css } from "styled-components"
import { theme } from "."

export const adminAnimation = css`
  .animate-admin-enter {
    transform: translateY(100px);
    opacity: 0.1;
  }

  .animate-admin-enter-active {
    transform: translateY(0);
    opacity: 1;
    transition: ${theme.animations.speed.medium};
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

export const basketCardanimations = css`
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
