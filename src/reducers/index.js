import { combineReducers } from 'redux';
import makeupReducer from './makeup';

const reducers = combineReducers({ makeup: makeupReducer });

export default reducers;
