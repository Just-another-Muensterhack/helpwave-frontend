import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { registerRootComponent } from 'expo';
import React from 'react';

import { OpenAPI } from '../api';
import AcceptPage from './components/AcceptPage';
import AcceptedPage from './components/AcceptedPage';
import Banner from './components/Banner';
import Emergency from './components/Emergency';
import Homepage from './components/Homepage';
import { ProvideGraph } from './hooks/useGraph';
import { ColorAccentPositive, ColorSecondary } from './style-constants';

// further reading: https://blog.logrocket.com/generating-integrating-openapi-services-react/
OpenAPI.BASE = 'https://main.helpwave.de';

const Stack = createNativeStackNavigator();

const idkOptions = {
    headerTintColor: ColorAccentPositive,
    headerShadowVisible: false,
    headerStyle: {
        backgroundColor: ColorSecondary,
    },
    headerTitle: (_props) => {
        return <Banner />;
    },
    headerTitleAlign: 'center',
};

export default function App() {
    return (
        <ProvideGraph>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Homepage"
                        component={Homepage}
                        options={idkOptions}
                    />
                    <Stack.Screen
                        name="Emergency"
                        component={Emergency}
                        options={idkOptions}
                    />
                    <Stack.Screen
                        name="AcceptPage"
                        component={AcceptPage}
                        options={idkOptions}
                    />
                    <Stack.Screen
                        name="AcceptedPage"
                        component={AcceptedPage}
                        options={idkOptions}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </ProvideGraph>
    );
}

registerRootComponent(App);
