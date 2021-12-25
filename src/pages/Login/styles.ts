import styled from 'styled-components/native'
import { colors } from '../../styles/Colors';
import { fonts } from '../../styles/Fonts';

export const Container = styled.View`
  flex: 1;
  background: ${colors.gray};
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

export const Title = styled.Text`
  font-size: 35px;
  font-family: ${fonts.medium};
  color: ${colors.primary};
`
