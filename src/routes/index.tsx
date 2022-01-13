import { NavigationContainer } from '@react-navigation/native'

import { useAuth } from '../hooks/auth'
import { AppRoutes } from './app.routes'

export function Routes() {
  const { user } = useAuth()

  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  )
}