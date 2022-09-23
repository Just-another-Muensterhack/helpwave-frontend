import React from 'react';
import { Image } from 'react-native';

const Banner: React.FC = () => {
    return (
        <Image
            style={{ width: '90%', maxWidth: 150, resizeMode: 'contain' }}
            source={require('../../assets/banner.png')}
        />
    );
};

export default Banner;
