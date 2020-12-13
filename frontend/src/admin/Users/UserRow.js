import React, { Component } from 'react';
import { dateConverter } from '../../_helpers';

class UserRow extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( <tr>
            <td>{this.props.number}</td>
            <td>{this.props.firstName}</td>
            <td>{this.props.lastName}</td>
            <td>{this.props.email}</td>
            <td>{dateConverter.convertDate(new Date(this.props.created))}</td>
        </tr> );
    }
}
 
export default UserRow;