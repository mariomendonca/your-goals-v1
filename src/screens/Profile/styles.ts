import styled from 'styled-components/native'
import { colors } from '../../styles/Colors'
import { fonts } from '../../styles/Fonts'

export const Container = styled.View`
  flex: 1;
  background: ${colors.gray};
  `

export const ExitText = styled.Text`
  font-size: 26px;
  font-family: ${fonts.bold};
  color: ${colors.secondary};
`

export const Content = styled.SafeAreaView`
  flex: 1;
  /* background: ${colors.primary}; */
  justify-content: center;
  align-items: center;
`