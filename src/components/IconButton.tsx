import React from 'react';
import { Image, Pressable } from 'react-native';

import { ColorGrey } from '../style-constants';
import HWText from './HWText';

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
            <HWText style={{ color: 'white' }}>{'   ' + text}</HWText>
        </Pressable>
    );
};

export default Button;
