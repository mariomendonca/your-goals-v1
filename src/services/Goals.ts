import { getAuth } from 'firebase/auth'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../config/firebase'

const auth = getAuth()

export async function getGoals(userId: string) {
  const q = query(collection(db, 'Goals'), where('userId', '==', userId))
  const list:any = []
  const response = await getDocs(q)

  response.forEach((doc) => {
    const data = doc.data()
    const id = doc.id
    list.push({...data, id})
  })
  console.log(list)
  
  return list
}
