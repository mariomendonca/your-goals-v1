import {
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
  useFonts
} from '@expo-google-fonts/dm-sans'
import AppLoading from 'expo-app-loading'
import { AuthProvider } from './src/hooks/auth'

import { Routes } from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }


  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}
