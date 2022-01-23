import styled from 'styled-components/native'
import { colors } from '../../styles/Colors'
import { fonts } from '../../styles/Fonts'

export const Container = styled.View`
  flex: 1;
  background: ${colors.gray};
  padding: 0 20px;
  `

export const Content = styled.SafeAreaView`
  flex: 1;
  background: ${colors.gray};
`

export const Title = styled.Text`
  font-size: 28px;
  font-family: ${fonts.medium};
  color: ${colors.primary};
  margin-bottom: 20px;
`

export const GoalContainer = styled.View`
  width: 100%;
  border-radius: 20px;
  background: ${colors.white};
  border: 1px solid ${colors.primary};
  margin-bottom: 20px;
  padding: 20px;
`

export const GoalTitle = styled.Text`
  font-size: 20;
  font-family: ${fonts.medium};
  color: ${colors.primary};
  margin-bottom: 10px;
`

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

export const List = styled.FlatList`
  width: 100%;
  flex: 1;
`
