import Checkbox from 'expo-checkbox'
import { useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { colors } from '../../styles/Colors'
import {
  Todo,
  TodoText
} from './styles'

export function GoalItem({ item }: any) {
  const [isDone, setIsDone] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleCheck() {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setIsDone(!isDone)
    }, 2000)
  }


  return (
    <Todo onPress={handleCheck} disabled={loading}>
      <Checkbox
        value={isDone}
        onValueChange={setIsDone}
        style={{ borderRadius: 6, height: 25, width: 25 }}
        color={isDone ? colors.primary : colors.darkGray}
      />
      <TodoText>{item}</TodoText>
      {loading && <ActivityIndicator style={{marginLeft: 5}} color={colors.primary} size='small'/>}
    </Todo>
  )
}