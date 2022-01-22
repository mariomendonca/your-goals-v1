import { NavigationContainer } from '@react-navigation/native'

import { Loading } from '../screens/Loading/LoadingPage'
import { Login } from '../screens/Login'
import { AppRoutes } from './app.routes'

import { useAuth } from '../hooks/auth'

export function Routes() {
  const { uid, loading } = useAuth()

  if (loading) {
    return <Loading />
  }

  return (
    <NavigationContainer>
      {uid ? <AppRoutes /> : <Login />}
    </NavigationContainer>
  )
}