import React from 'react';
import { Image } from 'react-native';

const Banner: React.FC = () => {
    return <Image style={style} source={require('../../assets/banner.png')} />;
};

export default Banner;

const style = { width: 150, resizeMode: 'contain', position: 'static' };
