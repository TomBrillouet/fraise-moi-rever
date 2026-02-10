import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"
import { fakeMenu } from "../datas/fakeMenu"

export const getUser = async (userId) => {
  //chemin
  const docRef = doc(db, "users", userId)

  const docSnapshot = await getDoc(docRef)

  if (docSnapshot.exists()) {
    const userReceived = docSnapshot.data()
    return userReceived
  }
}

export const createUser = async (userId) => {
  //chemin
  const docRef = doc(db, "users", userId)
  const docSnapshot = await getDoc(docRef)
  if (docSnapshot.exists()) {
    const userReceived = docSnapshot.data()
    console.log(userReceived)
    return userReceived
  }
  // nouvelle entrée
  const newDoc = {
    username: userId,
    catalog: fakeMenu.LARGE,
  }
  setDoc(docRef, newDoc) //chemin, nouvelle entrée en param
}

export const authenticateUser = async (userId) => {
  const existingUser = await getUser(userId)

  if (!existingUser) {
    createUser(userId)
  }
}
