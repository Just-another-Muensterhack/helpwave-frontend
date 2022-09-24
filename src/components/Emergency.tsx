import { NavigationProp } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { DefaultService, Question } from '../../api';
import { useAuth } from '../hooks/useAuth';
import { useGraph } from '../hooks/useGraph';
import { useLanguage } from '../hooks/useLanguage';
import { useQuestion } from '../hooks/useQuestion';
import { ColorSecondary } from '../style-constants';
import type { Graph } from '../utils/graph';
import Modal from './Modal';

const Emergency = () => {
    const language: keyof Graph['language'] = useLanguage()
        .language.substr(0, 2)
        .toLowerCase() as 'de' | 'en';
    const [emergencyId, setEmergencyId] = useState<string | null>(null);

    const { graph } = useGraph();
    const [logs, setLogs] = useState<Question[]>([]);
    const { deviceId } = useAuth();
    const appendLog = async (log: Question) =>
        setLogs((logs) => [...logs, log]);
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
        DefaultService.emersgencyLogBulkEmergencyLogBulkPut({
            questions: logs,
        })
            .then(() => {
                setLogs([]);
            })
            .catch(console.error);
    }, [logs]);

    useEffect(() => {
        if (!deviceId || emergencyId) return;
        DefaultService.emergencyCreateEmergencyCreatePost({
            device: deviceId,
            latitude: 0,
            longitude: 0,
        })
        .then((data) => setEmergencyId(data.uuid))           
        .catch(console.error);
    }, [deviceId]);

    const question = graph.language[language][currentQuestion.txt_id];

    const responses = currentQuestion.responses.map((response) => ({
        text: graph.language[language][response.txt_id],
        id: response.txt_id,
        connotation: response.connotation,
        data: response.next,
    }));

    useEffect(() => {
        if (currentQuestion.end) {
            navigation.navigate('EmergencyOverview', {
                idfkMirIstDasAllesGeradeEgal: getTranslationByKey(
                    graph,
                    currentQuestion,
                    currentLanguageCode,
                ),
            });
        }
    }, [currentQuestion]);

    return (
        <View style={{ backgroundColor: ColorSecondary, flex: 1 }}>
            <Modal
                txt_id={currentQuestion.txt_id}
                question={question}
                answers={responses}
                onAnswer={nextQuestion}
            />
        </View>
    );
};

export default Emergency;
