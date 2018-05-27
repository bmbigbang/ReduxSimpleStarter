import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart'


class WordChart extends Component {
    shouldComponentUpdate() {
        return this.props.post || '';
    }

    render() {
        let listData = [];
        let words = [];
        for (let item of this.props.post) {
            listData.push(item.count);
            words.push(item.word);
        }
        if (!listData.length) {
            return null
        }
        return (
            <div className='word-chart-container'>
                <Chart countData={this.props.post}
                       listData={listData}
                       words={words}
                       color='#ffbd87'/>
            </div>
        );
    }
}

function mapStateToProps({ post }) {
    return { post };
}

export default connect(mapStateToProps)(WordChart);