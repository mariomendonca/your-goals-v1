import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import * as AuthSession from 'expo-auth-session'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { authUrl } from '../config/variables'
import { createUser, signIn } from '../services/users'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

type User = {
  email: string;
  name: string;
  createdAt: object
}

type AuthContextData = {
  user: User;
  loading: boolean,
  uid: string,
  setUser: Dispatch<SetStateAction<User>>,
  setUid: Dispatch<SetStateAction<string>>,
  handleLogin: () => Promise<any>,
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
  const [uid, setUid] = useState<string>('')
  const [loading, setLoading] = useState(true)

  async function handleLogin() {
    const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthResponse

    if (type === 'success') {
      const { data } = await axios.get(`https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${params.access_token}`)

      setLoading(true)
      try {
        const userSigned = await signIn(data.id, data.email, setUser)
        
        return userSigned
      } catch {
        const userCreated = await createUser(data.id, data.email, setUser)
        
        return userCreated
      } finally {
        setLoading(false)
      }
    }
  }

  async function loadUser() {
    const auth = getAuth()
    
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUid(user.uid)
        const userLoaded = await AsyncStorage.getItem('@yg/user')
        if(userLoaded) {
          setUser(JSON.parse(userLoaded))
        }
      }

      setLoading(false)
    })

  }



  useEffect(() => {
    loadUser()
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading, uid, setUser, handleLogin, setUid }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  return context
}

export { useAuth, AuthProvider }