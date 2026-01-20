import { createContext } from "react"

export default createContext({
  username: "",
  isAdmin: false,
  setIsAdmin: () => {},
})
