import { createStackNavigator } from '@react-navigation/stack'
import { BottomTabs } from './bottomTabs'

export function AppRoutes() {
  const { Navigator, Screen } = createStackNavigator()
  return (
    <Navigator screenOptions={{
      headerShown: false
    }}>
      <Screen name='BottomTab' component={BottomTabs} />
    </Navigator>
  )
}
