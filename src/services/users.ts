import { db } from '../config/firebase'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'

const usersCollectionRef = collection(db, 'Users')

async function createUser(email: string, name: string) {
  const user = {
    email,
    name,
    createdAt: new Date()
  }
  const response = await addDoc(usersCollectionRef, user)
  // console.log(response.id)

  return response
}

async function getUserById(id: string) {
  return id
}

async function getUserByEmail(email: string) {
  const q = query(usersCollectionRef, where('email', '==', email))
  const userDoc = await getDocs(q)
  
  console.log('entrou')
  
  const data = userDoc.docs[0].data()
  console.log(data)
  
  // const name = data.name
  // const userEmail = data.email
  // const id = userDoc.docs[0].id
  // const user = {...data, id}  
  // const user = { name, email: userEmail, id}  
  // return user
  return null



}

// async function createUser(email, name, createdAt) {

// }
export {
  createUser,
  getUserByEmail,
  getUserById
}