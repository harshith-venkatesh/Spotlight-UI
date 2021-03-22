import { CREATE, DELETE, FETCH_DATA, LIKE, UPDATE } from '../constants/actionTypes'

export default  (posts=[],action) => {
  console.log(action.type);
  switch (action.type) {
    case FETCH_DATA:
      console.log(action.payload);
      return action.payload;
    case CREATE:
      return [...posts,action.payload];
    case UPDATE: 
    case LIKE: 
      return posts.map((post)=> post._id === action.payload._id ? action.payload: post);
    case DELETE:
      return posts.filter((post)=> post._id !== action.payload);
    
    default:
      return posts;
  }
}