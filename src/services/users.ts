import { db } from '../config/firebase'
import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Alert } from 'react-native'

// const usersCollectionRef = collection(db, 'Users')
const auth = getAuth()

async function createUser(id: string, email: string, setUser: any) {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, id)
    const newDoc = {
      email: response.user.email,
      name: response.user.displayName,
      createdAt: Timestamp.fromDate(new Date())
    }
    await setDoc(doc(db, 'Users', response.user.uid), newDoc)

    const user = { ...newDoc, id: response.user.uid}
    setUser(user)
    await AsyncStorage.setItem('@yg/user', JSON.stringify(user))

    return user
  } catch {
    Alert.alert('Algo inesperado aconteceu')
  }
}

async function signIn(id: string, email: string, setUser: any) {
  const response = await signInWithEmailAndPassword(auth, email, id)
  const userRef = doc(db, 'Users', response.user.uid)
  const userSnap = await getDoc(userRef)
  const userId = userSnap.id
  const data = userSnap.data()
  const user = { ...data, id: userId}

  setUser(user)
  await AsyncStorage.setItem('@yg/user', JSON.stringify(user))

  return user
}

async function signOut(setUser: any) {
  await AsyncStorage.removeItem('@yg/user')
  setUser({})
}

export {
  createUser,
  signIn,
  signOut,
}