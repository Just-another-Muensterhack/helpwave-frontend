import React from 'react';
import { View, Image } from 'react-native';

const Banner: React.FC = () => {
    return (
        <View
            style={{
                width: '100%',
                alignItems: 'center',
            }}
        >
            <Image
                style={{ width: '50%', maxWidth: 150 }}
                source={require('../../assets/banner.svg')}
            />
        </View>
    );
};

export default Banner;
