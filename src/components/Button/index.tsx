import { RectButtonProps } from 'react-native-gesture-handler'
import { LoadingIndicator } from '../LoadingIndicator'
import { ButtonContainer, Text } from './styles'

type Props = RectButtonProps & {
  text: string
  loading?: boolean
}

export function Button({ text, loading, ...rest }: Props) {
  return (
    <ButtonContainer enabled={!loading} {...rest}>
      {loading ? <LoadingIndicator /> : <Text>{text}</Text>}
    </ButtonContainer>
  )
}