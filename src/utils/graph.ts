export type Response = {
    txt_id: string;
    next: string;
    class: 'positive' | 'negative' | 'neutral';
};

export type Question = {
    txt_id: string;
    responses: Response[];
};

export type Graph = {
    language: { de: Record<string, string>; en: Record<string, string> };
    questions: Record<string, Question>;
};
