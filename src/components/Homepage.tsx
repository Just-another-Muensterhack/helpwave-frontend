import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import {
    ColorAccentPositive,
    ColorAccentWarn,
    ColorPrimary,
    ColorSecondary,
} from '../style-constants';

type HomepageProps = {
    navigation: NavigationProp<any>;
};

const Homepage: React.FC<HomepageProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.emergencyContainer}>
                <Text
                    style={styles.emergencyText}
                    onPress={() => navigation.navigate('Emergency', {})}
                >
                    Emergency
                </Text>
            </Pressable>
            <Pressable style={styles.settingsContainer}>
                <Text
                    style={styles.settingsText}
                    onPress={() => navigation.navigate('Settings', {})}
                >
                    Einstellungen
                </Text>
            </Pressable>
        </View>
    );
};

export default Homepage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorSecondary,
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    emergencyText: {
        color: ColorPrimary,
        textAlign: 'center',
        fontSize: 32,
    },

    emergencyContainer: {
        backgroundColor: ColorAccentWarn,
        height: '25%',
        width: '60%',
        justifyContent: 'center',
        display: 'flex',
        borderRadius: 10,
    },

    settingsText: {
        color: ColorPrimary,
        textAlign: 'center',
        fontSize: 18,
    },

    settingsContainer: {
        backgroundColor: ColorAccentPositive,
        height: '10%',
        width: '60%',
        justifyContent: 'center',
        display: 'flex',
        borderRadius: 10,
    },
});
