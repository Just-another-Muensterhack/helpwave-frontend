import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { registerRootComponent } from 'expo';
import { useFonts } from 'expo-font';
import React, { useEffect, useState } from 'react';

import { OpenAPI } from '../api';
import AcceptPage from './components/AcceptPage';
import AcceptedPage from './components/AcceptedPage';
import Banner from './components/Banner';
import Emergency from './components/Emergency';
import EmergencyOverviewPage from './components/EmergencyOverview';
import Homepage from './components/Homepage';
import SettingsPage from './components/Settings';
import { ProvideGraph } from './hooks/useGraph';
import { ProvideLanguage } from './hooks/useLanguage';
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
    const [fontsLoaded] = useFonts({
        Inter: require('../assets/fonts/Inter.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <ProvideLanguage>
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
                            name="Settings"
                            component={SettingsPage}
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
                        <Stack.Screen
                            name="EmergencyOverview"
                            component={EmergencyOverviewPage}
                            options={idkOptions}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </ProvideGraph>
        </ProvideLanguage>
    );
}

registerRootComponent(App);
