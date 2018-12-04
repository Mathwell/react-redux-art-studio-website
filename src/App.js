import React, { Component } from 'react';
import logo from './logo.svg';
import ArtworkInput from './components/artworks/artworkInput'
import Artworks from './components/artworks/artworks'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
         <ArtworkInput store={this.props.store} />
        <Artworks store={this.props.store}/> 
      </div>
    );
  }
}

export default App;
