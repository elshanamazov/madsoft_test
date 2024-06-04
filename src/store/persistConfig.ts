import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import testReducer from './testSlice';

const persistConfig = {
	key: 'root',
	storage,
};

const persistedReducer = persistReducer(persistConfig, testReducer);
export default persistedReducer;
