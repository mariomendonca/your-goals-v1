import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'

export function AppRoutes() {
  const { Navigator, Screen } = createStackNavigator()
  return (
    <Navigator screenOptions={{
      headerShown: false
    }}>
      <Screen name='Login' component={Login} />
      <Screen name='Home' component={Home} />
    </Navigator>
  )
}
