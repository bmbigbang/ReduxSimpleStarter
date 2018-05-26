import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers, fetchPosts } from "../actions/index";


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    onInputChange(event) {
        this.setState({term:event.target.value})
    }

    onFormSubmit(event) {
        event.preventDefault();

        // call the action creator to make API call
        this.props.fetchUsers(this.state.term.toLowerCase());

        this.setState({term: ''});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Search username to get posts"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchUsers, fetchPosts }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
