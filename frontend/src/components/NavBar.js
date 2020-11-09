import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div className="navBar">
            <ul className="navLink">
                <Link to="/">
                    <li>Home</li>
                </Link>
            </ul>
        </div> );
    }
}
 
export {NavBar};