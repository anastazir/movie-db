
import { combineReducers } from 'redux';

import movieReducer from './movieReducer'
import trendingReducer from './trendingReducer'
import searchReducer from "./searchReducer"
import genreReducer from "./genreReducer"
import firebaseReducer from "./firebaseReducer"

const reducers = combineReducers({ movieReducer, trendingReducer, searchReducer, genreReducer, firebaseReducer });

export default reducers

export type ExpState = ReturnType<typeof reducers>