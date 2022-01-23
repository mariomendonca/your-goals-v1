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

export function Home() {
  const { user, uid } = useAuth()

  const [goals, setGoals] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isDone, setIsDone] = useState(false)

  async function handleGetGoals() {
    const response = await getGoals(uid)
    setGoals(response)
    setLoading(false)
  }

  useEffect(() => {
    handleGetGoals()
  }, [])

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
                  <Todo key={index} onPress={() => setIsDone(!isDone)}>
                    <Checkbox
                      value={isDone}
                      onValueChange={setIsDone}
                      style={{ borderRadius: 6, height: 25, width: 25 }}
                      color={isDone ? colors.primary : colors.darkGray}
                    />
                    <TodoText>{item}</TodoText>
                  </Todo>
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
