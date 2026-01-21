import styled from "styled-components"
import { MdModeEditOutline } from "react-icons/md"
import { AiOutlinePlus } from "react-icons/ai"
import { FiChevronDown } from "react-icons/fi"
import Tab from "../../../../reusable/Tab"

export default function AdminTabs() {
  return (
    <AdminTabsStyled>
      <Tab icon={<FiChevronDown />} />
      <Tab
        className={"active"}
        icon={<AiOutlinePlus />}
        label={"Ajouter un produit"}
      />
      <Tab icon={<MdModeEditOutline />} label={"Modifier un produit"} />
    </AdminTabsStyled>
  )
}

const AdminTabsStyled = styled.div`
  padding: 0 71px;
  display: flex;
`
