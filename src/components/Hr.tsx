import React from 'react';
import { View } from 'react-native';

const Hr: React.FC = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <View
                style={{
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                    width: '70%',
                }}
            />
        </View>
    );
};

export default Hr;
