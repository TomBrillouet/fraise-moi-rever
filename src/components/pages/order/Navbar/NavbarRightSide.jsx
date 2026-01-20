import styled from "styled-components"
import Profile from "./Profile"
import { toast } from "react-toastify"
import ToggleButton from "../../../reusable/ToggleButton"
import ToastAdmin from "./ToastAdmin"
import { useContext } from "react"
import InfoContext from "../../../../context/InfoContext"

export default function NavbarRightSide() {
  const { isAdmin, setIsAdmin } = useContext(InfoContext)

  const displayToastNotification = () => {
    if (!isAdmin) {
      toast.info("Mode admin activé", {
        theme: "dark",
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
    setIsAdmin(!isAdmin)
  }

  return (
    <NavbarRightSideStyled>
      <ToggleButton
        isChecked={isAdmin}
        onToggle={displayToastNotification}
        labelIfChecked={"Désactiver le mode admin"}
        labelIfUnchecked={"Activer le mode admin"}
      />
      <Profile />
      <ToastAdmin />
    </NavbarRightSideStyled>
  )
}
const NavbarRightSideStyled = styled.div`
  padding-right: 50px;
  gap: 20px;
  display: flex;
`
