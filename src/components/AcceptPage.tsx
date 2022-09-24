import { NavigationProp, RouteProp } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

import { DefaultService } from '../../api';
import { useAuth } from '../hooks/useAuth';
import { ColorSecondary } from '../style-constants';
import Hey from './Hey';
import Hr from './Hr';
import IconButton from './IconButton';

interface Props {
    navigation: NavigationProp<any>;
    route: RouteProp<{ params: { emergencyUuid: string } }>;
    emergencyUuid: string;
}

const AcceptPage: React.FC<Props> = ({ navigation, route }) => {
    useAuth();

    function accept() {
        DefaultService.emergencyAcceptEmergencyAcceptPost({
            uuid: route.params.emergencyUuid,
        })
            .then(() => {
                navigation.navigate('AcceptedPage', {});
            })
            .catch((e) => console.error(e));
    }

    function reject() {
        DefaultService.emergencyDenyEmergencyDenyPost({
            uuid: route.params.emergencyUuid,
        })
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

export default AcceptPage;
