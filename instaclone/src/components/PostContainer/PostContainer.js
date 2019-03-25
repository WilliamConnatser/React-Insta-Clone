import React, { Component } from 'react';

import CommentSection from '../CommentSection/CommentSection';

export default class PostContainer extends Component {

  render() {

    
    return (
      <div>
        { this.props.post.username }
        <CommentSection comments={ this.props.post.comments } />
      </div>
    )
  }
}
