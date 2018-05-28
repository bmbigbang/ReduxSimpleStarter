import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchPosts, selectPost, clearComments, postComments } from "../actions";
import { bindActionCreators } from 'redux';


class PostsList extends Component {
    constructor(props) {
        super(props);

        this.renderPosts = this.renderPosts.bind(this);
    }

    componentDidMount() {
        this.props.fetchPosts(this.props.users || 0);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.users !== prevProps.users) {
            this.props.clearComments();
            for (let post in this.props.posts) {
                if (this.props.users === this.props.posts[post].userId) {
                    this.props.postComments(post);
                }
            }
        }
    }

    renderPosts(post) {
        if ((this.props.users === 0) || (this.props.users === post.userId)) {
            return (
                <tr onClick={() => {this.props.selectPost(post.id)}} key={post.id}>
                    <td className="small">
                        <span id="posts-title">{post.title}</span><br/>
                        {post.body}
                    </td>
                </tr>
            )
        } else {return null}
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <td className="posts-header"><div>Posts</div></td>
                </tr>
                </thead>
                <tbody>
                {this.props.posts.map(this.renderPosts)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ users, posts, post }) {
    return { users, posts, post };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPosts, selectPost, clearComments, postComments }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
