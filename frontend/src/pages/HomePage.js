import React, { Component } from 'react';
import "../styles/Admin.css"

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <h1 className="center">This is the home page.</h1>
        </div> );
    }
}
 
export { HomePage };