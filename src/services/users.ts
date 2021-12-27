import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../config/firebase'

// type ICreateUser = {
//   name: string;
//   email: string;
// }

const usersCollectionRef = collection(db, 'Users')

// async function createUser({email, name}: ICreateUser) {
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

async function getUserByEmail(email: string) {
  const q = query(usersCollectionRef, where('email', '==', email))
  const user = await getDocs(q)
  // user[0] 
  console.log(user)
  
  // user.forEach((doc) => {const test = (doc.data(), doc.id)})
  

}

// async function createUser(email, name, createdAt) {

// }
export {
  createUser,
  getUserByEmail
}