import React, { Component } from 'react';

import Comment from '../Comment/Comment';

export default class CommentSection extends Component {
  render() {
    const comments = this.props.comments.map((comment, i) => <Comment comment={ comment } key={ i }/>);

    return (
      <div>
        { comments }
        <input type="text"/>
      </div>
    )
  }
}
