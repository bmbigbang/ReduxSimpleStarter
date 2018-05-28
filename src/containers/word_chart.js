import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateComments} from "../actions"
import {bindActionCreators} from "redux"

import Chart from '../components/chart'


class WordChart extends Component {
    shouldComponentUpdate() {
        if (this.props.update.chart) {
            this.props.updateComments({'chart': false});
            return true
        } else {
            return this.props.post || ''
        }
    }

    render() {
        let sortable = [];
        let total = 0;
        for (let word in this.props.post) {
            sortable.push([word, this.props.post[word]]);
            total += this.props.post[word];
        }

        if (total === 0) {return null}

        sortable.sort(function(a, b) {
            return b[1] - a[1]
        });

        let data = [];
        let count = 1;
        for (let item of sortable) {
            data.push({'id': count, 'word': item[0], 'count': item[1]});
            count += 1;
        }

        data = data.slice(0, 10);

        return (
            <div className='word-chart-container'>
                <Chart countData={data}
                       color='#ffbd87'/>
            </div>
        );
    }
}

function mapStateToProps({ post, update }) {
    return { post, update };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({updateComments}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WordChart);