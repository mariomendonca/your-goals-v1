import { useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native'
import Checkbox from 'expo-checkbox'

import {
  Container,
  Content,
  GoalContainer,
  GoalTitle,
  List,
  Title,
  Todo,
  TodoText
} from './styles'
import { useAuth } from '../../hooks/auth'
import { getGoals } from '../../services/Goals'
import { colors } from '../../styles/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { GoalItem } from '../../components/GoalItem'

export function Home() {
  const { user, uid } = useAuth()

  const [goals, setGoals] = useState(null)
  const [loading, setLoading] = useState(true)

  async function handleGetGoals() {
    const response = await getGoals(uid)
    setGoals(response)
    setLoading(false)
  }

  useEffect(() => {
    handleGetGoals()
  }, [])

  const date1 = new Date().setHours(0, 0, 0, 0)
  const date = new Date(date1)
  return (
    <Container>
      <Content>

        <Title>Hi, {user.name}</Title>
        {!loading ? (
          <List
            data={goals}
            keyExtractor={goals.id}
            renderItem={({ item }: any) => (
              <GoalContainer>
                <GoalTitle>{item.title}</GoalTitle>
                {item.todos.map((item: any, index: number) => (
                  <GoalItem key={index} item={item} />
                ))}
              </GoalContainer>
            )}
          />
        ) : (
          <ActivityIndicator />
        )}

      </Content>
    </Container>
  )
}
