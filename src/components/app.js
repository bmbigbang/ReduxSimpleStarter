import React, { Component } from 'react'
import Tree from 'react-d3-tree'
import Graph from './heat_map'

import weights from '../weights'
var w = weights();


class App extends Component {
    constructor(props) {
        super(props);

        let myTreeData = [
            {
                name: 'Inception V3',
                attributes: {},
                children: [],
            },
        ];

        for (let node in w) {
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

        this.state = {
            nodes: myTreeData,
            selectedNode: null
        }
    };


    render() {
        return (
            <div >
                <div className='graph-tree-component'
                     style={{width: '600px', height: '700px'}}>
                    <Tree
                        data={this.state.nodes} zoom={1}
                        translate={{x: 250, y: 350}}
                        onClick={(nodeEvent) => {this.setState({
                            selectedNode: w[nodeEvent.name]
                        })}}
                    />
                </div>
                <Graph selectedNode={this.state.selectedNode}/>
            </div>
        );
    }
}

export default App;