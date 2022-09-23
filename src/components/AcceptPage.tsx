import React from 'react';
import { View } from 'react-native';

import Map from './Map';

const AcceptPage: React.FC = () => {
    return (
        <View>
            <Map
                center={{ long: 0, lat: 0 }}
                marker={{ long: 0, lat: 0 }}
                zoom={5}
            />
        </View>
    );
};

export default AcceptPage;
