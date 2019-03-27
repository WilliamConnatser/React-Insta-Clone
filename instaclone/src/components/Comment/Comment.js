import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const CommentWrapper = styled.div `
    margin: 5px 0;
    font-size: 1rem;

    .username {
        font-weight: 800;
        margin-right: 20px;
    }
`;

const IconWrapper = styled.span `
    margin-right: 10px;
    cursor: pointer;

    .icon {
        font-size: 5px;
        color: red;
    }
`;

export default class Comment extends Component {
    render() {
        return (
            <CommentWrapper>
                <IconWrapper
                    id={this.props.comment.id}
                    onClick={this
                    .props
                    .deleteCommentHandler(this.props.postId)}>
                    <FontAwesomeIcon className="icon" icon={['fa', 'trash-alt']}/></IconWrapper>
                <span className="username">{this.props.comment.username}</span>
                <span className="text">{this.props.comment.text}</span>
            </CommentWrapper>
        )
    }
}

Comment.propTypes = {
    postId: PropTypes.string,
    comment: PropTypes.shape({id: PropTypes.string, username: PropTypes.string, text: PropTypes.string}),
    deleteCommentHandler: PropTypes.func
};