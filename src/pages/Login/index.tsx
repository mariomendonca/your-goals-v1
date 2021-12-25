import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Container, Title } from './styles'

export function Login() {
  const { navigate } = useNavigation()

  function handleLogin() {
    navigate('Home')
  }

  return (
    <Container>
      <TouchableOpacity onPress={handleLogin}>
        <Title>Your goals</Title>
      </TouchableOpacity>
    </Container>
  )
}
