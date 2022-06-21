
import { combineReducers } from 'redux';

import movieReducer from './movieReducer'
import trendingReducer from './trendingReducer'
const reducers = combineReducers({ movieReducer, trendingReducer });

export default reducers

export type ExpState = ReturnType<typeof reducers>