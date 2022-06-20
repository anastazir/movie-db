
import { combineReducers } from 'redux';

import movieReducer from './movieReducer'
const reducers = combineReducers({ movieReducer });

export default reducers

export type ExpState = ReturnType<typeof reducers>