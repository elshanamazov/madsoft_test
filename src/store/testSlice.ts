import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TestState } from './types';

const initialState: TestState = {
	answers: {},
	isTimeOver: false,
	progress: 0,
};

const testSlice = createSlice({
	name: 'test',
	initialState,
	reducers: {
		setAnswer: (state, action: PayloadAction<{ id: number; answer: string }>) => {
			state.answers[action.payload.id] = action.payload.answer;
		},
		setIsTimeOver: (state, action: PayloadAction<boolean>) => {
			state.isTimeOver = action.payload;
		},
		resetAnswers: (state) => {
			state.answers = {};
		},
	},
});

export const { setAnswer, setIsTimeOver, resetAnswers } = testSlice.actions;
export default testSlice.reducer;
