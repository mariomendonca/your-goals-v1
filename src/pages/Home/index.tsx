import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { db } from '../../config/firebase'
import { collection, getDocs, getDoc, doc, query, where } from 'firebase/firestore'


import { Container, Title } from './styles'

export function Home() {
  const { goBack } = useNavigation()

  function backToLogin() {
    goBack()
  }

  const usersCollectionRef = collection(db, 'Users')
  const userRef = doc(db, 'Users', 'ipOKkl4TWRmJcgOfG23h')

  // const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      // const user = await 

      // const data = await getDocs(usersCollectionRef)
      // const user = await getDocs(usersCollectionRef)
      // const user = await getDoc(userRef)
      const q = query(usersCollectionRef, where('email', '==', 'hello@world.com'))
      const user = await getDocs(q)
      const data = user.forEach((doc) => console.log(doc.data(), doc.id))
      // console.log(data)
      
      // console.log(data.docs)
      // setUsers(data.docs.map(doc => ({...doc.data(), id: doc.id})))
      
    }

    getUsers()
  }, [])
  return (
    <Container>
      {/* {console.log('TESTING USER', users)} */}
      <TouchableOpacity onPress={backToLogin}>
        <Title>Home</Title>
      </TouchableOpacity>
    </Container>
  )
}
