import { POST_COMMENTS, CLEAR_COMMENTS } from '../actions/index'


export default function CommentsReducer(state=[], action) {
    switch (action.type) {
        case POST_COMMENTS:
            return action.payload.data.reduce((tempArr, comment) => {
                let words = comment.body.replace(/[^\w^\s]/g, '').replace(/\n/g, ' ')
                    .replace(/\s\s+/g, ' ').toLowerCase().split(" ");
                return [...words, ...tempArr]
            }, state);
        case CLEAR_COMMENTS:
            return [];
        default:
            return state;
    }
}