import React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';

import { useGraph } from '../hooks/useGraph';
import { useLanguage } from '../hooks/useLanguage';
import {
    BorderRadius,
    ColorAccentNeutral,
    ColorAccentPositive,
    ColorGrey,
    ColorSecondary,
    ColorTextPrimary,
} from '../style-constants';
import HWText from './HWText';
import PhoneButton from './PhoneButton';

export type ModalAnswer<T> = {
    text: string;
    id: string;
    connotation: 'negative' | 'positive' | 'neutral';
    data: T;
};

type ModalProps<T> = {
    question: string;
    answers: ModalAnswer<T>[];
    txt_id: string;
    onAnswer: (answer: ModalAnswer<T>) => void;
};

function Modal<T>({ question, answers, onAnswer, txt_id }: ModalProps<T>) {
    const graph = useGraph().graph;
    const currenLanguage: 'de' | 'en' = useLanguage()
        .language.substr(0, 2)
        .toLowerCase() as 'de' | 'en';
    const currenLanguageGraph = graph.language[currenLanguage];
    const buttons = (
        <View style={styles.answerContainer}>
            {answers.map((answer) => (
                <Pressable
                    style={[
                        styles.answer,
                        connotationStyles[answer.connotation],
                    ]}
                    key={answer.id}
                    onPress={() => onAnswer(answer)}
                >
                    <HWText style={styles.answerText}>
                        {currenLanguageGraph[answer.id]
                            ? currenLanguageGraph[answer.id]
                            : answer.text}
                    </HWText>
                </Pressable>
            ))}
        </View>
    );

    const isCallNotice = txt_id === 'es_call_request';

    return (
        <View style={styles.modal}>
            <HWText style={styles.question}>{question}</HWText>
            {isCallNotice ? <PhoneButton /> : buttons}
        </View>
    );
}

const connotationStyles = StyleSheet.create({
    negative: {
        backgroundColor: ColorGrey,
    },
    positive: {
        backgroundColor: ColorAccentPositive,
    },
    neutral: {
        backgroundColor: ColorAccentNeutral,
    },
});

const styles = StyleSheet.create({
    modal: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: ColorSecondary,
    },
    question: {
        color: ColorTextPrimary,
        textAlign: 'center',
        marginTop: '6%',
        marginBottom: '16%',
        marginHorizontal: 20,
        fontSize: 24,
        fontWeight: 'bold',
    },
    answerContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: ColorSecondary,
    },
    answer: {
        height: 50,
        minWidth: 300,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginBottom: '2.5%',
        borderColor: ColorTextPrimary,
        borderWidth: 2,
        borderRadius: BorderRadius,
        margin: 8,
    },
    answerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: ColorTextPrimary,
    },
});

export default Modal;
