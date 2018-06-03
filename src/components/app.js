import _ from 'lodash'
import React, { Component } from 'react'
import Tree from 'react-d3-tree'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateNodes, selectNode, updateGraph } from "../actions";


class App extends Component {
    constructor(props) {
        super(props);

        this.props.updateNodes();

        this.onClickUpdate = this.onClickUpdate.bind(this);
    };

    processTreeData(weights) {
        let myTreeData = [
            {
                name: 'Inception V3',
                attributes: {},
                children: [],
            },
        ];

        for (let node in weights) {
            myTreeData[0].children.push({
                name: node,
                nodeSvgShape: {
                    shape: 'rect',
                    shapeProps: {
                        width: 20,
                        height: 20,
                        x: -10,
                        y: -10,
                        fill: 'red',
                    },
                },
            });
        }

        return myTreeData;
    }

    onClickUpdate(nodeData, evt) {
        if (nodeData.name in this.props.nodes) {
            this.props.selectNode(this.props.nodes, nodeData.name);
        }
    }

    render() {

        if (_.isEmpty(this.props.nodes)) {
            return <div>Loading weights...</div>
        }

        let myTreeData = this.processTreeData(this.props.nodes);

        return (
            <div className='graph-tree-component'>
                <Tree
                    data={myTreeData} zoom={1}
                    translate={{x: 100, y: 350}}
                    onClick={(nodeData, evt) => this.onClickUpdate(nodeData, evt)}
                />
            </div>
        );
    }
}

function mapStateToProps({ nodes }) {
    return { nodes };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateNodes, selectNode, updateGraph }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)