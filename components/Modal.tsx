import React from 'react'
import { View, Text, Button } from 'react-native'

type ModalProps = {
  question: string,
  answers: string[]
  onAnswer: (answer: string) => void
}

const Modal: React.FC<ModalProps> = ({ question, answers, onAnswer }) => {
  return (
    <View>
      <Text>{question}</Text>
      {answers.map((answer) => (
        <Button key={answer} title={answer} onPress={() => onAnswer(answer)} />
      ))}
    </View>
  )
}

export default Modal
