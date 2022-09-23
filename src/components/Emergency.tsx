import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { useGraph } from '../hooks/useGraph';
import { useQuestion } from '../hooks/useQuestion';
import type { Graph } from '../utils/graph';
import Modal from './Modal';

type EmergencyLog = {
    timestamp: number;
    key: string;
    value: string;
};

type HasTranslationKey = {
    txt_id: string;
};

const getTranslationByKey = (
    graph: Graph,
    source: HasTranslationKey,
    language: keyof Graph['language'],
) => graph.language[language][source.txt_id];

const Emergency = () => {
    const { graph } = useGraph();
    const [logs, setLogs] = useState<EmergencyLog[]>([]);
    const [currentQuestion, nextQuestion] = useQuestion(
        graph,
        (response, question) =>
            appendLog({
                timestamp: Date.now(),
                key: question.txt_id,
                value: response.txt_id,
            }),
        graph.nodes['start_emergency'],
    );
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

    const question = getTranslationByKey(graph, currentQuestion, 'de');

    const responses = currentQuestion.responses.map((response) => ({
        text: getTranslationByKey(graph, response, 'de'),
        id: response.txt_id,
        connotation: response.connotation,
        data: response.next,
    }));

    return (
        <View>
            <Modal
                question={question}
                answers={responses}
                onAnswer={nextQuestion}
            />
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
