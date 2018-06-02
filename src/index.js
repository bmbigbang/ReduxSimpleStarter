import _ from 'lodash'
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import App from './components/app';

// main HTML app container
class App2 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1 className="title">Inception V3 NN Graph Tree</h1>
                </div>
                <App />
            </div>
        );
    }
}

// main HTML app container DOM renderer
ReactDOM.render(<App2/>, document.querySelector('.container'));
