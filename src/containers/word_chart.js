import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateComments} from "../actions"
import {bindActionCreators} from "redux"

import Chart from '../components/chart'


class WordChart extends Component {

    // shouldComponentUpdate(prevProps) {
    //     console.log(this.props.post);
    //     if (this.props.post && this.props.post.hasOwnProperty("postId") &&
    //             this.props.post.postId !== prevProps.post.postId) {
    //
    //         this.setState({data: this.props.post.data});
    //
    //         return true;
    //     }
    //     if (this.props.update.chart) {
    //         this.props.updateComments({'chart': false});
    //         return true
    //     } else {
    //         return this.props.post || ''
    //     }
    // }


    render() {
        let data = [];
        if (this.props.post && this.props.post.hasOwnProperty("postId")) {
            let count = 1;
            for (let item of this.props.post.data) {
                data.push({'id': count, 'word': item[0], 'count': item[1]});
                count += 1;
            }
        }
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