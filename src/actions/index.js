import axios from 'axios';

const ROOT_URL = 'https://jsonplaceholder.typicode.com/';

export const FETCH_USERS = 'fetch_users';
export const FETCH_POSTS = 'fetch_posts';
export const POST_SELECTED = 'post_selected';

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
    let words = post.replace(/[^\w^\s]/g, '').toLowerCase().split(" ");
    let counts = words.reduce((tmpMap, word) => {
        tmpMap[word] = tmpMap[word] + 1 || 1;
        return tmpMap;
    }, {});

    let sortable = [];
    for (let char in counts) {
        sortable.push([char, counts[char]]);
    }

    sortable.sort(function(a, b) {
        return b[1] - a[1];
    });

    return {
        type: POST_SELECTED,
        payload: sortable
    };
}

