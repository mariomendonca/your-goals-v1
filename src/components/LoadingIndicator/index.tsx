import { ActivityIndicator } from 'react-native'
import { colors } from '../../styles/Colors'

export function LoadingIndicator() {
  return (
    <ActivityIndicator color={colors.gray} size='large'/>
  )
}