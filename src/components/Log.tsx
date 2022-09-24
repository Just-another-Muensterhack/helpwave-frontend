import React from 'react';
import { View, FlatList, Text } from 'react-native';

import { Event } from '../utils/types';

interface LogProps {
    events: Event[];
}

const Item: React.FC<{ event: Event }> = ({ event }) => {
    return (
        <View
            style={{ flexDirection: 'row', alignItems: 'flex-end', padding: 5 }}
        >
            <Text style={{ fontSize: 20, paddingRight: 2, opacity: 0.7 }}>
                {date2String(event.date)} Uhr -{' '}
            </Text>
            <Text style={{ fontSize: 20 }}>{event.text}</Text>
        </View>
    );
};

const Log: React.FC<LogProps> = ({ events }) => {
    return (
        <View style={{ padding: 15, backgroundColor: 'white' }}>
            <Text style={{ fontSize: 30, fontWeight: '700', padding: 5 }}>
                Details
            </Text>
            <FlatList
                data={events}
                renderItem={({ item: event }) => Item({ event })}
            />
        </View>
    );
};

function date2String(date: Date): string {
    return `${padding(date.getHours())}:${padding(date.getMinutes())}`;
}

function padding(n: number): string {
    if (n >= 10) return '' + n;
    else return '0' + n;
}

export default Log;
