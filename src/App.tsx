import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { registerRootComponent } from 'expo';

import { OpenAPI } from './api';
import Homepage from './components/Homepage';

// further reading: https://blog.logrocket.com/generating-integrating-openapi-services-react/
OpenAPI.BASE = 'https://main.helpwave.de';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Homepage}
                    options={{ title: 'Homepage' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

registerRootComponent(App);