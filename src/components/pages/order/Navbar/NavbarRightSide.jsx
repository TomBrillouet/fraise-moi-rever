import styled from "styled-components"
import Profile from "./Profile"
import ToggleButton from "./ToggleButton"
import { toast, ToastContainer } from "react-toastify"
import { theme } from "../../../../theme"

export default function NavbarRightSide() {
  const notify = () => {
    toast.info("Mode admin activé", {
      // icon: <FaUserSecret size={30} />,
      theme: "dark",
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  return (
    <NavbarRightSideStyled>
      <ToggleButton
        isChecked={false}
        onToggle={notify}
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
  gap: 25px;
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
