import React, {Component} from 'react';
import PropTypes from 'prop-types';

import CommentSection from '../CommentSection/CommentSection';

export default class PostContainer extends Component {

    render() {

        return (
            <div>
                {this.props.post.username}
                <CommentSection comments={this.props.post.comments}/>
            </div>
        )
    }
}

PostContainer.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.shape({username: PropTypes.string, text: PropTypes.string}))
    })
};
