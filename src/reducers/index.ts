
import { combineReducers } from 'redux';

import movieReducer from './movieReducer'
import trendingReducer from './trendingReducer'
import searchReducer from "./searchReducer"
const reducers = combineReducers({ movieReducer, trendingReducer, searchReducer });

export default reducers

export type ExpState = ReturnType<typeof reducers>