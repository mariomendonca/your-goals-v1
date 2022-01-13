import styled from 'styled-components/native'
import { LoadingIndicator } from '../../components/LoadingIndicator'
import { colors } from '../../styles/Colors'

const Container = styled.View`
  flex: 1;
  background: ${colors.primary};
  justify-content: center;
  align-items: center;
`

export function Loading() {
  return (
    <Container>
      <LoadingIndicator />
    </Container>
  )
}