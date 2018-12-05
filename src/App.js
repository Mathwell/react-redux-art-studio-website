import React, { Component } from 'react';
import logo from './logo.svg';
import ArtworkInput from './components/artworks/artworkInput'
import Artworks from './components/artworks/artworks'
import './App.css';
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Routes from './components/routes/Routes';

class App extends Component {
  render() {
    return (
      <div className="App_container">
        <Navbar fluid collapseOnSelect>
            <Navbar.Header>
             <Navbar.Brand>
              <Link to="/">Home</Link>
             </Navbar.Brand>
             <Navbar.Toggle />
            </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>             
            <NavItem >
               <Link to="/about">About</Link>
            </NavItem>            
            <NavItem >
               <Link to="/login">Login</Link>
            </NavItem>            
            <NavItem >
               <Link to="/theme">Theme</Link>
            </NavItem>                        
            <NavItem >
               <Link to="/enter">Enter</Link>
            </NavItem>        
            <NavItem >
               <Link to="/upload">Upload</Link>
            </NavItem>                        
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
       
         {/* <ArtworkInput store={this.props.store} />
         <Artworks store={this.props.store}/>  */}
      </div>
    );
  }
}

export default App;
