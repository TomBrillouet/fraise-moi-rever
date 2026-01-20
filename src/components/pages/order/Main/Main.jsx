import styled from "styled-components"
import { theme } from "../../../../theme/index.js"
import Admin from "./Admin/Admin.jsx"
import Catalog from "./Catalog/Catalog.jsx"
import { useContext } from "react"
import InfoContext from "../../../../context/InfoContext.jsx"

export default function Main() {
  //state
  const { isAdmin } = useContext(InfoContext)
  //render
  return (
    <MainStyled>
      {/*<div className="basket">basket</div>*/}
      <div>
        <Catalog />
        {isAdmin && <Admin />}
      </div>
    </MainStyled>
  )
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: /*25%*/ 1fr;
  height: calc(95vh - 10vh);
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-radius: 0 0 ${theme.borderRadius.extraRound};
  ${theme.borderRadius.extraRound};
  scrollbar-color: grey transparent;
  overflow-y: auto;
  .basket {
    background-color: pink;
  }
`
