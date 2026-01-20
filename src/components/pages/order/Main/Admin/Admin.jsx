import { AiOutlinePlus } from "react-icons/ai"
import { FiChevronDown } from "react-icons/fi"
import { MdModeEditOutline } from "react-icons/md"
import styled from "styled-components"
import { theme } from "../../../../../theme"

export default function Admin() {
  return (
    <AdminStyled>
      <div className="AdminTabs">
        <button>
          <FiChevronDown />
        </button>
        <button className="active">
          <AiOutlinePlus />
          Ajouter un produit
        </button>
        <button>
          <MdModeEditOutline />
          Modifier un produit
        </button>
      </div>
      <div className="AdminPanel">Ajouter un produit</div>
    </AdminStyled>
  )
}

const AdminStyled = styled.div`
  position: sticky;
  display: block;
  bottom: 0;
  .AdminTabs {
    height: 44px;
    padding: 0 71px;
    display: flex;
    button {
      height: 100%;
      display: flex;
      padding: 14px 22px;
      color: ${theme.colors.greySemiDark};
      background-color: ${theme.colors.white};
      border: ${theme.colors.greyLight} solid 1px;
      border-radius: 5px 5px 0 0;
      gap: 1em;
      cursor: pointer;
      &.active {
        background-color: ${theme.colors.background_dark};
        color: ${theme.colors.white};
        border: ${theme.colors.background_dark} 1px solid;
      }
      &:hover {
        text-decoration: underline;
      }
      svg {
        font-size: 16px;
      }
    }
  }
  .AdminPanel {
    height: 250px;
    background: ${theme.colors.white};
    border: solid 1px ${theme.colors.greyLight};
    padding: 17px;
    box-sizing: border-box;
    box-shadow: ${theme.shadows.subtle};
  }
`
