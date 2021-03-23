import { combineReducers } from 'redux';
import PostReducer from './posts'
export const reducers =  combineReducers({
  posts:PostReducer
})