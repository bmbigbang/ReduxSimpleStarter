import {FETCH_POSTS, POST_SELECTED, USER_COMMENTS} from "../actions/index";

export function PostsReducer(state=[], action) {
    switch (action.type) {
        case FETCH_POSTS:
            return action.payload.data;
        default:
            return state;
    }
}

export function PostReducer(state={}, action) {
    switch (action.type) {
        case POST_SELECTED:
            let posts = '';
            action.payload.data.reduce((tempStr, comment) => {
                posts = `${posts} ${comment.body}`;
            }, '');

            let words = posts.replace(/[^\w^\s]/g, '').replace(/\n/g, ' ')
                .replace(/\s\s+/g, ' ').toLowerCase().split(" ");

            return words.reduce((tmpMap, word) => {
                tmpMap[word] = tmpMap[word] + 1 || 1;
                return tmpMap;
            }, {});
        case USER_COMMENTS:
            return action.payload.reduce((tmpMap, word) => {
                tmpMap[word] = tmpMap[word] + 1 || 1;
                return tmpMap;
            }, state);
        default:
            return state;
    }
}