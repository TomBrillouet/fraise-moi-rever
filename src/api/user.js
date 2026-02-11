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

  // nouvelle entrée
  const newUserToCreate = {
    username: userId,
    catalog: fakeMenu.LARGE,
  }
  await setDoc(docRef, newUserToCreate) //chemin, nouvelle entrée en param
  return newUserToCreate
}

export const authenticateUser = async (userId) => {
  const existingUser = await getUser(userId)

  if (!existingUser) {
    return await createUser(userId)
  }
  return existingUser
}
