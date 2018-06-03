import _ from 'lodash'
import React, { Component } from 'react'
import Tree from 'react-d3-tree'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateNodes, selectNode, updateGraph, updateSlider } from "../actions";


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

    shouldComponentUpdate() {
        return _.isEmpty(this.props.nodes)
    }

    onClickUpdate(nodeData, event) {
        if (nodeData.name in this.props.nodes) {
            this.props.selectNode(this.props.nodes[nodeData.name].array);
            this.props.updateSlider({ max: this.props.nodes[nodeData.name].array.length - 1});
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
                    data={myTreeData} zoom={0.7}
                    translate={{x: 50, y: 250}}
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
        updateNodes, selectNode, updateGraph, updateSlider }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)