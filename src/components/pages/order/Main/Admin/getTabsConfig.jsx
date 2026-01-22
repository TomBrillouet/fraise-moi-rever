import { MdModeEditOutline } from "react-icons/md"
import { AiOutlinePlus } from "react-icons/ai"
import { BiSun } from "react-icons/bi"
export const getTabsConfig = () => [
  // {
  //   index: "chevronUpDown",
  //   label: "",
  //   icon: isCollapsed ? <FiChevronUp /> : <FiChevronDown />,
  //   onClick: () => setIsCollapsed(!isCollapsed),
  //   className: isCollapsed ? "is-active" : "",
  // },
  {
    index: "add",
    label: "Ajouter un produit",
    icon: <AiOutlinePlus />,
  },
  {
    index: "edit",
    label: "Modifier un produit",
    icon: <MdModeEditOutline />,
  },
  {
    index: "theme",
    label: "Modifier le thème",
    icon: <BiSun />,
  },
]

export const getTabSelected = (tabs, currentTabSelected) =>
  tabs.find((tab) => tab.index === currentTabSelected)
