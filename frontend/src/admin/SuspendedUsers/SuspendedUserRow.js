import React, { Component } from 'react';
import { suspensionService } from '../../_services';
import { Button } from 'react-bootstrap';
import { dateConverter } from '../../_helpers';

class SuspendedUserRow extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }

         this.removeSuspension = this.removeSuspension.bind(this);
    }

    removeSuspension() {
        console.log(this.props.id, this.props.accountId);
        suspensionService.removeUserSuspension(this.props.id, this.props.accountId)
            .then(() => window.location.reload(true));
    }

    render() { 
        return ( <tr>
            <td>{this.props.number}</td>
            <td>{this.props.firstName} {this.props.lastName}</td>
            <td>{this.props.reason}</td>
            <td>{this.props.reportCount}</td>
            <td>{this.props.suspendedBy}</td>
            <td>{dateConverter.convertDate(new Date(this.props.from))}</td>
            <td><Button variant="success" onClick={this.removeSuspension}>Panaikinti</Button></td>
        </tr> );
    }
}
 
export default SuspendedUserRow;