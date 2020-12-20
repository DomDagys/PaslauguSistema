import React, { Component } from 'react';
import { suspensionService, accountService} from '../../_services';
import { Button } from 'react-bootstrap';

class UserPostRow extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }

         this.suspend = this.suspend.bind(this);
    }

    suspend() {
        const user = accountService.userValue;
        let adminName = user.firstName + " " + user.lastName;
        suspensionService.suspendPost(this.props.id, adminName)
            .then(() => window.location.reload(true));
    }

    render() { 
        return ( <tr>
            <td>{this.props.number}</td>
            <td>{this.props.username}</td>
            <td>{this.props.title}</td>
            <td>{this.props.description}</td>
            <td>{this.props.category}</td>
            <td>{this.props.views}</td>
            <td><Button variant="danger" onClick={this.suspend}>Suspenduoti</Button></td>
          </tr> );
    }
}
 
export {UserPostRow};