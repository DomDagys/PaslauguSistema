import React, { Component } from 'react';

class UserPostRow extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( <tr>
            <td>{this.props.number}</td>
            <td>{this.props.username}</td>
            <td>{this.props.title}</td>
            <td>{this.props.description}</td>
            <td>{this.props.category}</td>
            <td>{this.props.views}</td>
          </tr> );
    }
}
 
export default UserPostRow;