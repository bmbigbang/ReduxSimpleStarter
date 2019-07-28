import axios from 'axios';
import {polyfill} from 'es6-promise';

const ROOT_URL = 'https://jsonplaceholder.typicode.com/';

export const FETCH_USERS = 'fetch_users';
export const FETCH_POSTS = 'fetch_posts';
export const POST_SELECTED = 'post_selected';
export const USER_COMMENTS = 'user_comments';
export const POST_COMMENTS = 'post_comments';
export const CLEAR_COMMENTS = 'clear_comments';
export const UPDATE_COMMENTS = 'update_comments';

polyfill();


export function fetchUsers(fullName) {
    if (fullName === '') {
        return {
            type: FETCH_USERS,
            payload: 0
        };
    }

    let url = `${ROOT_URL}users/`;
    let request = axios.get(url);

    let userId = request.then(result => {
        let id = -1;
        for (let userObj of result.data) {
            if (userObj.name.toLowerCase() === fullName) {
                id = userObj.id;
            }
        }
        return id;
    });

    return {
        type: FETCH_USERS,
        payload: userId
    };
}

export function fetchPosts(userId) {
    let url = '';
    if (userId > 0) {
        url = `${ROOT_URL}posts/?userId=${userId}`;
    } else {
        url = `${ROOT_URL}posts/`;
    }

    const request = axios.get(url);

    return {
        type: FETCH_POSTS,
        payload: request,
    };
}

export function selectPost(post) {
    return dispatch => {
        let url = `${ROOT_URL}posts/${post}/comments`;
        axios.get(url).then(response => {
            dispatch({
                type: POST_SELECTED,
                payload: {postId: post, response: response.data}
            });
        });
    };

}

export function userComments(prevWords, words) {
    let newWords = words.slice(prevWords.length);

    return {
        type: USER_COMMENTS,
        payload: newWords
    };
}

export function postComments(post) {
    let url = `${ROOT_URL}posts/${post}/comments`;
    let request = axios.get(url);

    return {
        type: POST_COMMENTS,
        payload: request
    };
}

export function clearComments() {
    return {
        type: CLEAR_COMMENTS,
        payload: ''
    };
}

export function updateComments(boolArr) {
    return {
        type: UPDATE_COMMENTS,
        payload: boolArr
    }
}


