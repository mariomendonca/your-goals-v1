import { NavigationContainer } from '@react-navigation/native'

import { useAuth } from '../hooks/auth'
import { Login } from '../pages/Login'
import { AppRoutes } from './app.routes'

export function Routes() {
  const { uid } = useAuth()

  return (
    <NavigationContainer>
      {uid ? <AppRoutes /> : <Login />}
    </NavigationContainer>
  )
}