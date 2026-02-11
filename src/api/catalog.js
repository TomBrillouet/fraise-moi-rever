import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"

export const syncBothCatalogs = (userId, catalogUpdated) => {
  //chemin
  const docRef = doc(db, "users", userId)
  // nouvelle entrée
  const newDoc = {
    username: userId,
    catalog: catalogUpdated,
  }
  setDoc(docRef, newDoc) //chemin, nouvelle entrée en param
}

export const getCatalog = async (userId) => {
  //chemin
  const docRef = doc(db, "users", userId)

  const docSnapshot = await getDoc(docRef)
  if (docSnapshot.exists()) {
    const { catalog } = docSnapshot.data()
    return catalog
  }
}
