import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/user';

export default createStore(
	combineReducers({ user: userReducer }),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
