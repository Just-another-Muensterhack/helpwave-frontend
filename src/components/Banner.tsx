import React from 'react';
import { View, Image } from 'react-native';

const Banner: React.FC = () => {
    return (
        <View
            style={{
                backgroundColor: 'black',
                width: '100%',
                alignItems: 'center',
            }}
        >
            <Image
                style={{ width: '50%', maxWidth: 150 }}
                source={require('../../assets/banner.png')}
            />
        </View>
    );
};

export default Banner;
