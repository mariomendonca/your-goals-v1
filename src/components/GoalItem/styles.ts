import styled from 'styled-components/native'
import { colors } from '../../styles/Colors'
import { fonts } from '../../styles/Fonts'



export const Todo = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`

export const TodoText = styled.Text`
  font-family: ${fonts.regular};
  font-size: 16px;
  color: ${colors.primary};
  margin-left: 5px;
`
