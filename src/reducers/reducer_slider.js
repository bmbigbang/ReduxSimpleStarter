import { UPDATE_SLIDER } from "../actions";

export default function SliderReducer(state={'max': 0,
                        'selected1': 0, 'selected2': 0}, action) {
    switch (action.type) {
        case UPDATE_SLIDER:
            for (let component in state) {
                if (!(component in action.payload)) {
                    action.payload[component] = state[component]
                }
            }
            if (action.payload.selected1 > action.payload.max) {
                action.payload.selected1 = action.payload.max
            }
            if (action.payload.selected2 > action.payload.max) {
                action.payload.selected2 = action.payload.max
            }
            console.log(action.payload);
            return action.payload;
        default:
            return state
    }
}