import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Title } from './styles';

export function Home() {
  const { goBack } = useNavigation()

  function backToLogin() {
    goBack()
    return
  }
  return (
    <Container>
      <TouchableOpacity onPress={backToLogin}>
        <Title>Home</Title>
      </TouchableOpacity>
    </Container>
  );
}
