import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers, userComments, updateComments } from "../actions/index";


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

    componentDidUpdate(prevProps, prevState) {
        if (this.props.comments !== prevProps.comments) {
            this.props.userComments(prevProps.comments, this.props.comments);

            setTimeout(() => {}, 200);
            this.props.updateComments({'table': true, 'chart': true});
        }
    }


    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Search a name to get posts"
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

function mapStateToProps({ comments }) {
    return { comments };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchUsers, userComments, updateComments }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
