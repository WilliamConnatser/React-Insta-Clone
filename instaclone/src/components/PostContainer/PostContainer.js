import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './PostContainer.css'

import CommentSection from '../CommentSection/CommentSection';

export default class PostContainer extends Component {

    render() {
        return (
            <section className="PostContainer">
                <div className="section section-header">
                    <img className="thumbnail" src={this.props.post.thumbnailUrl}/>
                    <span className="username">{this.props.post.username}</span>
                </div>
                <img className="section section-image" src={this.props.post.imageUrl}/>
                <div className="section section-body">
                    <span id={this.props.post.id} onClick={this.props.toggleLikeHandler}>
                        {this.props.post.liked
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
                        {`${this.props.post.likes} Likes`}
                    </div>
                </div>
                <div className="section section-footer">
                    <CommentSection
                        post={this.props.post}
                        submitCommentHandler={this.props.submitCommentHandler}/>
                </div>
            </section>
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
    toggleLikeHandler: PropTypes.func
};