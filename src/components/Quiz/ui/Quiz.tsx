import { QuestionType, questions } from '@/data/mokData';
import { RootState } from '@/store/store';
import { resetAnswers, setAnswer } from '@/store/testSlice';
import { Button, Checkbox, Form, Input, Modal, Progress, Radio } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const { TextArea } = Input;

export const Quiz: React.FC = () => {
	const dispatch = useDispatch();
	const answers = useSelector((state: RootState) => state.test.answers);
	const [form] = Form.useForm();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const answeredQuestions = Object.keys(answers).length;
		const totalQuestions = questions.length;
		setProgress((answeredQuestions / totalQuestions) * 100);
	}, [answers]);

	const onFinish = useCallback(
		(values: Record<string, string>) => {
			Object.keys(values).forEach((key) => {
				dispatch(setAnswer({ id: Number(key), answer: values[key] }));
			});
			setIsModalOpen(true);
		},
		[dispatch],
	);

	const handleOk = useCallback(() => {
		form.resetFields();
		dispatch(resetAnswers());
		setIsModalOpen(false);
	}, [form, dispatch]);

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const handleChange = useCallback(
		(changedValues: Record<string, string>) => {
			const key = Object.keys(changedValues)[0];
			dispatch(setAnswer({ id: Number(key), answer: changedValues[key] }));
		},
		[dispatch],
	);

	return (
		<>
			<Form form={form} onFinish={onFinish} onValuesChange={handleChange}>
				{questions.map((question) => (
					<Form.Item name={String(question.id)} key={question.id} label={question.question}>
						{question.type === QuestionType.CHECKBOX && (
							<Checkbox.Group options={question.answers} />
						)}
						{question.type === QuestionType.RADIO && <Radio.Group options={question.answers} />}
						{question.type === QuestionType.TEXT && <Input />}
						{question.type === QuestionType.LONG_TEXT && <TextArea rows={4} />}
					</Form.Item>
				))}
				<Form.Item>
					<Button type="primary" htmlType="submit">
						Ответить
					</Button>
				</Form.Item>
			</Form>
			<Progress percent={progress} status="active" />
			<Modal
				title="Результат"
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				okText="Начать заново"
				cancelText="Отмена">
				<p>Все хорошо, хотите начать заново тестирование?</p>
			</Modal>
		</>
	);
};
