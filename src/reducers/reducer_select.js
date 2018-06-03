import { SELECT_NODE } from "../actions";

export default function SelectedReducer(state={}, action) {
    switch (action.type) {
        case SELECT_NODE:
            return {'data': action.payload};
        default:
            return state;
    }
}