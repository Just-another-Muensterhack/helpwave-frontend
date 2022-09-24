import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { DefaultService } from '../../api';
import { LongLat, Event } from '../utils/types';
import Log from './Log';
import Map from './Map';

interface Props {
    position: LongLat;
}

const AcceptedPage: React.FC<Props> = ({ position }) => {
    const [events, setEvents] = useState([] as Event[]);

    useEffect(() => {
        // poll-loop new events for 30 mins
        repeatNMinsLongEveryMSeconds(30, 30, () => {
            DefaultService.emergencyLogInfoEmergencyLogGet()
                .then((resp) => {
                    setEvents(
                        resp.questions.map(
                            ({ question, answer, time }: any) => ({
                                text: question + ' ' + answer, // TODO: replace with hint
                                date: new Date(time),
                            }),
                        ),
                    );
                })
                .catch((e) => console.error(e));
        });
    }, []);

    return (
        <View>
            <Map center={position} marker={position} zoom={5} />
            <Log events={events} />
        </View>
    );
};

// FIXME: this is a temporary wrapper for navigation
// AcceptedPage should get it's position prop from the backend
const Wrapper = () => {
    return <AcceptedPage position={{ long: 0, lat: 0 }} />;
};

function repeatNMinsLongEveryMSeconds(N: number, M: number, f: () => void) {
    let counter = (N * 60) / M;
    function tick() {
        f();
        counter--;
        if (counter > 0) setTimeout(tick, M * 1000);
    }
    setTimeout(tick, M * 1000);
}

export default Wrapper;
