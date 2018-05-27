import {FETCH_POSTS, POST_SELECTED} from "../actions/index";

export function PostsReducer(state=[], action) {
    switch (action.type) {
        case FETCH_POSTS:
            return action.payload.data;
        default:
            return state;
    }
}

export function PostReducer(state=[], action) {
    switch (action.type) {
        case POST_SELECTED:
            return action.payload;
        default:
            return state;
    }
}