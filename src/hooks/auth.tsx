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
  // createdAt: Date
}

type AuthContextData = {
  user: User;
  setUser: any;
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

  async function handleLogin() {
    const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthResponse

    if (type === 'success') {
      const { data } = await axios.get(`https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${params.access_token}`)
      console.log(data)
      
      const existentUser = await getUserByEmail(data.email)
      console.log('TESTE', existentUser)
      
      // if (!existentUser) {
      //   console.log('entrou')
        
      //   const response = await createUser(data.email, data.name)
        
      // }
      // setUser(existentUser)


      // const response = await getUserByEmail(data.email)



    }
  }

  return (
    <AuthContext.Provider value={{ user, setUser, handleLogin }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  return context
}

export { useAuth, AuthProvider }