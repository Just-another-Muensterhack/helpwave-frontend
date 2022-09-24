import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

import { DefaultService } from '../../api';
import { ColorSecondary } from '../style-constants';
import Hey from './Hey';
import Hr from './Hr';
import IconButton from './IconButton';

interface Props {
    navigation: NavigationProp<any>;
}

const AcceptPage: React.FC<Props> = ({ navigation }) => {
    function accept() {
        DefaultService.emergencyAcceptEmergencyAcceptPost()
            .then(() => {
                navigation.navigate('AcceptedPage', {});
            })
            .catch((e) => console.error(e));
    }

    function reject() {
        DefaultService.emergencyDenyEmergencyDenyPost()
            .then(() => {
                navigation.navigate('Homepage', {});
            })
            .catch((e) => console.error(e));
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
