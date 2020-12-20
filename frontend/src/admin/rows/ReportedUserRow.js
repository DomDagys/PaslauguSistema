import React, { Component } from 'react';
import { accountService, reportService, suspensionService } from '../../_services';
import { Button } from 'react-bootstrap';
import { history, dateConverter } from '../../_helpers';

class ReportedUserRow extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }

         this.clearReport = this.clearReport.bind(this);
         this.suspendUser = this.suspendUser.bind(this);
    }

    clearReport() {
        const user = accountService.userValue;
        let adminName = user.firstName + " " + user.lastName;
        reportService.clearReport(this.props.id, adminName)
            .then(() => window.location.reload(true));
    }

    suspendUser(){
        const user = accountService.userValue;
        let adminName = user.firstName + " " + user.lastName;
        suspensionService.suspendUser(this.props.accountId, adminName)
            .then(() => window.location.reload(true));
    }

    render() { 
        return ( <tr>
            <td>{this.props.number}</td>
            <td>{this.props.firstName} {this.props.lastName}</td>
            <td>{this.props.category}</td>
            <td>{this.props.count}</td>
            <td>{dateConverter.convertDate(new Date(this.props.lastReported))}</td>
            <td><Button variant="success" onClick={this.clearReport}>Valyti</Button>
            <Button variant="danger" onClick={this.suspendUser}>Suspenduoti</Button></td>
        </tr> );
    }
}
 
export {ReportedUserRow};