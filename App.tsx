import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { OpenAPI } from './api';
import Modal from './components/Modal'

// further reading: https://blog.logrocket.com/generating-integrating-openapi-services-react/
OpenAPI.BASE = "https://main.helpwave.de";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Modal question={'idk?'} answers={[
        'yes', 'no'
      ]} onAnswer={console.log} />
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
