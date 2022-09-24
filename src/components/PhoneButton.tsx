import React from 'react';
import { Pressable, Linking, Image } from 'react-native';

const PhoneButton: React.FC = () => {
    const onPress = async () => {
        await Linking.openURL('tel://00000000');
    };

    return (
        <Pressable
            style={{
                borderRadius: 400,
                backgroundColor: 'green',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            onPress={onPress}
        >
            <Image
                source={require('../../assets/phone.png')}
                style={{ width: 200, height: 200, resizeMode: 'contain' }}
            />
        </Pressable>
    );
};

export default PhoneButton;
