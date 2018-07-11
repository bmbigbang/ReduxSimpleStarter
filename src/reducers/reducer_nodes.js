import { UPDATE_NODES } from "../actions/index";

export default function NodesReducer(state={}, action) {
    switch (action.type) {
        case UPDATE_NODES:
            return action.payload.data.layers;
        default:
            return state;
    }
}