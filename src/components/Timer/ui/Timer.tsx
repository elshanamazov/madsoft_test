import { setIsTimeOver } from '@/store/testSlice';
import { Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

export const Timer: React.FC<{ duration: number }> = ({ duration }) => {
	const dispatch = useDispatch();
	const [timeLeft, setTimeLeft] = useState(duration);

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft((prev) => {
				if (prev <= 1) {
					clearInterval(timer);
					dispatch(setIsTimeOver(true));
					return 0;
				}
				return prev - 1;
			});
		}, 1000);
		return () => clearInterval(timer);
	}, [dispatch]);

	const minutes = Math.floor(timeLeft / 60);
	const seconds = timeLeft % 60;

	return (
		<Typography.Text>
			Осталось времени: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
		</Typography.Text>
	);
};
