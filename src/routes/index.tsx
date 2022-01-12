import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useAuth } from '../hooks/auth'

import { Home } from '../pages/Home'
import { Login } from '../pages/Login'

export function Routes() {
  const { Navigator, Screen } = createStackNavigator()
  const { user } = useAuth()
  return (
    <NavigationContainer>
      {user.id ? (
        <Navigator screenOptions={{
          headerShown: false
        }}>
          {/* <Screen name='Login' component={Login} /> */}
          <Screen name='Home' component={Home} />
        </Navigator>
      ) : (
        <Login />
      )}
      {/* <Navigator screenOptions={{
        headerShown: false
      }}>
        <Screen name='Login' component={Login} />
        <Screen name='Home' component={Home} />
      </Navigator> */}
    </NavigationContainer>
  )
}