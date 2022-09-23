import { useState } from 'react';

import { ModalAnswer } from '../components/Modal';
import { Graph, Question, Response } from '../utils/graph';

export const useQuestion = (
    graph: Graph,
    onChange: (response: Response, question: Question) => void,
    startQuestion: Question,
): [Question, (response: ModalAnswer<string>) => void] => {
    const [question, setQuestion] = useState(startQuestion);

    const nextQuestion = (answer: ModalAnswer<string>) => {
        const response: Response = {
            txt_id: answer.id,
            next: answer.data,
            connotation: answer.connotation,
        };
        const nextQuestion = graph.nodes[answer.data];
        if (!nextQuestion) throw new Error(`The json structure is broken, could not find '${answer.data} :/'`);
        onChange(response, nextQuestion);
        setQuestion(nextQuestion);
    };

    return [question, nextQuestion];
};
