import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts'
import UsersReducer from "./reducer_users";

const rootReducer = combineReducers({
  users: UsersReducer,
  posts: PostsReducer
});

export default rootReducer;
