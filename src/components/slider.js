import React, { Component } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import { updateSlider } from "../actions"


class SliderComp extends Component {
    constructor(props) {
         super(props);

        this.updateSel1 = this.updateSel1.bind(this);
        this.updateSel2 = this.updateSel2.bind(this);
    }

    updateSel1(event) {
        this.props.updateSlider({ selected1: event.target.valueAsNumber })
    }

    updateSel2(event) {
        this.props.updateSlider({ selected2: event.target.valueAsNumber })
    }

    render() {
        let maxVal = this.props.slider.max;

        return (
            <div className='slider-component'>
                <div className='left-slider'>
                    <span className="h4">Filter X axis selector</span>
                    <input id='sel1' className="custom-range"
                           min="0" max={maxVal} type="range" onChange={this.updateSel1}/>
                </div>
                <div className='right-slider'>
                    <span className="h4">Filter Y axis selector</span>
                    <input id='sel2' className="custom-range"
                           min="0" max={maxVal} type="range" onChange={this.updateSel2}/>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ slider }) {
    return { slider };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateSlider }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SliderComp)