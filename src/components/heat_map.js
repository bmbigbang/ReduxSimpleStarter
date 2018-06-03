import _ from 'lodash'
import React, { Component } from 'react'
import HeatMap from 'react-plotly.js'
import { connect } from "react-redux";


class Graph extends Component {

    render() {
        if (_.isNull(this.props.selectedNode) || _.isEmpty(this.props.selectedNode)) {
            return null;
        }
        let slider = this.props.slider;
        let d = [{'z': this.props.selectedNode.data[slider.selected1][slider.selected2],
                  'type': 'heatmap'}];

        return (
            <div className='heatmap-component'>
                <HeatMap
                    data={d}/>
            </div>
        )
    }
}

function mapStateToProps({ selectedNode, slider }) {
    return { selectedNode, slider };
}


export default connect(mapStateToProps)(Graph)