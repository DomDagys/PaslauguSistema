import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { accountService, reportService, suspensionService } from '../../_services';
import { dateConverter } from '../../_helpers';

class ReportedPostRow extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
         
         this.clearReport = this.clearReport.bind(this);
         this.suspend = this.suspend.bind(this);
    }

    clearReport() {
        const user = accountService.userValue;
        reportService.clearReport(this.props.id, user.firstName + " " + user.lastName)
            .then(() => window.location.reload(true));
    }

    suspend() {
        const user = accountService.userValue;
        let adminName = user.firstName + " " + user.lastName;
        suspensionService.suspendPost(this.props.postId, adminName)
            .then(() => window.location.reload(true));
    }

    render() { 
        return ( <tr>
            <td>{this.props.number}</td>
            <td>{this.props.title}</td>
            <td>{this.props.firstName} {this.props.lastName}</td>
            <td>{this.props.category}</td>
            <td>{this.props.count}</td>
            <td>{dateConverter.convertDate(new Date(this.props.lastReported))}</td>
            <td><Button variant="success" onClick={this.clearReport}>Valyti</Button>
            <Button variant="danger" onClick={this.suspend}>Suspenduoti</Button></td>
        </tr> );
    }
}
 
export default ReportedPostRow;