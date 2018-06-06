import { combineReducers } from 'redux';
import firstReducer from './tasks';

const rootReducer = combineReducers({
  tasks: firstReducer
});

export default rootReducer;