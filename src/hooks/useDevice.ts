import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

import { DefaultService } from '../../api';

const fetchDeviceId = () =>
    DefaultService.userDeviceAddUserDevicePut().then(({ id }) => id);

export const useDevice = () => {
    const [uuid, setUuid] = useState<string | null>(null);
    useEffect(() => {
        AsyncStorage.getItem('@device_uuid')
            .then((maybeUuid: string | null) => {
                if (maybeUuid !== null) {
                    setUuid(maybeUuid);
                } else {
                    fetchDeviceId().then((uuid) => {
                        AsyncStorage.setItem('@device_uuid', uuid)
                            .then(() => setUuid(uuid))
                            .catch((e) => {
                                throw new Error(
                                    `Could not store newly created device uuid: ${e}`,
                                );
                            });
                    });
                }
            })
            .catch((e) => {
                throw new Error(`Could not get device uuid: ${e}`);
            });
    }, []);

    return uuid;
};
