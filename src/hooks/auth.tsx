import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import * as AuthSession from 'expo-auth-session'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { authUrl } from '../config/variables'
import { createUser, signIn } from '../services/users'
import AppLoading from 'expo-app-loading'

type User = {
  id: string;
  email: string;
  name: string;
}

type AuthContextData = {
  user: User;
  setUser: any;
  handleLogin: () => Promise<any>
}

type AuthProviderProps = {
  children: ReactNode
}

type AuthResponse = {
  type: string
  params: {
    access_token: string
  }
}

const AuthContext = createContext({} as AuthContextData)

function AuthProvider({ children }: AuthProviderProps) {
  // const [user, setUser] = useState<User>({} as User)
  const [user, setUser] = useState<any>()
  const [loading, setLoading] = useState(false)

  async function handleLogin() {
    const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthResponse

    if (type === 'success') {
      const { data } = await axios.get(`https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${params.access_token}`)

      try {
        const user = signIn(data.id, data.email, setUser)
        return user
      } catch {
        const user = createUser(data.id, data.email, setUser)
        return user
      }
    }
  }

  useEffect(() => {
    async function loadUser() {
      setLoading(true)
      const userLoaded = await AsyncStorage.getItem('@yg/user')
      if (userLoaded) {
        setUser(JSON.parse(userLoaded))
      }
      setLoading(false)
    }
    loadUser()
  }, [])

  // if (loading) {
  //   return <AppLoading />
  // }

  return (
    <AuthContext.Provider value={{ user, setUser, handleLogin }}>
      {console.log('user', user)}
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  return context
}

export { useAuth, AuthProvider }