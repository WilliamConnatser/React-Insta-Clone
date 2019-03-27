import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './Comment.css';

export default class Comment extends Component {
    render() {
        return (
            <div className="Comment">
                <span
                    id={this.props.comment.id}
                    className="icon-wrapper"
                    onClick={this.props.deleteCommentHandler(this.props.postId)}>
                    <FontAwesomeIcon
                        className="icon"
                        icon={['fa', 'trash-alt']}
                        style={{
                        color: 'red'
                    }}/></span>
                <span className="username">{this.props.comment.username}</span>
                <span className="text">{this.props.comment.text}</span>
            </div>
        )
    }
}

Comment.propTypes = {
    postId: PropTypes.string,
    comment: PropTypes.shape({id: PropTypes.string, username: PropTypes.string, text: PropTypes.string}),
    deleteCommentHandler: PropTypes.func
};