import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import { colors } from '../../styles/Colors'
import { fonts } from '../../styles/Fonts'

export const ButtonContainer = styled(RectButton)`
  width: 100%;
  height: 55px;
  background: ${colors.primary};
  border-radius: 8px;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`

export const Text = styled.Text`
  font-size: 26px;
  font-family: ${fonts.medium};
  color: ${colors.gray};
`
