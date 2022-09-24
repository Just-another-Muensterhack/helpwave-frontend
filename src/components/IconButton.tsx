import React from 'react';
import { Image, Text, Pressable } from 'react-native';

import { ColorGrey } from '../style-constants';

interface Props {
    icon: 'tick' | 'x';
    text: string;
    onPress: () => void;
}

const Button: React.FC<Props> = ({ icon, text, onPress }) => {
    return (
        <Pressable
            style={{
                flexDirection: 'row',
                backgroundColor: ColorGrey,
                padding: 20,
                alignItems: 'center',
                borderRadius: 20,
                marginVertical: 10,
                marginHorizontal: 15,
            }}
            onPress={onPress}
        >
            <Image
                style={{ height: 17, width: 17, resizeMode: 'contain' }}
                source={
                    icon === 'tick'
                        ? require('../../assets/tick.png')
                        : require('../../assets/x.png')
                }
            />
            <Text style={{ color: 'white' }}>{'   ' + text}</Text>
        </Pressable>
    );
};

export default Button;
