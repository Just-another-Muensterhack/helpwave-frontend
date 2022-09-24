import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

import { DefaultService, OpenAPI } from '../../api';

const getNewDeviceId = () =>
    DefaultService.userDeviceAddUserDevicePut().then(({ id }) => id);

const getNewToken = () => DefaultService.userCreateUserCreatePost();

export const useAuth = () => {
    const [deviceId, setDeviceId] = useState<string | null>(null);
    const [authToken, setAuthToken] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            let [token, uuid] = await Promise.all([
                AsyncStorage.getItem('@auth_token'),
                AsyncStorage.getItem('@device_uuid'),
            ]);

            if (!token) {
                token = (await getNewToken()).id;
            }

            await AsyncStorage.setItem('@auth_token', token);
            OpenAPI.TOKEN = token;
            setAuthToken(token);

            if (!uuid) {
                uuid = await getNewDeviceId();
            }

            await AsyncStorage.setItem('@auth_token', token);
            setDeviceId(uuid);
        })();
    }, []);

    return { authToken, deviceId };
};
