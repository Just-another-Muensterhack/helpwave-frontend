import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { registerRootComponent } from 'expo';
import { Text } from 'react-native';

import { OpenAPI } from './api';
import Homepage from './components/Homepage';
import { ColorSecondary } from './style-constants';

// further reading: https://blog.logrocket.com/generating-integrating-openapi-services-react/
OpenAPI.BASE = 'https://main.helpwave.de';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Homepage"
                    component={Homepage}
                    options={{
                        headerShadowVisible: false,
                        headerStyle: {
                            backgroundColor: ColorSecondary,
                        },
                        headerTitle: (props) => {
                            return (
                                //Replace Text with Toolbar
                                <Text style={{ color: 'white' }}>
                                    {props.children}
                                </Text>
                            );
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

registerRootComponent(App);
