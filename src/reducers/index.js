import { combineReducers } from 'redux';
import filterReducer from './filter';
import makeupReducer from './makeup';

const reducers = combineReducers({
  makeup: makeupReducer,
  filter: filterReducer,
});

export default reducers;
