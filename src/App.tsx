import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { OpenAPI } from './api';
import Banner from './components/Banner';
import Modal from './components/Modal';

// further reading: https://blog.logrocket.com/generating-integrating-openapi-services-react/
OpenAPI.BASE = 'https://main.helpwave.de';

export default function App() {
    return (
        <View style={styles.container}>
            <Banner />
            <Modal
                question="wurde der Notruf bereits gewählt?"
                answers={['Ja', 'Nein']}
                onAnswer={console.log}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

registerRootComponent(App);
