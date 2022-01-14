import { useNavigation } from '@react-navigation/native'
import { Container, Content, Title, Subtitle } from './styles'
import { Button } from '../../components/Button'

import GoalsSVG from '../../assets/goals.svg'
import { useAuth } from '../../hooks/auth'
import { useState } from 'react'
import { Alert } from 'react-native'

// type Profile = {
//   email: string;
//   family_name: string;
//   given_name: string;
//   id: string;
//   locale: string;
//   name: string;
//   picture: string;
// }

export function Login() {
  const { navigate } = useNavigation()
  const { handleLogin } = useAuth()
  const [loading, setLoading] = useState(false)

  async function handleSignIn() {
    setLoading(true)
    try {
      const response = await handleLogin()
      if (response) {
        navigate('Home')
      }
    } catch {
      Alert.alert('Algo inesperado aconteceu')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container>
      <GoalsSVG width={300} height={200} />
      <Content>
        <Title>Your Goals</Title>
        <Subtitle>Set goals and achieve your dreams!</Subtitle>
        <Button text='Login' loading={loading} onPress={handleSignIn} />
      </Content>
    </Container>
  )
}
