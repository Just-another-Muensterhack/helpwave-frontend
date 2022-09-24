import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

import {
    BorderRadius,
    ColorAccentNeutral,
    ColorAccentPositive,
    ColorGrey,
    ColorSecondary,
    ColorTextPrimary,
} from '../style-constants';

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
        minWidth: 240,
        width: 'fit-content',
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
