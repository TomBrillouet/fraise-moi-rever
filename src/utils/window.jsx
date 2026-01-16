import { useNavigate } from "react-router"

export const useRefreshPage = () => {
  const navigate = useNavigate()
  return () => navigate(0)
}
