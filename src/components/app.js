import React, { Component } from 'react'
import Tree from 'react-d3-tree'

import weights from '../weights'


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
        let w = weights();
        for (let node in w) {
            //myTreeData[0].attributes[node] = node;
            myTreeData[0].children.push({
                name: node,
                attributes: {},
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
            selectedNode: null,
            translate: {x:0, y:0}
        }
    };


    render() {
        return (
            <div style={{width: '500px', height: '700px'}}>
                <Tree
                    data={this.state.nodes} zoom={1}
                    translate={{x: 250, y: 350}}
                />

            </div>
        );
    }
}

export default App;