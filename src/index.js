import _ from 'lodash'
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Tree from 'react-d3-tree';

import weights from './weights'

// main HTML app container
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
                attributes: {}
            });
        }

        this.state = {
            nodes: myTreeData,
            selectedNode: null
        };
    }


    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1 className="title">Inception V3 NN Graph Tree</h1>
                </div>
                <div id="treeWrapper" style={{width: '500px', height: '500px'}}>

                    <Tree data={this.state.nodes} zoom={4}/>

                </div>
            </div>
        );
    }
}

// main HTML app container DOM renderer
ReactDOM.render(<App/>, document.querySelector('.container'));
