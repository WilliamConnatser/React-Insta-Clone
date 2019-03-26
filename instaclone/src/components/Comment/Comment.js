import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default class Comment extends Component {
    render() {
        const CommentContainer = styled.div`
        
            font-size: 1rem;
        
            .username {
                font-weight: 800;
                margin-right: 20px;
            }
        `;
        return (
            <CommentContainer>
                <span className="username">{this.props.comment.username}</span>
                <span className="text">{this.props.comment.text}</span>
            </CommentContainer>
        )
    }
}

Comment.propTypes = {
    comment: PropTypes.shape({username: PropTypes.string, text: PropTypes.string})
};