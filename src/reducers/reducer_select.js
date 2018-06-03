import { SELECT_NODE } from "../actions";

export default function SelectedReducer(state={}, action) {
    switch (action.type) {
        case SELECT_NODE:

            let arrSubset = action.payload[0][0];
            let x = new Array(arrSubset.length).fill(0).map((_, i) => `${i}`);
            let y = new Array(arrSubset[0].length).fill(0).map((_, i) => `${i}`);
            return {'data': arrSubset, 'x': x, 'y': y};
        default:
            return state;
    }
}