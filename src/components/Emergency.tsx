import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { useGraph } from '../hooks/useGraph';
import { useQuestion } from '../hooks/useQuestion';
import { ColorSecondary } from '../style-constants';
import type { Graph } from '../utils/graph';
import Modal from './Modal';

type EmergencyLog = {
    timestamp: string;
    question: string;
    answer: string;
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
    const appendLog = (log: EmergencyLog) => setLogs((logs) => [...logs, log]);
    const [currentQuestion, nextQuestion] = useQuestion(
        graph,
        (response, question) =>
            appendLog({
                timestamp: new Date().toISOString(),
                question: question.txt_id,
                answer: response.txt_id,
            }),
        graph.nodes['consciousness'],
    );

    const sendLogs = async (logs: EmergencyLog[]): Promise<void> => {
        await fetch('https://main.helpwave.de/emergency/log/bulk', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(logs),
        });
    };

    useEffect(() => {
        if (logs.length <= 0) return;
        sendLogs(logs)
            .then(() => {
                setLogs([]);
            })
            .catch(console.error);
    }, [logs]);

    const question = getTranslationByKey(graph, currentQuestion, 'de');

    const responses = currentQuestion.responses.map((response) => ({
        text: getTranslationByKey(graph, response, 'de'),
        id: response.txt_id,
        connotation: response.connotation,
        data: response.next,
    }));

    return (
        <View style={{ backgroundColor: ColorSecondary, flex: 1 }}>
            <Modal
                question={question}
                answers={responses}
                onAnswer={nextQuestion}
            />
        </View>
    );
};

export default Emergency;
