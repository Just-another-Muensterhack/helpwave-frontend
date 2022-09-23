import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { registerRootComponent } from 'expo';

import { OpenAPI } from './api';
import Banner from './components/Banner';
import Homepage from './components/Homepage';
import { ColorPrimary, ColorSecondary } from './style-constants';

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
                        headerTintColor: ColorPrimary,
                        headerShadowVisible: false,
                        headerStyle: {
                            backgroundColor: ColorSecondary,
                        },
                        headerTitle: (_props) => {
                            return <Banner />;
                        },
                        headerTitleAlign: 'center',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

registerRootComponent(App);
