import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, FormGroup, FormControl, ControlLabel, Form, Navbar, Nav } from "react-bootstrap";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div className="navBar">
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand>IT SISTEMA</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Pagrindinis</Nav.Link>
      <Nav.Link href="/viewprofile">Profilis</Nav.Link>
      <Nav.Link href="/admin">Valdyti turinį ir paskyras</Nav.Link>
    </Nav>
    <Nav inline>
      <Nav.Link href="/login" className="mr-sm-2">Prisijungti</Nav.Link>
      <Nav.Link href="/register" className="mr-sm-2">Registruotis</Nav.Link>
    </Nav>
  </Navbar>
        </div> );
    }
}
 
export {NavBar};