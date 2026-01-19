import styled from "styled-components"
import Profile from "./Profile"
import { toast } from "react-toastify"
import { useState } from "react"
import ToggleButton from "../../../reusable/ToggleButton"
import ToastAdmin from "./ToastAdmin"

export default function NavbarRightSide() {
  const [isAdmin, setChecked] = useState(false)

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
    setChecked(!isAdmin)
  }

  return (
    <NavbarRightSideStyled>
      <ToggleButton
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
