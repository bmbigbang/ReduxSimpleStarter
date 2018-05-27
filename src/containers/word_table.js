import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux"
import {fetchPosts, selectPost} from "../actions"


class WordTable extends Component {
    constructor(props) {
        super(props);
    }

    renderRows(post) {
        return (
            <li>
                {post[0]} - {post[1]}
            </li>
        )
    }

    render() {
        if (!this.props.post) {
            return <div>Select a post...</div>
        }

        return (
            <div><ul>
                {this.props.post.map(this.renderRows)}
        </ul></div>
        );
    }
}

function mapStateToProps({ post }) {
    return { post };
}

export default connect(mapStateToProps)(WordTable);