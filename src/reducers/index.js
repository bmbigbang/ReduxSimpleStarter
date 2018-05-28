import { combineReducers } from 'redux';
import { PostsReducer, PostReducer } from './reducer_posts'
import UsersReducer from "./reducer_users";
import CommentsReducer from './reducer_comments'
import UpdateReducer from "./reducer_update";

const rootReducer = combineReducers({
  users: UsersReducer,
  posts: PostsReducer,
  post: PostReducer,
  comments: CommentsReducer,
  update: UpdateReducer
});

export default rootReducer;
