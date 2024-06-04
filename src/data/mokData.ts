export enum QuestionType {
	CHECKBOX = 'CHECKBOX',
	RADIO = 'RADIO',
	TEXT = 'TEXT',
	LONG_TEXT = 'LONG_TEXT',
}

export type Question = {
	id: number;
	type: QuestionType;
	question: string;
	answers?: string[];
};

export const questions: Question[] = [
	{
		id: 1,
		type: QuestionType.CHECKBOX,
		question: 'Выберите несколько вариантов',
		answers: ['Вариант 1', 'Вариант 2', 'Вариант 3'],
	},
	{
		id: 2,
		type: QuestionType.RADIO,
		question: 'Выберите один вариант',
		answers: ['Вариант 1', 'Вариант 2', 'Вариант 3'],
	},
	{
		id: 3,
		type: QuestionType.TEXT,
		question: 'Короткий ответ',
	},
	{
		id: 4,
		type: QuestionType.LONG_TEXT,
		question: 'Развернутый ответ',
	},
];

export const addQuestion = (type: QuestionType, question: string, answers?: string[]) => {
	const newQuestion: Question = {
		id: questions.length + 1,
		type,
		question,
		answers,
	};
	questions.push(newQuestion);
};

addQuestion(QuestionType.RADIO, 'Какую музыку вы предпочитаете?', [
	'Поп',
	'Рок',
	'Джаз',
	'Мейхана',
]);
