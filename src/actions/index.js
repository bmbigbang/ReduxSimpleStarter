import weights from '../weights'

export const UPDATE_NODES = 'update_nodes';
export const SELECT_NODE = 'select_node';
export const UPDATE_SLIDER = 'update_slider';


export function updateNodes() {
    let w = weights();
    return {
        type: UPDATE_NODES,
        payload: w
    };
}

export function selectNode(node) {
    return {
        type: SELECT_NODE,
        payload: node
    };
}


export function updateSlider(newState) {
    return {
        type: UPDATE_SLIDER,
        payload: newState
    }
}