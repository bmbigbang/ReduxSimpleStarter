import { combineReducers } from 'redux';
import NodesReducer from './reducer_nodes'
import SelectedReducer from './reducer_select'
import SliderReducer from './reducer_slider'

const rootReducer = combineReducers({
    nodes: NodesReducer,
    selectedNode: SelectedReducer,
    slider: SliderReducer
});

export default rootReducer;