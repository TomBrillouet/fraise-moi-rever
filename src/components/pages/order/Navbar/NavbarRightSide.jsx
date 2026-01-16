import styled from "styled-components"
import Profile from "./Profile"
import { toast, ToastContainer } from "react-toastify"
import { theme } from "../../../../theme"
import { useState } from "react"
import ToggleButton from "../../../reusable/ToggleButton"

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
        labelIfChecked="Désactiver le mode admin"
        labelIfUnchecked="Activer le mode admin"
      />
      <ToastContainer className="toaster" bodyClassName="body-toast" />
      <Profile />
    </NavbarRightSideStyled>
  )
}
const NavbarRightSideStyled = styled.div`
  padding-right: 50px;
  gap: 20px;
  display: flex;
  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`
