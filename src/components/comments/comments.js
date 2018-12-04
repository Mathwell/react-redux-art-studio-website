import React, { Component } from 'react';
import Comment from './comment';

class Comments extends Component {
  render() {
    const { store, commentId } = this.props;
    const comments = store.getState().comments.filter(comment => comment.artworkId === artworkId).map((comment, index) => {
      return <Comment store={store} key={index} comment={comment} />
    });
    
    return (
      <ul>
        {comments}
      </ul>
    );
  }
};

export default Reviews;