import React, { Component } from 'react';
//import logo from './logo.svg';
//import ArtworkInput from './components/artworks/artworkInput'
//import Artworks from './components/artworks/artworks'
import './App.css';
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem, FormGroup, FormControl, Button } from "react-bootstrap";
//import { LinkContainer } from "react-router-bootstrap";
import Routes from './components/routes/Routes';
import { connect } from 'react-redux';

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
        <Navbar.Form pullLeft>
      <FormGroup>
        <FormControl type="text" placeholder="Search" />
      </FormGroup>{' '}
      <Button type="submit">Submit</Button>
        </Navbar.Form>
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
               <Link to="/gallery">Gallery</Link>
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

// const mapStateToProps = state => {
//   return {
//       artworks: state.artworks,
//       comments: state.comments
//   };
// };


// export default connect(  mapStateToProps)(App);
export default App;
