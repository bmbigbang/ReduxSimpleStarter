import _ from 'lodash'
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
import weights from './weights'

// main HTML app container
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nodes: weights(),
            selectedNode: null
        };
    }


    render() {
        return (<div className="jumbotron">
            <h1 className="title">Inception V3 Neural Net Graph Tree</h1>
        </div>);
    }
}

// main HTML app container DOM renderer
ReactDOM.render(<App/>, document.querySelector('.container'));
