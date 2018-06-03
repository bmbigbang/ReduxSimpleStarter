import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app'
import Graph from './components/heat_map'
import SliderComp from './components/slider'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div id="title" className="jumbotron">
                    <h2 className="title">Inception V3 NN Graph Tree</h2>
                </div>
                <div>
                    <App />
                    <SliderComp />
                    <Graph />
                </div>
            </div>
        );
    }
}

// main HTML app container DOM renderer
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Index/>
    </Provider>,
    document.querySelector('.container'));
