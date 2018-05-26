import {FETCH_POSTS} from "../actions/index";

export default function PostsReducer(state=[], action) {
    switch (action.type) {
        case FETCH_POSTS:
            return action.payload.data;
        default:
            return state;
    }
}