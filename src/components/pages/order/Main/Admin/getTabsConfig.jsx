import { MdModeEditOutline } from "react-icons/md"
import { AiOutlinePlus } from "react-icons/ai"
export const getTabsConfig = (currentTabSelected) => [
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
    className: currentTabSelected === "add" ? "is-active" : "",
  },
  {
    index: "edit",
    label: "Modifier un produit",
    icon: <MdModeEditOutline />,
    className: currentTabSelected === "edit" ? "is-active" : "",
  },
]
