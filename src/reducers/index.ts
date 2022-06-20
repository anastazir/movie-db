
import { combineReducers } from 'redux';

import expReducer from './expReducer'
const reducers = combineReducers({ expReducer });

export default reducers

export type ExpState = ReturnType<typeof reducers>