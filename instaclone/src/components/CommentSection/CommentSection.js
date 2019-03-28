import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';

import Comment from '../Comment/Comment';

const CommentSectionWrapper = styled.div `
    
`;

const TimeWrapper = styled.div `
    padding: 5px 0;

    font-size: .9rem;
    color: grey;
`;

const InputWrapper = styled.input `
    border: 0;
    width: 100%;
    margin: 15px 0;
    padding: 15px 0;
    border-top: 1px solid grey;

    font-size: 1.1rem;
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
        let comments = this
            .props
            .post
            .comments
            .map((comment, i) => <Comment
                postId={this.props.post.id}
                comment={comment}
                key={comment.id}
                deleteCommentHandler={this.props.deleteCommentHandler}/>)

        //If comment section is hidden, only show the OP
        if(this.props.commentLimit === 1) comments = comments.slice(0, 1);

        return (
            <CommentSectionWrapper>
                {comments}
                <TimeWrapper
                    title={moment(this.props.post.timestamp, 'MMMM Do YYYY, h:mm:ss a').format('MMMM Do YYYY, h:mm a')}>
                    {moment(this.props.post.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow()}
                </TimeWrapper>
                {this.props.commentLimit < 1
                    ? <form id={this.props.post.id} onSubmit={this.props.submitCommentHandler}>
                            <InputWrapper
                                id="newcomment"
                                value={this.state.commentInput}
                                onChange={this.inputChangeHandler}
                                placeholder="Add a comment..."/>
                        </form>
                    : null
}
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
    deleteCommentHandler: PropTypes.func,
    commentLimit: PropTypes.number
};