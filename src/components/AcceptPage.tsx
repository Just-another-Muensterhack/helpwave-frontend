import React from 'react';
import { View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

const Homepage: React.FC = () => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <MapView
                style={{
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').height,
                }}
            />
        </View>
    );
};

export default Homepage;
