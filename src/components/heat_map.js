import _ from 'lodash'
import React, { Component } from 'react'
import HeatMap from 'react-plotly.js'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { updateGraph } from "../actions";


class Graph extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.updating)
            if (_.isNull(nextProps.selectedNode)) {
                return false
            } else if (_.isEmpty(nextProps.selectedNode)) {
                return false
            } else if ((nextProps.selectedNode.data !== this.props.selectedNode.data)) {
                this.props.updateGraph({'graph': false});
                return true
            } else {
                return false
            }
    }

    render() {
        if (_.isNull(this.props.selectedNode) || _.isEmpty(this.props.selectedNode)) {
            return <div>Select a node</div>
        }

        let d = [{'z': this.props.selectedNode.data, 'type': 'heatmap'}];

        return (
            <div className='heatmap-component'>
                <HeatMap
                    data={d}/>
            </div>
        )
    }
}

function mapStateToProps({ selectedNode, updating }) {
    return { selectedNode, updating };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateGraph }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Graph)