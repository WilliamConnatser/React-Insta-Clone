import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Comment from '../Comment/Comment';

export default class CommentSection extends Component {
    render() {
        const comments = this
            .props
            .comments
            .map((comment, i) => <Comment comment={comment} key={i}/>);

        return (
            <div>
                {comments}
            </div>
        )
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({username: PropTypes.string, text: PropTypes.string}))
};