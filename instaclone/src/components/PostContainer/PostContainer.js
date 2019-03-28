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
    width: 95%;
    max-width: 550px;
`;

const HeaderWrapper = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px;
`;

const ThumbnailWrapper = styled.img `
    height: 40px;
    border-radius: 50%;
    margin-right: 20px;
`;

const UsernameWrapper = styled.span `
    font-size: 1.2rem;
`;

const ImageWrapper = styled.img `
    width: 100%;
    height: 300px;
`;

const PostInfoWrapper = styled.div `
    width: 100%;
    margin: 15px;
`;

const IconWrapper = styled.span `
    .icon {
        margin-right: 15px;

        cursor: pointer;
        font-size: 2rem;
    }
`;

const LikesWrapper = styled.div `
    margin: 15px 0;
    font-size: 1.3rem;
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

        const limit = this.state.showCommentSection
            ? -1
            : 1;
        const commentSection = (
            <div className="section section-footer">
                <CommentSection
                    post={this.props.post}
                    submitCommentHandler={submitCommentHandler}
                    deleteCommentHandler={deleteCommentHandler}
                    commentLimit={limit}/>
            </div>
        )

        return (
            <PostWrapper>
                <HeaderWrapper>
                    <ThumbnailWrapper src={thumbnailUrl} alt="user"/>
                    <UsernameWrapper>{username}</UsernameWrapper>
                </HeaderWrapper>
                <ImageWrapper src={imageUrl} alt="post"/>
                <PostInfoWrapper>
                    <IconWrapper id={id} onClick={toggleLikeHandler}>
                        {liked
                            ? <FontAwesomeIcon
                                    className="icon"
                                    icon={['fas', 'heart']}
                                    style={{
                                    color: 'pink'
                                }}/>
                            : <FontAwesomeIcon className="icon" icon={['far', 'heart']}/>
}
                    </IconWrapper>
                    <IconWrapper onClick={this.toggleCommentSectionHandler}>
                        {this.state.showCommentSection
                            ? <FontAwesomeIcon className="icon" icon={['fa', 'comment']}/>
                            : <FontAwesomeIcon className="icon" icon={['far', 'comment']}/>
}

                    </IconWrapper>

                    <LikesWrapper>
                        {`${likes} Likes`}
                    </LikesWrapper>

                    {commentSection}
                </PostInfoWrapper>

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