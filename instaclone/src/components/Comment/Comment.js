import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

export default class Comment extends Component {
    render() {
        return (
            <div className="Comment">
                <span className="username">{this.props.comment.username}</span>
                <span className="text">{this.props.comment.text}</span>
            </div>
        )
    }
}

Comment.propTypes = {
    comment: PropTypes.shape({username: PropTypes.string, text: PropTypes.string})
};