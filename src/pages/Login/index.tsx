import { useNavigation } from '@react-navigation/native'
import { Container, Content, Title, Subtitle } from './styles'
import { Button } from '../../components/Button'

import GoalsSVG from '../../assets/goals.svg'
import { useAuth } from '../../hooks/auth'

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
  const { loading, handleLogin } = useAuth()
  
  return (
    <Container>
      <GoalsSVG width={300} height={200}/>
      <Content>
        <Title>Your goals</Title>
        <Subtitle>Set goals and achieve your dreams!</Subtitle>
        <Button text='Login' loading={loading} onPress={handleLogin} />
        {/* <Button text='Login' onPress={() => navigate('Home')} /> */}
      </Content>
    </Container>
  )
}
