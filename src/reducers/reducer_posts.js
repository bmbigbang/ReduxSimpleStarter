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
    let words;
    switch (action.type) {
        case POST_SELECTED:
            let posts = '';
            action.payload.response.reduce((tempStr, comment) => {
                if (comment.postId === action.payload.postId || action.payload.postId === -1) {
                    posts = `${posts} ${comment.body}`;
                }
            }, '');

            words = posts.replace(/[^\w^\s]/g, '').replace(/\n/g, ' ')
                .replace(/\s\s+/g, ' ').toLowerCase().split(" ");

            words = words.reduce((tmpMap, word) => {
                tmpMap[word] = tmpMap[word] + 1 || 1;
                return tmpMap;
            }, {});

            let sortable = [];
            let total = 0;
            for (let word in words) {
                sortable.push([word, words[word]]);
                total += words[word];
            }

            sortable.sort(function(a, b) {
                return b[1] - a[1]
            });

            let data = sortable.slice(0, 10);

            return { postId: action.payload.postId, data: data, total: total };
        case USER_COMMENTS:
            words = action.payload.reduce((tmpMap, word) => {
                tmpMap[word] = tmpMap[word] + 1 || 1;
                return tmpMap;
            }, state);
            return words;
        default:
            return state;
    }
}

