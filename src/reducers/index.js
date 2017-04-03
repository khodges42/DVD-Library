// ./src/reducers/index.js
import { combineReducers } from 'redux';
import movies from './movieReducers'

export default combineReducers({
  movies:movies,
});
