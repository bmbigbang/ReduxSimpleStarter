import axios from 'axios';

const ROOT_URL = 'http://51.38.69.190:80/';

export const UPDATE_NODES = 'update_nodes';
export const SELECT_NODE = 'se  lect_node';
export const UPDATE_SLIDER = 'update_slider';


export function updateNodes() {
    // default nodes to be requested, giving the default structure to the node expander
    let url = `${ROOT_URL}layers`;
    let request = axios.get(url, { crossdomain: true });

    return {
        type: UPDATE_NODES,
        payload: request
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