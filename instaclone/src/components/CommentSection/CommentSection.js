import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';

import Comment from '../Comment/Comment';

const CommentSectionWrapper = styled.div `
    
`;

const TimeWrapper = styled.div`
    padding: 5px 0;
    border-bottom: 1px solid grey;

    font-size: .9rem;
    color: grey;
`;

const InputWrapper = styled.input `
    border: 0;
    width: 100%;
    margin: 15px 0;

    color: grey;
    outline: none;
`;

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
            <CommentSectionWrapper>
                {comments}
                <TimeWrapper
                    title={moment(this.props.post.timestamp, 'MMMM Do YYYY, h:mm:ss a').format('MMMM Do YYYY, h:mm a')}>
                    {moment(this.props.post.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow()}
                </TimeWrapper>
                <form id={this.props.post.id} onSubmit={this.props.submitCommentHandler}>
                    <InputWrapper
                        id="newcomment"
                        value={this.state.commentInput}
                        onChange={this.inputChangeHandler}
                        placeholder="Add a comment..."/>
                </form>
            </CommentSectionWrapper>
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