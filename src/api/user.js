import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"
import { fakeMenu } from "../datas/fakeMenu"

export const getUser = async (idUser) => {
  //chemin
  const docRef = doc(db, "users", idUser)

  const docSnapshot = await getDoc(docRef)

  console.log(docSnapshot)
  if (docSnapshot.exists()) {
    const userReceived = docSnapshot.data()
    return userReceived
  }
}

export const createUser = (idUser) => {
  //chemin
  const docRef = doc(db, "users", idUser)

  // nouvelle entrée
  const newDoc = {
    username: idUser,
    catalog: fakeMenu.LARGE,
  }
  setDoc(docRef, newDoc) //chemin, nouvelle entrée en param
}
