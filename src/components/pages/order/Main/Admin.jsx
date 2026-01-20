import { useContext } from "react"
import { AiOutlinePlus } from "react-icons/ai"
import { FiChevronDown } from "react-icons/fi"
import { MdModeEditOutline } from "react-icons/md"
import styled from "styled-components"
import InfoContext from "../../../../context/InfoContext"

export default function Admin() {
  const { isAdmin } = useContext(InfoContext)

  if (isAdmin) {
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
      color: #93a2b1;
      background-color: #ffffff;
      border: #e4e5e9 solid 1px;
      border-radius: 5px 5px 0 0;
      gap: 1em;
      cursor: pointer;
      &.active {
        background-color: #292729;
        color: #ffffff;
        border: #292729 1px solid;
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
    background: #ffffff;
    border: solid 1px #e4e5e9;
    padding: 17px;
    box-sizing: border-box;
  }
`
