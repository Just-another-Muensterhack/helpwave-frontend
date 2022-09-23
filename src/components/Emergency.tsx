import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type EmergencyLog = {
    timestamp: number;
    key: string;
    value: string;
};

type EmergencyProps = {
    graph: object;
};

const Emergency: React.FC<EmergencyProps> = (props) => {
    const [logs, setLogs] = useState<EmergencyLog[]>([]);
    const appendLog = (log: EmergencyLog) => setLogs((logs) => [...logs, log]);

    const sendLogs = async (logs: EmergencyLog[]): Promise<void> => {
        // TODO: Implement
    };

    useEffect(() => {
        if (logs.length <= 0) return;
        sendLogs(logs).then(() => {
            setLogs([]);
        });
    }, [logs]);

    return (
        <View>
            <Text style={styles.question}>Emergency</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    question: {
        textAlign: 'center',
        marginTop: 24,
        marginBottom: 16,
        marginLeft: 16,
        marginRight: 16,
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default Emergency;
