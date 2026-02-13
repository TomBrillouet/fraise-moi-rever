import { css } from "styled-components"

export const adminAnimation = css`
  .animate-admin-enter {
    transform: translateY(100px);
    opacity: 0;
  }

  .animate-admin-enter-active {
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
`
