import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { OpenAPI } from './api';
import graph from './api/graph';
import Emergency from './components/Emergency';
import Modal from './components/Modal';

// further reading: https://blog.logrocket.com/generating-integrating-openapi-services-react/
OpenAPI.BASE = 'https://main.helpwave.de';

export default function App() {
    return (
        <View style={styles.container}>
            <Emergency graph={graph} />
            <Text>Open up App.tsx to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

registerRootComponent(App);
