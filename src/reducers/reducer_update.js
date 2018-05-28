import { UPDATE_COMMENTS } from "../actions";

export default function UpdateReducer(state={'table': false, 'chart': false}, action) {
    switch (action.type) {
        case UPDATE_COMMENTS:
            for (let component in state) {
                if (action.payload[component] === null) {
                    action.payload[component] = state[component]
                }
            }
            return action.payload;
        default:
            return state;
    }
}