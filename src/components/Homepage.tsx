import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import {
    BorderRadius,
    ColorAccentWarn,
    ColorGrey,
    ColorSecondary,
    ColorTextPrimary,
} from '../style-constants';
import HWText from './HWText';

type HomepageProps = {
    navigation: NavigationProp<any>;
};

const Homepage: React.FC<HomepageProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Pressable
                style={styles.emergencyContainer}
                onPress={() => {
                    navigation.navigate('Emergency', {});
                }}
            >
                <HWText style={styles.emergencyText}>Notfall</HWText>
            </Pressable>
            <Pressable style={styles.settingsContainer}>
                <HWText
                    style={styles.settingsText}
                    onPress={() => navigation.navigate('Settings', {})}
                >
                    Einstellungen
                </HWText>
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
        justifyContent: 'center',
    },

    emergencyText: {
        color: ColorTextPrimary,
        textAlign: 'center',
        fontSize: 35,
    },

    emergencyContainer: {
        backgroundColor: ColorAccentWarn,
        height: '26%',
        width: '66%',
        justifyContent: 'center',
        display: 'flex',
        borderRadius: BorderRadius,
        marginBottom: '12%',
    },

    settingsText: {
        color: ColorTextPrimary,
        textAlign: 'center',
        fontSize: 18,
    },

    settingsContainer: {
        backgroundColor: ColorGrey,
        height: '10%',
        width: '66%',
        justifyContent: 'center',
        display: 'flex',
        borderRadius: BorderRadius,
        marginBottom: '27%',
    },
});
