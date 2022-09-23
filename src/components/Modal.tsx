import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import {ColorPrimary} from "../../style-constants";

type ModalProps = {
    question: string;
    answers: string[];
    onAnswer: (answer: string) => void;
};

const Modal: React.FC<ModalProps> = ({ question, answers, onAnswer }) => {
    return (
        <View style={styles.modal}>
            <Text style={styles.question}>{question}</Text>
            <View style={styles.answerContainer}>
                {answers.map((answer) => (
                    <Pressable
                        style={styles.answer}
                        key={answer}
                        onPress={() => onAnswer(answer)}
                    >
                        <Text style={styles.answerText}>{answer}</Text>
                    </Pressable>
                ))}
            </View>
        </View>
    );
};

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
