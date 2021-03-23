import { combineReducers } from 'redux';
import {PostReducer as posts} from './posts'
export const reducers =  combineReducers({
  posts
})