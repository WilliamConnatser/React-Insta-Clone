import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import CommentSection from '../CommentSection/CommentSection';

const PostWrapper = styled.div `
    display: flex;
    flex-wrap: wrap;
    border: 1px solid grey;
    margin: 30px auto;
    width: 80%;
    max-width: 550px;

    .section {
        width: 100%;
    }

    .section-header {
        display: flex;
        align-items: center;
        padding: 10px;
    }

    .section-header .thumbnail {
        height: 40px;
        border-radius: 50%;
        margin-right: 20px;
    }

    .section-header .username {
        font-size: 1.2rem;
    }

    .section-image {
        height: 300px;
    }

    .section-body {
        margin: 15px;
    }

    .section-body .icon {
        margin-right: 15px;
        font-size: 2rem;
    }

    .section-body .likes {
        margin: 15px 0;
        font-size: 1.3rem;
    }

    .section-footer {
        margin: 0 15px;
    }
`;

export default class PostContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showCommentSection: false
        }
    }

    toggleCommentSectionHandler = _ => {
        this.setState({
            showCommentSection: !this.state.showCommentSection
        })
    }

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

        const commentSection = (
            <div className="section section-footer">
                <CommentSection
                    post={this.props.post}
                    submitCommentHandler={submitCommentHandler}
                    deleteCommentHandler={deleteCommentHandler}/>
            </div>
        )

        return (
            <PostWrapper>
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
                    <span onClick={this.toggleCommentSectionHandler}>
                        <FontAwesomeIcon className="icon comment" icon={['far', 'comment']}/>
                    </span>

                    <div className="likes">
                        {`${likes} Likes`}
                    </div>

                    {
                        this.state.showCommentSection ? commentSection : null
                    }
                </div>

            </PostWrapper>
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