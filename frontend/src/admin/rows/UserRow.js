import React, { Component } from 'react';
import { dateConverter } from '../../_helpers';
import { Button } from 'react-bootstrap';
import { suspensionService, accountService } from '../../_services';

class UserRow extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }

         this.suspendUser = this.suspendUser.bind(this);
    }

    suspendUser(){
        const user = accountService.userValue;
        let adminName = user.firstName + " " + user.lastName;
        suspensionService.suspendUser(this.props.id, adminName)
            .then(() => window.location.reload(true));
    }

    render() { 
        return ( <tr>
            <td>{this.props.number}</td>
            <td>{this.props.firstName}</td>
            <td>{this.props.lastName}</td>
            <td>{this.props.email}</td>
            <td>{dateConverter.convertDate(new Date(this.props.created))}</td>
            <td>{this.props.role === "Admin"? "Administratorius" : <Button variant="danger" onClick={this.suspendUser}>Suspenduoti</Button>}</td>
        </tr> );
    }
}
 
export {UserRow};