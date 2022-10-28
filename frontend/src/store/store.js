import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import { devicesReducer } from '../reducers/devicesReducer';

const persistConfig = {
	key: 'root',
	storage: storage,
	whitelist: ['devices'],
};

const pReducer = persistReducer(
	persistConfig,
	combineReducers({
		devices: devicesReducer,
	}),
);

const composeEnhancers =
	(typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

// const reducers = combineReducers({
// 	auth: authReducer,
// 	newItem: newItemReducer,
// 	ui: uiReducer,
// });

export const store = createStore(pReducer, composeEnhancers(applyMiddleware(thunk)));

export const persistor = persistStore(store);
