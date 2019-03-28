import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const CommentWrapper = styled.div `
    margin: 5px 0;
    font-size: 1rem;
`;

const UsernameWrapper = styled.span `
    font-weight: 800;
    margin-right: 10px;
`

const IconWrapper = styled.span `
    margin-left: 10px;
    cursor: pointer;

    .icon {
        height: .9rem;
        color: red;
    }
`;

export default class Comment extends Component {
    render() {
        return (
            <CommentWrapper>
                <UsernameWrapper>{this.props.comment.username}</UsernameWrapper>
                <span>{this.props.comment.text}</span>
                <IconWrapper
                    id={this.props.comment.id}
                    onClick={this
                    .props
                    .deleteCommentHandler(this.props.postId)}>
                    <FontAwesomeIcon className="icon" icon={['fa', 'trash-alt']}/>
                </IconWrapper>
            </CommentWrapper>
        )
    }
}

Comment.propTypes = {
    postId: PropTypes.string,
    comment: PropTypes.shape({id: PropTypes.string, username: PropTypes.string, text: PropTypes.string}),
    deleteCommentHandler: PropTypes.func
};