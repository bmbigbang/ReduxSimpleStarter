import { combineReducers } from 'redux';
import { PostsReducer, PostReducer } from './reducer_posts'
import UsersReducer from "./reducer_users";

const rootReducer = combineReducers({
  users: UsersReducer,
  posts: PostsReducer,
  post: PostReducer
});

export default rootReducer;
