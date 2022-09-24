import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { DefaultService, Question } from '../../api';
import { useDevice } from '../hooks/useDevice';
import { useGraph } from '../hooks/useGraph';
import { useQuestion } from '../hooks/useQuestion';
import { ColorSecondary } from '../style-constants';
import type { Graph } from '../utils/graph';
import Modal from './Modal';

type HasTranslationKey = {
    txt_id: string;
};

const getTranslationByKey = (
    graph: Graph,
    source: HasTranslationKey,
    language: keyof Graph['language'],
) => graph.language[language][source.txt_id];

const Emergency = () => {
    const [emergencyId, setEmergencyId] = useState<string | null>(null);
    const { graph } = useGraph();
    const [logs, setLogs] = useState<Question[]>([]);
    const deviceId = useDevice();
    const appendLog = (log: Question) => setLogs((logs) => [...logs, log]);
    const [currentQuestion, nextQuestion] = useQuestion(
        graph,
        (response, question) =>
            appendLog({
                time: new Date().toISOString(),
                question: question.txt_id,
                answer: response.txt_id,
            }),
        graph.nodes['consciousness'],
    );

    useEffect(() => {
        if (logs.length <= 0) return;
        DefaultService.emergencyLogSingleEmergencyLogBulkPut({
            questions: logs,
        })
            .then(() => {
                setLogs([]);
            })
            .catch(console.error);
    }, [logs]);

    useEffect(() => {
        if (!deviceId || emergencyId) return;
        DefaultService.userCreateEmergencyCreatePost({ device: deviceId }).then(
            (data) => setEmergencyId(data.id),
        );
    }, [deviceId]);

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
