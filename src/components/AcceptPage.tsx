import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

import { ColorSecondary } from '../style-constants';
import Hey from './Hey';
import Hr from './Hr';
import IconButton from './IconButton';

interface Props {
    navigation: NavigationProp<any>;
}

const AcceptPage: React.FC<Props> = ({ navigation }) => {
    function accept() {
        // TODO

        navigation.navigate('AcceptedPage');
    }

    function reject() {
        // TODO
    }

    return (
        <View style={{ backgroundColor: ColorSecondary, flex: 1 }}>
            <Hey name="TODO" kind="can_you_help" />
            <Hr />
            <View style={{ marginTop: 50 }}>
                <IconButton
                    icon="tick"
                    text="ich kann helfen"
                    onPress={accept}
                />
                <IconButton
                    icon="x"
                    text="ich kann leider nicht helfen"
                    onPress={reject}
                />
            </View>
        </View>
    );
};

// FIXME: this is a temporary wrapper for navigation
// AcceptPage should get it's position prop from the backend
const Wrapper = ({ navigation }: any) => {
    return <AcceptPage navigation={navigation} />;
};

export default Wrapper;
