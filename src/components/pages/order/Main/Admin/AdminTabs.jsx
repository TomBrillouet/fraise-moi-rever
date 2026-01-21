import styled from "styled-components"
import { theme } from "../../../../../theme"
import { MdModeEditOutline } from "react-icons/md"
import { AiOutlinePlus } from "react-icons/ai"
import { FiChevronDown } from "react-icons/fi"

export default function AdminTabs() {
  return (
    <AdminTabsStyled>
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
    </AdminTabsStyled>
  )
}

const AdminTabsStyled = styled.div`
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
    border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0 0;
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
      font-size: ${theme.fonts.size.P0};
    }
  }
`
