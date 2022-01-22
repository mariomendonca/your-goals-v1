import { TouchableOpacity } from 'react-native-gesture-handler'
import { useAuth } from '../../hooks/auth'
import { signOutUser } from '../../services/users'
import { Container, Content, ExitText } from './styles'

export function Profile() {
  const { setUid, setUser } = useAuth()

  return (
    <Container>
      <Content>

        <TouchableOpacity onPress={() => signOutUser(setUser, setUid)}>
          <ExitText>
            Logout
          </ExitText>
        </TouchableOpacity>
      </Content>
    </Container>
  )
}