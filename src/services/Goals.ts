import { getAuth } from 'firebase/auth'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../config/firebase'

const auth = getAuth()

export async function getGoals(userId: string) {
  const weekDay = new Date().getDay()
  const q = query(collection(db, 'Goals'), where('userId', '==', userId), where(`days.${weekDay}`, '==', true))
  const list: any = []
  const response = await getDocs(q)

  response.forEach((doc) => {
    const data = doc.data()
    const id = doc.id
    list.push({ ...data, id })
  })

  return list
}
