import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './PostContainer.css'

import CommentSection from '../CommentSection/CommentSection';

export default class PostContainer extends Component {

    render() {
        console.log(this.props.post)
        return (
            <section className="PostContainer">
                <div className="section section-header">
                    <img className="thumbnail" src={this.props.post.thumbnailUrl}/>
                    <span className="username">{this.props.post.username}</span>
                </div>
                <img className="section section-image" src={this.props.post.imageUrl}/>
                <div className="section section-toolbar">
                    <div>
                        <FontAwesomeIcon className="icon heart" icon={['far', 'heart']}/>
                        <FontAwesomeIcon className="icon comment" icon={['far', 'comment']}/>
                    </div>
                    <div className="likes">
                        {this.props.post.likes}
                        Likes
                    </div>
                    <CommentSection comments={this.props.post.comments}/>
                    <div className="time">
                        {this.props.post.timestamp}
                    </div>
                    <input type="text"/>
                </div>

            </section>
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
