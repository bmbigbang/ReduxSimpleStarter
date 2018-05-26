import { FETCH_USERS } from "../actions";

export default function UsersReducer(state=0, action) {
    switch (action.type) {
        case FETCH_USERS:
            return action.payload;
        default:
            return state;
    }
}