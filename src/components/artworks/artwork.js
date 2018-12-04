import React, { Component } from 'react';
import CommentInput from '../comments/commentInput';

class Artwork extends Component {
  handleOnClick() {
    this.props.store.dispatch({
      type: 'DELETE_ARTWORK',
      id: this.props.artwork.id
    });
  }

  render() {
    return (
      <div>
        <li>
        <span>{this.props.artwork.text}</span><button onClick={() => this.handleOnClick()}>DELETE</button>
          <CommentInput 
            store={this.props.store}
            artworkId={this.props.artwork.id} /> 
        </li>
      </div>
    );
  }
};

export default Artwork;