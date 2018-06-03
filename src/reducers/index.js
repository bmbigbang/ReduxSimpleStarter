import { combineReducers } from 'redux';
import NodesReducer from './reducer_nodes'
import SelectedReducer from './reducer_select'
import UpdateReducer from './reducer_update'

const rootReducer = combineReducers({
    nodes: NodesReducer,
    selectedNode: SelectedReducer,
    updating: UpdateReducer
});

export default rootReducer;