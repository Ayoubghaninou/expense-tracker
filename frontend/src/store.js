import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import authReducer from './reducers/authReducer';
import expenseReducer from './reducers/expenseReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  expenses: expenseReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
