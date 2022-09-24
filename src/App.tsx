import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { registerRootComponent } from "expo";
import React from "react";

import { OpenAPI } from "./api";
import Banner from "./components/Banner";
import Emergency from "./components/Emergency";
import Homepage from "./components/Homepage";
import { ProvideGraph } from "./hooks/useGraph";
import { ColorAccentPositive, ColorSecondary } from "./style-constants";
import { Settings } from "react-native";
import SettingsPage from "./components/Settings";
import { ProvideLanguage } from "./hooks/useLanguage";

// further reading: https://blog.logrocket.com/generating-integrating-openapi-services-react/
OpenAPI.BASE = "https://main.helpwave.de";

const Stack = createNativeStackNavigator();

const idkOptions = {
  headerTintColor: ColorAccentPositive,
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: ColorSecondary
  },
  headerTitle: (_props) => {
    return <Banner />;
  },
  headerTitleAlign: "center"
};

export default function App() {
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
          </Stack.Navigator>
        </NavigationContainer>
      </ProvideGraph>
    </ProvideLanguage>
  );
}

registerRootComponent(App);
