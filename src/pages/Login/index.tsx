import { useNavigation } from '@react-navigation/native'
import * as AuthSession from 'expo-auth-session'
import { Container, Title } from './styles'
import { CLIENT_ID, REDIRECT_URI, RESPONSE_TYPE } from '../../config/variables'
import { Alert } from 'react-native'
import { useState } from 'react'
import { Button } from '../../components/Button'

type AuthResponse = {
  type: string
  params: {
    access_token: string
  }
}

type Profile = {
  email: string;
  family_name: string;
  given_name: string;
  id: string;
  locale: string;
  name: string;
  picture: string;
}

export function Login() {
  const SCOPE = encodeURI('profile email')
  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`
  const { navigate } = useNavigation()
  const [loading, setLoading] = useState(false)

  async function handleLogin() {
    try {
      setLoading(true)
      const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthResponse
      if (type === 'success') {
        const response = await fetch(`https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${params.access_token}`)
        const user = await response.json()

        navigate('Home', { user })
      }
      setLoading(false)
    } catch {
      Alert.alert('Algo inesperado aconteceu')
    }
  }

  return (
    <Container>
      <Title>Your goals</Title>
      <Button text='Entrar' loading={loading} onPress={handleLogin} />
    </Container>
  )
}
