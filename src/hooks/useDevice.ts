import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

// const fetchDeviceId = () =>
//     fetch('https://main.helpwave.de/user/device', {
//         method: 'PUT',
//     })
//         .then((res) => res.json())
//         .then(({ id }) => id);
const fetchDeviceId = () => Promise.resolve('1234567890');

export const useDevice = () => {
    const [uuid, setUuid] = useState<string | null>(null);
    useEffect(() => {
        AsyncStorage.getItem('@device_uuid')
            .then((maybeUuid) => {
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
