import React from 'react';
import { Pressable, Linking, Image, View } from 'react-native';

const PhoneButton: React.FC = () => {
    const onPress = async () => {
        await Linking.openURL('tel://00000000');
    };

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Pressable
                style={{
                    width: 220,
                    height: 220,
                    borderRadius: 400,
                    backgroundColor: 'green',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onPress={onPress}
            >
                <Image
                    source={require('../../assets/phone.png')}
                    style={{ width: 150, height: 150, resizeMode: 'contain' }}
                />
            </Pressable>
        </View>
    );
};

export default PhoneButton;
