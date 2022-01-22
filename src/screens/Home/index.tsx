import { Container, Title } from './styles'
import { useAuth } from '../../hooks/auth'

export function Home() {
  const { user } = useAuth()

  return (
    <Container>
      <Title>Hi, {user.name}</Title>
    </Container>
  )
}
