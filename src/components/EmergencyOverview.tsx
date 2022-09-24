import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";

import { safeTranslate } from "../../assets/language/translationMap";
import HWText from "../components/HWText";
import { useLanguage } from "../hooks/useLanguage";
import {
  BorderRadius,
  ColorAccentPositive,
  ColorAccentWarn,
  ColorGrey,
  ColorSecondary,
  ColorTextPrimary
} from "../style-constants";
import Emergency from "./Emergency";

type EmergencyOverviewPageProps = {
  navigation: NavigationProp<any>;
};

const EmergencyOverviewPage: React.FC<EmergencyOverviewPageProps> = ({ navigation }) => {
  const currentLanguage = useLanguage().language;
  return (
    <View style={styles.container}>
      <View style={{ width: "85%", backgroundColor: ColorSecondary, marginTop: "28%", marginBottom: "20%" }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View
            style={{ flex: 1, flexDirection: "row", width: "50%" }}
          >
            <Image
              source={require("../../assets/profile-picture.png")}
              style={{
                resizeMode: "contain",
                width: 80,
                height: 80,
                borderRadius: 40
              }}
            />
            <Image
              source={require("../../assets/kadtze.png")}
              style={{
                resizeMode: "contain",
                width: 80,
                height: 80,
                borderRadius: 40,
                marginLeft: -40
              }}
            />
          </View>
          <View style={{ width: "50%" }}>
            <HWText style={{ color: "#ffffff", fontSize: 16 }}>
              {safeTranslate("Es sind schon", currentLanguage) +
                " "}
              <HWText style={{ color: ColorAccentPositive }}>
                {2}
              </HWText>{" "}
              {/* TODO update */}
              {" " +
                safeTranslate(
                  "Helfende auf dem Weg",
                  currentLanguage
                ) +
                "."}{" "}
            </HWText>
          </View>
        </View>
      </View>
      <View style={{ width: "85%", marginTop: 20 }}>
        <HWText
          style={{
            color: "#ffffff",
            fontSize: 24,
            textAlign: "center",
            lineHeight: 40
          }}
        >
          {safeTranslate("Bleibe", currentLanguage) + " "}
          <HWText style={{ color: ColorAccentPositive }}>
            {safeTranslate("ruhig", currentLanguage) + ", "}
          </HWText>
          {safeTranslate("mach auf dich", currentLanguage) + " "}
          <HWText style={{ color: ColorAccentPositive }}>
            {safeTranslate("aufmerksam", currentLanguage) + "."}
          </HWText>
        </HWText>
      </View>
      <View style={{marginTop: "30%",}}>
        <Pressable onPress={event => navigation.navigate("Emergency")} style={{
          height: 50,
          minWidth: 300,
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 12,
          paddingHorizontal: 20,

          marginBottom: "2.5%",
          borderColor: ColorTextPrimary,
          borderWidth: 2,
          borderRadius: BorderRadius,
          margin: 8,
          backgroundColor: ColorGrey
        }}>
          <HWText style={{color:ColorTextPrimary, fontSize:15}}>
            {safeTranslate("Meine Situation hat sich verändert", currentLanguage)}
          </HWText>
        </Pressable>
      </View>
    </View>
  );
};

export default EmergencyOverviewPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorSecondary,
    alignItems: "center",
    justifyContent: "flex-start"
  },

  emergencyText: {
    color: ColorTextPrimary,
    textAlign: "center",
    fontSize: 35
  },

  emergencyContainer: {
    backgroundColor: ColorAccentWarn,
    height: "26%",
    width: "66%",
    justifyContent: "center",
    display: "flex",
    borderRadius: BorderRadius,
    marginBottom: "12%"
  },

  settingsText: {
    color: ColorTextPrimary,
    textAlign: "center",
    fontSize: 18
  },

  settingsContainer: {
    backgroundColor: ColorGrey,
    height: "10%",
    width: "66%",
    justifyContent: "center",
    display: "flex",
    borderRadius: BorderRadius,
    marginBottom: "27%"
  }
});