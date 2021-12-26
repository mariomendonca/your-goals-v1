import styled from 'styled-components/native'
import { colors } from '../../styles/Colors'
import { fonts } from '../../styles/Fonts'

export const Container = styled.View`
  flex: 1;
  background: ${colors.gray};
  justify-content: space-evenly;
  align-items: center;
  padding: 0 26px;
  padding-top: 80px;
`

export const Title = styled.Text`
  font-size: 35px;
  font-family: ${fonts.medium};
  color: ${colors.primary};
  margin-bottom: 10px;
  `

export const Subtitle = styled.Text`
  font-size: 24px;
  font-family: ${fonts.regular};
  color: ${colors.secondary};
  margin-bottom: 20px;
`

export const Content = styled.View`
  width: 100%;
`
