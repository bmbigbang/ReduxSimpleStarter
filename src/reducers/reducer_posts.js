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
            let posts = '';
            action.payload.data.reduce((tempStr, comment) => {
                posts = `${posts} ${comment.body}`;
            }, '');

            let words = posts.replace(/[^\w^\s]/g, '').toLowerCase().split(" ");
            let counts = words.reduce((tmpMap, word) => {
                tmpMap[word] = tmpMap[word] + 1 || 1;
                return tmpMap;
            }, {});

            let sortable = [];
            for (let char in counts) {
                sortable.push([char, Number((counts[char] / words.length).toFixed(1))]);
            }

            sortable.sort(function(a, b) {
                return b[1] - a[1];
            });

            let data = [];
            for (let item of sortable) {
                data.push({'word': item[0], 'count': item[1]});
            }

            data = data.slice(0, 10);
            return data;
        default:
            return state;
    }
}