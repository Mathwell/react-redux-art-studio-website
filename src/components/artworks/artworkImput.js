import React, { Component } from 'react';


class ArtworkInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  };

  handleOnChange(event){
    this.setState({
      text: event.target.value
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_ARTWORK',
      artwork: {
        text: this.state.text,
      },
    });
    this.setState({
      text: ''
    });
  }
  
  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="text" onChange={(event) => this.handleOnChange(event)}  value={this.state.text}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
