import {
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
  useFonts
} from '@expo-google-fonts/dm-sans'
import {
  Nunito_400Regular,
  Nunito_700Bold,
  Nunito_800ExtraBold
} from '@expo-google-fonts/nunito'

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_800ExtraBold
} from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading'
import { AuthProvider } from './src/hooks/auth'

import { Routes } from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,

    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,

    Nunito_400Regular,
    Nunito_700Bold,
    Nunito_800ExtraBold
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
