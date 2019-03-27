import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './PostContainer.css'

import CommentSection from '../CommentSection/CommentSection';

export default class PostContainer extends Component {

    render() {
        const {
            post: {
                id,
                thumbnailUrl,
                username,
                imageUrl,
                liked,
                likes
            },
            toggleLikeHandler,
            submitCommentHandler,
            deleteCommentHandler
        } = this.props;

        return (
            <div className="PostContainer">
                <div className="section section-header">
                    <img className="thumbnail" src={thumbnailUrl} alt="user"/>
                    <span className="username">{username}</span>
                </div>
                <img className="section section-image" src={imageUrl} alt="post"/>
                <div className="section section-body">
                    <span id={id} onClick={toggleLikeHandler}>
                        {liked
                            ? <FontAwesomeIcon
                                    className="icon heart"
                                    icon={['fas', 'heart']}
                                    style={{
                                    color: 'pink'
                                }}/>
                            : <FontAwesomeIcon className="icon heart" icon={['far', 'heart']}/>
}
                    </span>
                    <FontAwesomeIcon className="icon comment" icon={['far', 'comment']}/>

                    <div className="likes">
                        {`${likes} Likes`}
                    </div>
                </div>
                <div className="section section-footer">
                    <CommentSection
                        post={this.props.post}
                        submitCommentHandler={submitCommentHandler}
                        deleteCommentHandler={deleteCommentHandler}/>
                </div>
            </div>
        )
    }
}

PostContainer.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.string,
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.shape({username: PropTypes.string, text: PropTypes.string})),
        commentInput: PropTypes.string
    }),
    submitCommentHandler: PropTypes.func,
    toggleLikeHandler: PropTypes.func,
    deleteCommentHandler: PropTypes.func
};