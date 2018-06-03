import { SELECT_NODE } from "../actions";

export default function SelectedReducer(state={}, action) {
    switch (action.type) {
        case SELECT_NODE:
            let arrSubset = action.payload[0][0];
            return {'data': arrSubset};
        default:
            return state;
    }
}