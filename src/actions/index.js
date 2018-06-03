export const UPDATE_NODES = 'update_nodes';
export const SELECT_NODE = 'select_node';
export const UPDATE_GRAPH = 'update_graph';

import weights from '../weights'


export function updateNodes() {
    let w = weights();
    return {
        type: UPDATE_NODES,
        payload: w
    };
}

export function selectNode(nodes, node) {
    return {
        type: SELECT_NODE,
        payload: nodes[node].array
    };
}

export function updateGraph(boolObj) {
    return {
        type: UPDATE_GRAPH,
        payload: boolObj
    };
}