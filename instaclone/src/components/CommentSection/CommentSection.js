import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Comment from '../Comment/Comment';

export default class CommentSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            commentInput: ""
        }
    }

    inputChangeHandler = event => {
        this.setState({commentInput: event.target.value});
    }

    render() {
        const comments = this
            .props
            .post
            .comments
            .map((comment, i) => <Comment
                postId={this.props.post.id}
                comment={comment}
                key={comment.id}
                deleteCommentHandler={this.props.deleteCommentHandler}/>);

        return (
            <div>
                {comments}
                <div
                    className="time"
                    title={moment(this.props.post.timestamp, 'MMMM Do YYYY, h:mm:ss a').format('MMMM Do YYYY, h:mm a')}>
                    {moment(this.props.post.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow()}
                </div>
                <form id={this.props.post.id} onSubmit={this.props.submitCommentHandler}>
                    <input
                        id="newcomment"
                        value={this.state.commentInput}
                        onChange={this.inputChangeHandler}
                        className="add-comment"
                        placeholder="Add a comment..."/>
                </form>
            </div>
        )
    }
}

CommentSection.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.string,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.shape({username: PropTypes.string, text: PropTypes.string})),
        commentInput: PropTypes.string
    }),
    submitCommentHandler: PropTypes.func,
    deleteCommentHandler: PropTypes.func
};