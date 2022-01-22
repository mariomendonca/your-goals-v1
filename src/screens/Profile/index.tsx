import { TouchableOpacity } from 'react-native-gesture-handler'

import { useAuth } from '../../hooks/auth'
import { signOutUser } from '../../services/Users'
import { Container, Content, ExitText } from './styles'
import { Feather } from '@expo/vector-icons'

export function Profile() {
  const { setUid, setUser } = useAuth()

  return (
    <Container>
      <Content>
        <TouchableOpacity onPress={() => signOutUser(setUser, setUid)}>
          <ExitText>
            Logout
            <Feather name='arrow-right-circle' size={30}/>
          </ExitText>
        </TouchableOpacity>
      </Content>
    </Container>
  )
}