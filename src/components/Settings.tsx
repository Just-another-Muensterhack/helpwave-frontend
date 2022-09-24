import { NavigationProp } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { Image, Pressable, SectionList, StyleSheet, Text, View } from "react-native";
import {
  BorderRadius,
  ColorGrey,
  ColorGreySecondary,
  ColorPrimary,
  ColorSecondary,
  ColorTextPrimary
} from "../style-constants";
import { useLanguage } from "../hooks/useLanguage";
import SelectDropdown from "react-native-select-dropdown";
import { safeTranslate } from "../../assets/language/translationMap";

type SettingsPageProps = {
  navigation: NavigationProp<any>;
};

const boxWidth = "85%";


const SettingsPage: React.FC<SettingsPageProps> = ({ navigation }) => {
  let languageProvider = useLanguage();
  let currentLanguage = languageProvider.language;


  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={{ width: 80, height: 80, marginLeft: 20 }}>
          <Image source={require("../../assets/profile-picture.png")}
                 style={{ resizeMode: "contain", width: 80, height: 80, borderRadius: 40 }} />
        </View>
        <Pressable onPress={() => {
          // Forward to Accountpage
        }} style={{ display: "flex", justifyContent: "center", flex: 1, height: 80, paddingRight: 20 }}>
          <Text style={{
            color: ColorTextPrimary,
            textAlign: "right"
          }}>{safeTranslate("Helfer Account", currentLanguage) + ">"}</Text>
        </Pressable>
      </View>

      <View style={{
        width: boxWidth,
        backgroundColor: ColorGreySecondary,
        borderRadius: BorderRadius,
        display: "flex",
        alignItems: "baseline",
        flexDirection: "row",
      }}>
        <View style={{ flex: 1, paddingLeft: 20}}>
          <Text style={{ color: ColorTextPrimary, textAlign: "left" }}>
            {safeTranslate("Sprache", currentLanguage)}
          </Text>
        </View>
        <Pressable onPress={() => {
          if (currentLanguage === "Deutsch") {
            languageProvider.setLanguage("English");
          } else {
            languageProvider.setLanguage("Deutsch");
          }
        }}>
          <View style={{
            backgroundColor: ColorGrey,
            borderRadius: BorderRadius / 2,
            width: 80,
            height: 40,
            margin: 15,
            marginRight: 20,
            borderColor: ColorPrimary,
            borderWidth: 2,
            display: "flex", justifyContent: "center"
          }}>
            <Text style={{ color: ColorTextPrimary, textAlign: "center" }}>{currentLanguage}</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorSecondary,
    alignItems: "center"
  },

  profileContainer: {
    width: boxWidth,
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "row",
    borderRadius: BorderRadius,
    backgroundColor: ColorGreySecondary,
    paddingVertical: 20,
    marginVertical: "5%"
  },

  buttonStyle: {
    width: "40%",
    height: 50,
    color: ColorPrimary,
    backgroundColor: ColorGrey,
    borderRadius: 8,
    borderColor: ColorTextPrimary,
    borderWidth: 2
  }

});

export default SettingsPage;
