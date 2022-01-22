import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../screens/Home'
import { Loading } from '../screens/Loading/LoadingPage'
import { Feather } from '@expo/vector-icons'
import { colors } from '../styles/Colors'
import { Profile } from '../screens/Profile'

const { Navigator, Screen } = createBottomTabNavigator()

export function BottomTabs() {
  return (
    <Navigator 
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.secondary
      }}
    >
      <Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return <Feather name="check-circle" size={24} color={color} size={25} />
          }
        }}
      />
      <Screen 
        name='Test' 
        component={Home} 
        options={{
          tabBarIcon: ({ focused, color }) => {
            return <Feather name="bar-chart-2" size={24} color={color} size={25} />
          }
        }}
      />
      <Screen 
        name='Goals' 
        component={Loading} 
        options={{
          tabBarIcon: ({ focused, color }) => {
            return <Feather name="calendar" size={24} color={color} size={25} />
          }
        }}
      />
      <Screen 
        name='Profile' 
        component={Profile} 
        options={{
          tabBarIcon: ({ focused, color }) => {
            return <Feather name='user' size={24} color={color} size={25} />
          }
        }}
      />
    </Navigator>
  )
}