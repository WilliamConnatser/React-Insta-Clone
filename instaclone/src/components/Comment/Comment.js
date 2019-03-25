import React, { Component } from 'react'

export default class Comment extends Component {
  render() {
    return (
      <div>
        { this.props.comment.username }
        { this.props.comment.text }
      </div>
    )
  }
}
