import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Comment extends Component {
    render() {
        return (
            <div>
                {this.props.comment.username}
                {this.props.comment.text}
            </div>
        )
    }
}

Comment.propTypes = {
    comment: PropTypes.shape({username: PropTypes.string, text: PropTypes.string})
};