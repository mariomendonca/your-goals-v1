import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

export function Routes() {
  const { Navigator, Screen } = createStackNavigator()
  return (
    <NavigationContainer>
      <Navigator screenOptions={{
        headerShown: false
      }}>
        <Screen name='Login' component={Login} />
        <Screen name='Home' component={Home} />
      </Navigator>
    </NavigationContainer>
  )
}