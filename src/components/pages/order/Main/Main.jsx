import styled from "styled-components"
import { theme } from "../../../../theme/index.js"
import Catalog from "./Menu/Catalog.jsx"

export default function Main() {
  //state

  //render
  return (
    <MainStyled>
      {/*<div className="basket"></div>*/}
      <Catalog />
    </MainStyled>
  )
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: /*25%*/ 1fr;
  flex: 1;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: auto;
  border-radius: 0 0 ${theme.borderRadius.extraRound}
    ${theme.borderRadius.extraRound};
  scrollbar-color: grey transparent;
`
