import { createContext, ReactNode, useContext, useState } from 'react'
import * as AuthSession from 'expo-auth-session'

import { authUrl } from '../config/variables'
import { Alert } from 'react-native'
import axios from 'axios'
import { createUser, getUserByEmail } from '../services/users'

type User = {
  id: string;
  email: string;
  name: string;
  createdAt: Date
}

type AuthContextData = {
  user: User;
  setUser: any;
  loading: boolean;
  handleLogin: () => Promise<void>
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
  const [user, setUser] = useState<User>({} as User)
  const [loading, setLoading] = useState(false)
  
  async function handleLogin() {
    try {
      setLoading(true)
      const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthResponse
      
      if (type === 'success') {
        const { data } = await axios.get(`https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${params.access_token}`)
        
        // const response = await createUser(data.email, data.name)
        const response = await getUserByEmail(data.email)

        
        

        // navigate('Home')
      }
      setLoading(false)
    } catch {
      Alert.alert('Algo inesperado aconteceu')
    }
  }

  return (
    <AuthContext.Provider value={{ user, setUser, loading, handleLogin }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  return context
}

export { useAuth, AuthProvider }