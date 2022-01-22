import { useNavigation } from '@react-navigation/native'
// import { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

// import { db } from '../../config/firebase'
// import { collection, getDocs, getDoc, doc, query, where } from 'firebase/firestore'


import { Container, Title } from './styles'
import { useAuth } from '../../hooks/auth'
import { Text } from 'react-native'
import { signOutUser } from '../../services/users'

export function Home() {
  const { goBack } = useNavigation()
  const { user, setUser, setUid } = useAuth()

  async function handleSignOut() {
    await signOutUser(setUser, setUid)
    // goBack()
  }


  return (
    <Container>
      <TouchableOpacity onPress={handleSignOut}>
        <Title>Home</Title>
      </TouchableOpacity>

      <Text>Hello</Text>
      <Text>{user.email}</Text>
    </Container>
  )
}
