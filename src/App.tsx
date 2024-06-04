import { Layout, Typography } from 'antd';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Quiz } from './components/Quiz';
import { Timer } from './components/Timer';
import { persistor, store } from './store/store';

export const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Layout style={{ padding: '50px' }}>
					<Typography.Title>Тестирование</Typography.Title>
					<Timer duration={100} />
					<Quiz />
				</Layout>
			</PersistGate>
		</Provider>
	);
};
