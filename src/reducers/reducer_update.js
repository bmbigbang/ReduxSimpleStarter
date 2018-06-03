import { UPDATE_GRAPH } from "../actions";

export default function UpdateReducer(state={'graph': false}, action) {
    switch (action.type) {
        case UPDATE_GRAPH:
            for (let component in state) {
                if (!(component in action.payload)) {
                    action.payload[component] = state[component]
                }
            }
            return action.payload;
        default:
            return state
    }
}