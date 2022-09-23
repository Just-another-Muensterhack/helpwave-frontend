import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

import { ColorPrimary } from '../style-constants';

export type ModalAnswer<T> = {
    text: string;
    id: string;
    connotation: 'negative' | 'positive' | 'neutral';
    data: T;
};

type ModalProps<T> = {
    question: string;
    answers: ModalAnswer<T>[];
    onAnswer: (answer: ModalAnswer<T>) => void;
};

function Modal<T>({ question, answers, onAnswer }: ModalProps<T>) {
    return (
        <View style={styles.modal}>
            <Text style={styles.question}>{question}</Text>
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
                        <Text style={styles.answerText}>{answer.text}</Text>
                    </Pressable>
                ))}
            </View>
        </View>
    );
}

const connotationStyles = StyleSheet.create({
    negative: {
        backgroundColor: '#ff0000', // TODO
    },
    positive: {
        backgroundColor: '#00ff00', // TODO
    },
    neutral: {
        backgroundColor: '#0000ff', // TODO
    },
});

const styles = StyleSheet.create({
    modal: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
    },
    question: {
        textAlign: 'center',
        marginTop: 24,
        marginBottom: 16,
        marginLeft: 16,
        marginRight: 16,
        fontSize: 24,
        fontWeight: 'bold',
    },
    answerContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    answer: {
        height: 50,
        minWidth: 240,
        width: 'fit-content',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderColor: ColorPrimary,
        borderWidth: 2,
        borderRadius: 9,
        margin: 8,
    },
    answerText: {
        fontSize: 16,
        color: ColorPrimary,
    },
});

export default Modal;
