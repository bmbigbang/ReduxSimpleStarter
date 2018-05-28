import { combineReducers } from 'redux';
import { PostsReducer, PostReducer } from './reducer_posts'
import UsersReducer from "./reducer_users";
import CommentsReducer from './reducer_comments'

const rootReducer = combineReducers({
  users: UsersReducer,
  posts: PostsReducer,
  post: PostReducer,
  comments: CommentsReducer
});

export default rootReducer;
