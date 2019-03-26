import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import moment from 'moment';
import styled from "styled-components";

import CommentSection from '../CommentSection/CommentSection';

export default class PostContainer extends Component {

    render() {
        const {
            post: {
                thumbnailUrl,
                username,
                imageUrl,
                userLiked,
                likes,
                comments,
                commentInput,
                timestamp
            },
            likeHandler,
            inputChangeHandler,
            submitHandler
        } = this.props;

        const PostContainer = styled.section `
        
            display: flex;
            flex-wrap: wrap;
            border: 1px solid grey;
            margin: 30px 0;
            width: 45%;        
        
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
                cursor: pointer;
            }
            
            .section-body .likes {
                margin: 15px 0;
                font-size: 1.3rem;
            }
            
            .section-footer {
                margin: 0 15px;
            }
            
            .section-footer .time {
                padding: 5px 0;
                border-bottom: 1px solid grey;
                color: grey;
            }
            
            .section-footer .add-comment {
                margin: 15px 0;
                color: grey;
                outline: none;
                border: 0;
            }
        `

        return (
            <PostContainer>
                <div className="section section-header">
                    <img className="thumbnail" src={thumbnailUrl} alt="user"/>
                    <span className="username">{username}</span>
                </div>
                <img className="section section-image" src={imageUrl} alt="post"/>
                <div className="section section-body">
                    <span href="#" id={imageUrl} onClick={likeHandler}>
                        {userLiked
                            ? <FontAwesomeIcon
                                    className="icon heart"
                                    icon={['fas', 'heart']}
                                    style={{
                                    color: 'pink'
                                }}/>
                            : <FontAwesomeIcon
                                className="icon heart"
                                icon={['far', 'heart']}
                                style={{
                                color: 'black'
                            }}/>
}
                    </span>
                    <span>
                        <FontAwesomeIcon className="icon comment" icon={['far', 'comment']}/>
                    </span>
                    <div className="likes">
                        {`${likes} Likes`}
                    </div>
                    <CommentSection comments={comments}/>

                </div>
                <div className="section section-footer">
                    <div
                        className="time"
                        title={moment(timestamp, 'MMMM Do YYYY, h:mm:ss a').format('MMMM Do YYYY, h:mm a')}>
                        {moment(timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow()}
                    </div>
                    <input
                        id={imageUrl}
                        value={commentInput}
                        onChange={inputChangeHandler}
                        onKeyPress={submitHandler}
                        className="add-comment"
                        placeholder="Add a comment..."/>
                </div>
            </PostContainer>
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
        comments: PropTypes.arrayOf(PropTypes.shape({username: PropTypes.string, text: PropTypes.string})),
        commentInput: PropTypes.string,
        userLiked: PropTypes.bool
    }),
    commentInput: PropTypes.func,
    inputChangeHandler: PropTypes.func,
    submitHandler: PropTypes.func,
    likeHandler: PropTypes.func
};