import { getCatalog } from "../../../../api/catalog"
import { getLocalStorage } from "../../../../utils/window"

const initialiseCatalog = async (username, setCatalog) => {
  const catalogReceived = await getCatalog(username)
  setCatalog(catalogReceived)
}

const initialiseBasket = (username, setBasket) => {
  const basketReceived = getLocalStorage(username)
  if (basketReceived) setBasket(basketReceived)
}

export const initialiseUserSession = async (
  username,
  setCatalog,
  setBasket,
) => {
  await initialiseCatalog(username, setCatalog)
  initialiseBasket(username, setBasket)
}
